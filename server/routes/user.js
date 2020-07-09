const userCtrl = require('./../controllers/user.ctrl')

module.exports = (router) => {

    /**
     * get a user
     */
    router
        .route('/user/:id')
        .get(userCtrl.getUser)

    /**
     * verify a user
     */
    router
        .route('/user/login')
        .post(userCtrl.checkUser)

    /**
     * register a user
     */
    router
        .route('/user/register')
        .post(userCtrl.registerUser)

    /**
     * get all users
     */
    router
        .route('/users')
        .get(userCtrl.getAllUsers)

}