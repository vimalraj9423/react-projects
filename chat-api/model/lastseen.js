import mongoose from "./mongoose";
let {Number,String} = mongoose.SchemaTypes
let lastseenSchema = new mongoose.Schema({
    userId:{type:String},
    senderUserId:{type:String},
    lastSeenMessageId:{type:String}
});
export default mongoose.model("last_seen",lastseenSchema)
