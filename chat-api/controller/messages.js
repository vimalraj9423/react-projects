import express from "express";
let router = express.Router();
import MessageSchema from "../model/messages";

router.get("/lastSeenDetails/:userId",(req,res)=>{
    let user_id=req.params.userId;
    console.log("user",user_id)
    MessageSchema.aggregate([
        {$match:{toId:user_id,isSeen:false}}
        ,{$group:{_id:{from:"$fromId", seen:"$isSeen"},count:{$sum:1}}} 
    ]).then(result=>{ 
        let data={};
        result.map((row)=>{
            data[row._id.from]=row.count
        }); 

        res.send({
            data

        })
    })
})

export default router;