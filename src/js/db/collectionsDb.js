function setUpCollectionsIdb() {
    var collectionsDb = new Dexie("collectionsDb");
    collectionsDb.version(2).stores({
        collections: 'collectionId'
    });
    postly["collectionsDb"] = collectionsDb
}

function addCollection(data, cb) {
    postly.collectionsDb.collections.add(data).then(function() {
        return postly.collectionsDb.collections.get(data.collectionId)
    }).then(function(returnedCollection) {
        return cb(true, returnedCollection)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function getAllCollection(cb) {
    var collections = []
    postly.collectionsDb.collections.each(collection => { 
        // log(collection)
        collections.push(collection)
    }).then(function () {
        cb(collections)        
    })
    // log("Exiting:", collections)
}

function getCollection(colId, cb) {
    postly.collectionsDb.collections.get(colId, function(col) {
        if(col) {
            return cb(true, col)
        }
        return cb(false, "Collection not found.")
    })
}

function updateCollection(data, cb) {
    postly.collectionsDb.collections.put(data).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}

function deleteCollectionDb(data, cb) {
    postly.collectionsDb.collections.delete(data.collectionId).then(function(res) {
        return cb(true, res)
    }).catch(function(err) {
        return cb(false, err)
    })
}
