function graphQLTab() {

}

function createGraphQLDisplay(tabId) {
    return `
        <div style="display: flex; justify-content: space-between; padding: 4px 0;">
            <div style="flex-grow: 1;">
                <div style="padding: 5px 0; font-weight: 200;font-size: 15px;">QUERY</div>
                <div style="border: 1px solid rgb(221, 221, 221); margin-right: 3px;" id="${tabId}BodyGraphQLQueryEditor"></div>    
            </div>
            <div style="flex-grow: 1;">
                <div style="padding: 5px 0; font-weight: 200;font-size: 15px;">VARIABLES</div>
                <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}BodyGraphQLVariablesEditor"></div>    
            </div>
        </div>
    `
}

function setGraphQLEditor() {
    if(!currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyGraphQLQueryEditor`), {
            value: "",
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
    if(!currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`]) {
        currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`] = setCodeEditor(getFromWindow(`${currentTab}BodyGraphQLVariablesEditor`), {
            value: "",
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

function getGraphQLEditorValue() {
    var query = ""
    var variables = ""
    if(currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`]) {
        query = currentEditors[currentTab][`${currentTab}BodyGraphQLQueryEditor`].getValue().trim()
    }
    if(currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`]) {
        variables = currentEditors[currentTab][`${currentTab}BodyGraphQLVariablesEditor`].getValue().trim()
            .replace("\\", "")
            .replace("\n", "")
            .replace("\t", "")
        if(variables.length <= 0)
            variables = "null"
    }
    return {
        query,
        variables
    }    
}

/**

2

Value of query parameter to be passed in request has to be string and names of variables passed to GraphQL queries should be prefixed by $. You have used string literals for variables in request instead. Also, variables can be passed in post request using variables key.

Changing your code to something like below should get it to working:

const data = await axios.post(API_URL, {
  query: `mutation updateUserCity($id: Int!, $city: String!) {
    updateUserCity(userID: $id, city: $city){
      id
      name
      age
      city
      knowledge{
        language
        frameworks
      }
    }
  }`,
  variables: {
    id: 2,
    city: 'Test'
  }
}, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

 */