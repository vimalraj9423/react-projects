import React from "react";
import "./video-chat.scss";
import Peer from 'simple-peer';
import SocketIO from "../../../utils/socket";
export default class VideoChat extends React.Component {
    constructor(props) {
        super();
        this.state = {
            connecting: true
        };

    }
    componentDidMount() {
        console.log(this.props.initiator)
        let gotMedia=(stream) => {
            this.peer = new Peer({
                initiator: this.props.initiator,
                trickle: false,
                stream
            });

            this.peer.on('signal', (data) => {
                console.log("myid", data)
                if (this.props.initiator) {
                    console.log("sockete emitted")
                    SocketIO.socket.emit("sendPeerId", this.props.toID, data)
                } else {
                    SocketIO.socket.emit("sendIdToIntiator", this.props.initiatorSocketId, data)
                }
            });
            if (!this.props.initiator) {
                console.log(this.props.initiatorId)
                this.peer.signal(this.props.initiatorId);
            }
            this.peer.on('error', err => console.log('error', err))
            this.peer.on('connect', () => {
                // wait for 'connect' event before using the data channel
                this.peer.send('hey peer2, how is it going?')
            })
            this.peer.on('data', (data) => {
                // got a data channel message
                console.log('got a message from ' + (this.props.initiator ? "initi" : "none") + ' + data')
            })
            this.peer.on("stream",(stream)=>{
                this.videoRef.srcObject=  stream;
                this.videoRef.play();
            })
            SocketIO.socket.on("receiveSocketIdFromInitiator", (data) => {
                this.peer.signal(data);
            })

        }
        navigator.getUserMedia = ( 
             navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
          )
            
        navigator.getUserMedia({ video: true, audio: true },gotMedia,()=>
        gotMedia() )


    }
    sendData = () => {

    }
    render() {

        return <div className="video-container">
            {
                this.state.connecting == true && "connecting"
            }
            <video ref={el => this.videoRef = el} />
            <button onClick={this.sendData}> send</button>
            <button onClick={this.props.onCancel}>cancel</button>
        </div>
    }
}