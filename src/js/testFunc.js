var testEx = `
describe("Test for Response code 1", () => {
    expect("Response to be 500", postly.responseCode).toBe(500)
})

describe("Test for Response code 2", () => {
    expect("Response to be 200", postly.responseCode).toBe(200)
    expect("Response to be 600", postly.responseCode).toBe(600)
})

describe("Test for Response Method", () => {
    expect("Method to be GET", postly.response.config.method).toBe("get")
})
`

/**
 * 
 */
function testF(testScript) {
    // log("testF")

    var testRes = {}
    var currDesc = null
    // var currentTab = "tabId233"

    function describe(desc, fn) {
        var id = "describe" + desc.split(" ").join("") + Date.now()
        currDesc = id
        if(!testRes[currDesc])
            testRes[currDesc] = {}
        testRes[currDesc] = {
            name: desc,
            expects: []
        }
        try {
            // call expect
            fn()            
        } catch (error) {
          // fn(error)  
        }
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
            testRes[currDesc].expects.push({
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
    var funTest = new Function("describe", "expect", "postly", testScript)
    funTest(describe, expect, postly)

    return testRes
}

function displayTest(testRes) {
    var node = document.querySelector(`.${currentTab}responseTabContent.Tests`)
    // console.log(testRes)    

    node.innerHTML = ""

    var h = `
        <ul>
    `

    // get describes
    for (var key in testRes) {
        var describe = testRes[key];
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
