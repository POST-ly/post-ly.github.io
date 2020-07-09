function setUpRequestsIdb() {
    var requestsDb = new Dexie("requestsDb");
    requestsDb.version(2).stores({
        requests: 'requestId'
    });
    postly["requestsDb"] = requestsDb
}

function addRequest(data, cb) {
    postly.requestsDb.requests.add(data).then(function() {
        return postly.requestsDb.requests.get(data.requestId)
    }).then(function(returnedRequest) {
        return cb(true, returnedRequest)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function getAllRequest(cb) {
    var requests = []
    postly.requestsDb.requests.each(request => { 
        requests.push(request)
    }).then(function () {
        cb(requests)        
    })
}

function getRequest(reqId, cb) {
    postly.requestsDb.requests.get(reqId, function(req) {
        if(req) {
            return cb(true, req)
        }
        return cb(false, "Request not found.")
    })
}

function getRequestsbyColId(colId, cb) {
    var requests = []
    postly.requestsDb.requests.each(request => { 
        if(request.collectionId == colId)
            requests.push(request)
    }).then(function () {
        cb(true, requests)        
    })
}

function updateRequest(data, cb) {
    postly.requestsDb.requests.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function deleteRequest(data, cb) {
    postly.requestsDb.requests.delete(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}