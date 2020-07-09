// refreshHistoryTab()
// attachSaveModal()

function attachSaveModal() {
    var currentCol = "Request belongs to no collection."
    if(postData[currentTab].collectionId) {
        var res = collections.find(val => {
            return (val.collectionId == postData[currentTab].collectionId)
        })

        if(res)
            currentCol = res.name
    }

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

    var saveModal = `

    <!-- <div class="modal"> -->
        <div class="modal-backdrop saveModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Request Name</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body" style="">
                <p id="modalRequestError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <input type="text" id="requestUrlName" placeholder="Type your request name..." />
                </div>
                <div style="padding: 11px 0;">
                    <span><b>Current Collection: </b>${currentCol}</span>
                </div>
                <div style="padding: 8px 0; border: 1px solid rgb(221, 221, 221); border-radius: 3px;">
                    <button class="bg-default color-white" onclick="return attachCollectionModal(event);">Create Collection</button>
                </div>
                <ul style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                    ${colStr}
                </ul>
            </div>

            <div class="modal-footer">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return saveRequestUrlName(event)" class="saveRequestUrlModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Save</button>
            </div>
        </div>

    <!-- </div> -->
    `

    var modalNode = document.createElement("div")
    modalNode.setAttribute("class", "modal")
    // modalNode.classList.add("close")
    modalNode.classList.add("saveModal")
    modalNode.innerHTML = saveModal
    closeActiveModals()
    modalsActive.push(modalNode)
    document.body.appendChild(modalNode)
    
    document.querySelector(".modal-backdrop.saveModalBackdrop").addEventListener("click", () => {
        lastEl = null
        selectedColId = null
        document.body.removeChild(modalNode)
        closeActiveModals()

        // reset the modal
        /*var n = document.querySelector(`.saveRequestUrlModalBtn`)    
        n.innerText = "Save"
        n.removeAttribute("disabled")

        modalRequestError.innerHTML = ""
        modalRequestError.classList.add("close")
        requestUrlName.value = "" */

        /* document.querySelector(".saveModal") */
        // modalNode.classList.add("close")
    })

}


