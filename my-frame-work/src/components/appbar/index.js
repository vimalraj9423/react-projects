import React from "react";
import "./appbar.scss";
export default class Header extends React.Component {
    render() {
        console.log("app")
        return (
            <div className="app-bar" onClick={()=>this.setState({d:1})}>
                {
                    this.props.children
                }
            </div>
        )
    }
}