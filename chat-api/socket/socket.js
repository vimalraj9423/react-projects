import {sendMessage} from "./messages";
export default class SocketServer {
    constructor(io) {
        this.io = io;
        this.userSocket = {};
        this.socketToUser={}
        // console.log("hello",io)
        this.io.on("connection", (socket) => {
            console.log(socket.id, "sdsds")
            socket.emit("userIdRequest");
            socket.on("register", (userId) => {
                console.log("userId",userId)
                this.socketToUser[socket.id]=userId
                if (this.userSocket[userId]) {
                    if (this.userSocket[userId].indexOf(socket.id) > -1) {
                        return
                    }
                } else {
                    this.userSocket[userId] = [];
                }
                this.userSocket[userId].push(socket.id)
            });

            socket.on("message_user",({toId,message},callback)=>{
                let fromId=this.socketToUser[socket.id]; 
                console.log(callback,"Dd")
                sendMessage(fromId,toId,message)((result)=>{
                    let toSocketIds=this.userSocket[toId];
                    callback(result)
                    console.log(toSocketIds)
                    toSocketIds && toSocketIds.map(id=>{
                        io.to(id).emit("message",result);
                    })
                })
            })
        });

        


    }
    static set io(io) {
        let instance = new SocketServer(io);
        SocketServer.instance = instance
    }
    static get io() {
        return SocketServer.instance.io;
    }
}