import {get,post} from  "./service";

export const getAllMessage=(userId,selected_user_id)=> post("/api/user/getMessages",{userId,selected_user_id});
export const lastSeenDetails=(userId)=>get("/api/message/lastSeenDetails/"+userId)