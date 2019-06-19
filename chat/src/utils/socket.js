import socketIO from "socket.io-client";
export default class SocketIO{
    constructor(userId){
        this.userId=userId;
        this.socket=socketIO.connect('http://18.223.186.79:3030');
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