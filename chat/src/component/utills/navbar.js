import React from "react";

import {Navbar} from "react-bootstrap";
export default class NavComponent extends React.Component{
    render(){
        return(
            <Navbar   variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' McHat'}
            </Navbar.Brand>
          </Navbar>
        )
    }
}