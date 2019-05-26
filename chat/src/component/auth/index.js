import React from "react";
import Login from "./login";
import SignUp from "./signup";
import {withRouter,Switch,Route,Redirect} from "react-router-dom";
class INDEX extends React.Component{
    render(){
        return (
<Switch>
        <Redirect path="/" exact to="/login" />
        <Route path="/login" component={Login}/>
      
        <Route path="/signup" component={SignUp}/>
      </Switch> 
        )
    }
}

export default INDEX;