const collectionCtrl = require('./../controllers/collection.ctrl')

module.exports = (router) => {

    /**
     * get collections belonging to a team
     */
    router
        .route('/collections/:teamId')
        .get(collectionCtrl.getCollectionsByTeamId)


    /**
     * get all collections
     */
    router
        .route('/collections')
        .get(collectionCtrl.getAllCollections)

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