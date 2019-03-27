
import React from "react";
import "./grid.scss"; 
export default class GridPAge extends React.Component {
    render() {
        let typeOfgrid = [
            {
                desc: "// sm- Small devices (landscape phones, 576px and up)",
                mediaQuery: "@media (min-width: 576px) { ... }"
            },
            {
                desc: "//md-  Medium devices (tablets, 768px and up)",
                mediaQuery: "@media (min-width: 768px) { ... }"
            },
            {
                desc: "//lg Large devices (desktops, 992px and up)",
                mediaQuery: "@media (min-width: 992px) { ... }"
            },
            {
                desc: "//elg Extra large devices (large desktops, 1200px and up)",
                mediaQuery: "@media (min-width: 1200px) { ... }"
            }
        ]
        return (
            <div className="grid-page">
                <div className="container">

                    <h4>Responsive Breaking Points</h4>

                    <p className="code-container">
                        {
                            typeOfgrid.map((type, key) => (
                                <code key={key}>
                                    <span className="light-gray">{type.desc}</span><br />
                                    <span>{type.mediaQuery}</span><br />

                                </code>
                            ))
                        }

                    </p>
                    <h1>Usage of custom grid</h1>

                    <h4>Row and Column</h4>
                    <p>
                        <strong>.row </strong> class is perform very important role. Any   column element should come within the <strong>.row</strong> class.<br />
                        <strong>.col-*-*</strong> is the structure for define the <strong>column</strong>.First star should replace with required screen size .sizes are <code><strong>elg, lg, md, sm, tn </strong></code>
                    </p>

                    <p className="code-container">
                        <strong>    elg </strong>  :  Extra Large Size <br />
                        <strong>      lg </strong> :  Large Size <br />
                        <strong>     md </strong> :  Medium Size <br />
                        <strong>     sm </strong> :  Small Size <br />
                        <strong>     tn </strong> :  Tiny  <br />

                    </p>

                    <h4>Normal structure</h4>
                    <p className="code-container">
                        <code>
                            {"<div className='row'>"}<br />
                            &nbsp;&nbsp;{"<div className='col-*-*'>"}<br />
                            &nbsp;&nbsp;{"</div>"}<br />
                            {"</div>"}
                        </code>

                    </p>
                    <h4>For Medium screen  grid structure</h4>

                    <div className="row grid-definition">
                        <div className="col-md-12">
                            col-md-12
                        </div>
                        <div className="col-md-6">
                            col-md-6
                        </div>
                        <div className="col-md-6">
                            col-md-6
                        </div>
                        <div className="col-md-4">
                            col-md-4
                        </div>
                        <div className="col-md-4">
                            col-md-4
                        </div>
                        <div className="col-md-4">
                            col-md-4
                        </div>

                        <div className="col-md-3">
                            col-md-3
                        </div>
                        <div className="col-md-3">
                            col-md-3
                        </div>
                        <div className="col-md-3">
                            col-md-3
                        </div>
                        <div className="col-md-3">
                            col-md-3
                        </div>
                    </div>
                    <h4>For small screen  grid structure</h4>
                    <div className="row grid-definition">
                        <div className="col-sm-3">
                            col-sm-3
                    </div>
                        <div className="col-sm-3">
                            col-sm-3
                    </div>
                        <div className="col-sm-3">
                            col-sm-3
                    </div>
                    </div>

                    <h4>For tiny screen  grid structure</h4>

                    <div className="row grid-definition">
                        <div className="col-tn-3">
                            col-tn-3
                    </div>
                        <div className="col-tn-3">
                            col-tn-3
                    </div>
                        <div className="col-tn-3">
                            col-tn-3
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}