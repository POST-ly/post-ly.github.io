const log = console.log
const mongoose = require('mongoose')

let CollectionSchema = new mongoose.Schema({
    collectionId: Number,
    name: String,
    requests: [ mongoose.Schema.Types.ObjectId ],
    teamId: mongoose.Schema.Types.ObjectId,
    variables: Array,
    tests: String,
    prerequest: String,
    authorization: Object
})

module.exports = mongoose.model('Collection', CollectionSchema)






















/*
const { getItems } = require("./../utils")

const collections = [
    {
        id: 1,
        name: "Reimnet Books",
        teamId: 1
    },
    {
        id: 2,
        name: "Schools Lib",
        teamId: 1
    }
]

class CollectionCls {
    getCollectionsByTeamId(teamId, cb) {
        const res = getItems("teamId", teamId, collections)

        if(res) {
            cb(false, res)
        } else {
            cb(true, {error: true, msg: "No collections found."})
        }
    }

    addACollection(col, cb) {
        // TODO: check the collection already exist by the user id
        const newcol = {
            id: Date.now(),
            ...col
        }
        collections.push(newcol)
        cb(false, newcol)
    }

    removeCollectionFromTeam(data, cb) {
        const res = collections.filter(col => {
            return col.id !== data.collectionId && col.teamId !== data.teamId
        })

        if(res) {
            collections = res
            cb(false)
        } else {
            cb(true)
        }
    }

    getAllCollections() {
        return collections
    }

}
*/