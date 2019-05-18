import React from "react";
import  Register from "./profile/register";
import { Route } from 'react-router-dom';
export default class Index extends React.Component{
    render(){
        return (<div >
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Register} />
        </div>);
    }
}