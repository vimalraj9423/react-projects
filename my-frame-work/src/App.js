import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { withRouter, Route } from 'react-router-dom';
import Main from "./application/main"
class App extends Component {
  state = {
    showMainPage: false
  }
  
  openShowMainApp=()=>{
    this.props.history.push("/app");
  }
  getInitialComponent = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"  
            href="javascript:void(0)"
             onClick={this.openShowMainApp}
          >
            click to Open
          </a>
        </header>
      </div>
    );
  }
  render() {
     
    return (
      <div>
        <Route path="/" exact render={this.getInitialComponent} />
        <Route path="/app"  component={Main} />
      </div>
    )
  }
}

export default withRouter(App);
