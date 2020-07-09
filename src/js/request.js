// addNewTab(null, true)

function addNewTab(evt, first) {
    var id = "requestTab" + Date.now()

    var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName"><b id="${id}TabMethod">POST</b> <span id="${id}TabName">Untitled request</span></a><span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`
    var li = document.createElement("li")
    li.classList.add("mainTab")
    li.classList.add("mainTabActive")
    li.classList.add(`${id}MainTab`)
    // li.setAttribute("id", id)
    li.innerHTML = h 
    mainTab.appendChild(li)

    first = tabs.length <= 0 ? true:  false;

    if(first) {

    } else {
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        mainTabContentActiveNode.classList.remove("mainTabContentActive")
        // mainTabContentActiveNode.classList.add("close")
    }

    var divNode = document.createElement("div")
    divNode.classList.add("mainTabContent")
    divNode.classList.add("mainTabContentActive")
    divNode.setAttribute("id", id)
    divNode.innerHTML = createNewTab(id)

    tabContainer.appendChild(divNode)
    tabs.push(id)
    currentTab = id
    setTabsInRequestTab(currentTab);
    // setTabsInAuthTab(currentTab);
    setCurrentTabEditor(currentTab)
    setTabs()

    // populate postData
    postData[currentTab] = {
        url: document.querySelector(`.${currentTab}UrlInput`).value,
        methodType: window[`${currentTab}methodTypeButton`].innerText,
        body: {
            mode: "form",
            form: []
        },
        params: [],
        headers: [],
        tabId: id,
        name: "Untitled request",
        options: {
            previewimgvideo: false,
            downloadres: false,
            useproxy: false
        }
    }
}

function requestTabClick(evt, tabId) {
    currentTab = tabId

    if(tabs.length > 1) {
        var node = document.querySelector(".mainTabContentActive")
        node.classList.remove("mainTabContentActive")
        // node.classList.add("close")

        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        document.querySelector(`.${currentTab}MainTab`)
            .classList.add("mainTabActive")

        // window[tabId].classList.remove("close")
        window[tabId].classList.add("mainTabContentActive")
    }
}

// TODO
function removeTab(evt, tabId) {
    tabs = tabs.filter(tab => tab != tabId)

    mainTab.removeChild(document.querySelector(`.${tabId}MainTab`))

    tabContainer.removeChild(window[tabId])

    if(tabs.length > 0) {

        // remove all active tabs and contents
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        if(mainTabActiveNode)
            mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        if(mainTabContentActiveNode)
            mainTabContentActiveNode.classList.remove("mainTabContentActive")

        // set the current tab all actives
        currentTab = tabs[0]
        var node = document.querySelector(`.${currentTab}MainTab`)

        node.classList.add("mainTabActive")
        // node.classList.remove("close")
        window[currentTab].classList.add("mainTabContentActive")
    }
    // remove from postData
    delete postData[tabId]
}

function setTabsInRequestTab(tabId) {
    var nodePostDataCntTab = document.querySelectorAll("." + tabId + "postDataCntTab")
    for (var i = 0; i < nodePostDataCntTab.length; i++) {
        var tab = nodePostDataCntTab[i]
        tab.addEventListener("click", postDataTabHandler)
    }
}

function postDataTabHandler(evt) {
    // get active tab
    var activeTab = document.querySelector(`.${currentTab}postDataCntTab.tab-active`)
    activeTab.classList.remove("tab-active")

    // switch tabs
    var newNode = evt.target.parentNode;
    newNode.classList.add("tab-active")

    // remove the already active tab content
    var d = `.${currentTab}postDataCntTabContent.tab-content-active`
    var tabName = newNode.dataset.name
    document.querySelector(`.${currentTab}postDataCntTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the tab-content of the current selected tab active
    // log(`.${currentTab}postDataCntTabContent.tab-content`)
    var tabContents = document.querySelectorAll(`.${currentTab}postDataCntTabContent.tab-content`)
    for (var i = 0; i < tabContents.length; i++) {
        var t = tabContents[i]
        if(t.dataset.name == tabName) {
            t.classList.add("tab-content-active")
            break
        }
    }

    switch (tabName) {
        case "tests":
            // check Tests has been set for this tab
            if(!currentEditors[currentTab][tabName]) {
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentTestsEditor`), {
                    value: "// Write your tests in JavaScript here.\n",
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default"        
                })
            }
            break;
        case "prerequest":
            if(!currentEditors[currentTab][tabName]) {
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentPreRequestScriptEditor`), {
                    value: "// Pre-request script(JavaScript) goes here.\n",
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default"        
                })
            }
        break;
        case "previewrequest":
        // set code snippet here
        // ${tabId}postDataCntTabContentPreviewRequestEditor
        // ${tabId}previewRequestCodeSnippet
        if(!currentEditors[currentTab][tabName]) {
            var code = generateCodeSnippet(document.getElementById(`${currentTab}previewRequestCodeSnippet`).dataset.value)
            currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentPreviewRequestEditor`), {
                value: code,
                lineNumbers: true, 
                readOnly: true,
                tabSize: 2,
                mode: {
                    name: "javascript"
                },
                lineWrapping: true,
                theme: "default"        
            })
        }
        break;
        case "visualizer":
            if(!currentEditors[currentTab][tabName]) {
                currentEditors[currentTab][tabName] = setCodeEditor(document.getElementById(`${currentTab}postDataCntTabContentVisualizerEditor`), {
                    value: "// Write your Visualizer code here. \n",
                    lineNumbers: true, 
                    tabSize: 2,
                    mode: {
                        name: "javascript"
                    },
                    lineWrapping: true,
                    theme: "default"        
                })
            }
            break;
        default:
            break;
    }
}

function createNewReqTab(evt, tabId, data) {
        // check if tabId exist in the tabs
        var tabExists = false
        tabs.filter(tab => {
            if(tab == tabId)
                tabExists = true
        })

        // log(data, tabs, tabExists)

        // if the tab exist, make it active
        if(tabExists) {
            currentTab = tabId
            var node = document.querySelector(".mainTabContentActive")
            node.classList.remove("mainTabContentActive")
            // node.classList.add("close")

            var mainTabActiveNode = document.querySelector(".mainTabActive")
            mainTabActiveNode.classList.remove("mainTabActive")

            document.querySelector(`.${currentTab}MainTab`)
                .classList.add("mainTabActive")

            // window[tabId].classList.remove("close")
            window[tabId].classList.add("mainTabContentActive")
        } else {
            // if the tab does not exist, add it to the tab and make it active
            var id = tabId
            var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName"><b id="${id}TabMethod">${data.methodType}</b> <span id="${id}TabName">${data.name}</span></a><span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`
            var li = document.createElement("li")
            li.classList.add("mainTab")
            li.classList.add("mainTabActive")
            li.classList.add(`${id}MainTab`)
            // li.setAttribute("id", id)
            li.innerHTML = h 
            mainTab.appendChild(li)

            var first = tabs.length == 0 ? true : false

            if(first) {

            } else {
                var mainTabActiveNode = document.querySelector(".mainTabActive")
                mainTabActiveNode.classList.remove("mainTabActive")

                var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
                mainTabContentActiveNode.classList.remove("mainTabContentActive")
                // mainTabContentActiveNode.classList.add("close")
            }

            var divNode = document.createElement("div")
            divNode.classList.add("mainTabContent")
            divNode.classList.add("mainTabContentActive")
            divNode.setAttribute("id", id)
            divNode.innerHTML = createNewTab(id)

            tabContainer.appendChild(divNode)
            tabs.push(id)
            currentTab = id
            setTabsInRequestTab(currentTab)
            // setTabsInAuthTab(currentTab)
            setCurrentTabEditor(currentTab)
            setTabs()

            // populate postData
            postData[currentTab] = data
            postData[currentTab].methodType = data.methodType /* window[`${currentTab}methodTypeButton`].innerText */
            postData[currentTab].tabId = id
            postData[currentTab].name = data.name // set the request name

            /*
            if(!postData[currentTab].body)
                postData[currentTab]["body"] = []
            
            */

            if(!postData[currentTab].params)
                postData[currentTab]["params"] = []
            if(!postData[currentTab].headers)
                postData[currentTab]["headers"] = []

            // TODO: save tests and pre-request scripts
            
            // set url
            document.querySelector(`.${tabId}UrlInput`).value = data.url

            // set method type
            window[`${tabId}methodTypeButton`].innerText = data.methodType

            // set options
            if(postData[currentTab].options) {
                getFromWindow(`${tabId}previewImgVideoOpt`).checked = postData[currentTab].options.previewimgvideo
                getFromWindow(`${tabId}downloadResponseOpt`).checked = postData[currentTab].options.downloadres
                getFromWindow(`${tabId}useProxyOption`).checked = postData[currentTab].options.useproxy
            }

            // add body   
            if(data.body.form) {
                data.body.form.forEach(function(bdy) {
                    window[`${tabId}bodyKey`].value = bdy.key
                    window[`${tabId}bodyValue`].value = bdy.value
                    addBody(window[`${tabId}bodyKey`], window[`${tabId}bodyValue`])
                });
            }         

            // add headers
            data.headers.forEach(function(header) {
                window[`${tabId}headersKey`].value = header.key
                window[`${tabId}headersValue`].value = header.value
                addHeaders(window[`${tabId}headersKey`], window[`${tabId}headersValue`])
            });

            // add params
            data.params.forEach(function(bdy) {
                window[`${tabId}paramsKey`].value = bdy.key
                window[`${tabId}paramsValue`].value = bdy.value
                addParams(window[`${tabId}paramsKey`], window[`${tabId}paramsValue`])
            });            
        }
}

function setResponseTab(event, tabId, what) {
    // make the response tab active

    // remove the active response tab
    document.querySelector(`.${tabId}responseTab.tab-active`)
        .classList.remove("tab-active")

    // make the clicked tab active
    event.target.parentNode.classList.add("tab-active")

    // remove the active resonse tab content
    document.querySelector(`.tab-content.${tabId}responseTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the cliked tab content active
    document.querySelector(`.tab-content.${tabId}responseTabContent.${what}`)
        .classList.add("tab-content-active")
}

function saveRequest(tabId, openModal) {
    if(openModal)
        attachSaveModal()
        /*document.querySelector(".saveModal")
            .classList.toggle("close") */
    else {

        // collect all data
        postData[tabId].url = document.querySelector(`.${currentTab}UrlInput`).value
        postData[tabId].teamId = currentTeam.id

        if(!postData[currentTab].requestId) {
            postData[currentTab].requestId = "requestId" + Date.now()
        }

        // check if the request belongs to a collection
        if(!postData[currentTab].collectionId) {
            // if not display a add to collection modal
            addToCollection(tabId)
        } else {
            if(!checkTeamIsPersonal()) {
                // edit request on server
                axios.post(url + "").then(res => {

                })
            } else {
                updateRequest(postData[currentTab], (done, res) => {
                    log("saveRequest:",done, res)
                    if(done) {
                        
                    }
                })
            }
            refreshCollections()
        }
        getHistory(currentTab, (found, data) => {
            if(found == false) {
                addHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
                }, (done, addedData) => {
                    if(done == true) {
                        //log("Added Data:", addedData)
                    }
                })
            } else {
                // update record
                updateHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId                     
                }, (done, updateData) => {
                    if(done == true) {
                        //log("Updated Data:", updateData)
                    }
                })
            }
            window[`${currentTab}TabName`].innerHTML = postData[currentTab].name
            window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType

            refreshHistoryTab()
        })
    }
}

function saveRequestUrlName(evt) {
    var requestName = requestUrlName.value
    if(requestName.length <= 0) {
        modalRequestError.innerHTML = "Please, enter a request name."
        modalRequestError.classList.remove("close")
        return;
    }
    evt.target.innerText = "saving..."
    evt.target.setAttribute("disabled", null)

    if(!postData[currentTab].requestId) {
        postData[currentTab].requestId = "requestId" + Date.now()
    }

    // TODO: gather all the tests and pre-request scripts.

    postData[currentTab]["teamId"] = currentTeam.id
    postData[currentTab]["name"] = requestName

    postData[currentTab].url = document.querySelector(`.${currentTab}UrlInput`).value

    if(selectedColId) {
        postData[currentTab]["collectionId"] = selectedColId
    }

    if(!checkTeamIsPersonal()) {
        // edit request on server
        axios.post(url + "").then(res => {

        })
    } else {
        updateRequest(postData[currentTab], (done, res) => {
            log(done, res)
            if(done) {
                
            }
            // reset the modal    
            evt.target.innerText = "Save"
            evt.target.removeAttribute("disabled")

            modalRequestError.innerHTML = ""
            modalRequestError.classList.add("close")
            requestUrlName.value = ""
            refreshCollections()
            window[`${currentTab}TabName`].innerHTML = requestName
            window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType
        })
    }

    // update and refresh history
    getHistory(currentTab, (found, data) => {
        if(found == false) {
            // log("Adding history")
            addHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
            }, (done, addedData) => {
                    if(done == true) {
                        // log("Added Data:", updateData)
                    }
                })
        } else {
            // update record
            // log("Updating history")
            updateHistory({
                    teamId: postData[currentTab].teamId, 
                    tabId: postData[currentTab].tabId, 
                    requestId: postData[currentTab].requestId 
            }, (done, updateData) => {
                    if(done == true) {
                        // log("Updated Data:", updateData)
                    }
                })
        }
        window[`${currentTab}TabName`].innerHTML = requestName
        window[`${currentTab}TabMethod`].innerHTML = postData[currentTab].methodType
        refreshHistoryTab()
    })
}
