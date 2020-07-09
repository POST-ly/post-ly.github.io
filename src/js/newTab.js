function createNewTab(tabId) {
    var newtab = `
                        <div class="urlArea">
                            <div class="inputBox">
                                <div class="methodCnt">
                                    <div class="method">
                                        <a id="${tabId}methodTypeButton" class="${tabId}MethodType" onclick="return showDropdown('.${tabId}methodTypeDropdown')">POST</a>
                                    </div>
                                    <div class="dropdown right-dropdown ${tabId}methodTypeDropdown close">
                                        <ul>
                                            <li><a onclick="return setMethodType('${tabId}', 'POST')">POST</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'GET')">GET</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'DELETE')">DELETE</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'OPTIONS')">OPTIONS</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'PUT')">PUT</a></li>
                                            <li><a onclick="return setMethodType('${tabId}', 'PATCH')">PATCH</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <input class="${tabId}UrlInput" type="text" id="urlTextArea" placeholder="Enter request URL" />
                            </div>
                            <button onclick="return send(event, '${tabId}')">Send
                            <div id="${tabId}circleLoading" class="circle close">
                                <div class="circle-ring"></div>
                            </div>

                            </button>
                            <div class="btn-group">
                                <button class="bg-gray" onclick="return saveRequest('${tabId}')">
                                    Save
                                </button>
                                <button onclick="return showDropdown('.${tabId}btnDropdown')"><i class="icon-arrow-down"></i></button>
                                <div class="dropdown ${tabId}btnDropdown close" style="left: unset; right: 0;">
                                    <ul>
                                        <li><a onclick="return saveRequest('${tabId}', true)">Save As</a></li>
                                        <!--<li><a onclick="return deleteRequest('${tabId}')">Delete</a></li>-->
                                        <li><a onclick="return addToCollection('${tabId}')">Add to a collection</a></li>
                                        <li><a onclick="return removeReqFromCollection('${tabId}')">Remove from collection</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="postDataCnt">
                            <div class="tabs">
                                <ul class="tabul flex-wrap">
                                    <li data-name="authorization" class="tab ${tabId}postDataCntTab tab-active"><a>Authorization</a></li>
                                    <li data-name="headers" class="tab ${tabId}postDataCntTab"><a>Headers</a></li>
                                    <li data-name="body" class="tab ${tabId}postDataCntTab"><a>Body</a></li>
                                    <li data-name="params" class="tab ${tabId}postDataCntTab"><a>Params</a></li>
                                    <li data-name="tests" class="tab ${tabId}postDataCntTab"><a>Tests</a></li>
                                    <li data-name="prerequest" class="tab ${tabId}postDataCntTab"><a>Pre-Request</a></li>
                                    <li data-name="previewrequest" class="tab ${tabId}postDataCntTab"><a>Preview(Request)</a></li>
                                    <li data-name="visualizer" class="tab ${tabId}postDataCntTab"><a>Visualizer</a></li>
                                    <li data-name="more" class="tab ${tabId}postDataCntTab">
                                        <a>More</a>
                                    </li>
                                </ul>
                                <div>
                                    <div data-name="authorization" class="tab-content ${tabId}postDataCntTabContent tab-content-active Authorization">
                                        ${createAuthTabs(tabId)}
                                    </div>
                                    <div data-name="headers" class="tab-content ${tabId}postDataCntTabContent Headers table-responsive">
                                        <table>
                                            <thead>
                                                <th></th>
                                                <th>KEY</th>
                                                <th>VALUE</th>
                                            </thead>
                                            <tbody id="${tabId}headersTr">
                                                <tr id="${tabId}headersLast">
                                                    <td></td>
                                                    <td class="headersTr">
                                                        <input id="${tabId}headersKey" type="text" placeholder="Key" onclick="return showDropdown('.${tabId}headersDropdown')" />
                                                        <div class="dropdown ${tabId}headersDropdown close">
                                                            <ul>
                                                                <li><a onclick="return addHeadersKey(event, ${tabId}headersKey)" onclick="">Accept</a></li>
                                                                <li><a onclick="return addHeadersKey(event, ${tabId}headersKey)">Content-Type</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td><input id="${tabId}headersValue" type="text" placeholder="Value" /></td>
                                                    <td><button onclick="return addHeaders(${tabId}headersKey, ${tabId}headersValue)">+</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div data-name="body" class="tab-content ${tabId}postDataCntTabContent Body">
                                        <div>
                                            <button style="position: relative;" onclick="return showDropdown('.${tabId}setBodyTypeDropdown')" class="bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block">
                                                <span>Set Type: <span id="${tabId}setBodyType" data-value="form">Form</span> <span class="icon-arrow-down"></span></span>
                                                <div class="dropdown ${tabId}setBodyTypeDropdown close">
                                                    <ul>
                                                        <li><a onclick="return setBodyType('form', 'Form')">Form</a></li>
                                                        <li><a onclick="return setBodyType('graphql', 'GraphQL')">GraphQL</a></li>
                                                        <li><a onclick="return setBodyType('raw', 'Raw')">Raw</a></li>
                                                    </ul>
                                                </div>                            
                                            </button>
                                        </div>
                                        <div id="${tabId}Bodyform" class="table-responsive">
                                            ${createFormNode(tabId)}
                                        </div>
                                        <div id="${tabId}Bodygraphql" class="close">
                                            ${createGraphQLDisplay(tabId)}
                                        </div>
                                        <div id="${tabId}Bodyraw" class="close">
                                            ${createRawNode(tabId)}
                                        </div>
                                    </div>

                                    <div data-name="params" class="tab-content ${tabId}postDataCntTabContent Params table-responsive">
                                        <table>
                                            <thead>
                                                <th></th>
                                                <th>KEY</th>
                                                <th>VALUE</th>
                                            </thead>
                                            <tbody id="${tabId}paramsTr">
                                                <tr id="${tabId}paramsLast">
                                                    <td></td>
                                                    <td><input id="${tabId}paramsKey" type="text" placeholder="Key" /></td>
                                                    <td><input id="${tabId}paramsValue" type="text" placeholder="Value" /></td>
                                                    <td><button onclick="return addParams(${tabId}paramsKey, ${tabId}paramsValue)">+</button></td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div data-name="tests" class="tab-content ${tabId}postDataCntTabContent Tests">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentTestsEditor">
                                        </div>
                                        <!--<div>
                                            <textarea style="width: 100%; border: 1px solid rgb(221,75,57);" id="${tabId}TextTests"></textarea>
                                        </div>-->
                                    </div>
                                    <div data-name="prerequest" class="tab-content ${tabId}postDataCntTabContent Pre-Request">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentPreRequestScriptEditor">
                                        </div>
                                    </div>
                                    <div data-name="previewrequest" class="tab-content ${tabId}postDataCntTabContent PreviewRequest">
                                        <div>
                                            <button class="pad-6" style="position: relative;" onclick="return showDropdown('.${tabId}previewRequestDropdown')">
                                                <span id="${tabId}previewRequestCodeSnippet" data-value="nodejsAxios" data-mode="javascript">Nodejs(Axios)</span>
                                                <i style="padding-top: 2px;display: block;float: right;padding-left: 3px;" class="icon-arrow-down"></i>
                                                <div class="dropdown right-dropdown ${tabId}previewRequestDropdown close">
                                                    <ul>
                                                        <li><a onclick="return setCodeSnippet('nodejsAxios', 'Nodejs(Axios)', 'javascript')">Nodejs(Axios)</a></li>
                                                        <li><a onclick="return setCodeSnippet('curl', 'cURL', 'shell')">cURL</a></li>
                                                        <li><a onclick="return setCodeSnippet('fetch', 'Fetch', 'javascript')">Fetch</a></li>
                                                    </ul>
                                                </div>                                                                                    
                                            </button>
                                            <button class="pad-6 icon-reload" onclick="return setCodeSnippet()"></button>
                                            <button class="pad-6" onclick="return copyCodeSnippet(event)">Copy</button>
                                        </div>
                                        <div class="divider"></div>
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentPreviewRequestEditor">
                                        </div>
                                    </div>
                                    <div data-name="visualizer" class="tab-content ${tabId}postDataCntTabContent Visualizer">
                                        <div style="border: 1px solid rgb(221, 221, 221);" id="${tabId}postDataCntTabContentVisualizerEditor">
                                        </div>
                                    </div>
                                    <div data-name="more" class="tab-content ${tabId}postDataCntTabContent More">
                                        <div class="tabs">
                                            <ul class="tabul responseViews">
                                                <li class="${tabId}moreViews tab tab-active" data-tab="${tabId}moreViews:options"><a>Options</a></li>
                                                <li class="${tabId}moreViews tab" data-tab="${tabId}moreViews:settings"><a>Settings</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div data-tab="${tabId}moreViews:options" class="${tabId}moreViews tab-content tab-content-active">
                                                <div style="padding: 10px 0;border: 1px solid rgb(221, 221, 221);">
                                                    <input id="${tabId}downloadResponseOpt" type="checkbox" onchange="return setOptions(event, 'downloadres')" /> Download response
                                                </div>
                                                <div style="padding: 10px 0;border: 1px solid rgb(221, 221, 221);">
                                                    <input id="${tabId}useProxyOption" type="checkbox" onchange="return setOptions(event, 'useproxy')" /> Use proxy
                                                </div>
                                                <div style="padding: 10px 0;border: 1px solid rgb(221, 221, 221);">
                                                    <input id="${tabId}previewImgVideoOpt" type="checkbox" onchange="return setOptions(event, 'previewimgvideo')" /> Preview(Image/Video)
                                                </div>
                                            </div>
                                            <div data-tab="${tabId}moreViews:settings" class="${tabId}moreViews tab-content">
                                                Settings: Not Yet Implemented
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="response">
                            <h3 class="responseHeader">Response</h3>
                            <div id="display">
                            <div class="tabs">
                                <ul class="tabul responseTab flex-wrap">
                                    <li class="tab ${tabId}responseTab tab-active"><a onclick="return setResponseTab(event, '${tabId}', 'Body')">Body</a></li>
                                    <li class="tab ${tabId}responseTab"><a onclick="return setResponseTab(event, '${tabId}', 'Headers')">Headers</a></li>
                                    <li class="tab ${tabId}responseTab"><a onclick="return setResponseTab(event, '${tabId}', 'Tests')">Tests</a></li>
                                    <li class="${tabId}responseStats">
                                        <div class="float-right" style="display: flex;text-align: center;align-items: center;">Status: 
                                            <span style="margin: 0 2px;white-space: nowrap;" class="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatus close"></span>
                                            <span style="white-space: nowrap;" class="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatusText close"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                                <div>
                                    <div class="tab-content ${tabId}responseTabContent tab-content-active Body">
                                        <!--Response Body-->

                                        <div class="tabs">
                                            <ul class="tabul responseViews">
                                                <li class="${tabId}response tab tab-active" data-tab="${tabId}response:prettier"><a onclick="return refreshDisplay('Prettier')">Prettier</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:raw"><a onclick="return refreshDisplay('Raw')">Raw</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:preview"><a >Preview</a></li>
                                                <li class="${tabId}response tab" data-tab="${tabId}response:visualizerpreview"><a >Visualizer(Preview)</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div data-tab="${tabId}response:prettier" class="${tabId}response tab-content tab-content-active">
                                                <div style="border: 1px solid rgb(221, 221, 221);" class="${tabId}responsePrettierDisplay"></div>
                                            </div>
                                            <div data-tab="${tabId}response:raw" class="${tabId}response tab-content">
                                                <div style="border: 1px solid rgb(221, 221, 221);" class="${tabId}responseRawDisplay"></div>
                                            </div>
                                            <div data-tab="${tabId}response:preview" class="${tabId}response tab-content">
                                                <div class="${tabId}responsePreviewDisplay">
                                                    <iframe class="previewFrame" id="${tabId}responsePreviewIframe"></iframe>
                                                </div>
                                            </div>
                                            <div data-tab="${tabId}response:visualizerpreview" class="${tabId}response tab-content">
                                                <div class="${tabId}responseVisualizerPreviewDisplay">
                                                    <iframe class="previewFrame" id="${tabId}responseVisualizerPreviewIframe"></iframe>
                                                </div>
                                            </div>
                                        </div>

                                        <!--Response Body-->
                                    </div>
                                    <div class="tab-content ${tabId}responseTabContent Headers">
                                        <!--Response Headers-->
                                    </div>
                                    <div class="tab-content ${tabId}responseTabContent Tests">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
    `
    return newtab
}