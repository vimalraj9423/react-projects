import React from "react";
import { Container, InputGroup,FormControl,Button } from "react-bootstrap";
import "./chat_content.scss";
import SocketIo from "../../utils/socket";
import {UserContext} from "../../data-provider/user";
export default class chatContent extends React.Component {
    static contextType=UserContext;
    sendMessage=()=>{
        let message =this.messageInput.value;
        if(message){
            SocketIo.socket.emit("message_user",{
                message,
                toId:this.context.selectedUser._id
            });
        }
    }
    render() {
        console.log(this.context.selectedUser)
        return (
            <div className="">
                <Container>
                    <div className="message_container">

                    </div>
                   {
                       this.context.selectedUser
                       && <InputGroup className="mb-1">
                        <FormControl
                            ref={el=>this.messageInput=el}
                        className="message_input"
                            placeholder="start conversion"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button onClick={this.sendMessage} variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>}
                </Container>
            </div>
        )
    }
}