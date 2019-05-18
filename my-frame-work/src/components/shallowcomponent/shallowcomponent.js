import React from "react";
export let DummyComponent=()=>(<div>
    <div className="state-class"></div></div>)

export default () => {
    return (
        <div>
            <div className="foo">

            </div>
            <div className="foo">
<DummyComponent/>
            </div>
        </div>
    )
}
export class StateFull extends React.Component{
    constructor(){
        super();
        this.state={
            a:10
        }
    }
    render(){
        return(<div>
            <div className="state-class"></div>
        </div>)
    }
}