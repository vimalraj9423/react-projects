import React from "react";
import  Chat from "./chat";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
class ChatIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Chat} />
                <Redirect path="/login" to="/" />
            </Switch>);
    }
}
export default withRouter(ChatIndex)