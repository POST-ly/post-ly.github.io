/**
var data = {
  "stooges": [
    { "name": "Moe" },
    { "name": "Larry" },
    { "name": "Curly" }
  ]
}

var template = `
    {{#stooges}}
      <b>{{name}}</b>
{{/stooges}}`

postly.visualizer.setTemplate(template, data)

// Write your Visualizer code here. 

var template = `
    {{#response}}
      <b>{{name}}</b>
{{/response}}`

postly.visualizer.setTemplate(template, {response: postly.response})

// Write your Visualizer code here. 

var template = `
		<h1><u>Response</u></h1>
		<ul>
      {{#response}}
        <li><b>{{name}}</b></li>
      {{/response}}
		</ul>
`

postly.visualizer.setTemplate(template, {response: postly.response})

**/

/**
 * 
 * @param {*} template 
 */
function setTemplateFn(template, data) {
        var output = Mustache.render(template, data)
        var iFram = getFromWindow(`${currentTab}responseVisualizerPreviewIframe`).contentWindow.document
        iFram.open()
        iFram.writeln(output)
        iFram.close()
}

function runVisualizer(res, tabId, evt) {
    if (currentEditors[tabId]["visualizer"]) {
        var visualizerCode = currentEditors[tabId]["visualizer"].getValue()        
        new Function("postly", visualizerCode)(postly)
    }
}

function setVisualizerData() {
    postly.visualizer = {
        setTemplate: setTemplateFn
    }
}