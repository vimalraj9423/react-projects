import React from "react";
import AppBar from "../components/appbar"
import {Menutools} from "../components/tools";
import Grid from  "./grid";
import Layout from "./layout";
import "./main.scss"
import {  Route,Switch,withRouter,Router,Link } from 'react-router-dom';
class Main extends React.Component {
    getlink=()=>{
        return(
           
            <div className="container">
                {
                    [0,1,2,3,4,5,6].map((value,index)=>
                       ( <React.Fragment><span className="item-color" key={index}>{value}</span></React.Fragment>)
                   )
                }
                <div>
                <Link to={this.props.match.url+"/grid"}>grid</Link>
                </div>
               <div>  <Link to={this.props.match.url+"/layout"}>layout</Link></div>
            </div>
        )
    }
    render() {
        console.log(this.props)
        const {match} =this.props;
        return (
            <div className="main-app">
                <AppBar>
                    <Menutools/>
                  <h3>  Light Css</h3>
                </AppBar>  
                <Switch>
                    <Route path={match.url } exact render={this.getlink}/>
                    <Route path={match.url +"/grid"} component={Grid}/>
                    <Route path={match.url +"/layout"} component={Layout}/>
                </Switch>
             
          
                   
            </div>
        );
    }
}
export default  Main 