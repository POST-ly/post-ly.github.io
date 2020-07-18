const log = console.log
const mongoose = require('mongoose')


let RequestSchema = new mongoose.Schema({
    url: String,
    body: mongoose.Schema.Types.Mixed,
    params: Array,
    name: String,
    methodType: String,
    headers: Array,
    options: mongoose.Schema.Types.Mixed,
    requestId: mongoose.Schema.Types.ObjectId,
    teamId: mongoose.Schema.Types.ObjectId,
    collectionId: mongoose.Schema.Types.ObjectId,
    tests: String,
    prerequest: String,
    visualizer: String,
    variables: Array
})

module.exports = mongoose.model('Request', RequestSchema)


























/*
// const { getItems } = require("./../utils")

const requests = [
    {
        id: 0,
        collectionId: 1,
        tabId: "",
        name: "Foxy API Store",
        url: "foxy.api.store.com",
        methodType: "POST",
        body: [],
        params: [],
        headers: [],
        response: {
            body: {},
            headers: [],
            status: ""
        }
    },
    {
        id: 1,
        collectionId: 2,
        tabId: "",
        name: "GET API/LOGIN",
        url: "localhost:5000/api/login",
        methodType: "GET",
        body: [],
        params: [],
        headers: [],
        response: {
            body: {},
            headers: [],
            status: ""
        }
    }
]

class RequestCls {
    getRequests(cb) {
        cb(false, requests)
    }


    getRequestsByCollectionId(data, cb) {
        const { collectionId } = data
        const res = getItems("collectionId", collectionId, requests)
        
        if(res) {
            cb(false, res)
        } else {
            cb(true, { error: true, msg: "Eroor"})
        }        
    }

    removeRequestByCollectionId(data, cb) {
        const { collectionId } = data
        const res = requests.filter(req => {
            return req.collectionId !== collectionId
        })

        if(res) {
            requests = res
            cb(false)
        } else {
            cb(true, { error: true, msg: "Eroor"})
        }
    }

    addNewRequest(data, cb) {
        const newReq = {
            id: Date.now(),
            ...data
        }
        requests.push(newReq)
        cb(false, newReq)
    }
}

const Request = new RequestCls()

module.exports = Request
*/