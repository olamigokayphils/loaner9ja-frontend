import { Fragment, useState } from 'react'
import Header from "../common/Header"

export default function Signup() {
    const [regStage, setRegStage] = useState(1)

    const renderRegistrationStage = () => {
        switch(regStage){
            case 1:
                return (
                    <div className="form-container">
                        <form>
                        <div className="form-group">
                                <label>Full Name</label>
                                <input className="form-input" type="text" placeholder="Enter Full Name"/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-input" type="text" placeholder="Enter Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-input" type="password" placeholder="Enter password"></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-input" type="password" placeholder="Confirm password"></input>
                            </div>

                            <div className="form-group">
                                <button type="submit" onClick={() => setRegStage(2)} className="btn-block btn-slim">Next</button>
                            </div>
                        </form>
                    </div>
                    
                )
            case 2:
                return (
                    <div className="form-container">
                        <form>
                        <div className="form-group">
                                <label>D.O.B</label>
                                <input type="date" className="form-input"/>
                            </div>
                            <div className="form-group">
                                <label>State of Residence</label>
                                <select className="form-input">
                                    <option>--Select State --</option>
                                    <option>Lagos</option>
                                    <option>Enugu</option>
                                    <option>Ogun</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-input" type="email" placeholder="Enter valid email"></input>
                            </div>
                

                            <div className="form-group">
                                <div className="btn-flex-group">
                                <button onClick={() => setRegStage(1)} className="btn btn-slim">{"<<"} Previous</button>
                                <button className="btn btn-slim">Create Account</button>
                                </div>
                            </div>
                        </form>
                    </div>

                )
        }
    }
    return (
        <Fragment>
            <Header/>
            {renderRegistrationStage()}
        </Fragment>
        
       
    )
}
