function collectionRunnerModal(event, colId) {
    var tabId = "collectionRunner" + Date.now()
    var collectionRunnerModalHtmlStr = `
        <div class="modal-backdrop collectionRunnerModalBackdrop"></div>
        <div class="modal-body modal-width-800">
            <div class="modal-head" style="">
                <h4 style="padding: 0;margin: 0;">Collection Runner</h4>
                <div><span onclick="return closeActiveModals(event)" class="icon-close" style="padding: 10px 9px;padding-right: 1px;"></span></div>
            </div>
            <div class="modal-inner-body">
                <p id="collectionRunnerModalError" class="bd-rad-3 color-white bg-red pad-3 close"></p>
                <div>
                    <div class="tabs">
                        <ul class="tabul flex-wrap">
                            <li data-tab="${tabId}collectionRunnerTab:runner" class="tab ${tabId}collectionRunnerTab tab-active"><a>Runner</a></li>
                            <li data-tab="${tabId}collectionRunnerTab:runnerResults" class="tab ${tabId}collectionRunnerTab"><a>Results</a></li>
                        </ul>
                        <div>
                            <div data-tab="${tabId}collectionRunnerTab:runner" class="tab-content ${tabId}collectionRunnerTab tab-content-active">
                                ${runnerHtml(tabId, colId)}
                            </div>
                            <div data-tab="${tabId}collectionRunnerTab:runnerResults" class="tab-content ${tabId}collectionRunnerTab">
                                <div id="collectionRunnerResults" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                                    ${runnerResults(tabId, colId)}
                                </div>
                            </div>
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
    modal.innerHTML = collectionRunnerModalHtmlStr
    closeActiveModals()
    modalsActive.push(modal)
    modal.querySelector(".collectionRunnerModalBackdrop").addEventListener("click", (e) => {
        document.body.removeChild(modal)
        closeActiveModals()
    })
    document.body.appendChild(modal)
    setTabs()
}

function runnerHtml(tabId, colId) {
    var col = getCollection(colId)
    var envsHtml = ""
    Envs.forEach(function(env) {
        envsHtml += `
            <li style=" white-space: nowrap;"><a onclick="return setCollectionRunnerEnv('${env.name}', '${env.EnvId}')">${env.name}</a></li>        
        `
    });

    var reqsHtml = ""
    if(col.requests) {
        for (var index = 0; index < col.requests.length; index++) {
            var req = col.requests[index];
            reqsHtml += `
                <li style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px;">
                    <span><input type="checkbox" checked onchange="return toggleReqs()" /></span>
                    <span><b>${req.methodType}</b></span>
                    <span>${req.name}</span>
                </li>
            `        
        }
    }

    return `
        <div style="display: flex; justify-content: space-between;">
            <div style="flex-grow:1; margin: 0 2px; border: 1px solid rgb(221, 221, 221); padding: 5px;">
                <!-- settings for col run -->
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Env:</span>
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}setCollectionRunnerEnvDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span><span id="${tabId}setCollectionRunnerEnv" data-value="none">No Env</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown ${tabId}setCollectionRunnerEnvDropdown close">
                                <ul>
                                    ${envsHtml}
                                </ul>
                            </div>
                        </button>
                    </div>
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Delay(ms):</span>
                        <input type="text" id="${tabId}collectionRunnerSettingsDelay" placeholder="Delay" />
                    </div>
                    <div style="margin: 9px 0; white-space: nowrap;">
                        <span>Iterations:</span>
                        <input min="0" max="10" type="number" id="${tabId}collectionRunnerSettingsIterations" placeholder="Iterations" />
                    </div>
                    <div style="margin: 4px 0; white-space: nowrap; float: right;">
                        <button style="padding: 12px 26px;font-size: 0.9em;font-weight: 700;" onclick="return runCollection(event, '${tabId}', '${colId}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Run</button>
                    </div>
            </div>
            <div style="flex-grow:1; margin: 0 2px;">
                <h4 class="lightWeight" style="margin: 2px 0;padding-bottom: 5px;">Run Order</h4>
                <!-- list requests collection -->
                <ul style="border: 1px solid rgb(221, 221, 221);">
                    ${reqsHtml}
                </ul>
            </div>
        </div>
    `
}

function runnerResults(tabId, colId) {
    return `
    `
}

function renderRunnerResults(its) {
    var colRunnNode = window["collectionRunnerResults"]
    // log("renderResResult:", res )
    var itshtml = ""
    for (var i = 0; i < its.length; i++) {
        var res = its[i]
        itshtml += `
          <h2 style="margin: 4px 0;font-weight: 300;">${i+1} Iteration</h2>
        `
        for (var index = 0; index < res.length; index++) {
            var r = res[index];
            var status = r["response"].status || ""
            var statusText = r["response"].statusText || ""
            var bgC = ""
            if(status) {
                bgC = status == 200 ? "bg-green" : "bg-default"
            }

            var testHtml = ""
            if(r.testsResult) {
                var testRes = r.testsResult
                // aggregate test results
                for (var key in testRes) {
                    var describe = testRes[key];
                    testHtml += `<div style="padding: 9px 0; background: rgba(221, 221, 221, 0.32);">${describe.name}</div>`
                    describe.expects.forEach(expect => {
                        var col = expect.status ? "green" : "rgb(221,75,57)"
                        testHtml += `
                            <li style="border-top: 1px solid rgb(221, 221, 221); padding: 8px 0;">
                                <span><b style="color: ${col}; text-transform: uppercase;">${expect.status}</b> ${expect.name}</span>
                            </li>
                        `
                    })
                }
            }

            itshtml += `
                <div>
                    <div style="border-bottom: 1px solid rgb(221, 221, 221);padding: 10px 3px; white-space: nowrap;display: flex;justify-content: space-between;">
                        <div>
                            <span><b>${r.requests.methodType}</b></span>
                            <span>${r.requests.name}</span>
                        </div>
                        <div>
                            <span class="${bgC} color-white bd-rad-3 pad-3">${status}</span>
                            <span class="${bgC} color-white bd-rad-3 pad-3">${statusText}</span>
                        </div>
                    </div>
                        <ul style="padding-left: 16px;">
                            ${testHtml}
                        </ul>
                </div>
            `
        }
    }
    colRunnNode.innerHTML = itshtml
}

function setCollectionRunnerEnv(envName, envId) {
    // id="${tabId}setCollectionRunnerEnv" data-value="none"
    var n = window[`${tabId}setCollectionRunnerEnv`]
    n.innerText = envName
    n.dataset.value = envId
}

function runCollection(event, tabId, colId) {
    var targ = event.target
    targ.setAttribute("disabled", true)
    targ.innerText = "Running..."

    var col = getCollection(colId)
    var reqs = col.requests

    // get settings.
    // ${tabId}collectionRunnerSettingsDelay
    // ${tabId}collectionRunnerSettingsIterations
    var envToUse = window[`${tabId}setCollectionRunnerEnv`].dataset.value
    var delay = window[`${tabId}collectionRunnerSettingsDelay`].value
    var iterations = window[`${tabId}collectionRunnerSettingsIterations`].value

    delay = delay.length <= 0 ? 0 : delay
    iterations = iterations.length <= 0 ? 0 : iterations
    var runnerRes = []
    var currentIter = []
    var index = 0
    displayNotif("Running collections...", {type: "info"})
    iterationStart()
    // runnerResults()

    function runRequests() {
        var req = reqs[index]
        // run pre-request in collection.

        // generate auth for collection
        if(col.authorization)
            req = generateAuthCollection(req, col.authorization)

        makeRequest(req, false, (res) => {
            // req["__response"] = res

            // set postly api and run collection tests
            var postlyApi = setPostlyAPI(res)
            var testRes = runCollectionTests(col.tests, postlyApi)
            // log(testRes)
            // currentIter.push(req)
            currentIter.push({
                "testsResult": testRes,
                "response": res,
                "requests": req
            })

            if(index == (reqs.length - 1)) {
                runnerRes.push(currentIter)
                currentIter = []
                index = 0
                iterationStart()
            } else {
                setTimeout(() => {
                    index++
                    runRequests()
                }, delay)
            }
        })
    }

    function iterationStart() {
        if(iterations < 0) {
            targ.removeAttribute("disabled", null)
            targ.innerText = "Run"
            displayNotif("Done running colections", {type: "success"})
            // log("Done running colections:",runnerRes)
            renderRunnerResults(runnerRes, tabId, colId)
        } else {
            iterations--
            runRequests()
        }
    }
}

function runCollectionTests(tests, api) {
    var testResult = testF(tests, api)
    return testResult
}

function setPostlyAPI(res) {
    var _postly = {}
    var data = res.data
    var headers = res.headers
    var status = res.status
    var statusText = res.statusText

    // set postly data
    _postly.config = res

    _postly.response = data

    // set postly responseCodeText
    _postly.responseCodeText = statusText

    // set postly responseCode
    _postly.responseCode = status

    // Set response headers to postly
    _postly.headers = headers

    return _postly
}