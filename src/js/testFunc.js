var testEx = `
postly.describe("Test for Response code 1", () => {
    expect("Response to be 500", postly.responseCode).toBe(500)
})

postly.describe("Test for Response code 2", () => {
    expect("Response to be 200", postly.responseCode).toBe(200)
    expect("Response to be 600", postly.responseCode).toBe(600)
})

postly.describe("Test for Response Method", () => {
    expect("Method to be GET", postly.response.config.method).toBe("get")
})
`

var testRes = {}
var currDesc = null
// var currentTab = "tabId233"

function describe(desc, fn) {
    var id = "describe" + desc.split(" ").join("") + Date.now()
    currDesc = id
    if(!testRes[currentTab])
        testRes[currentTab] = {}
    testRes[currentTab][currDesc] = {
        name: desc,
        expects: []
    }
    fn()
    currDesc = null
}

function expect(desc, test) {

    // matchers
    
    // toBe uses strict equality `===` for equality checking.
    function toBe(data) {
        var status
        if(data === test) {
            status = true
        } else {
            status = false
        }
        testRes[currentTab][currDesc].expects.push({
            name: desc,
            status
        })
    }

    // deep equality comparison
    function toEqual(data) {

    }

    return {
        toBe,
        toEqual
    }
}

function displayTest() {
    var node = document.querySelector(`.${currentTab}responseTabContent.Tests`)
    // console.log(testRes)    
    var testForTab = testRes[currentTab]
    node.innerHTML = ""

    var h = `
        <ul>
    `

    // get describes
    for (var key in testForTab) {
        var describe = testForTab[key];
        h += `<div style="padding: 9px 0; background: rgba(221, 221, 221, 0.32);">${describe.name}</div>`
        describe.expects.forEach(expect => {
            var col = expect.status ? "green" : "rgb(221,75,57)"
            h += `
                <li style="border-top: 1px solid rgb(221, 221, 221); padding: 8px 0;">
                    <span><b style="color: ${col}; text-transform: uppercase;">${expect.status}</b> ${expect.name}</span>
                </li>
            `
        })
    }
    h += `</ul>`
    node.innerHTML = h
}
