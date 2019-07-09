import Axios from "axios"; 
export let get=(path)=>new Promise((resolve,reject)=>{
    Axios.get(process.env.REACT_APP_IP+":"+process.env.REACT_APP_SERVICE_PORT+ path).then(result=>{
        resolve(result.data);
    }).catch(err=>{
        reject({
            status:err.status,
            data:err.data
        })
    });
})  

export let post=(path,param)=>new Promise((resolve,reject)=>{
    Axios.post(process.env.REACT_APP_IP+":"+process.env.REACT_APP_SERVICE_PORT+ path,param).then(result=>{
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