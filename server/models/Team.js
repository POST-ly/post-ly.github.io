const log = console.log
const { getItems } = require("./../utils")

const teams = [
    {
        id: 0,
        name: "Reimnet Team"
    },
    {
        id: 1,
        name: "forLoop Africa Team",
    }
]

class TeamCls {
    getTeamById(id, cb) {
        const res = getItems("id", id, teams)

        if(res) {
            cb(false, res[0])
        } else {
            cb(true, { error: true, msg: "Not found."})
        }
    }

    getTeams(cb) {
        cb(false, teams)
    }

    createNewTeam(data, cb) {
        // TODO: check if the team already exists under the creator
        // create team object
        const team = {
            id: Date.now(),
            name: data.name
        }
        teams.push(team)
        cb(false, team)
    }
}

const Team = new TeamCls()

module.exports = Team