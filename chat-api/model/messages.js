import mongoose from "./mongoose";
let {Number,String} = mongoose.SchemaTypes
let messageSchema = new mongoose.Schema({
    fromId:{type:String},
    toId:{type:String},
    message:{type:String}
});
export default mongoose.model("chat_message",messageSchema);