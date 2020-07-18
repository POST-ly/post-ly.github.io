const log = console.log
const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    hashed_password: String

})

module.exports = mongoose.model('User', UserSchema)

/*
const { getItems } = require("./../utils")

const users = [
    {
        id: 0,
        username: "nnamdi",
        email: "kurtwanger40@gmail.com",
        password: "nnamdi"
    },
    {
        id: 1,
        username: "chidume",
        email: "oshimmiri22@gmail.com",
        password: "chidume",
    }
]

class UserCls {

    addUser(user, cb) {
        users.push(user)
        cb(null, user)
    }

    verifyUser(user, cb) {
        const filteredUsers = users.filter(u => {
            return u.username === user.username && user.password === u.password
        })
        log(user, filteredUsers)

        if (filteredUsers.length > 0)
            return cb(false, { found: true, user: filteredUsers[0] })
        return cb(true, { found: false })
    }

    registerUser(user, cb) {
        // check email exists
        // check username exists

        const filteredUsers = users.find(u => {
            return u.username === user.username && u.email === user.email
        })
        if (filteredUsers === undefined) {
            user = { ...user, id: Date.now(), url: [] }
            users.push(user)
            return cb(false, { error: false, user })
        }
        return cb(false, { error: true, message: "username/email already exists"})
    }

    getUserById(id, cb) {
        const filteredUsers = getItems("id", id, users)
        if(filteredUsers) {
            return cb(false, filteredUsers[0])            
        }
        return cb(true)
    }

    getUserCourses(id) {
        const user = users.filter(user => user.id === id)
        if (user[0])
            return user.courses
    }

    getUsers() {
        return users
    }
}

const User = new UserCls()

module.exports =  User
*/