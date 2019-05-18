import React from "react";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import {UserContext} from "../../data-provider/user";
import "./chat_user_list.scss";
export default class ChatUserList extends React.Component{
    static contextType = UserContext;
    render(){
        return (<div className="chat_list">
            <ListGroup>
                {
                    this.context.userList.map(user=><ListGroupItem className={"userlist_group "+(user==this.context.selectedUser?" active":"")} onClick={()=>this.context.selectUserToChat(user)}>
                        {user.userName}
                    </ListGroupItem>)
                }
            </ListGroup>
        </div>)
    }
}