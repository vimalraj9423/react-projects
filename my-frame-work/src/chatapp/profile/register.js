import React from "react";
import "./register.scss"
export default class Register extends React.Component {
    render() {
        return (<div className="row  container register-container">
            <form className="register-form col-sm-6"  onSubmit={(e)=>{e.preventDefault(); }}>
                <fieldset style={{    border: "none"}}>
                    <legend>Register</legend>
                    <div className="row mb-10">
                        <div className="col-sm-8 input-set">
                            <input placeholder="User Name"  />
                        </div>

                    </div>
                    <div className="row mb-10">
                        <div className="col-sm-8 input-set">
                            <input placeholder="Password"  />
                        </div>

                    </div>
                    <div className="row mb-10">
                        <div className="col-sm-8 input-set">
                            <button onClick={()=>{}}  > create</button>
                        </div>

                    </div>
                </fieldset>
            </form>
        </div>)
    }
}