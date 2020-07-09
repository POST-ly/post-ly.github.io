const log = console.log
const { getItems } = require("./../utils")

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