import React from "react";
import  Chat from "./chat";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import ProfileIndex from  "../profile";
class ChatIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Chat} />
                <Route path="/profile" component={ProfileIndex}/>
                <Redirect path="/login" to="/" />
            </Switch>);
    }
}
export default withRouter(ChatIndex)