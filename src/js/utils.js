function showDropdown(className) {
    var node = document.querySelector(className)

    dropdownClicked = true

    if(node) {
        if(node.classList.contains("close")) {
            node.classList.remove("close")
            closeActiveDropdowns()    
            dropdownsActive.push( { node, dropdownClick: true })
        } else {
            node.classList.add("close")
            closeActiveDropdowns()
        }
        // classList.toggle function
        // true is when closed/invisible
        // false is when open/visible
    }
    new Event("click").stopPropagation()
    return
}

function closeActiveDropdowns() {
    dropdownsActive.forEach(dropD => {
        dropD.node.classList.add("close")
    })
    dropdownsActive = []
}

window.onclick = function (evt) {
      //log("window click:", evt)
      if(dropdownClicked) {
        dropdownClicked = false
      } else {
          dropdownClicked = false
          closeActiveDropdowns()
      }
}

function hexToRgba(hex) {
    hex = hex.replace("#", "")
    var r = parseInt(hex.substring(0,2), 16)
    var g = parseInt(hex.substring(2,4), 16)
    var b = parseInt(hex.substring(4,6), 16)
    return `rgb(${r},${g},${b});`
}

function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function setTabs() {
    var tabNodes = document.querySelectorAll(".tab")
    for (var index = 0; index < tabNodes.length; index++) {
        var n = tabNodes[index];
        n.addEventListener("click", (e) => {
            if(e.target.parentNode.dataset.tab) {
                var parts = e.target.parentNode.dataset.tab.split(":")

                // Do tab action
                // 1. remove current active
                if(e.target.parentNode.classList.contains("tab-active")) {
                    e.target.parentNode.classList.remove("tab-active")
                } else {
                    var rN = document.querySelector(`.tab.tab-active.${parts[0]}`)
                    rN.classList.remove("tab-active")
                }

                // 2. set the clicked tab as active
                e.target.parentNode.classList.add("tab-active")

                // Do tab-content action
                // 1. remove current active
                var tbCntNode = document.querySelector(`.${parts[0]}.tab-content.tab-content-active`)
                tbCntNode.classList.remove("tab-content-active")

                // 2. set clicked active
                var tbCntNode2 = document.querySelectorAll(`.${parts[0]}.tab-content`)
                for (var i = 0; i < tbCntNode2.length; i++) {
                    var e = tbCntNode2[i];
                    var tabContentsParts = e.dataset.tab.split(":")
                    if(tabContentsParts[1] == parts[1]) {
                        e.classList.add("tab-content-active")
                    }                    
                }
            }
        })
    }
}

function showHis(event) {
    var n = document.querySelector(".historyCnt")
    n.classList.remove("mClose")
}

function showHistoryCnt(e) {
    var n = document.querySelector(".historyCnt")
    n.classList.add("mClose")
    /*
    var top = n.style.top;
    var bottom = n.style.bottom;
    
    if(top !== "0px" && bottom !== "0px") {
        if(top !== "85%" && bottom !== "-45%") {
            // log("empty string")
            n.style.top = "0px"
            n.style.bottom = "0px"
            return;
        }
    } 

    if(top == "0px" && bottom == "0px") {
        // log("top and bootm are 0px")
        n.style.top = "85%"
        n.style.bottom = "-45%"
    }
    else {
        // log("top is 85 bottom i -45")
        n.style.top = "0px"
        n.style.bottom = "0px"
    }
    */
}

function checkTeamIsPersonal() {
    if(currentTeam.id === "Personal") {
        return true
    } else {
        return false
    }
}

// stringify object
function objToStr(obj, format) {
    if(format)
        return JSON.stringify(obj, null, "\t")
    else
        return JSON.stringify(obj)
}

function closeActiveModals() {
    modalsActive.forEach(m => {
        try {
            document.body.removeChild(m)
        } catch(err) {

        }
    })
    modalsActive = []
}

function getFromWindow(name) {
    return window[name]
}

function setCodeEditor(node, opts) {
    return CodeMirror(node, opts)
}

function setCodeSnippet(langKey, langVal, langMode) {
    var node = document.getElementById(`${currentTab}previewRequestCodeSnippet`)
    // ${tabId}postDataCntTabContentPreviewRequestEditor
    if(langKey == undefined || langVal == undefined) {
        var type = node.dataset.value
        var mode = node.dataset.mode
        currentEditors[currentTab]["previewrequest"].setOption({ mode: mode })
        currentEditors[currentTab]["previewrequest"].setValue(generateCode(type))
        // id="${tabId}previewRequestCodeSnippet" data-value="nodejsAxios"
    } else {
        node.dataset.value = langKey
        node.dataset.mode = langMode
        node.innerHTML = langVal
        currentEditors[currentTab]["previewrequest"].setOption({ mode: langMode })
        currentEditors[currentTab]["previewrequest"].setValue(generateCode(langKey))
    }
}

function generateCodeSnippet(lang) {
    return generateCode(lang)
}

function copyCodeSnippet(evt) {
    var node = evt.target
    node.innerText = "Copying..."
    node.setAttribute("disabled", null)

    navigator.clipboard.writeText(currentEditors[currentTab]["previewrequest"].getValue()).then(text => {
        node.removeAttribute("disabled")
        node.innerText = "Copied!!"   
        setTimeout(() => {
            node.innerText = "Copy"
        }, 1000)
    }).catch(err => {
        node.removeAttribute("disabled")
        node.innerText = "Copy"
    })
}

// TODO: Complete below
function setCurrentTabEditor(c) {
    currentEditors[c] = {}
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
