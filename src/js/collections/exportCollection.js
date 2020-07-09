function exportCollectionModal(colId) {
    var col = getCollection(colId)
    var colJSON = objToStr(col, true)
    exportCollectionModal.collection = col

    var exportCollectionModalHtmlStr = `
        <div class="modal-backdrop exportCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Export Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="exportCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div style="padding: 4px 0;">Export "${col.name}" as <b>JSON</b></div>
                    <div style="border: 1px solid rgb(221, 221, 221);" class="previewExportCollectionJSONEditor"></div>                 
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return exportCollection(event)" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Export</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = exportCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    var ed
    modal.querySelector(".exportCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        delete ed
        closeActiveModals()
    })
    document.body.appendChild(modal)
    ed = setCodeEditor(document.querySelector(".previewExportCollectionJSONEditor"), {
            value: colJSON,
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
        })
}

function exportCollection(event, colJSON) {
    var targ = event.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Exporting..."

    var aNode = document.createElement("a")
    aNode.href = URL.createObjectURL(new Blob([objToStr(exportCollectionModal.collection, true)], {type: "application/json"}))
    aNode.download = exportCollectionModal.collection.name + ".json"
    aNode.click()
    targ.removeAttribute("disabled", null)
    targ.innerText = "Export"
}