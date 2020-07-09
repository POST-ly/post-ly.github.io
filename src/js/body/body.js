function setBodyType(type, name) {
    // <span id="${tabId}setBodyType" data-value="form">Form</span> <span class=

    // remove body tab currently active
    
    var spanNode = getFromWindow(`${currentTab}setBodyType`)
    var nodeToDeAct = getFromWindow(`${currentTab}Body${spanNode.dataset.value}`)
    nodeToDeAct.classList.add("close")

    spanNode.innerText = name
    spanNode.dataset.value = type

    // id="${tabId}Bodygraphql
    var nodeToAct = getFromWindow(`${currentTab}Body${type}`)
    nodeToAct.classList.remove("close")

    if(postData[currentTab].body) {
        postData[currentTab].body.mode = type
    }

    switch (type) {
        case "graphql":
            setGraphQLEditor()            
            break;
        case "raw":
            setRawEditor()
            break;
    
        default:
            break;
    }
}

function bodyBuilder(body) {
    var mode = body.mode
    var data
    switch (mode) {
        case "form":
            var _body = body["form"]
            data = {}
            for (var index = 0; index < _body.length; index++) {
                var bdy = _body[index];
                data[parseVarsAndReplace(bdy.key)] = parseVarsAndReplace(bdy.value)
            }
            break;
        case "raw":
            data = parseVarsAndReplace(objToStr(getRawEditorValue()));
            break;
        case "graphql":
            /**
             * GraphQL query over HTTP:
             * {"query":"query { product(id: 1) { id, name, category, price }", "variables": null }
             */
            var queryVars = getGraphQLEditorValue()
            data = {
                query: queryVars.query.trim(),
                variables: queryVars.variables.trim()
            }
            break;
        default:
            break;
    }
    return data
}