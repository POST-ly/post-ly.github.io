function send(event, tabId) {
    var dom = event.target
    dom.innerText = ""
    dom.setAttribute("disabled", null)
    dom.innerHTML = `
        <div id="${tabId}circleLoading" class="circle close">
            <div class="circle-ring"></div>
        </div>
    `
    window[`${tabId}circleLoading`].classList.toggle("close")

    var bdy = {}
    var headers = {}
    var params = ""
    var authorization = ""

    var METHOD = getMETHOD(tabId)
    var url = document.querySelector(`.${tabId}UrlInput`).value

    url = parseVarsAndReplace(url)
    url = processUrl(url)

    try {
        // process body
        if(postData[tabId].body) {
            bdy = bodyBuilder(postData[tabId].body)
        }
    } catch(e) {}

    try {
        // process headers
        if(postData[tabId].headers) {
            postData[tabId].headers.forEach(header => {
                headers[parseVarsAndReplace(header.key)] = parseVarsAndReplace(header.value)
            })
        }
    } catch(e) {}

    try {
        // process params. /:3000?q=90&s=nnamdi
        if(postData[tabId].params) {
            if(postData[tabId].params.length > 0) {
                url = buildParamsToUrl(postData[tabId].params, url)
                /*
                url += "?"
                postData[tabId].params.forEach(param => {
                    params += parseVarsAndReplace(param.key) + "=" + parseVarsAndReplace(param.value) + "&"
                })
                url += params */
                // postData[tabId].url = url
            }
        }
    } catch(e) {}

    try {
        if(postData[tabId].authorization) {
            if(postData[tabId].authorization.type == "APIKey") {
                url += generateAuth(headers, url, "Request")
            } else {
                headers["Authorization"] = generateAuth()
            }
        }
    } catch (e) {}

    // check for mocking
    if(mockCalls && currentMockServer) {
        mockCall({
            method: METHOD.toLowerCase(),
            url: url,
            data: bdy,
            headers            
        }, tabId, event)
        return
    }

    // create an instance of axios
    var axiosInst = axios.create({
        timeout: getFromWindow(`${tabId}requestTimeout`).value || 0
    });

    // Set pre-request script
    setPreRequest(axiosInst)

    // Set pre-response
    axiosInst.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // error.response - error response
        // error.request - instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        processResponseError(error.request, tabId, event)
        return Promise.reject(error);
    });

    // before sending a request, we have to parse the Env variables to
    // replace them with their actual values.

    // set proxy if available
    if(postData[currentTab].options && postData[currentTab].options.useproxy) {
        switch (METHOD.toLowerCase()) {
            case "get":
                /*var v = new URL(url)
                v.searchParams.append("proxyUrl", url) */
                url = proxyUrl + "?proxyUrl=" + url
                break;
            default:
                break;
        }
    }

    axiosInst({
        method: METHOD.toLowerCase(),
        url: url,
        data: bdy,
        headers,
        maxRedirects: getFromWindow(`${tabId}maxRedirects`).value || 0,
        withCredentials: postData.withcredentials || false
    }).then( res => {
        processResponse(res, tabId, event)
    }).catch(e => {
        // process error response
    })
}

function addPostData() {
    var key = postDataKey.value
    var value = postDataValue.value
    var id = `postData${Date.now()}`
    var delButton = `<button onclick="delPostData(${id})">Del</button>`
    postDataDiv.innerHTML = postDataDiv.innerHTML + `<div id=${id}><span>${key}</span> <span>${value}</span> ${delButton}</div>`;
    postData.push({ id, key, value })

    postDataKey.value = ""
    postDataValue.value = ""
}

function getMETHOD(tabId) {
    return postData[tabId].methodType
}

function delPostData(domEl) {
    // remove from postData array
    var id = domEl.id
    postData = postData.filter(p => p.id !== id)

    // remove from DOM
    var pDom = domEl.parentNode;
    pDom.removeChild(domEl)
    console.log(domEl)
}

function setMethodType(tabId, method) {
    window[`${tabId}methodTypeButton`].innerText = method
    postData[tabId].methodType = method
    window[`${tabId}TabMethod`].innerHTML = method
    showDropdown("." + tabId + "methodTypeDropdown")
}

function addBody(bodyKey, bodyValue) {
    // log(bodyKey, bodyValue)
    if(!bodyKey.value.length > 0 || !bodyValue.value.length > 0)
        return

    var id = "bodyForm" + Date.now()
    var data = {
        id,
        "key": bodyKey.value,
        "value": bodyValue.value        
    }

    var h = `
        <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'form', '${bodyKey.value}', '${bodyValue.value}')" /></td>
        <td>${bodyKey.value}</td>
        <td>${bodyValue.value}</td>
        <td><button onclick="return delBody('${id}')">x</button></td>    
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    postData[currentTab].body.form.push(data)

    bodyKey.value = ""
    bodyValue.value = ""

    window[`${currentTab}bodyTr`].insertBefore(tr, window[`${currentTab}bodyLast`]);
}

function delBody(id) {
    var res = postData[currentTab].body.form.filter(bdy => {
        return bdy.id !== id
    })

    postData[currentTab].body.form = res

    window[`${currentTab}bodyTr`].removeChild(window[id])
}

function addHeadersKey(evt, hdrsKey) {
    hdrsKey.value = evt.target.innerText
    showDropdown(`.${currentTab}headersDropdown`)
}

function addHeaders(hdrsKey, hdrsValue) {
    if(!hdrsKey.value.length > 0 || !hdrsValue.value.length > 0)
        return

    var id = "headers" + Date.now()

    var hdrsKeyValue = hdrsKey.value
    var hdrsValueValue = hdrsValue.value

    var h = `
            <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'headers', '${hdrsKeyValue}', '${hdrsValueValue}')" /></td>
            <td>${hdrsKeyValue}</td>
            <td>${hdrsValueValue}</td>
            <td><button onclick="return delHeaders('${id}')">x</button></td>
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    postData[currentTab].headers.push({
        "id": id,        
        "key": hdrsKey.value,
        "value": hdrsValue.value
    })

    hdrsKey.value = ""
    hdrsValue.value = ""

    window[`${currentTab}headersTr`].insertBefore(tr, window[`${currentTab}headersLast`]);
}

function delHeaders(id) {
    var res = postData[currentTab].headers.filter(header => {
        return header.id !== id
    })

    postData[currentTab].headers = res

    window[`${currentTab}headersTr`].removeChild(window[id])
}

function addParams(paramsKey, paramsValue) {
    if(!paramsKey.value.length > 0 || !paramsValue.value.length > 0)
        return

    var id = "params" + Date.now()

    var h = `
            <td><input type="checkbox" checked=true onchange="return toggleOpt(event, '${id}', 'params', '${paramsKey.value}', '${paramsValue.value}')" /></td>
            <td>${paramsKey.value}</td>
            <td>${paramsValue.value}</td>
            <td><button onclick="return delParams('${id}')">x</button></td>
    `
    var tr = document.createElement("tr")
    tr.setAttribute("id", id)
    tr.innerHTML = h

    postData[currentTab].params.push({
        "id": id,
        "key": paramsKey.value,
        "value": paramsValue.value
    })

    paramsKey.value = ""
    paramsValue.value = ""

    window[`${currentTab}paramsTr`].insertBefore(tr, window[`${currentTab}paramsLast`]);
}

function delParams(id) {
    var res = postData[currentTab].params.filter(param => {
        return param.id !== id
    })

    postData[currentTab].params = res

    window[`${currentTab}paramsTr`].removeChild(window[id])
}

function setResponseHeaders(headers, tabId) {
    if(headers) {
        // set response headers
        var responseHeadersHtml = ""
        for (var key in headers) {
            responseHeadersHtml += `<tr><td>${key}</td><td>${headers[key]}</td></tr>`
        }

        // Set response headers to postly
        // postly.headers = headers

        var responseHeadersHtmlFinal = `
            <table>
                ${responseHeadersHtml}
            </table>
        `
        document.querySelector(`.${tabId}responseTabContent.Headers`).innerHTML = responseHeadersHtmlFinal
    }
}

function setResponseStatus(status, tabId) {
    if(status) {
        // set response status
        var statusNode = document.querySelector(`.${tabId}responseStatus`)
        statusNode.innerHTML = status
        var bgColor

        // set postly responseCode
        // postly.responseCode = status

        status = status.toString()

        switch (status) {
            case "200":
                bgColor = "bg-green"
                break;    
            default:
                bgColor = "bg-default"
                break;
        }
        statusNode.classList.add(bgColor)
        statusNode.classList.remove("close")
    }
}

function setResponseStatusText(statusText, tabId) {
    if(statusText) {
        // set response status text
        var statusNode = document.querySelector(`.${tabId}responseStatusText`)
        statusNode.innerHTML = statusText

        // set postly responseCodeText
        // postly.responseCodeText = statusText

        statusNode.classList.add("bg-default")
        statusNode.classList.remove("close")
    }
}

function processResponse(res, tabId, event) {
    try {
        // set response headers
        setResponseHeaders(res.headers, tabId)

        // set response status
        setResponseStatus(res.status, tabId)

        // set response status text
        setResponseStatusText(res.statusText, tabId)

        var data = res.data
        // set postly data
        /*
        postly.config = res
        postly.response = data
        */

        setDisplay(data, res, false)
        if(postData[currentTab].options && postData[currentTab].options.downloadres) {
            downloadResponse(data, res)
        }
        var api = setPostlyAPI(res)
        runTests(res, tabId, event, api)
        runVisualizer(res, tabId, api)

        var dom = event.target
        dom.removeAttribute("disabled")
        window[`${tabId}circleLoading`].classList.toggle("close")
        dom.innerText = "Send"        
    } catch (error) {

        setDisplay(error.toString(), error, true)
        var dom = event.target
        dom.removeAttribute("disabled")
        window[`${tabId}circleLoading`].classList.toggle("close")
        dom.innerText = "Send"                
    }
}

function processResponseError(e, tabId, event) {
    var dom = event.target
    dom.removeAttribute("disabled")
    window[`${tabId}circleLoading`].classList.toggle("close")
    dom.innerText = "Send"

    // set repsonse status
    setResponseStatus(e.status, tabId)
    setResponseStatusText(e.statusText, tabId)

    setDisplay(e.response, e, true)
    var api = setPostlyAPI(e)
    runTests(e, tabId, event, api)
 }

 function toggleOpt(event, id, opt, optKey, optValue) {
    var targ = event.target
    var pD
    if(opt == "form")
        pD = postData[currentTab].body[opts]
    else
        pD = postData[currentTab][opt]

    // log(id, optKey, optValue)

    if(targ.checked == false) {
        targ.checked = false
        targ.setAttribute("checked", false)
        var res = pD.filter(bdy => {
            return bdy.id !== id
        })
        pD = res
    }
    else {
        pD.push({
            id,
            "key": optKey,
            "value": optValue
        })
        targ.checked = true
        targ.setAttribute("checked", true)
    }
}

function runTests(res, tabId, event, api) {
    if(currentEditors[currentTab]["tests"]) {
        var testScript = currentEditors[currentTab]["tests"].getValue()

        var testResult = testF(testScript, api)
        // log(testResult)
        displayTest(testResult)
    }
}

function handleResponseType(data, res) {
        var resData = {
            prettyData: data,
            rawData: data
        }

        if(res.headers && res.headers["content-type"]) {
            var contentType = res.headers["content-type"]
            if(contentType) {
                contentType = contentType.split(";")[0]
                switch (contentType) {
                    case "application/json":
                        resData.prettyData = objToStr(data, true)
                        resData.rawData = objToStr(data)
                        break;            
                    case "application/pdf":
                        resData = {
                            originalData: data,
                            prettyData: "This response is a PDF file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    case "image/jpeg":
                    case "image/png":
                    case "image/jpg":
                    case "image/gif":
                        resData = {
                            originalData: data,
                            prettyData: "This response is an Image file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    case "video/mp4":
                    case "video/avi":
                    case "video/mkv":
                    case "video/mpg":
                        resData = {
                            originalData: data,
                            prettyData: "This response is an Video file. Use the 'Download response' \n" + 
                            "option to download the file or use the 'preview(Video/Image)' to preview this file.",
                            rawData: ""
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return resData

        /*if(isArray(data) 
            || isArrayBuffer(data) 
            || isString(data)
            || isNumber(data)
            || isUndefined(data)
            || isObject(data)) {
            return objToStr(data)
        }
        if(isFile(data) 
            || isBlob(data)) {
            }*/
}

function setDisplay(data, res, err) {
        var tabId = currentTab
        var responsePrettierDisplay = document.querySelector(`.${tabId}responsePrettierDisplay`)

        var responseRawDisplay = document.querySelector(`.${tabId}responseRawDisplay`)
        var resData = handleResponseType(data, res)
        var prettyData = resData.prettyData
        var rawData = resData.rawData

        // Handle Prettier display
        if(!currentEditors[currentTab][`${tabId}responsePrettierDisplay`]) {
            // clear it first
            responsePrettierDisplay.innerHTML = ""
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`] = setCodeEditor(responsePrettierDisplay, {
                value: prettyData, 
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
                autoRefresh: true,

                foldGutter: true,
                gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
                extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
            })
        } else {
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`].setValue(prettyData)
            currentEditors[currentTab][`${tabId}responsePrettierDisplay`].refresh()
        }
                    
        // Handle Raw display
        if(!currentEditors[currentTab][`${tabId}responseRawDisplay`]) {
            // clear it first
            responseRawDisplay.innerHTML = ""
            currentEditors[currentTab][`${tabId}responseRawDisplay`] = setCodeEditor(responseRawDisplay, {
                value: rawData, 
                lineNumbers: true, 
                tabSize: 2,
                readOnly: true,
                lineWrapping: true,
                mode: null,
                autoRefresh: true
            })
        } else {
            currentEditors[currentTab][`${tabId}responseRawDisplay`].setValue(rawData)
            currentEditors[currentTab][`${tabId}responseRawDisplay`].refresh()
        }
        setPreview(resData, res)
}

function refreshDisplay(ty) {
    switch (ty) {
        case "Raw":
            if(currentEditors[currentTab][`${currentTab}responseRawDisplay`]) {
                currentEditors[currentTab][`${currentTab}responseRawDisplay`].refresh()
            }
            break;
        case "Prettier":
            if(currentEditors[currentTab][`${currentTab}responsePrettierDisplay`]) {
                currentEditors[currentTab][`${currentTab}responsePrettierDisplay`].refresh()
            }
            break;
        default:
            break;
    }
}

function setPreview(resData, res) {
    var data
    var preview = document.querySelector(`.${currentTab}responsePreviewDisplay`)
    if(res.headers && res.headers["content-type"]) {
        var contentType = res.headers["content-type"]
        if(contentType) {
            contentType = contentType.split(";")[0]
            var iFrame = document.getElementById(`${currentTab}responsePreviewIframe`).contentWindow.document
            iFrame.open()
            var discreteType = contentType.split("/")[0]
            switch (contentType) {
                case "application/pdf":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        data = resData.originalData
                    } else {
                        data = "This is a PDF file."
                    }
                    break;
                case "image/jpeg":
                case "image/png":
                case "image/jpg":
                case "image/gif":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        // resData.originalData
                        // data = `<img src="data:${contentType};base64,${hexToBase64(resData.originalData)}" />`
                        data = `<img src="${res.config.url}" />`
                    } else {
                        data = `This is an Image file.`                    
                    }
                    break;
                case "video/mp4":
                case "video/avi":
                case "video/mkv":
                case "video/mpg":
                case "video/3gp":
                    if(postData[currentTab].options && postData[currentTab].options.previewimgvideo) {
                        data = `<video autoplay controls src="${res.config.url}"></video>`
                    } else {
                        data = `This is a Video file.`                    
                    }
                    break;
                default:
                    data = resData.prettyData
                    break;
            }
            iFrame.writeln(data)
            iFrame.close()
        }
    }
}

function downloadResponse(data, res) {
        var responseHeaders = res.headers
        var contentType = responseHeaders["content-type"]
        if(contentType) {
            contentType = contentType.split(";")[0]
            var aNode = document.createElement("a")            
            switch (contentType) {
                case "text/html":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".html"
                    break;
                case "application/json":
                    aNode.href = URL.createObjectURL(new Blob([objToStr(data)], {type: contentType}))
                    aNode.download = Date.now() + ".json"
                    break;            
                case "application/javascript":
                    aNode.href = URL.createObjectURL(new Blob([objToStr(data)], {type: contentType}))
                    aNode.download = Date.now() + ".js"
                    break;            
                case "application/pdf":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".pdf"
                    break;

                case "image/jpeg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".jpeg"
                    break;
                case "image/png":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".png"
                    break;
                case "image/jpg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".jpg"
                    break;
                case "image/gif":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".gif"
                    break;
                case "video/mp4":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mp4"
                    break;
                case "video/avi":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".avi"
                    break;
                case "video/mkv":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mkv"
                    break;
                case "video/mpg":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".mpg"
                    break;
                case "video/3gp":
                    aNode.href = URL.createObjectURL(new Blob([data], {type: contentType}))
                    aNode.download = Date.now() + ".3gp"
                    break;

                default:
                    data = objToStr(data)
                    break;
            }
            aNode.click()
        }
}