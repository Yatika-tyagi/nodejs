var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers);


  router.route('/v1/doctors')
    .post(userController.postDoctor)
    .get(userController.getDoctor);


    router.route('/v1/pharmas')
      .post(userController.postPharmasist)
      .get(userController.getPharmasist);
      router.route('/v1/GetList')
      .get(userController.GetList);
//
// router.route('/v1/users/update/:id')
// 	.put(userController.updateUsers)
// 	.delete(userController.deleteUsers)
//   .get(userController.GetUsers)

/*  router.route('/v1/users/search/:reg')
    .get(userController.regexsearch);  */

module.exports = router;
