/** */
const Collection = require('./../models/Collection')
const Request = require("./../models/Request")
const log = console.log

module.exports = {
    getCollectionsByTeamId: (req, res, next) => {
        Collection.getCollectionsByTeamId(req.params.teamId, (err, collections) => {
            if (err)
                res.send(err)
            else if (!collections)
                res.send(404)
            else {
                collections.forEach(function(collection) {
                    Request.getRequestsByCollectionId({ collectionId: collection.id }, (err, requests) => {
                        if(!err) {
                            collection.requests = requests
                        }
                    })
                });
                res.send(collections)
            }
            next()
        })
    },
    
    getAllCollections: (req, res, next) => {
        res.send(Collection.getAllCollections())
    },

    addACollection: (req, res, next) => {
        const body = req.body
        Collection.addACollection(body, (err, collection) => {
            if (err)
                res.send(err)
            else if (!collection)
                res.send(404)
            else
                res.send(collection)
            next()            
        })
    },

    addNewRequest: (req, res, next) => {
        Request.addNewRequest(req.body, (err, newReq) => {
            if(!err) {
                res.send({ success: true, msg: "Request added to collection", ...newReq })
            } else {
                res.send({ error: true, msg: "Cannot add request." })
            }
        })
    }
}