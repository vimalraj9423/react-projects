import MessageSchema from "../model/messages"; 

export const getLastSeen=(userId)=> new Promise((resolve,reject)=>{ 
    MessageSchema.aggregate([
        {$match:{toId:userId,isSeen:false}}
        ,{$group:{_id:{from:"$fromId", seen:"$isSeen"},count:{$sum:1}}} 
    ]).then(result=>{
        console.log(result)
    })
})
