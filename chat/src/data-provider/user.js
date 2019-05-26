import React from "react";
import {getUserList} from "../services/auth";
import {getAllMessage} from "../services/messages";
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
            userMessages:{}

        }
    }
    getUserList=()=>{
        getUserList().then(result=>{
            console.log(result)
            this.setState({
                userList:result.data
            })
        })
    }
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
    selectUserToChat=(user)=>{
        this.setState({
            selectedUser:user
        },this.getAllMessage);
    }
    storeUser = (userData) => {
        let { userName, phoneNo, gender,_id } = userData;
        sessionStorage.setItem("user_id",userData._id);

        SocketIo.socket=_id;
        SocketIo.socket.on("message",(data)=>{
            console.log(data)
            this.setState({

                userMessages: {
                    ...this.state.userMessages,
                    [data.fromId]:!this.state.userMessages[data.fromId]?
                    [data]:[...this.state.userMessages[data.fromId],data]
                }
            })
        })
        this.setState({
            user:{userName, phoneNo, gender,id:_id}, auth: true,
        },this.getUserList);
    }
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
