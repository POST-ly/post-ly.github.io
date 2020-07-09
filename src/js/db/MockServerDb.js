function setupMockServersIdb() {
    var MockServerDb = new Dexie("MockServerDb");
    MockServerDb.version(2).stores({
        mockServers: 'mockServerId,name,endPoints'
    });
    postly["MockServerDb"] = MockServerDb
}

function addNewMockServerIdb(data, cb) {
    postly.MockServerDb.mockServers.add(data).then(function() {
        return postly.MockServerDb.mockServers.get(data.mockServerId)
    }).then(function(returnedMockServers) {
        return cb(true, returnedMockServers)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function getMockServerIdb(mockServerId, cb) {
    postly.MockServerDb.mockServers.get(mockServerId, function(mockServer) {
        if(mockServer) {
            return cb(true, mockServer)
        }
        return cb(false, "Mock Server not found.")
    })
}

function getMockServersIdb(cb) {
    var mockServers = []
    postly.MockServerDb.mockServers.each(mockServer => mockServers.push(mockServer)).
    then(function() {
        // log(mockServers)
        return cb(true, mockServers)
    })
}
