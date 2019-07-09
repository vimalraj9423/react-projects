import React from "react";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import {UserContext} from "../../data-provider/user";
import "./chat_user_list.scss";
export default class ChatUserList extends React.Component{
    static contextType = UserContext;
    render(){
        console.log(this.context)
        return (<div className="chat_list">
            <ListGroup>
                {
                    this.context.userList.map(user=>this.context.user.id!=user._id&&<ListGroupItem className={"userlist_group "+(user==this.context.selectedUser?" active":"")} onClick={()=>this.context.selectUserToChat(user)}>
                    <div className="user-icon">
                        {user.userName[0]}
                    </div>
                    <div className="user-name">
                    {user.userName}
                    { this.context.lastSeens[  user._id]!=0&& this.context.lastSeens[  user._id]  && (!this.context.selectedUser || this.context.selectedUser._id!= user._id)
                    &&<span className="lastSeen-count">
                        
                    {
                      this.context.lastSeens[  user._id]
                    }
                    </span>}
                    </div>
                       
                    </ListGroupItem>)
                }
            </ListGroup>
        </div>)
    }
}