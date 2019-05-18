import React from "react";
import Login from "./login"
import {Link} from "react-router-dom";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
class SignUp extends React.Component{
    render(){
        return (
<div>
<Container> 
                    <Row>
                        <Col sm={5} className="login-container card">
                        <Container> 
                              <Form  >
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>User Name</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control column sm={10} type="text" placeholder="Please type User name" />
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>phone</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control column sm={10} type="text" placeholder="Please type phone" />
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>email</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control column sm={10} type="email" placeholder="Please type email" />
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column  sm={4}>Password</Form.Label>
                                    <Col sm={8}>
                                    <Form.Control column sm={10} type="text" placeholder="Please type Password" />
                                        </Col>
                                </Form.Group>
                                <Form.Group >
                                <Button >SignUp</Button>
                                <Link className="pl-10" to={"/login"}>goto login</Link>
                                </Form.Group>
                               
                            </Form>  </Container>
                            </Col>
                            </Row>
                            </Container> 
</div>
        )
    }
}

export default SignUp;