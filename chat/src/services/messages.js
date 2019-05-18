import {get,post} from  "./service";

export const getAllMessage=(userId)=> post("/api/user/getMessages",{userId});