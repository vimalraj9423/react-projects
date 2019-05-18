import React from "react";
import UserProvider from "./user";
export default class MyProvider extends React.Component{
    render(){
        return (
        <UserProvider>
            {this.props.children}
        </UserProvider>)
    }
}