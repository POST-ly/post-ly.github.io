// Not yet implemented.
function addRequestCollectionModal(colId) {
    var tabId = "addRequestCollection" + Date.now()

    var addRequestCollectionModalHtmlStr = `
        <div class="modal-backdrop addRequestCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Add New Request to Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addRequestCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>

                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <h4 style="margin: 4px 0;">New Request name:</h4>
                    <input style="background: rgb(235, 235, 228);" type="text" placeholder="Request name" id="addRequestCollectionName" />
                </div>

                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <span>Method Type:</span>
                        <button style="position: relative;" onclick="return showDropdown('.setNewRequestCollectionMethodTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span><span id="newRequestCollectionMethodType" data-value="get">GET</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown setNewRequestCollectionMethodTypeDropdown close">
                                <ul>
                                    <li><a onclick="return setNewRequestCollectionMethodType('get', 'GET')">GET</a></li>
                                    <li><a onclick="return setNewRequestCollectionMethodType('post', 'POST')">POST</a></li>
                                </ul>
                            </div>                            
                        </button>                
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return addNewRequestToCollection(event, '${colId}')" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Add</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = addRequestCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".addRequestCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}

function setNewRequestCollectionMethodType(type, name) {
    var n = window["newRequestCollectionMethodType"]
    n.innerText = name
    n.dataset.value = type
}

function addNewRequestToCollection(evt, colId) {
    var errNode = window["addRequestCollectionModalError"]
    var col = getCollection(colId)
    var targ = evt.target

    var newReqName = window["addRequestCollectionName"].value

    if(newReqName.length <= 0) {
        errNode.innerText = "Please, type a name."
        errNode.classList.remove("close")
        return
    }

    var methodType = window["newRequestCollectionMethodType"].dataset.value

    targ.setAttribute("disabled", true)
    targ.innerText = "Creating..."

    if(checkTeamIsPersonal()) {
        var nReq = {
            url: "",
            methodType: methodType.toUpperCase(),
            body: {
                mode: "form",
                form: []
            },
            params: [],
            headers: [],

            tabId: "requestTab" + Date.now(),
            teamId: currentTeam.id,
            collectionId: col.collectionId,
            requestId: "requestId" + Date.now(),

            name: newReqName,
            options: {
                previewimgvideo: false,
                downloadres: false,
                useproxy: false
            }            
        }
        col.requests.push(nReq)
        addRequest(nReq, (done, newReq) => {
            if(done) {
                updateCollection(col, (_done, newCol) => {
                    if(_done) {
                        refreshCollections()
                        closeActiveModals()
                    } else {
                        errNode.innerText = "Error occured while creating a new request on a collection."
                        errNode.classList.remove("close")                        
                    }
                    targ.removeAttribute("disabled", null)
                    targ.innerText = "Add"
                })
            } else {
                errNode.innerText = "Error occured while creating a new request on a collection."
                errNode.classList.remove("close")                
            }
        })
    } else {
        // network.
    }
}
