import React from "react";
import "./appbar.scss";
export default class Header extends React.Component {
    render() {
        return (
            <div className="app-bar">
                {
                    this.props.children
                }
            </div>
        )
    }
}