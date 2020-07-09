const log = console.log
const { getItems } = require("./../utils")

const teamBelongs = [
    {
        id: 0,
        teamId: 1,
        userId: 0,
        role: "owner"
    },
    {
        id: 1,
        teamId: 0,
        userId: 1,
        role: "owner"
    }
]

class TeamBelongCls {
    getTeamIdByUserId(id, cb) {
        const res = getItems("userId", id, teamBelongs)

        if(res) {
            cb(false, res)
        } else {
            cb(true, { error: true, msg: "Not found."})
        }
    }

    // returns the teams belonged to by a user.
    getUserIdByTeamId(id, cb) {
        const res = getItems("teamId", id, teamBelongs)

        if(res) {
            cb(false, res)
        } else {
            cb(true, { error: true, msg: "Not found."})
        }
    }

    addNewTeamBelong(data, cb) {
        // TODO: check if the user to add already exist on the team
        const teamB = {
            id: Date.now(),
            teamId: data.teamId,
            userId: data.userId,
            role: data.role
        }
        teamBelongs.push(teamB)
        cb(false, teamB)
    }

    changeUserRoleOnTeam(data, cb) {
        // TODO: check whether has privs to change role
        const res = getItems("teamId", data.teamId, teamBelongs)
        if(res) {
            const res1 = getItems("userId", data.userId, res)
            res1[0].role = data.role
            cb(false, res1[0])
        }
        cb(true, {error: true, msg: "Team not found."})
    }

    removeUserFromTeam(data, cb) {
        const res = teamBelongs.filter(tB => {
            return tB.teamId !== data.teamId & tB.userId !== data.userId
        })

        if(res.length > 0) {
            teamBelongs = res
            cb(false, { teamId: data.teamId, userId: data.userId })
        } else {
            cb(true, { error: true, msg: "Problem removing user from team"})
        }
    }
}

const TeamBelong = new TeamBelongCls()

module.exports = TeamBelong