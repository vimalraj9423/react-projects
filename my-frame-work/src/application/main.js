import React from "react";
import AppBar from "../components/appbar"
import {Menutools} from "../components/tools";
import Grid from  "./grid";
import {  Route,Switch,withRouter,Router } from 'react-router-dom';
class Main extends React.Component {
    render() {
        console.log(this.props)
        const {match} =this.props;
        return (
            <div className="main-app">
                <AppBar>
                    <Menutools/>
                  <h3>  Light Css</h3>
                </AppBar>  
                    <Route path={match.url +"/grid"} component={Grid}/>
             
          
                   
            </div>
        );
    }
}
export default  Main 