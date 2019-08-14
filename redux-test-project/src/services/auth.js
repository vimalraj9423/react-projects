import {get,post} from "./service";

export const getUserList=()=>get("/api/user/userList");
export const login=(userName,password)=>post("/api/user/login",{
    userName,password
});
export const getUserById=(id)=>post("/api/user/getUserById",{
    id
})

export const createUser=(    userName,   phoneNo,  email , gender, password)=>
post("/api/user/createUser",{
    userName,
    phoneNo,
    email ,
    gender,
    password 
})