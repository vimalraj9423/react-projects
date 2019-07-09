import Messages from "../model/messages";
import LastSeen from "../model/lastseen"
export const sendMessage = (fromId, toId, message) => {
    let data = new Messages({ fromId, toId, message,isSeen:false });

    return (callback) => {
        data.save((err, data) => {
            console.log(data);
            callback(data);
            Messages.updateMany({
                toId:fromId,
                fromId:toId,
                _id:{
                    $lt:data._id
                },
                isSeen:false
            },{
                $set:{
                    isSeen:true
                }
            }).then((ee,es)=>{
                console.log(ee,es)
            });

            // LastSeen.updateOne({
            //     userId: fromId,
            //     senderUserId: toId
            // },{
            // $set:{    userId: fromId,
            //     senderUserId: toId,
            //     lastSeenMessageId: data._id}
            // }).then((result,ss) => {
            //     console.log("last seenn",result,ss)
            //     if (result.nModified==0) {
            //         new LastSeen({
            //             userId: fromId,
            //             senderUserId: toId,
            //             lastSeenMessageId: data._id
            //         }).save((err, data) => {
            //             console.log("inserted last seen", data)
            //         })
            //     }
            // })
        })
    }
}
//from is  logged user, to id opposite user id
export const updateLastSeen=(fromId,toId,_id)=>{ 
    Messages.updateMany({
        toId:fromId,
        fromId:toId,
        _id:{
            $lte:_id
        },
        isSeen:false
    },{
        $set:{
            isSeen:true
        }
    }).then((ee,es)=>{
        console.log(ee,es)
    });
}