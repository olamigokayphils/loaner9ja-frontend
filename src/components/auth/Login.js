import { Fragment } from 'react'
import Header from "../common/Header"

export default function Login() {
    return (
        <Fragment>
            <Header/>
            <div className="form-container">
            <form>
                <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-input" type="text" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-input" type="password" placeholder="Enter password"></input>
                </div>

                <div className="form-group">
                    <button className="btn-block btn-slim">Login</button>
                </div>
            </form>
            </div>
       </Fragment>
    )
}
