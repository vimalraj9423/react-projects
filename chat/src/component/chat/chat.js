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
                <Container fluid={true}>
                    <Row>
                        <Col sm={"4"}>
                            <ChatList />
                        </Col>
                        <Col sm={8}>
                            <ChatContent />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}