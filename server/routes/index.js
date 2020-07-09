const user = require('./user')
const team = require("./team.js")
const collection =  require("./collection.js")

module.exports = (router) => {
    user(router),
    collection(router),
    team(router)
}