import React from "react";
import "./tools.scss"
export function Menutools(props) {
   
        return (
            <a class="navicon-button x">
                <div class="navicon"></div>
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
    if (!items.length) { 
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