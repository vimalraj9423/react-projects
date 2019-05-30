import Axios from "axios";
let port=3030;
export let get=(path)=>new Promise((resolve,reject)=>{
    Axios.get("https://ec2-18-191-41-252.us-east-2.compute.amazonaws.com:"+port+ path).then(result=>{
        resolve(result.data);
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})  

export let post=(path,param)=>new Promise((resolve,reject)=>{
    Axios.post("https://ec2-18-191-41-252.us-east-2.compute.amazonaws.com:"+port+ path,param).then(result=>{
        if(result.status==200)
        resolve(result.data);
        else{
            reject({
                status:result.status,
                data:result.data
            })
        }
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})