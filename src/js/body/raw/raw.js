function createRawNode(tabId) {
    return `
        <div style="font-size: 1.125em; padding: 4px 0; margin-top: 4px; border: 1px solid rgb(221, 221, 221);">
            <span style="cursor: pointer;" onclick="return setRawType('json', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeJson">
                <label for="${tabId}rawTypeJson">JSON</label>
            </span>
            
            <span style="cursor: pointer;" onclick="return setRawType('text', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeText">
                <label for="${tabId}rawTypeText">Text</label>
            </span>

            <span style="cursor: pointer;" onclick="return setRawType('xml', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeXml">
                <label for="${tabId}rawTypeXml">XML</label>
            </span>

            <span style="cursor: pointer;" onclick="return setRawType('javascript', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeJavascript">
                <label for="${tabId}rawTypeJavascript">JavaScript</label>
            </span>
            <span style="cursor: pointer;" onclick="return setRawType('html', '${tabId}')">
                <input name="rawType" type="radio" id="${tabId}rawTypeHtml">
                <label for="${tabId}rawTypeHtml">HTML</label>
            </span>
        </div>
        <div style="padding: 4px 0; margin-top: 4px; border: 1px solid rgb(221, 221, 221);" id="${tabId}BodyRawEditor"></div>
    `
}

function setRawEditor() {
    var value = "// \n"
    // check the mode type is raw.
    if(postData[currentTab].body.mode == "raw") {
        // set editor value
        var content = postData[currentTab].body["raw"].content
        if(content)
            value = content

        var lang = postData[currentTab].body["raw"].lang
        if(lang && lang.length > 0)
            getFromWindow(`${currentTab}rawType` + (lang[0].toUpperCase() + lang.slice(1))).checked = true
        // set radio type
    }

    if(!currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyRawEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyRawEditor`), {
            value: value,
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript"
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true
        })
    }
}

/**
 * Builds raw body before network request is sent
 */
function getRawEditorValue(forSave) {
    var value
    var lang
    var valType
    if(postData[currentTab].body.mode == "raw") {
        if(currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
            value =  currentEditors[currentTab][`${currentTab}BodyRawEditor`].getValue().trim()
        }
        lang = postData[currentTab].body["raw"].lang
    }
    if(!forSave)
        if(value)
            value = parseVarsAndReplace(value)

    switch (lang) {
        case "json":
            // set appropriate headers
            valType = "application/json"
            if(!forSave) {
                try {
                    value = JSON.parse(value)                    
                } catch (error) {
                    displayNotif(error, {type: "danger"})                
                    value = {}
                }
            }
            break;
        case "text":
            // set appropriate headers
            valType = "text/plain"
            break;
        case "xml":
            // set appropriate headers
            valType = "text/xml"
            break;
        case "javascript":
            // set appropriate headers
            valType = "application/javascript"
            break;
        case "html":
            // set appropriate headers
            valType = "text/html"
        default:
            break;
    }
    if(!forSave)
        postData[currentTab].headers.push({ key: "content-type", value: valType })

    if(forSave)
        return { content: value, lang: lang }
    return value
}

function setRawType(rawType, tabId) {
    // ${tabId}rawTypeText

    if(postData[currentTab].body) {
        if(postData[currentTab].body.mode && postData[currentTab].body.mode == "raw") {
            postData[currentTab].body["raw"].lang = rawType
        }
    }
}