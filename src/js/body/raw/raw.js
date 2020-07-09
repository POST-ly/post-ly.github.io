function createRawNode(tabId) {
    return `
        <div style="padding: 4px 0; margin-top: 4px; border: 1px solid rgb(221, 221, 221);" id="${tabId}BodyRawEditor"></div>
    `
}

function setRawEditor() {
    if(!currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyRawEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyRawEditor`), {
            value: "// \n",
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

function getRawEditorValue() {
    if(currentEditors[currentTab][`${currentTab}BodyRawEditor`]) {
        return currentEditors[currentTab][`${currentTab}BodyRawEditor`].getValue().trim()
    }
}


