import Axios from "axios";
let port=3030;
export let get=(path)=>new Promise((resolve,reject)=>{
    Axios.get("http://10.0.20.41:"+port+ path).then(result=>{
        resolve(result.data);
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})  

export let post=(path,param)=>new Promise((resolve,reject)=>{
    Axios.post("http://10.0.20.41:"+port+ path,param).then(result=>{
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