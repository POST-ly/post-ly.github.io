var url = "http://localhost:5000/api/"
// var proxyUrl = "http://localhost:4000/proxy/"
var proxyUrl = "https://node-app08.herokuapp.com/proxy/"
var log = console.log.bind(console)

var modalsActive = []
var tabs = []
var currentTab
var postData = {}

var currentMockServer
var mockCalls = false

var currentEnv
var Envs = []
var envVarInterpolationStart = "{{"
var envVarInterpolationEnd = "}}"
var codeGenStrategies = {
    generateCurlCode: generateCurlCode,
    generateNodejsAxiosCode: generateNodejsAxiosCode,
    generateFetchCode: generateFetchCode
}

var teams = []
var collections = []
var postly = {
    describe
}

var dropdownsActive = []
var dropdownClicked = false

var currentEditors = {}

var currentTeam
var user
