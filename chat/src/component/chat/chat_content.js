import React from "react";
import { Container, InputGroup, FormControl, Button, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import "./chat_content.scss";
import SocketIo from "../../utils/socket";
import { UserContext } from "../../data-provider/user";
export default class chatContent extends React.Component {
    static contextType = UserContext;
    sendMessage = () => {
        let message = this.messageInput.value;
        this.messageInput.value="";
        if (message) {
            SocketIo.socket.emit("message_user", {
                message,
                toId: this.context.selectedUser._id 
            },(result)=>{
                console.log(this.context);
                this.context.sendCallBack(result,()=>{
                    this.sendMessageRef.scrollTop= this.sendMessageRef.scrollHeight;
                })
           });
        }
    }
    render() {
        console.log(this.context.selectedUser)
        return (
                <Container fluid={true} className='p-0'>
                    <div className="message_container" ref={el=>this.sendMessageRef=el} >
                        {
                            this.context.selectedUser
                            &&
                            this.context.userMessages[this.context.selectedUser._id]
                            &&
                            this.context.userMessages[this.context.selectedUser._id].map((message, key) => (
                                    <Card  key={key} className={"message-card "+(message.fromId==this.context.selectedUser._id?" left":" float-right")}>
{message.fromId==this.context.selectedUser._id &&      <div className="user-icon-content ">V </div>}
                                            {message.message} 
                                    </Card> 
                            ))
                        }
                    </div>
                    {
                        this.context.selectedUser
                        && <InputGroup className="mb-1">
                            <FormControl
                                ref={el => this.messageInput = el}
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
        )
    }
}