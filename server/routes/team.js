const teamCtrl = require('./../controllers/team.ctrl')

module.exports = (router) => {

    /**
     * get all teams
     */
    router
        .route('/teams')
        .get(teamCtrl.getTeams)

    /**
     * get team by id
     */
    router
        .route('/teams/:teamId')
        .get(teamCtrl.getTeamById)
    
    /**
     * create a team
     */
        router
            .post("/teams")

    /**
     * edit a team
     */
        router
            .put("/teams/:teamId")

    // API v1

    /**
     * load teams belonged by a user
     */
    router
        .route('/teams/:userId')
        .get(teamCtrl.getTeamsByUserId)

    /**
     * create a team
     */
    router
        .route('/team/create')
        .post(teamCtrl.createTeam)

    /**
     * Add a user to a team
     */
    router
        .route('/team/add/user')
        .post(teamCtrl.addUserToTeam)

    /**
     * change a user role on a team
     */
    router
        .route('/team/user/change/role')
        .post(teamCtrl.changeUserRoleOnTeam)

    /**
     * remove user from a team
     */
    router
        .route('/team/remove/user')
        .post(teamCtrl.removeUserFromTeam)

    /**
     * add a collection to a team
     */
    router
        .route('/team/add/collection')
        .post(teamCtrl.addCollectionToTeam)

    /**
     * remove a collection from a team
     */
    router
        .route('/team/remove/collection')
        .post(teamCtrl.removeCollectionFromTeam)

}