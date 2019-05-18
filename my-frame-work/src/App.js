import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { withRouter, Route } from 'react-router-dom';
import Main from "./application/main"
import ChatApp from "./chatapp/index";
import { hot } from 'react-hot-loader'
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
     console.log(this.props)
     if(window.location.hostname.split(".").length==1 || window.location.hostname.split(".")[0].toLowerCase()!="app")
    return (
      <div>
        <Route path="/" exact render={this.getInitialComponent} />
        <Route path="/app"  component={Main} />
      </div>
    )
    else{
      return <div><ChatApp/></div>
    }
  }
}

export default hot(module)( withRouter(App)); 