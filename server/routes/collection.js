const collectionCtrl = require('./../controllers/collection.ctrl')

module.exports = (router) => {

    /**
     * get all collections
     */
    router
        .route('/teams/:teamId/collections')
        .get(collectionCtrl.getAllCollections)

    /**
     * Get a Collection
     */
    router
        .route('/teams/:teamId/collections/:colId')
        .get(collectionCtrl.getAllCollections)

    /**
     * Create a collection
     */
    router
        .route('/teams/:teamId/collections')
        .post(collectionCtrl.getAllCollections)

    /**
     * Edit a collection
     */
    router
        .route('/teams/:teamId/collections/:colId')
        .put(collectionCtrl.getAllCollections)


    // API v1

    /**
     * get collections belonging to a team
     */
    router
        .route('/collections/:teamId')
        .get(collectionCtrl.getCollectionsByTeamId)

    /**
     * add a collection
     */
    router
        .route('/collection/add')
        .post(collectionCtrl.addACollection)

    /**
     * add new request to collection
     */
    router
        .route('/collection/add/request')
        .post(collectionCtrl.addNewRequest)

}