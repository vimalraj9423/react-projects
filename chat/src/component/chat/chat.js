import React from "react";
import { Container, Row, Col,FormControl } from "react-bootstrap";
import { UserContext } from "../../data-provider/user";
import ChatList from "./chat_users_list";
import ChatContent from "./chat_content";
import NavBarComponent from  "../utills/navbar";
import VideoChat from "./video/video-chat";
import SocketIo from "../../utils/socket";

export default class chat extends React.Component {
    static contextType = UserContext;
    state={
        showVideo:false,
        initiator:false
    }
    componentDidMount(){
        SocketIo.socket.on("receiveInitiatorId",(id,socketId)=>{
            console.log("reivedsss")
            this.setState({
                showVideo:true,
                initiatorId:id,
                initiatorSocketId:socketId
            })
        })
        
    }
    videoCall=(toID,initiator)=>{
        this.setState({
            showVideo:true,
            toID,
            initiator
        })

    }
    render() {
        return (
            <div>
                <NavBarComponent/>
                <Container fluid={true} className='p-0'>
                    <Row className='no-gutters'>
                        <Col sm={6} xs={6} md={3} lg={3} xl={3}>
                        {/* <input type="text" /> */}
                            <ChatList />
                        </Col>
                        <Col style={{background:"rgba(252, 252, 255, 0.92)"}} sm={6} xs={6} md={9} lg={9} xl={9}>
                         
                            <ChatContent videoCall={this.videoCall} />
                        </Col>
                    </Row>
                   {this.state.showVideo && <VideoChat initiatorSocketId={this.state.initiatorSocketId} toID={this.state.toID} initiatorId={this.state.initiatorId} initiator={this.state.initiator}/>}
                </Container>
            </div>
        );
    }
}