import mongoose from "./mongoose";
let {Number,String,Boolean} = mongoose.SchemaTypes
let messageSchema = new mongoose.Schema({
    fromId:{type:String},
    toId:{type:String},
    message:{type:String},
    isSeen:{type:Boolean}
});
export default mongoose.model("chat_message",messageSchema);