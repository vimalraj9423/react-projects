import React from 'react'; 
import './App.css'; 
import {withRouter,Switch,Route} from "react-router-dom"; 
class  App extends React.Component { 
  constructor(){
    super();
    this.state={
      loading:true
    }
  }
  componentDidMount(){
 
    
  }
  render(){
    return (<div></div>)
}
}

export default withRouter(App);

