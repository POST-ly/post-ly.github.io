function generateCode(type) {
    var snip = type[0].toUpperCase() + type.slice(1, type.length)
    return codeGenStrategies[`generate${snip}Code`]()
}

function generateNodejsAxiosCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body

    var code = `var axios = require("axios");\n\n`
    var configSnippet = "{\n"
    var dataSnippet = ""

    if(headers.length > 0) {
        configSnippet += "\theader: {\n"
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            configSnippet += "\t'"+ header.key + "':'" +header.value + "'"
            if(index != header.length-1) {
                configSnippet += ",\n"
            }
        }
        configSnippet += "\t},\n"
    }
    configSnippet += "}"

    if(body && isObject(body)) {
        dataSnippet += "\t{\n"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            dataSnippet += "\t" + bdyKey + ":'" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                dataSnippet += ",\n"
            }
        }
        dataSnippet += "\t}\n"
    } else {
        if(body)
            dataSnippet += "\t" + body + "\n"
    }
    dataSnippet += ""

    if(methodType == "get"
        || methodType == "delete"
        || methodType == "head"
        || methodType == "options") {
            code += "axios." + methodType +"('" + url + "', " + configSnippet + ").\n"
        }
    if( methodType == "post"
        || methodType == "put"
        || methodType == "patch") {
            code += "axios." + methodType +"('" + url + "', " + dataSnippet + ", " + configSnippet + ").\n"            
        }

    code += `then(response => {
    console.log(response.data)
}).catch(err => {
    console.log(err)
})
`
    return code
}

function generateCurlCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body

    var code = "curl " + "--request " + methodType.toUpperCase() + " \\ \n" +
    " \t--url " + url + " \\ \n"

    if(headers.length > 0) {
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            code += "\t--header {"+ header.key + ":" +header.value + "} \\ \n"
        }
    }

    if(body && isObject(body)) {
        code += "\t--data {"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            code += "" + bdyKey + ": '" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                code += ","
            }
        }
        code += "} \\ \n"
    } else {
        if(body)
            code += "\t--data " + body + "\\ \n"
    }

    return code
}

function generateFetchCode() {
    var postFields = getAllPostFields()
    var url = postFields.url
    var methodType = postFields.methodType.toLowerCase()
    var headers = postFields.headers
    var params = postFields.params
    var body = postFields.body
    
    var optsSnippet = "{\n"
    optsSnippet += "\tmethod: '" + methodType + "',\n"

    if(headers && headers.length > 0) {
        optsSnippet += "\theaders: new Headers({\n"
        for (var index = 0; index < headers.length; index++) {
            var header = headers[index];
            optsSnippet += `\t"${header.key}": "${header.value}"`
            if(index != headers.length-1) {
                optsSnippet += ",\n"
            }
        }
        optsSnippet += "}),"
    }

    if(body && isObject(body)) {
        optsSnippet += "\tbody: {\n"
        var bodyKeys = Object.keys(body)
        for (var index = 0; index < bodyKeys.length; index++) {
            var bdyKey = bodyKeys[index];
            var bdyValue = body[bdyKey] 
            optsSnippet += "\t'" + bdyKey + "':'" + bdyValue + "'"
            if(index != bodyKeys.length-1) {
                optsSnippet += ",\n"
            }
        }
        optsSnippet += "\t}\n"
    } else {
        if(body)
            optsSnippet += "\tbody: " + body + "\n"
    }
    
    optsSnippet += "}"

    var code = "fetch('" + url + "'," + optsSnippet + ")\n"
    code += ".then( response => { \n" + "\tconsole.log(response);\n})"
    code += ".catch( err => {\n" + "\tconsole.log(err);\n})"
    return code
}

function getAllPostFields() {
    var url = document.querySelector(`.${currentTab}UrlInput`).value
    var methodType = getFromWindow(`${currentTab}methodTypeButton`).innerText.toLowerCase()
    var headers = postData[currentTab].headers
    var params = postData[currentTab].params
    var body = bodyBuilder(postData[currentTab].body) /*postData[currentTab].body */
    return {
        url,
        methodType,
        headers,
        params,
        body
    }    
}
