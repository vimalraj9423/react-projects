import React from "react";
import "./customtab.scss";
export default class TabContainer extends React.Component {
    changeTab=(i)=>{
        if(this.props.changeTab && this.props.active!=i){
            this.props.changeTab(i);
        }
    }
    render() { 
        return (<div>
            <div className="row">
                <div className={this.props.vertical?"col-md-2":"col-md-12"}>
                    {
                        this.props.children.map((el, index) => (<div key={index} className={"tab-item " + (index == this.props.active ? " active" : "")}>{this.props.renderer?this.props.renderer(el.props.title):el.props.title}</div>))
                    }
                </div>
                <div className={this.props.vertical?"col-md-10":"col-md-12"}>
                    {
                        this.props.children.length > 0 && this.props.active > -1 && this.props.children[this.props.active]
                    }
                </div>
            </div>
        </div>
        );
    }
}