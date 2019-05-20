import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../../data-provider/user";
import ChatList from "./chat_users_list";
import ChatContent from "./chat_content";
export default class chat extends React.Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                <Container fluid={true} className='p-0'>
                    <Row className='no-gutters'>
                        <Col sm={6} xs={6} md={3} lg={3} xl={3}>
                            <ChatList />
                        </Col>
                        <Col sm={6} xs={6} md={9} lg={9} xl={9}>
                            <ChatContent />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}