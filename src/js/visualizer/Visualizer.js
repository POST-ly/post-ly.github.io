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
        var output = renderTemplate(template, data)/*Mustache.render(template, data) */
        var iFram = getFromWindow(`${currentTab}responseVisualizerPreviewIframe`).contentWindow.document
        iFram.open()
        iFram.writeln(output)
        iFram.close()
}

function renderTemplate(template, data) {
    return Mustache.render(template, data)    
}

function runVisualizer(res, tabId, api) {
    if (currentEditors[tabId]["visualizer"]) {
        var visualizerCode = currentEditors[tabId]["visualizer"].getValue()        
        new Function("postly", visualizerCode)(api)
    }
}

function setVisualizerData() {
    postly.visualizer = {
        setTemplate: setTemplateFn
    }
}