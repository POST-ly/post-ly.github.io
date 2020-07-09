/** */
const Team = require('./../models/Team')
const TeamBelong = require('./../models/TeamBelong')
const Collection = require("./../models/Collection")
const Request = require("./../models/Request")

const log = console.log

module.exports = {
    getTeamById: (req, res, next) => {
        Team.getTeamById(req.params.id, (err, team) => {
            if (err)
                res.send(err)
            else if (!team)
                res.send(404)
            else
                res.send(team)
            next()
        })        
    },
    getTeams: (req, res, next) => {
        Team.getTeams((err, teams) => {
            if (err)
                res.send(err)
            else if (!teams)
                res.send(404)
            else
                res.send(teams)
            next()            
        })
    },
    getTeamsByUserId: (req, res, next) => {
        TeamBelong.getTeamIdByUserId(req.params.userId, (err, teamsId) => {
            const teams = []
            teamsId.forEach(tid => {
                Team.getTeamById(tid.teamId, (err, team) => {
                    teams.push(team)
                })
            })
            res.send(teams)
        })
    },
    createTeam: (req, res, next) => {
        const {
            userId,
            teamName
        } = req.body
        Team.createNewTeam({
            name: teamName
        }, (err, newTeam) => {
            if (err)
                res.send(err)
            else if (!newTeam)
                res.send(404)
            else {
                TeamBelong.addNewTeamBelong({
                    role: "owner",
                    teamId: newTeam.id,
                    userId: userId
                }, (err, newTeamB) => {
                    if (err)
                        res.send(err)
                    else if (!newTeamB)
                        res.send(404)
                    else
                        res.send(newTeam)
                })
            }
            next()                        
        })
    },

    addUserToTeam: (req, res, next) => {
        // TODO: check if the user adding the user has privs.
        const {
            userIdToAdd,
            roleOfUserToAdd,
            userId,
            teamId
        } = req.body
        TeamBelong.addNewTeamBelong({
            teamId,
            userId: userIdToAdd,
            role: roleOfUserToAdd
        }, (err, newTeamB) => {
            if(!err) {
                res.send({
                    success: true,
                    msg: "New user successfully added."
                })
            }
        })
    },

    changeUserRoleOnTeam: (req, res, next) => {
        const {
            userIdToChangeRole,
            userId,
            teamId,
            roleToChangeTo
        } = req.body
        TeamBelong.changeUserRoleOnTeam({
            teamId,
            userId: userIdToChangeRole,
            role: roleToChangeTo
        }, (err, newTeamB) => {
            if(!err) {
                res.send({ success: true })
            } else {
                res.send(newTeamB)
            }
        })
    },

    removeUserFromTeam: (req, res, next) => {
        const {
            userIdToRemoveFromTeam,
            userId,
            teamId
        } = req.body
        TeamBelong.removeUserFromTeam({
            teamId,
            userId: userIdToRemoveFromTeam
        }, (err, removedTeamB) => {
            if(!err) {
                res.send({ success: true, msg: "User removed from team.", ...newTeamB })
            } else {
                res.send(newTeamB)
            }
        })
    },

    addCollectionToTeam: (req, res, next) => {
        const {
            collectionName,
            userId,
            teamId
        } = req.body
        Collection.addACollection({
            name: collectionName,
            teamId
        }, (err, newCollection) => {
            if(!err) {
                res.send({ success: true, msg: "Collection added.", ...newCollection})
            } else {
                res.send({ error: true, msg: "Cannot add collection to team."})
            }
        })
    },

    // This will delete the collection from the team
    // and also delete the request in the collection
    removeCollectionFromTeam: (req, res, next) => {
        const {
            collectionId,
            teamId,
            userId
        } = req.body
        Collection.removeCollectionFromTeam({
            collectionId,
            teamId,
            userId
        }, (err, removedCol) => {
            if(!err) {
                Request.removeRequestByCollectionId({
                    collectionId,
                    userId
                }, (err, removedReq) => {
                    res.send({ success: true, msg: "Collection removed from team." })
                })
            } else {
                res.send("Error occured when remvoing collection")
            }
        })
    }
}

