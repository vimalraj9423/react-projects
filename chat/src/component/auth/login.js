import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import "./login.scss";
import { Link } from "react-router-dom";
import { getUserList, login } from "../../services/auth";
import SocketIo from "../../utils/socket";

import { UserContext } from "../../data-provider/user";

class Login extends React.Component {
    static contextType = UserContext;
    state={};
    componentDidMount() { 
    }
    login = (e) => { 
        e.preventDefault();
        e.stopPropagation();
        let userName = this.userName.value;
        let password = this.password.value;

        login(userName, password).then(result => {
            console.log(result)
            this.context.storeUser(result.data);
        }).catch(err=>{
            console.log(err)
            this.setState({
                error:true,
                errorMessage:err.message
            })
        })
    }
    render() {
        console.log(this.context)
        return (
            <div className="login-form">
                <Container fluid={true}>
                    <Row>
                        <Col sm={12} md={4} lg={4} xl={4} xs={12} className="login-container card">
                            <Container>
                                <form className='form-container' onSubmit={this.login} >
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>User Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control ref={el => this.userName = el} column sm={10} id="username" type="text" placeholder="Please type User name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>Password</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control ref={el => this.password = el} column sm={10} id="password" type="password" placeholder="Please type Password" />
                                        </Col>
                                    </Form.Group>
                                    <Row >
                                        <Col>
                                        <Button onClick={this.login} type="submit" className='login-btn'>login</Button>
                                        <Link className="pl-10 link" to={"/signup"}>sign up</Link>
                                        </Col>
                                    </Row>
                        {this.state.error &&
                        <Col className="text-danger">{this.state.errorMessage}</Col>}

                                </form>  </Container>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} xs={12} className='offset-lg-6 offset-xl-6 offset-md-6 offset-sm-0 aside-container'>
                            <h1>Connect</h1>
                            <p className="content">
   </p>
                        </Col>

                    </Row> 
                </Container>
            </div>
        )
    }
}

export default Login;