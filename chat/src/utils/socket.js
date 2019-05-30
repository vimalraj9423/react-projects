import socketIO from "socket.io-client";
export default class SocketIO{
    constructor(userId){
        this.userId=userId;
        this.socket=socketIO.connect('https://ec2-18-191-41-252.us-east-2.compute.amazonaws.com:3030');
    }
     static set socket(userId){
        let instance=new SocketIO(userId);
        SocketIO.instance=instance;
        instance.socket.on("userIdRequest",(socket)=>{
            // console.log("hello",socket)
            instance.socket.emit("register",userId);
        })
     }
     static get socket(){
         return SocketIO.instance.socket;
     }
}