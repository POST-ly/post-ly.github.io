function viewMockServersModal(event) {
    var mockServersHtml = "Loading Mock Servers..."

    getMockServersIdb((done, mockServers) => {
        // log(done, mockServers)
        if(done) {
            mockServersHtml = ""
            mockServers.forEach(mS => {
                var buttonHtmlStr = `<button onclick="return setAsActiveMockServer(event, '${mS.mockServerId}')">Activate</button>`
                if(currentMockServer) {
                    if(mS.mockServerId == currentMockServer.mockServerId) {
                        buttonHtmlStr = `<button class="bg-green" onclick="return removeAsActiveMockServer(event, '${mS.mockServerId}')">Deactivate</button>`
                    }
                }

                mockServersHtml += `
                    <li style="display: flex; justify-content: space-between; padding: 10px 2px; padding-left: 5px; border-bottom: 1px solid rgb(221, 221, 221);">
                        <span>
                            ${mS.name}
                            <div>
                                <small style="padding: 3px 0;display: block;">${mS.endPoints.length} endpoint(s)</small>
                            </div>
                        </span>
                        <div>
                            ${buttonHtmlStr}                            
                        </div>
                    </li>
                `
            })
            document.querySelector(".mockServersList").innerHTML = mockServersHtml
        }
    })

    var viewMockServersModalStr = `
    <!-- <div class="modal"> -->
        <div class="modal-backdrop viewMockServersModalBackdrop"></div>
        <div class="modal-body" style="">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Mock Servers</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body" style="">
                <div>
                    <ul class="mockServersList" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                        ${mockServersHtml}
                    </ul>
                </div>
            </idv>
            <div class="modal-footer" style="">
                <button onclick="return closeActiveModals(event)" class="createCollectionModalBtn bg-gray color-white pad-6 pad-left-12 pad-right-12">Cancel</button>
            </div>
        </div>

    <!-- </div> -->
    `
    var mo = document.createElement("div")
    mo.classList.add("modal")
    mo.classList.add("viewMockServersModal")
    mo.innerHTML = viewMockServersModalStr
    closeActiveModals()
    modalsActive.push(mo)
    document.body.appendChild(mo)

    document.querySelector(".modal-backdrop.viewMockServersModalBackdrop").addEventListener("click", () => {
        document.body.removeChild(mo)
        closeActiveModals();
    })
}

function setAsActiveMockServer(event, mockServerId) {
    getMockServerIdb(mockServerId, (done, mockServer) => {
        if(done) {
            mockCalls = true
            currentMockServer = mockServer
            event.target.classList.add("bg-green")
            event.target.removeEventListener("click", null)
            event.target.innerHTML = "Deactivate"
            event.target.addEventListener("click", (e) => removeAsActiveMockServer(e, mockServerId))
        }
    })
}

function removeAsActiveMockServer(evt, mockServerId) {
    mockCalls = false
    currentMockServer = null
    event.target.classList.remove("bg-green")
    event.target.removeEventListener("click", null)
    event.target.innerHTML = "Activate"
    event.target.addEventListener("click", (e) => setAsActiveMockServer(e, mockServerId))
}

function mockCall(callOpts, tabId, event) {
    var endPoints = currentMockServer.endPoints
    if(!endPoints) {
        processResponseError("API not found", tabId, event)
    }
    // processResponse(res, tabId, event)
    for (var index = 0; index < endPoints.length; index++) {
        var endPoint = endPoints[index];

        var url = endPoint.url
        var methodType = endPoint.methodType.toLowerCase()
        var response = endPoint.response
        var responseCode = endPoint.responseCode
        
        if(url == callOpts.url && methodType == callOpts.method.toLowerCase()) {
            processResponse({
                data: response,
                headers: {
                    "content-type": "application/json; utf-8"
                },
                status: responseCode
            }, tabId, event)
            return
        }
    }
    // var headers = postData[currentTab].headers
    // var params = postData[currentTab].params
    // var body = postData[currentTab].body
    
}