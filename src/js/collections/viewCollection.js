// TODO: Not yet implemented.

function viewCollectionModal(colId) {
    var tabId = "viewCollection" + Date.now()
    var col = getCollection(colId)

    var viewCollectionModalHtmlStr = `
        <div class="modal-backdrop viewCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">View Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="viewCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <h3 class="lightWeight">${col.name}</h3>
                </div>
                <div style="border-bottom: 1px solid rgb(221, 221, 221); padding-bottom: 5px;">
                    <button onclick="return collectionRunnerModal(event, '${colId}')" title="Click to run this collection" style="font-size: 17px;padding: 10px 27px;" class="bg-default color-white pad-6 pad-left-12 pad-right-12"><span class="icon-control-play"></span></button>
                </div>
                <div>
                    <div class="tabs">
                        <ul class="tabul flex-wrap">
                            <li onclick="return setCollection('auth', '${colId}')" data-tab="collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab ${tabId}collectionTab tab-active"><a>Requests</a></li>
                        </ul>
                        <div>
                            <div data-tab="collectionTab:collectionauthorization" data-name="collectionauthorization" class="tab-content ${tabId}collectionTab tab-content-active">
                                <div>
                                    <p style="margin: 9px 0;font-size: 15px;color:rgb(101, 101, 101);"><span style="padding-right: 2px;" class="icon-question"></span>Requests in this collection.</p>
                                </div>
                                <ul class="viewCollectionRequests" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                </ul>
                            </div>
                        </div>                    
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = viewCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".viewCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)

    setCollectionRequests(col)
}

function setCollectionRequests(col) {
    // viewCollectionRequests

    var html = ""

    for (var index = 0; index < col.requests.length; index++) {
        var req = col.requests[index];
        html += `
            <li style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px;">
                <span><b>${req.methodType}</b></span>
                <span>${req.name}</span>
            </li>
        `        
    }
    document.querySelector(".viewCollectionRequests")
        .innerHTML = html.length > 0 ? html : "<p>This Collection has no requests yet.</p>"
}