import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import "./login.scss";
import {Link} from"react-router-dom";
import {getUserList,login} from "../../services/auth";
import SocketIo from "../../utils/socket";

import {UserContext} from "../../data-provider/user";

class Login extends React.Component {
    static contextType=UserContext;
    componentDidMount(){
        getUserList().then(Response=>{
            console.log(Response)
        })
    }
    login=()=>{
        let userName=this.userName.value;
        let password=this.password.value;
        
        login(userName,password).then(result=>{
            console.log(result)
            this.context.storeUser(result.data);
        })
    }
    render() {
        console.log(this.context)
        return (
            <div className="login-form">
                <Container> 
                    <Row>
                        <Col sm={5} className="login-container card">
                        <Container> 
                              <Form  >
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>User Name</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control ref={el=>this.userName=el} column sm={10} type="text" placeholder="Please type User name" />
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>Password</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control ref={el=>this.password=el} column sm={10} type="text" placeholder="Please type Password" />
                                        </Col>
                                </Form.Group>
                                <Form.Group >
                                <Button onClick={this.login}>login</Button>
                                <Link className="pl-10" to={"/signup"}>sign up</Link>
                                </Form.Group>
                               
                            </Form>  </Container>
                            </Col>
                            </Row>
                            </Container> 
            </div>
                )
            }
        }
        
export default Login;