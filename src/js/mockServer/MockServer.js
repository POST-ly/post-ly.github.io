function mockServerHtml(tabId) {
    return `

        <div>
            <div style="margin: 9px 0;">
                <div style="display: flex;align-items: center;justify-content: space-between;">
                    <h2 class="lightWeight">Create New Mock Server</h2>
                    <button onclick="return viewMockServersModal(event)">View Mock Servers</button>
                </div>
            </div>
            <div>
                <div style="margin: 9px 0;">
                    <p id="createMockServerNotif" class="notif close"></p>
                    <input type="text" id="${tabId}mockServerName" placeholder="Mock server name" />
                </div>
                <div style="margin: 9px 0;">
                    <h3 class="lightWeight">Add Mock Server Endpoints:</h3>
                </div>
                <div style="margin: 9px 0;" class="table-responsive">
                    <table>
                        <thead>
                            <th>METHOD</th>
                            <th>URL</th>
                            <th>RESPONSE CODE</th>
                            <th>RESPONSE</th>
                            <th>ACTIONS</th>
                        </thead>
                        <tbody id="${tabId}mockServerTbody">
                            <tr>
                                <td>
                                    <button style="position: relative;" onclick="return showDropdown('.${tabId}setMockServerMethodTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">
                                        <span><span id="${tabId}MockServerMethodType" data-value="get">GET</span> <span class="icon-arrow-down"></span></span>
                                        <div class="dropdown ${tabId}setMockServerMethodTypeDropdown close">
                                            <ul>
                                                <li><a onclick="return setMockServerMethodType('get', 'GET')">GET</a></li>
                                                <li><a onclick="return setMockServerMethodType('post', 'POST')">POST</a></li>
                                                <li><a onclick="return setMockServerMethodType('delete', 'DELETE')">DELETE</a></li>
                                                <li><a onclick="return setMockServerMethodType('options', 'OPTIONS')">OPTIONS</a></li>
                                                <li><a onclick="return setMockServerMethodType('put', 'PUT')">PUT</a></li>
                                                <li><a onclick="return setMockServerMethodType('patch', 'PATCH')">PATCH</a></li>
                                            </ul>
                                        </div>                            
                                    </button>
                                </td>
                                <td><input type="text" id="${tabId}mockServerUrlName" placeholder="URL" /></td>
                                <td><input type="text" id="${tabId}mockServerResponseCode" placeholder="Response code" /></td>
                                <td><input type="text" id="${tabId}mockServerResponse" placeholder="Response" /></td>
                                <td style="box-sizing: border-box;display: flex;">  
                                    <span class="icon-plus" style="padding: 0.3em;display: block;" onclick="return addToMockServerList(event)"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul class="${tabId}listToAddMockServers" style="height: 212px; overflow-y: scroll;border: 1px solid rgb(221, 221, 221);border-radius: 3px;">
                    </ul>
                </div>
                <div style="margin: 9px 0;">
                    <button class="pad-6" onclick="createMockServer(event)">Create</button>
                </div>

                <div class="divider"></div>
            </div>
        </div>    

    `
}

function createMockServerTab(event) {
    // check type of MockServer already exist.
    var tabExist = false
    var tabExistId
    for (var index = 0; index < tabs.length; index++) {
        var tab = tabs[index];
        if(postData[tab] && postData[tab].type) {
            if(postData[tab].type == "New MockServer") {
                tabExist = true
                tabExistId = postData[tab].id
            }            
        }
    }

    if(tabExist){
        requestTabClick(null, tabExistId)
        return
    }

    var id = "requestTab" + Date.now()

    var h = `<a onclick="return requestTabClick(event, '${id}')" class="mainTabName">
    <b id="${id}TabMethod" class="icon-layers"></b> <span id="${id}TabName">Create New Mock Server</span></a>
    <span><a class="mainTabClose" onclick="return removeTab(event, '${id}')">X</a></span>`

    var li = document.createElement("li")
    li.classList.add("mainTab")
    li.classList.add("mainTabActive")
    li.classList.add(`${id}MainTab`)
    // li.setAttribute("id", id)
    li.innerHTML = h 
    mainTab.appendChild(li)

    first = tabs.length <= 0 ? true:  false;

    if(first) {

    } else {
        var mainTabActiveNode = document.querySelector(".mainTabActive")
        mainTabActiveNode.classList.remove("mainTabActive")

        var mainTabContentActiveNode = document.querySelector(".mainTabContentActive")
        mainTabContentActiveNode.classList.remove("mainTabContentActive")
        // mainTabContentActiveNode.classList.add("close")
    }

    var divNode = document.createElement("div")
    divNode.classList.add("mainTabContent")
    divNode.classList.add("mainTabContentActive")
    divNode.setAttribute("id", id)
    divNode.innerHTML = mockServerHtml(id)

    tabContainer.appendChild(divNode)
    tabs.push(id)
    currentTab = id
    setTabsInRequestTab(currentTab);
    setTabsInAuthTab(currentTab);
    setCurrentTabEditor(currentTab)

    // populate postData
    postData[currentTab] = {
        id: id,
        type: "New MockServer"
    }
    
}

function createMockServer(event) {
    var mockServerName = getFromWindow(`${currentTab}mockServerName`).value
    var endPoints = addToMockServerList.addedMocks

    log(mockServerName, endPoints)
    if(mockServerName.length <= 0) {
        createMockServerNotif.innerHTML = "Please, add the Mock Server name."        
        createMockServerNotif.classList.add("notif-danger")
        createMockServerNotif.classList.remove("close")
        return
    }

    if(!endPoints || endPoints.length <= 0) {
        createMockServerNotif.innerHTML = "Please, add atleast one endpoint to the Mock Server."
        createMockServerNotif.classList.add("notif-danger")
        createMockServerNotif.classList.remove("close")
        return        
    }

    var buttonNode = event.target
    buttonNode.setAttribute("disabled", true)
    buttonNode.innerText = "Creating..."

    if(checkTeamIsPersonal()) {
        addNewMockServerIdb({
            mockServerId: "mockServer" + Date.now(),
            name: mockServerName,
            endPoints: endPoints
        }, (done, res) => {
            if(done) {
                createMockServerNotif.innerHTML = "Successfully created a Mock Server"
                createMockServerNotif.classList.remove("notif-danger")
                createMockServerNotif.classList.add("notif-success")
                document.querySelector(`.${currentTab}listToAddMockServers`).innerHTML = ""
                getFromWindow(`${currentTab}mockServerName`).value = ""

                var methType = getFromWindow(`${currentTab}MockServerMethodType`)
                methType.innerText = "GET"
                methType.dataset.value = "get"

                getFromWindow(`${currentTab}mockServerUrlName`).value = ""
                getFromWindow(`${currentTab}mockServerResponseCode`).value = ""
                getFromWindow(`${currentTab}mockServerResponse`).value = ""
                addToMockServerList.addedMocks = []
            } else {
                createMockServerNotif.innerHTML = "Error occured while creating a Mock Server"                
                createMockServerNotif.classList.remove("notif-success")
                createMockServerNotif.classList.add("notif-danger")
            }
            createMockServerNotif.classList.remove("close")
            setTimeout(()=> {
                createMockServerNotif.innerHTML = ""                
                createMockServerNotif.classList.add("close")
            }, 5000)

            buttonNode.removeAttribute("disabled", null)
            buttonNode.innerText = "Create"
            log(done, res)
        })
    } else {
        // TODO: Add network implementation.
    }
}

function getAllMockServers() {
    getMockServersIdb()
}

function setMockServerMethodType(key, value) {
    var methodType = getFromWindow(`${currentTab}MockServerMethodType`)
    methodType.dataset.value = key
    methodType.innerText = value
}

function addToMockServerList(event) {
    if(!addToMockServerList.addedMocks) {
        addToMockServerList.addedMocks = []
    }

    var listToAddMocks = document.querySelector(`.${currentTab}listToAddMockServers`)

    var methodType = getFromWindow(`${currentTab}MockServerMethodType`).dataset.value
    var urlName = getFromWindow(`${currentTab}mockServerUrlName`).value
    var responseCode = getFromWindow(`${currentTab}mockServerResponseCode`).value
    var response = getFromWindow(`${currentTab}mockServerResponse`).value
    var mockServerName = getFromWindow(`${currentTab}mockServerName`)

    var id = "endPoint" + Date.now()
    addToMockServerList.addedMocks.push({
        id: id,
        methodType: methodType,
        url: urlName,
        response: response,
        responseCode: responseCode  
    })

    var li = document.createElement("li")
    li.classList.add(["addedMocks" + id])
    li.innerHTML = `
        <span class="pad-6" style="display: flex; justify-content: space-between; margin-top: 4px; width: 100%; background: lightgrey; box-sizing: border-box">
            <span style="padding: 0 4px;">${methodType.toUpperCase()}</span>
            <span style="padding: 0 4px;">${urlName}</span>
            <span style="padding: 0 4px;">${response}</span>
            <span style="padding: 0 4px;">${responseCode}</span>
            <span><button class="icon-trash" onclick="return removeAddedMock(event, '${id}');"></button></span>
        </span>
    `
    listToAddMocks.appendChild(li)
}

function removeAddedMock(event, id) {
    // remove from array
    addToMockServerList.addedMocks = addToMockServerList.addedMocks.filter(v => v.id == id)

    // remove from node.
    document.querySelector(`.${currentTab}listToAddMockServers`).removeChild(document.querySelector(`.addedMocks${id}`))
}
