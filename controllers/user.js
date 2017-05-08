var User = require('../models/user');
var Doctor = require('../models/doctors');
var Pharma = require('../models/pharmas');
var Promise = require("bluebird");

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        uid: req.body.uid,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        created_at: new Date(),
        updated_at: ""
    });

    user.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};


exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}


exports.postDoctor = function (req, res) {
    var doc = new Doctor({
        docname: req.body.username,
        did: req.body.did,
        email1: req.body.email,
        dname: req.body.name,
        phone_number1: req.body.phone_number,
        department: req.body.params,
        created_at: new Date(),
        updated_at: ""
    });

    doc.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};


exports.getDoctor=function(req,res){
    Doctor.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}


exports.postPharmasist = function (req, res) {
    var pha = new Pharma({
        pharmaname: req.body.username,
        pid: req.body.pid,
        email2: req.body.email,
        pname: req.body.name,
        phone_number2: req.body.phone_number,
        //created_at: new Date(),
        //updated_at: ""
    });

    pha.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }
        //

        res.json({
            success: true,
            body: response
        })

    });
};


exports.getPharmasist=function(req,res){
    Pharma.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
var userlist = [];
exports.GetList = function(req, res){
  return User.find({}).exec()
  .then(function(user){
    userlist.push(user);
  })
console.log(userlist);
}

//
// exports.updateUsers=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id: id}, function(err, user){
//         if(err){
//             res.json(err);
//         }
//
//         var username = req.body.username;
//         user.username = username;
//         user.updated_at = new Date();
//
//         user.save(function(err, response){
//             if(err){
//                 res.json(err);
//             }
//
//             res.json(response);
//         })
//     })
// }
//
// exports.deleteUsers=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id: id}, function(err, user){
//         if(err){
//             res.json(err);
//         }
//
//         if(user){
//            User.remove({_id: id}, function(err){
//                 if(err){
//                     res.json(err);
//                 }
//                 res.json("success");
//             })
//        }else
//        {
//             res.json("User doesnt exist");
//        }
//
//     })
// }
// exports.GetUsers=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id: id}, function(err, user){
//         if(err){
//             res.json(err);
//         }
//
//         if(user)
//         {
//           res.json(user);
//        }
//        else
//        {
//             res.json("User doesnt exist");
//        }
//
//     })
//   }
//
//   exports.regexsearch=function(req,res){
//        var reg = req.params.reg;
//        regexp = new RegExp(reg);
//        User.find({name:regexp}, function(err,user){
//            if(err){
//                res.json(err);
//            }
//            if(user){
//                res.json(user);
//            }
//            else{
//                res.json("User Doesnot exist");
//            }
//        })
// }
