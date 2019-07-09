import React from "react";
import {getUserList} from "../services/auth";
import {getAllMessage,lastSeenDetails} from "../services/messages";
import SocketIo from "../utils/socket";
export const UserContext = React.createContext({});
class UserContextClass extends React.Component {
    constructor() {
        super();
        this.state = {
            auth: false,
            user:{},
            userList:[],
            selectedUser:null,
            storeUser:this.storeUser,
            selectUserToChat:this.selectUserToChat,
            sendCallBack:this.sendCallBack,
            userMessages:{},
            lastSeens:{}

        }
    }
    //get list of users
    getUserList=()=>{
        getUserList().then(result=>{
            console.log(result)
            this.setState({
                userList:result.data
            })
        })
    }
    lastSeenDetails=()=>{
        lastSeenDetails(this.state.user.id).then(result=>{
            this.setState({
                lastSeens:result.data
            })
        })
    }
    //get all messages for the selected user
    getAllMessage=()=>{
        getAllMessage(this.state.user.id,this.state.selectedUser._id).then(result=>{
            
            this.setState({
                userMessages: {
                    ...this.state.userMessages,
                    [this.state.selectedUser._id] :result.result
                }
            });
        })
    }
    //select user by click the side nav
    selectUserToChat=(user)=>{
        let lastSeens=this.state.lastSeens;
        if(this.state.selectedUser){
            console.log("this.state.userMessages",this.state)
            console.log("dd",this.state.userMessages[this.state.selectedUser._id].length)
            lastSeens={ ...lastSeens,[this.state.selectedUser._id]:0};
            if(this.state.userMessages[this.state.selectedUser._id] && this.state.userMessages[this.state.selectedUser._id].length>0){
            SocketIo.socket.emit("updateLastSeen",this.state.user.id,this.state.selectedUser._id,this.state.userMessages[this.state.selectedUser._id][this.state.userMessages[this.state.selectedUser._id].length-1]._id)
        }
        }
        this.setState({
            selectedUser:user,
            lastSeens
        },this.getAllMessage);
    }
    //logged user details and listen message namespace socket
    storeUser = (userData) => {
        let { userName, phoneNo, gender,_id } = userData;
        sessionStorage.setItem("user_id",userData._id);

        SocketIo.socket=_id;
        SocketIo.socket.on("message",(data)=>{ 
            this.setState({

                userMessages: {
                    ...this.state.userMessages,
                    [data.fromId]:!this.state.userMessages[data.fromId]?
                    [data]:[...this.state.userMessages[data.fromId],data]
                },
                lastSeens:{
                    ...this.state.lastSeens,
                    [data.fromId]:this.state.lastSeens[data.fromId]?this.state.lastSeens[data.fromId]+1:1
                }
            })
        })
        this.setState({
            user:{userName, phoneNo, gender,id:_id}, auth: true,
        },()=>{this.getUserList();this.lastSeenDetails()});
    }
    // this should be call after send the message
    sendCallBack=(data,callback)=>{
        this.setState({

            userMessages: {
                ...this.state.userMessages,
                [data.toId]:!this.state.userMessages[data.toId]?
                [data]:[...this.state.userMessages[data.toId],data]
            }
        },callback)
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {
                    this.props.children
                }
            </UserContext.Provider>);
    }
}
export default UserContextClass;
