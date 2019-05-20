import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import "./login.scss";
import { Link } from "react-router-dom";
import { getUserList, login } from "../../services/auth";
import SocketIo from "../../utils/socket";

import { UserContext } from "../../data-provider/user";

class Login extends React.Component {
    static contextType = UserContext;
    componentDidMount() {
        getUserList().then(Response => {
            console.log(Response)
        })
    }
    login = () => {
        let userName = this.userName.value;
        let password = this.password.value;

        login(userName, password).then(result => {
            console.log(result)
            this.context.storeUser(result.data);
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
                                <Form className='form-container' >
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>User Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control ref={el => this.userName = el} column sm={10} type="text" placeholder="Please type User name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>Password</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control ref={el => this.password = el} column sm={10} type="text" placeholder="Please type Password" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group >
                                        <Button onClick={this.login} className='login-btn'>login</Button>
                                        <Link className="pl-10 link" to={"/signup"}>sign up</Link>
                                    </Form.Group>

                                </Form>  </Container>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} xs={12} className='offset-lg-6 offset-xl-6 offset-md-6 offset-sm-0 aside-container'>
                            <h1>TINDER 2.0 APPLICATION</h1>
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Quam id leo in vitae turpis massa sed elementum tempus.
<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Quam id leo in vitae turpis massa sed elementum tempus.
<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Quam id leo in vitae turpis massa sed elementum tempus.
</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;