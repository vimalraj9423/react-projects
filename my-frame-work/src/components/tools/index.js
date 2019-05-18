import React from "react";
import "./tools.scss"
export function Menutools(props) {
   console.log("menu tools")
        return (
            <a class="navicon-button x">
                <div className="navicon"></div>
            </a>

        )
    
}

export function List(props) {
    const { items } = props;
    let listTypeMap={
        circle:"a",
        square:"b",
        upperRoman:"c",
        lowerAlpha:"d"
    }
    if ( !items || !items.length) { 
      return <span className="empty-message">No items in list</span>;
    }
    let Element ="ul";
  if(props.isOrder){
    Element="ol"
  }
    return (
      <Element className={"list-items "+(listTypeMap[props.listType])+" "}>
        {items.map(item => <li key={item} className="item">{item}</li>)}
      </Element>
    );
  }

  export class Link extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false };
    }
    handleClick = () => {
      alert('clicked');
      this.setState({ clicked: true });
    }
    render(){
      const { title, url }=this.props;
      return <a onClick={this.handleClick} href={url}>{title}</a>;
    }
  } 