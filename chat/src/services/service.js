import Axios from "axios";
let port=3030;
export let get=(path)=>new Promise((resolve,reject)=>{
    Axios.get("http://localhost:"+port+ path).then(result=>{
        resolve(result.data);
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})  

export let post=(path,param)=>new Promise((resolve,reject)=>{
    Axios.post("http://localhost:"+port+ path,param).then(result=>{
        resolve(result.data);
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})