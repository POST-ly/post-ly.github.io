function editCollectionModal(colId) {
    var tabId = "editCollection" + Date.now()
    var editCollectionModalHtmlStr = `
        <div class="modal-backdrop editCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Edit a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div>
                        <h4 style="margin: 4px 0;">Collection name:</h4>
                        <input style="background: rgb(235, 235, 228);" type="text" placeholder="Collection name" id="editCollectionName" />
                    </div>
                    <div>
                            <div class="tabs">
                                <ul class="tabul flex-wrap">
                                    <li onclick="return setCollection('auth', '${colId}')" data-tab="${tabId}collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab ${tabId}collectionTab tab-active"><a>Authorization</a></li>
                                    <li onclick="return setCollection('tests', '${colId}')" data-tab="${tabId}collectionTab:collectiontests" data-name="collectiontests" class="tab ${tabId}collectionTab"><a>Tests</a></li>
                                    <li onclick="return setCollection('prerequest', '${colId}')" data-tab="${tabId}collectionTab:collectionprerequest" data-name="collectionprerequest" class="tab ${tabId}collectionTab"><a>Pre-Request</a></li>
                                    <li onclick="return setCollection('variables', '${colId}')" data-tab="${tabId}collectionTab:collectionvariables" data-name="collectionvariables" class="tab ${tabId}collectionTab"><a>Variables</a></li>
                                </ul>
                                <div>
                                    <div data-tab="${tabId}collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab-content ${tabId}collectionTab tab-content-active">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The Auth set here reflects on all requests in this collection.</p>
                                        </div>
                                        ${createAuthTabs(tabId, "Collection")}
                                    </div>
                                    <div data-tab="${tabId}collectionTab:collectiontests" data-name="collectiontests" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The tests here runs after each request in this colection.</p>
                                        </div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" class="collectionTestEditor"></div>
                                    </div>                     
                                    <div data-tab="${tabId}collectionTab:collectionprerequest" data-name="collectionprerequest" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>Pre-Request is run before each request in this collection.</p>
                                        </div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" class="collectionPreRequestEditor"></div>
                                    </div>
                                    <div data-tab="${tabId}collectionTab:collectionvariables" data-name="collectionvariables" class="tab-content ${tabId}collectionTab">
                                        <div>
                                            <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>The variables added here belong to this collection.</p>
                                        </div>
                                        <div class="table-responsive">
                                            <table>
                                                <thead>
                                                    <th>NAME</th>
                                                    <th>VALUE</th>
                                                    <th>ACTIONS</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" id="collectionVarName" placeholder="Enter variable name" />
                                                        </td>
                                                        <td>
                                                            <input type="text" id="collectionVarValue" placeholder="Enter variable value" />
                                                        </td>
                                                        <td style="box-sizing: border-box;display: flex;">
                                                            <span title="Click to add variable to collection" onclick="return addCollectionVar(event, '${colId}')" class="icon-plus" style="padding: 0.3em;display: block;"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <ul class="listToAddCollectionVars" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    </div>
                 
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return updateCollectionn(event, '${colId}')" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Update</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = editCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".editCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()

        // clear editors
        delete currentEditors["collectionTestEditor"]
        delete currentEditors["collectionPreRequestEditor"]
    })
    document.body.appendChild(modal)
    setTabs()
    // setTabsInAuthTab(tabId)

    // set collection editors
    setCollectionEditors(colId)

    // set collection name
    setCollectionName(colId)
}

function setCollectionEditors(colId) {
    var col = getCollection(colId)

    var testEditorNode = document.querySelector(".collectionTestEditor")
    var prerequestEditorNode = document.querySelector(".collectionPreRequestEditor")

    if(!currentEditors["collectionTestEditor"]) {
        currentEditors["collectionTestEditor"] = setCodeEditor(testEditorNode, {
            value: col.tests ? col.tests : "// Collection tests goes here. (JavaScript)",
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript",
                json: true
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true,

            foldGutter: true,
            gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
            extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
        })
    }

    if(!currentEditors["collectionPreRequestEditor"]) {
        currentEditors["collectionPreRequestEditor"] = setCodeEditor(prerequestEditorNode, {
            value: col.prerequest ? col.prerequest : "// Collection Pre-request script goes here. (JavaScript)",
            lineNumbers: true, 
            tabSize: 2,
            mode: {
                name: "javascript",
                json: true
            },
            lineWrapping: true,
            theme: "default",
            autoRefresh: true,

            foldGutter: true,
            gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ],
            extraKeys: { "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()) } }
        })
    }
}

function addCollectionVar(evt, colId) {
    // get varName node
    // get varValue node
    var val = getFromWindow("collectionVarValue").value
    var name = getFromWindow("collectionVarName").value
    if(val.length <= 0 || name.length <= 0) {
        return
    }
    var id = "colVarId" + Date.now()

    var li = document.createElement("li")
    li.setAttribute("id", id)

    var collection = getCollection(colId)
    if(collection.variables) {
        collection.variables.push({
            id,
            name,
            value: val            
        })
    } else {
        collection.variables = [
            {
                id,
                name,
                value: val
            }
        ]
    }

    li.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <td>
                        ${name}
                    </td>
                    <td>
                        ${val}
                    </td>
                    <td style="box-sizing: border-box;display: flex;">  
                        <span onclick="return removeCollectionVar(event, '${id}', '${colId}')" class="icon-trash" style="padding: 0.3em;display: block;"></span>
                    </td>
                </tr>
            </tbody>
        </table>
    `
    document.querySelector(".listToAddCollectionVars")
        .appendChild(li)
    getFromWindow("collectionVarValue").value = ""
    getFromWindow("collectionVarName").value = ""
}

function addCollectionVars(colId) {
    var collection = getCollection(colId)
    var listVarsNode = document.querySelector(".listToAddCollectionVars")
    listVarsNode.innerHTML = ""

    if(collection.variables) {
        for (var index = 0; index < collection.variables.length; index++) {
            var _var = collection.variables[index];

            var id = _var.id
            var name = _var.name
            var val = _var.value

            var li = document.createElement("li")
            li.setAttribute("id", id)

            li.innerHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td>
                                ${name}
                            </td>
                            <td>
                                ${val}
                            </td>
                            <td style="box-sizing: border-box;display: flex;">  
                                <span onclick="return removeCollectionVar(event, '${id}', '${colId}')" class="icon-trash" style="padding: 0.3em;display: block;"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `
            listVarsNode.appendChild(li)
        }
    }
}

function getCollection(id) {
    return collections.find(c => c.collectionId == id)
}

function updateCollectionn(evt, colId) {
    var targ = evt.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Updating..."
    log(colId)   
    var col = getCollection(colId)
    log(col)

    // save the test script
    col.tests = currentEditors["collectionTestEditor"].getValue()
    // save the pre-request script
    col.prerequest = currentEditors["collectionPreRequestEditor"].getValue()

    if(checkTeamIsPersonal()) {

        updateCollection(col, (done, res) => {
            if(done) {

            }
            targ.removeAttribute("disabled", null)
            targ.innerText = "Update"
        })

    } else {
        // network
    }
}

function removeCollectionVar(event, varId, colId) {
    if(confirm("Do you want to delete this variable?")) {
        var collection = getCollection(colId)
        if(collection.variables) {
            collection.variables = collection.variables.filter(v => {
                if(v.id !== varId)
                    return true
                return false
            })
        }
    document.querySelector(".listToAddCollectionVars")
        .removeChild(getFromWindow(varId))
    }
}

function setCollection(type, colId) {
    switch (type) {
        case "variables":
            addCollectionVars(colId)
            break;
    
        default:
            break;
    }
}

function setCollectionName(colId) {
    window["editCollectionName"].value = getCollection(colId).name
}