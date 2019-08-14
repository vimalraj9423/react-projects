import React from "react";
import "./navbar.scss";
import { Navbar, NavDropdown, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
export default class NavComponent extends React.Component {
  onClickDropDown = (e) => { 
    if (this.props.onClickDropDown) {
      this.props.onClickDropDown(e.target.getAttribute("data-dropdownvalue"))
    }
  }
  render() {
    return (
      <Navbar variant="dark">
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
        <Row className="ml-auto">
          <Col>
            <DropdownButton
              className="logout-menu"
              variant="outline-secondary"
              alignRight
              title="Setting"
              id="dropdown-menu-align-right"

            >
              <Dropdown.Item onClick={this.onClickDropDown} data-dropdownvalue="profile" eventKey="1">Profile</Dropdown.Item>
              <Dropdown.Item onClick={this.onClickDropDown} data-dropdownvalue="logout" eventKey="2">Logout</Dropdown.Item>
            </DropdownButton>
          </Col></Row>


      </Navbar>
    )
  }
}