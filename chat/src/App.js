import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./component/auth";
import {UserContext} from "./data-provider/user";
import {withRouter,Switch,Route} from "react-router-dom";
import {getUserById} from "./services/auth";
import ChatIndex from "./component/chat"
class  App extends React.Component {
  static contextType=UserContext;
  constructor(){
    super();
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    let userId=sessionStorage.getItem("user_id"); 
    console.log(userId)
    if(userId){
    getUserById(userId).then(result=>{
      this.setState({
        loading:false
      },()=>{this.context.storeUser(result.data)})
    })
  }else{
    this.setState({
      loading:false
    });
  }
    
  }
  render(){
  console.log(this.context)
  if(this.state.loading){
    return (<div className="App">
      ...loading
    </div>)
  }
  return (

    <div className="App"> 
        { !this.context.auth?<Auth/>:<ChatIndex/>}
   
      
    </div>
  );
}
}

export default withRouter(App);
