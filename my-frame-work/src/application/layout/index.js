import React from "react";
import { List } from "../../components/tools/index";
import CustomTab from "../../components/custom-tab"
export default class LayoutDefinition extends React.Component {
    render() {
        const items = ['one', 'two', 'three'];
        return (
            <div className="container">
                <h4> list </h4>
                <p className="code-container">
                    <code  >
                      <span> {`${ `<List items={items} listType={"upperRoman"} isUnOrder={true} />` } `}  </span><br />
                      <span className="light-gray">
                            {`${ `// items is list of array that you will show` } `} 
                        </span><br />
                      <span className="light-gray">
                          // listType is list of array that you will show <strong>   circle ,  square ,  upperRoman , lowerAlpha </strong>
                        </span><br />
                      <span className="light-gray">
                          // By default isOrder is undefined and it will show unorderlist.if it is true it will show  <strong>   circle:"a",
       Order list </strong>
                        </span><br />
                   
                    </code>
                </p>
                <h4> OrderList with upperRoman</h4>
                <List items={items} listType={"upperRoman"} isOrder={true} />
                <h4> OrderList with lowerAlpha</h4>
                <List items={items} listType={"lowerAlpha"} isOrder={true} />
                <h4> UnOrderList with Circle</h4>
                <List items={items} listType={"circle"}   />

                <h4> list </h4>
                <CustomTab active={0} vertical={true}>
                    <div title="1">
                        content 1
                    </div>
                    <div title="2">
                        content 2
                    </div>
                    </CustomTab>
            </div>
        )
    }
}
