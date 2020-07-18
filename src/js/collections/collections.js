// refreshCollections()

var collectionModal = `

<!-- <div class="modal"> -->
    <div class="modal-backdrop collection-modal-backdrop"></div>
    <div class="modal-body" style="">
        <div class="modal-head" style="">
            <h4 style="padding: 0;margin: 0;">Create a Collection</h4>
            <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
        </div>
        <div class="modal-inner-body" style="">
            <p id="collectionModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
            <div>
                <input type="text" id="collectionName" placeholder="Enter collection name" />
            </div>
        </idv>
        <div class="modal-footer" style="">
            <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            <button onclick="return createCollection(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Create</button>
        </div>
    </div>

<!-- </div> -->
`

function attachCollectionModal() {
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("collectionModal")
    // mo.classList.add("close")
    mo.innerHTML = collectionModal
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.collection-modal-backdrop").addEventListener("click", () => {
        // reset the modal    
        /*collectionModalRequestError.innerHTML = ""
        collectionModalRequestError.classList.add("close")        

        collectionName.value = ""

        var createCollectionModalBtnNode = document.querySelector(`.createCollectionModalBtn`)
        createCollectionModalBtnNode.removeAttribute("disabled")
        createCollectionModalBtnNode.innerHTML = "Create"

        document.querySelector(".collectionModal")
            .classList.add("close"); */
        document.body.removeChild(mo)
        closeActiveModals();
    })
}

// calls up the collection modal
function createNewCollection(event) {
    attachCollectionModal()
    /*document.querySelector(".collectionModal")
        .classList.remove("close")*/
}

// attachCollectionModal()

function createCollection(event) {
    var btnNode = event.target
    collectionModalRequestError

    var colName = collectionName.value
    if(colName.length <= 0) {
        collectionModalRequestError.innerHTML = "Please, type a collection name"
        collectionModalRequestError.classList.remove("close")        
        return
    }

    // var btnNode = document.querySelector(`.createCollectionModalBtn`)
    btnNode.setAttribute("disabled", null)
    btnNode.innerText = "Creating..."

    // log(colName)
    var id = "collectionId" + Date.now()

    if(checkTeamIsPersonal()) {
        addCollection({ collectionId: id, name: colName, teamId: currentTeam }, (done, res) => {
            if(!done) {
                collectionModalRequestError.innerText = res
            } else {
                document.querySelector(".modal-backdrop.collection-modal-backdrop").dispatchEvent(new Event("click"))
            }
        })
    } else {
        axios.post(url + "team/add/collection", {
            userId: user.id,
            teamId: currentTeam.id,
            collectionName: colName
        }).then(res => {
            var r = res.data
        })
    }
    
    btnNode.removeAttribute("disabled")
    btnNode.innerText = "Create"
    refreshCollections()
}

function refreshCollections() {
    if(checkTeamIsPersonal()) {
        // get all collections in indexeddb with teamid to teamname
        refreshCollectionsIdb()
    } else {

        // load the collections belonging to the team
        // for each collection, load its requests
        refreshCollectionsNetwork()
    }
}

function refreshCollectionsNetwork() {
    var ul = document.querySelector(`.collections.historyUl`)
    ul.innerHTML = "Loading collections..."

    var htmlStr = ""

    axios.get(url + "collections/" + currentTeam.id).then(res => {
        var cols = res.data
        collections = cols

        cols.forEach((col) => {
            var id = "historyCollectionsFolder" + Date.now() + col.id
            var h = `
                <li class="historyLi ${col.id}Collection" onclick="return historyCollectionsFolderClick(event, '.historyCollectionsFolder.${id}', '${col.id}')">
                    <span class="icon-folder-alt"></span><span> ${col.name}</span>
                    <ul class="historyCollectionsFolder ${id} close">
            `
            if(col.requests) {
                col.requests.forEach(req => {
                    // gen tabId and attach to req
                    // TODO: check if tabId exists
                    var tabId = "requestTab" + Date.now() + req.id
                    req.tabId = tabId
                    h += `
                        <li class="historyLi" onclick="return requestItemClick(event, '${req.id}', '${col.id}')"><span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${req.methodType}</span><span class="historyItemName">${req.name}</span></li>
                    `
                })
            }

            h += `
                    </ul>
                </li>            
            `
            htmlStr += h
        })
        ul.innerHTML = htmlStr
    }).catch(e => {
        ul.innerHTML = e        
    })
}

function refreshCollectionsIdb() {
    var ul = document.querySelector(`.collections.historyUl`)
    ul.innerHTML = "Loading collections..."
    var htmlStr = ""

    getAllCollection((cols) => {
        //log("getAllCollection:",cols)
        collections = []
        cols.forEach((col) => {
            var id = "historyCollectionsFolder" + Date.now() + col.collectionId
            var h = `
                <li class="historyLi collectionFolder ${col.collectionId}Collection">
                    <div style="display: flex;width: 100%;">
                        <div style="width: 100%; display: flex; align-items: flex-start;" onclick="return historyCollectionsFolderClick(event, '.historyCollectionsFolder.${id}', '${col.collectionId}')">
                            <span class="icon-folder-alt" style="font-size: 24px;"><!-- &#128194 --></span>
                            <span style="padding-left: 6px;">
                                 ${col.name}
                                <div>
                                    <span style="font-size: 14px;/*! color: gray; */padding: 6px 0;display: block;" class="${id}noOfReqs"></span>
                                </div>
                             </span>
                        </div>
                        <span class="icon-options" style="float: right; padding: 4px; position: relative;" onclick="return showDropdown('.${currentTab}${id}collectionOptionsDropdown')">
                                    <div class="dropdown ${currentTab}${id}collectionOptionsDropdown close" style="left: unset; right: 0;">
                                        <ul>
                                            <li><a onclick="return renameCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-note"></span>Rename</a></li>
                                            
                                            <li><a onclick="return editCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-pencil"></span>Edit</a></li>

                                            
                                            <li><a onclick="return viewCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-eye"></span>View</a></li>
                                            
                                            <li><a onclick="return exportCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-cloud-download"></span>Export</a></li>
                                            <li><a onclick="return addRequestCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-plus"></span>Add Request</a></li>
                                            <!--
                                            <li><a onclick="return shareCollectionModal('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-share"></span>Share</a></li> -->
                                            
                                            
                                            <li><a onclick="return deleteCollection('${col.collectionId}')"><span style="padding-right: 4px;" class="icon-trash"></span>Delete</a></li>
                                        </ul>
                                    </div>                        
                        </span>
                    </div>
                    <ul class="historyCollectionsFolder ${id} close">
            `
            getRequestsbyColId(col.collectionId, (done, reqs) => {
                col.requests = reqs
                collections.push(col)
                // log("Collection:", col.name, reqs)
                document.querySelector(`.${id}noOfReqs`).innerText = reqs.length + " request(s)"

                // log(col.collectionId, done, reqs)

                var reqStr = ""
                if(done) {
                    reqs.forEach(req => {
                        // gen tabId and attach to req
                        var tabId = "requestTab" + Date.now() + req.requestId
                        req.tabId = req.tabId ? req.tabId : tabId
                        reqStr += `
                            <li class="historyLi" onclick="return requestItemClick(event, '${req.requestId}', '${col.collectionId}')">
                                <span class="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">${req.methodType}</span>
                                <span class="historyItemName">${req.name}</span>
                            </li>
                        `
                    })
                    h += reqStr
                    document.querySelector(`.historyCollectionsFolder.${id}`).innerHTML = reqStr
                }
            })
            h += `
                    </ul>
                </li>            
            `
            //log(h)
            htmlStr += h
        })
        ul.innerHTML = htmlStr
    })
}

function requestItemClick(evt, reqId, colId) {
    evt.stopPropagation()
    var data
    var filCols
    // generate tabId
    if(checkTeamIsPersonal()) {
        filCols = collections.filter(col => col.collectionId == colId)[0]
        data = filCols.requests.filter(req => req.requestId == reqId)[0]
         // log(data, filCols, reqId, colId)
    } else {
        filCols = collections.filter(col => col.id == colId)[0]
        data = filCols.requests.filter(req => req.id == reqId)[0]        
    }
    createNewReqTab(evt, data.tabId, data)
}

function historyCollectionsClick(evt, colId) {
    // log("Collection click", col)

    // fetch history id in col id

    // append the result to the col
}

function historyCollectionsFolderClick(evt, className) {
    document.querySelector(className).classList.toggle("close")
}

function checkboxOnChange(event, colId) {
    selectedColId = colId
    if(lastEl) {
        lastEl.checked = false
        lastEl.setAttribute("checked", false)
    }
    lastEl = event.target
}

function addReqCollection(event) {
    if(checkTeamIsPersonal()) {
        // if the request tab is not yet saved, save to request and collection.

        // check if request already exists, and attached to collection
        postData[currentTab].collectionId = selectedColId
        if(!postData[currentTab].requestId) {
            postData[currentTab].requestId = "requestId" + Date.now()
        }
        getRequest(postData[currentTab].requestId, (done, res) => {
            //log("addReqCollection:", done, res)
            // request exits
            if(done) {
                updateRequest(postData[currentTab], () => {})
            } else {
                addRequest(postData[currentTab], (doneReq, resReq) => {
                    //log("addRequest:", doneReq, resReq, postData[currentTab])
                })
            }
        })
    } else {
        // post to network
    }
    refreshCollections()
}

function addToCollection(tabId) {
    var colStr = ""
    collections.forEach(col => {
        colStr += `
        <li>
            <div class="resultAddTeamItem">
                <div style="display: flex;">
                    <span><input type="checkbox" onchange="return checkboxOnChange(event, '${col.collectionId}')" /> </span>
                    <span style="padding: 0 6px;">${col.name}</span>
                </div>
            </div>
        </li>`
    })

    var addToCollectionModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop addToCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Select a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="addCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div style="padding: 8px 0; border: 1px solid rgb(221, 221, 221); border-radius: 3px;">
                        <button class="bg-default color-white" onclick="return attachCollectionModal(event);">Create Collection</button>
                    </div>
                    <ul style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                        ${colStr}
                    </ul>
                
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return addReqCollection(event)" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Add To Collection</button>
            </div>
        </div>

    <!-- </div> -->
    `

    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = addToCollectionModal
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".addToCollectionModalBackdrop").addEventListener("click", (e) => {
        lastEl = null
        selectedColId = null
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
}

function removeReqFromCollection(tabId) {
    // log("Remove from collection")
    if(confirm("Do you really want to remove this request?")) {
        if(checkTeamIsPersonal()) {
            deleteRequest(postData[currentTab], (done, res) => {})
        } else {
            // network
        }
        refreshCollections()
    }
}

function renameCollectionModal(colId) {
    // pop up a modal
    var renameCollectionModal = `
        <!-- <div class="modal"> -->
            <div class="modal-backdrop renameCollectionModalBackdrop"></div>
            <div class="modal-body">
                <div class="modal-head" style="">
                    <h4 style="padding: 0;margin: 0;">Rename a Collection</h4>
                    <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
                </div>
                <div class="modal-inner-body" style="">
                    <p id="renameCollectionModalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                    <div>
                        <input type="text" id="renameCollectionName" placeholder="Enter collection name" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                    <button onclick="return renameCollection(event, '${colId}')" class="createCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Rename</button>
                </div>
            </div>

        <!-- </div> -->
    `

    var mo = document.createElement("div")
    mo.classList.add("modal")
    // mo.classList.add("renameCollectionModal")
    // mo.classList.add("close")
    closeActiveModals()
    modalsActive.push(mo)
    mo.innerHTML = renameCollectionModal

    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.renameCollectionModalBackdrop").addEventListener("click", () => {
        // reset the modal    
        document.body.removeChild(mo)
        closeActiveModals()
    })
}

function renameCollection(evt, colId) {
 // log(colId)
 var targ = evt.target
 targ.setAttribute("disabled", true)
 targ.innerText = "Renaming..."

 var colName = renameCollectionName.value

 if(colName.length <= 0) {
     renameCollectionModalRequestError.innerText = "Please, type a collection name."
     renameCollectionModalRequestError.classList.remove("close")
     return
 } else {
     if(checkTeamIsPersonal()) {
         getCollectionIdb(colId, (done, res) => {
             if(done) {
                 var col = res
                 col.name = colName
                updateCollection(col, (done, r) => {                                        
                    if(done) {
                        renameCollectionName.value = ""
                        displayNotif("Collection successfully renamed.", {type: "success"})
                        closeActiveModals()
                    } else {
                        displayNotif("Error occured.", {type: "danger"})                        
                    }
                    targ.removeAttribute("disabled", null)
                    targ.innerText = "Rename"
                    refreshCollections()
                })
             } else {
                displayNotif("Error occured.", {type: "danger"})                        
                targ.removeAttribute("disabled", null)
                targ.innerText = "Rename"                 
             }
         })
     } else {
         // network
     }
 }
}

function deleteCollection(colId) {
    if(confirm("Do you wish to delete this collection ?")) {
        if(checkTeamIsPersonal()) {
            deleteCollectionDb({
                collectionId: colId
            }, (done, res) => {
                getRequestsbyColId(colId, (done, res) => {
                    if(done) {
                        if(reqs)
                            reqs.forEach(req => {
                                deleteRequest(req, (done, r) => {
                                    refreshCollections()
                                })
                            })
                    }
                })
            })
        } else {
            // network
        }
        refreshCollections()
    }
}