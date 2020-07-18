const user = require('./user')
const team = require("./team.js")
const collection =  require("./collection.js")
const env = require("./env.js")

module.exports = (router) => {
    user(router),
    collection(router),
    team(router),
    env(router)
}