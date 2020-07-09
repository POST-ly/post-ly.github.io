function setUpHistoryIdb() {
    var historyDb = new Dexie("historyDb");
    historyDb.version(2).stores({
        history: 'tabId'
    });
    postly["historyDb"] = historyDb
}

function addHistory(data) {
    postly.historyDb.history.add(data).then(function() {
        return postly.historyDb.history.get(data.tabId)
    }).then(function(returnedHistory) {
        return cb(true, returnedHistory)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function getAllHistory(cb) {
    var histories = []
    postly.historyDb.history.each(history => { 
        histories.push(history)
    }).then(function () {
        cb(histories)        
    })
}

function getHistory(tabId, cb) {
    postly.historyDb.history.get(tabId, function(history) {
        if(history) {
            if(history.requestId) {
                getRequest(history.requestId, (done, req) => {
                    if(done) {
                        return cb(true, req)
                    }
                })
            }
        }
        return cb(false, "History not found.")
    })
}

function updateHistory(data, cb) {
    postly.historyDb.history.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function getAllHistoryByTeamId(teamId, cb) {
    var histories = []
    postly.historyDb.history.each(history => {
        if(history.teamId == teamId) {
            histories.push(history)
        }
    }).then(function () {
        var filHistories = []
        if(histories.length == 0)
            cb(true, histories)
        for (var index = 0; index < histories.length; index++) {
            var _history = histories[index];
            if(_history.requestId) {
                getRequest(_history.requestId, (done, req) => {
                    if(done) {
                        filHistories.push(req)
                    }
                    if(index == histories.length) {
                        cb(true, filHistories)
                    }
                })
            }
        }
    })
}

function deleteAllHistory(cb) {
    postly.historyDb.history.clear().then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}