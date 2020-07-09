// Not yet implemented.

function importCollectionModal(event) {
    var importCollectionModalHtmlStr = `
        <div class="modal-backdrop importCollectionModalBackdrop"></div>
        <div class="modal-body">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Import a Collection</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="importCollectionModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <input type="file" fileType="json" id="importCollectionFile" onchange="return handleFileImport(event)" />
                </div>
                <div style="padding: 5px 0;">
                    <div style="border: 1px solid rgb(221, 221, 221);" class="previewImportCollectionEditor"></div>
                </div>
            </div>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
                <button onclick="return importCollection(event)" class="updateCollectionModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Import</button>
            </div>
        </div>    
    `
    var modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = importCollectionModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal);
    modal.querySelector(".importCollectionModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)    
}

function handleFileImport(evt) {
    var iCF = window["importCollectionFile"]

    var input = evt.target
    var reader = new FileReader()
    reader.onload = function(e) {
        var res = e.target.result
        handleFileImport.collectionImport = res
        // .previewImportCollectionEditor
        
        if(!handleFileImport["previewImportCollectionEditor"]) {
            handleFileImport["previewImportCollectionEditor"] = setCodeEditor(document.querySelector(".previewImportCollectionEditor"), {
                value: res,
                lineNumbers: true, 
                tabSize: 2,
                mode: {
                    name: "javascript",
                    json: true
                },
                readOnly: true,
                lineWrapping: true,
                theme: "default",
                autoRefresh: true
            })
        } else {
            handleFileImport["previewImportCollectionEditor"].setValue(res)
            handleFileImport["previewImportCollectionEditor"].refresh()
        }
    }
    reader.readAsText(input.files[0])
}

function importCollection(evt) {
    var targ = evt.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Importing..."

    if(checkTeamIsPersonal()) {
        var col = JSON.parse(handleFileImport.collectionImport)
        var colReqs = col.requests ? col.requests : []

        // add reqs
        for (var index = 0; index < colReqs.length; index++) {
            var colReq = colReqs[index];
            addRequest(colReq, (done, newReq) => {
                if(done) {}
            })
        }
        updateCollection(col, (_done, newCol) => {
            if(_done) {
                handleFileImport["previewImportCollectionEditor"].setValue("")
                handleFileImport["previewImportCollectionEditor"].refresh()
                delete handleFileImport.collectionImport
                delete handleFileImport["previewImportCollectionEditor"]
                window["importCollectionFile"].value = ""
                refreshCollections()
            }
            targ.removeAttribute("disabled", null)
            targ.innerText = "Import"
        })
    } else {
        // network
    }
}