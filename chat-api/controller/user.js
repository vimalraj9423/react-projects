import express from "express";
let router = express.Router();
import userSchema from "../model/user";
import MessageSchema from "../model/messages";
// import {getLastSeen} from "../methods/messages"
let userSockets = {};
router.post("/createUser", (req, res) => {
    // console.log(req.body)//
    let user = new userSchema(req.body);
    user.save((err,result) => {
        if (err) {
            res.send({
                message: "errrs"
            })
        } else {
            res.send({
                data:result,
                message: "succeful"
            })
        }
    })

})
router.get("/userList", (req, res) => {
    userSchema.find({}, (err, result) => {
        if (err) {
            res.send({
                message: "errrs"
            })
        } else {
            res.send({
                data: result,
                message: "succeful"
            })
        }
    })
});
router.post("/login", (req, res) => {
    console.log({
        userName: req.body.userName,
        password: req.body.password
    })
    userSchema.findOne({
        userName: req.body.userName,
        password: req.body.password
    }, (err, result) => {
        console.log("result",result)
        if (result)
            res.send({
                data: result,
                message: "successful"
            });
        else {
            res.statusCode = 202
            res.send({
                data: null,
                success: false,
                message: "unsuccessful"
            })
        }
    })
});
router.post("/getUserById", (req, res) => {

    userSchema.findOne({
        _id: req.body.id
    }, (err, result) => {
        // console.log(err)
        res.send({
            data: result,
            message: "successful"
        })
    })
});
router.post("/getMessages", (req, res) => {
    let id = req.body.userId;
    let selected_user_id=req.body.selected_user_id
    console.log("getmessage", id)
    MessageSchema.aggregate([{ 
            
        $match: {
            $or: [
                {
                    toId: id,
                    fromId: selected_user_id
                },
                {
                    fromId: id,
                    toId: selected_user_id
                }
            ]
        }

    }
    ])
        .then(result => { 
            res.send({
                result,
                message: "successful"
            })
        })
});

export default router;