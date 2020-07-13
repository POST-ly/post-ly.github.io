function createAuthTabs(tabId, type) {
 return `
    <div class="authTabCnt">
        <div class="tabs">
            <ul class="tabul flex-wrap">
                <li data-tab="${tabId}AuthTab:apiKey" data-name="apikey" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab tab-active"><a>API(Key)</a></li>
                <li data-tab="${tabId}AuthTab:basic" data-name="basic" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Basic</a></li>
                <li data-tab="${tabId}AuthTab:digest" data-name="digest" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Digest</a></li>
                <li data-tab="${tabId}AuthTab:bearer" data-name="bearer" style="display: flex;align-items: center;" class="tab ${tabId}AuthTab"><a>Bearer</a></li>
                <!--
                <li class="tab ${tabId}AuthTab"><a>Hawk</a></li>
                <li class="tab ${tabId}AuthTab"><a>OAuth1</a></li>
                <li class="tab ${tabId}AuthTab"><a>OAuth2</a></li>-->
            </ul>
            <div>
                <div data-tab="${tabId}AuthTab:apiKey" data-name="apikey" class="tab-content ${tabId}AuthTab tab-content-active APIKey">
                    
                    <div style="margin: 9px 0;">
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}setApiKeyAddToTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span>Add to: <span id="${tabId}setApiKeyAddToType" data-value="header">Header</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown right-dropdown ${tabId}setApiKeyAddToTypeDropdown close">
                                <ul>
                                    <li><a onclick="return setApiKeyAddToType('params', 'Query Params', '${tabId}')">Query Params</a></li>
                                    <li><a onclick="return setApiKeyAddToType('header', 'Header', '${tabId}')">Header</a></li>
                                </ul>
                            </div>                            
                        </button>
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authAPIKey" placeholder="api_key" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="password" id="${tabId}authAPIValue" placeholder="api_value" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'APIKey', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 
                <div data-tab="${tabId}AuthTab:basic" data-name="basic" class="tab-content ${tabId}AuthTab Basic">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authBasicUsername" placeholder="Username" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="password" id="${tabId}authBasicPassword" placeholder="Password" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Basic', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 

                <div data-tab="${tabId}AuthTab:digest" data-name="digest" class="tab-content ${tabId}AuthTab Digest">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestUsername" placeholder="Username" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestPassword" placeholder="Password" />
                    </div>
                    <!--
                    <div style="margin: 9px 0;">
                        <button style="position: relative;" onclick="return showDropdown('.${tabId}authDigestAlgortihmDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">
                            <span>Algorithm: <span id="${tabId}authDigestAlgorithm">MD5</span> <span class="icon-arrow-down"></span></span>
                            <div class="dropdown ${tabId}authDigestAlgortihmDropdown close">
                                <ul>
                                    <li><a onclick="return setAuthDigestAlgorithm('${tabId}', 'MD5', '${tabId}', '${type}')">MD5</a></li>
                                    <li><a onclick="return setAuthDigestAlgorithm('${tabId}', 'SHA-1', '${tabId}', '${type}')">SHA-1</a></li>
                                </ul>
                            </div>                            
                        </button>
                    </div>-->
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestRealm" placeholder="Realm" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestNonce" placeholder="Nonce" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestUri" placeholder="Uri" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestOpaque" placeholder="Opaque" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestQop" placeholder="Qop" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestNc" placeholder="NC" />
                    </div>
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authDigestCnonce" placeholder="Cnonce" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Digest', '${tabId}', '${type}')" class="bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> 

                <div data-tab="${tabId}AuthTab:bearer" data-name="bearer" class="tab-content ${tabId}AuthTab Bearer">
                    <div style="margin: 9px 0;">
                        <input type="text" id="${tabId}authBearerToken" placeholder="Bearer token" />
                    </div>
                    <div style="margin: 4px 0;">
                        <button onclick="return setAsAuth(event, 'Bearer', '${tabId}', '${type}')" class="saveRequestUrlModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12">Set As Auth.</button>
                    </div>
                </div> <!--
                <div class="tab-content ${tabId}AuthTabContent Hawk">
                    <div>Hawk</div>
                </div> 
                <div class="tab-content ${tabId}AuthTabContent OAuth1">
                    <div>OAuth 1.0</div>
                </div> 
                <div class="tab-content ${tabId}AuthTabContent OAuth2">
                    <div>OAuth 2.0</div>
                </div> -->
            </div>
        </div>
    </div>
 `   
}

function setTabsInAuthTab(tabId) {
    var authTabNode = document.querySelectorAll("." + tabId + "AuthTab")
    for (var index = 0; index < authTabNode.length; index++) {
        var tab = authTabNode[index];
        tab.addEventListener("click", authTabHandler)        
    }
}

function authTabHandler(evt) {
    // get active tab
    var activeTab = document.querySelector(`.${currentTab}AuthTab.tab-active`)
    activeTab.classList.remove("tab-active")

    // switch tabs
    var newNode = evt.target.parentNode;
    newNode.classList.add("tab-active")

    // remove the already active tab content
    var tabName = newNode.dataset.name
    document.querySelector(`.${currentTab}AuthTabContent.tab-content-active`)
        .classList.remove("tab-content-active")

    // make the tab-content of the current selected tab active
    // log(`.${currentTab}postDataCntTabContent.tab-content`)
    var tabContents = document.querySelectorAll(`.${currentTab}AuthTabContent.tab-content`)
    for (var index = 0; index < tabContents.length; index++) {
        var t = tabContents[index];
        if(t.dataset.name == tabName) {
            t.classList.add("tab-content-active")
            return;
        }        
    }
}

function setAsAuth(evt, authName, tabId, type) {
    var strategy = {
        setAsAuthCollection,
        setAsAuthRequest
    }
    strategy["setAsAuth" + type](evt, authName, tabId)
}

function setAsAuthCollection(evt, authName, tabId) {
    switch (authName) {
        case 'Basic':
            var authBasicUsername =  getFromWindow(`${tabId}authBasicUsername`).value
            var authBasicPassword =  getFromWindow(`${tabId}authBasicPassword`).value
            postData[currentTab].authorization = {
                type: "Basic",
                password: authBasicPassword,
                username: authBasicUsername
            }
            break;
        case 'Bearer':
            var authBearerToken = getFromWindow(`${currentTab}authBearerToken`).value
            postData[currentTab].authorization = {
                type: "Bearer",
                token: authBearerToken
            }
            break;    

        case "APIKey":
            var auth_key = getFromWindow(`${currentTab}authAPIKey`).value
            var auth_value = getFromWindow(`${currentTab}authAPIValue`).value
            var whereToAdd = getFromWindow(`${currentTab}setApiKeyAddToType`).dataset.value
            postData[currentTab].authorization = {
                type: "APIKey",
                auth_key: auth_key,
                auth_value: auth_value,
                whereToAdd: whereToAdd
            } 
            // postData[currentTab] = 
        break;
    
        default:
            break;
    }

    // check if icon-check exist and remove it
    var nodeExist = document.querySelector(`.${currentTab}AuthTabCheck.icon-check`)
    if(nodeExist) {
        nodeExist.parentNode.removeChild(nodeExist)
    }
    // set this 
    document.querySelector(`.${currentTab}AuthTab.tab-active`)
        .innerHTML += `<span class="${currentTab}AuthTabCheck icon-check" style="padding-right: 8px; color: rgb(221,75,57); font-weight: 800;" class="icon-check"></span>`
}

function setAsAuthRequest(evt, authName, tabId) {
    switch (authName) {
        case 'Basic':
            var authBasicUsername =  getFromWindow(`${currentTab}authBasicUsername`).value
            var authBasicPassword =  getFromWindow(`${currentTab}authBasicPassword`).value
            postData[currentTab].authorization = {
                type: "Basic",
                password: authBasicPassword,
                username: authBasicUsername
            }
            break;
        case 'Bearer':
            var authBearerToken = getFromWindow(`${currentTab}authBearerToken`).value
            postData[currentTab].authorization = {
                type: "Bearer",
                token: authBearerToken
            }
            break;
        case "Digest":
            var authDigestFields = [ 
                "Username", 
                "Password",
                "Qop", "Uri", "Realm", "Nonce", "Cnonce", "Opaque", "Nc" ]

            // set to postData
            postData[currentTab].authorization = {
                type: "Digest"
            }

            authDigestFields.forEach(f => {
                var v = window[currentTab + "authDigest" + f].value
                postData[currentTab].authorization[f.toLocaleLowerCase()] = v
            })
        break;

        case "APIKey":
            var auth_key = getFromWindow(`${currentTab}authAPIKey`).value
            var auth_value = getFromWindow(`${currentTab}authAPIValue`).value
            var whereToAdd = getFromWindow(`${currentTab}setApiKeyAddToType`).dataset.value
            postData[currentTab].authorization = {
                type: "APIKey",
                auth_key: auth_key,
                auth_value: auth_value,
                whereToAdd: whereToAdd
            } 
            // postData[currentTab] = 
        break;
    
        default:
            break;
    }

    // check if icon-check exist and remove it
    var nodeExist = document.querySelector(`.${currentTab}AuthTabCheck.icon-check`)
    if(nodeExist) {
        nodeExist.parentNode.removeChild(nodeExist)
    }
    // set this 
    document.querySelector(`.${currentTab}AuthTab.tab-active`)
        .innerHTML += `<span class="${currentTab}AuthTabCheck icon-check" style="padding-right: 8px; color: rgb(221,75,57); font-weight: 800;" class="icon-check"></span>`
}

function setAuthDigestAlgorithm(tabId, algo) {
    window[tabId + "authDigestAlgorithm"].innerText = algo
}

function generateAuth(headers, url, tabId, type) {
    var generateAuthStrategy = {
        generateAuthCollection,
        generateAuthRequest
    }

    generateAuthStrategy["generateAuth" + type](headers, url, tabId)
}

function generateAuthCollection(headers, url, tabId) {

}

function generateAuthRequest(headers, url, tabId) {
    var authName = postData[currentTab].authorization.type
    var auth = ""
    switch (authName) {
        case 'Basic':
            var basicUsername = parseVarsAndReplace(postData[currentTab].authorization.username)
            var basicPassword = parseVarsAndReplace(postData[currentTab].authorization.password)
            auth = "Basic " + btoa(basicUsername + ":" + basicPassword)
            break;
        case 'Bearer':
            var bearerToken = parseVarsAndReplace(postData[currentTab].authorization.token)
            auth = `Bearer ${bearerToken}`
            break;
        case "Digest":
            auth = "Digest "
            var postDataAuth = postData[currentTab].authorization
            var response = formulateResponse(postDataAuth)

            var digestUsername = postDataAuth.username
            var realm = postDataAuth.realm
            var uri = postDataAuth.uri
            var nonce = postDataAuth.nonce
            var qop = postDataAuth.qop
            var nc = postDataAuth.nc
            var cnonce = postDataAuth.cnonce

		    auth += 'username="' + digestUsername + '", ' +
			'realm="' + realm + '", ' +
			'nonce="' + nonce + '", ' +
			'uri="' + uri + '", ' +
			'response="' + response + '", ' +
			'opaque="' + opaque + '", ' +
			'qop=' + qop+', ' +
			'nc=' + ('00000000' + nc).slice(-8)+', ' +
			'cnonce="' + cnonce + '"';
        break;

        case "APIKey":
            var whereToAdd = postData[currentTab].authorization.whereToAdd
            var auth_key  = parseVarsAndReplace(postData[currentTab].authorization.auth_key)
            var auth_value = parseVarsAndReplace(postData[currentTab].authorization.auth_value)
            auth = ""
            
            switch (whereToAdd) {
                case "params":
                    // check if it has params
                    var urlUrl = new URL(url)
                    if(urlUrl.search.length > 0) {
                        // if yes, add to it
                        auth += "&" + auth_key + "=" + auth_value + "&"
                    } else {
                        // if no start with ?
                        auth = "?" + auth_key + "=" + auth_value + "&"
                    }
                    break;
                case "header":
                    headers[auth_key] = auth_value
                    break;
                default:
                    break;
            }
            break;
    
        default:
            break;
    }    
    return auth
}

// TODO: get md5(...) function.
function formulateResponse (opts) {
    var username = opts.username
    var password = opts.password
    var realm = opts.realm
    var uri = opts.uri
    var nonce = opts.nonce
    var qop = opts.qop
    var nc = opts.nc
    var cnonce = opts.cnonce

    var HA1 = md5(username + ':' + realm + ':' + password).toString();
    var HA2 = md5(method + ':' + uri).toString();
    var response = md5(
        HA1 + 
        ':' + 
        nonce + 
        ':' + 
        ('00000000' + nc).slice(-8) + 
        ':' + 
        cnonce + 
        ':' + 
        qop + 
        ':' + HA2).toString();
    return response;
}

// generate 16 char client nonce
function generateCnonce() {
    var characters = 'abcdef0123456789';
    var token = '';
    for (var i = 0; i < 16; i++) {
        var randNum = Math.round(Math.random() * characters.length);
        token += characters.substr(randNum, 1);
    }
    return token;
}

function setApiKeyAddToType(type, name, tabId) {
    // innnerText and dataset
    var node = getFromWindow(`${tabId}setApiKeyAddToType`)
    node.innerText = name
    node.dataset.value = type
}