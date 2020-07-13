function Request() {
    this.body = {}
    this.headers = {}
    this.params = ""
    this.authorization = ""
    this.url = ""
    this.method = ""
}

Request.prototype.addHeaders = function (params) {
    
}

Request.prototype.addParams = function (params) {
    
}

Request.prototype.addBody = function (params) {
    
}

Request.prototype.setUrl = function name(params) {
    
}

function processUrl(url) {
    if(url.startsWith("localhost:")) {
        url = "http://" + url
    } else if(!url.startsWith("http://")) {
        if(!url.startsWith("https://")) {
            url = "https://" + url
        }
    }
    return url
}

function makeRequest(req, mockCall, cb) {
    var url = processUrl(req.url)
    var body = bodyBuilder(req.body)
    var headers = req.headers
    var method = req.methodType.toLowerCase()
    var params = req.params
    
    // create an instance of axios
    var axiosInst = axios.create(/*{
        timeout: 10000
    }*/);

    // Set pre-request script

    // Set pre-response
    axiosInst.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // error.response - error response
        // error.request - instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        cb(error)
        return Promise.reject(error);
    });

    // before sending a request, we have to parse the Env variables to
    // replace them with their actual values.

    axiosInst({
        method,
        url,
        data: body,
        headers
    }).then( res => {

        var data = res.data
        var headers = res.headers
        var status = res.status
        var statusText = res.statusText

        // set postly data
        postly.config = res

        postly.response = data

        // set postly responseCodeText
        postly.responseCodeText = statusText

        // set postly responseCode
        postly.responseCode = status

        // Set response headers to postly
        postly.headers = headers

        cb(res)
    }).catch(e => {
        // process error response
    })
}