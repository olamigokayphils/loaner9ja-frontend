import { Fragment } from 'react'
import Header from "./common/Header"

const LoanHistory = [
    {
        requestDate: "November 21, 2020",
        dueDate: "December 20, 2020",
        amout: "30,000",
        status: "Running"
    },
    {
        requestDate: "July 6, 2020",
        dueDate: "August 6, 2020",
        amout: "15,000",
        status: "Settled"
    },
    {
        requestDate: "September 8, 2020",
        dueDate: "October 7, 2020",
        amout: "30,000",
        status: "Settled"
    }

]
export default function Dashboard() {
    return (
        <Fragment>
            <Header/>
                <div className="app-container">
                    <div className="user-intro-details">
                        <div className="user-account">
                            <p>Welcome [[ user ]]</p>
                            <p>Bal: <b>NGN 30,000</b></p>
                        </div>
                        <div>
                        <i className="fas fa-user-circle fa-color-sec fa-2x"></i>
                        </div>
                    </div>
                
                    <div className="btn-flex-group">
                        <button className="btn btn-slim">Request New Loan</button>
                        <button className="btn btn-slim">Withdraw Funds</button>

                    </div>
                    <hr/>
                    <h3>Loan History</h3>
                    <div className="loan-history-container">
                        {LoanHistory.map((item, index) => {
                            return(
                            <div key={index} className="loan-item">
                            <div className="loan-item-details">
                                <span><b>Req Date:</b> {item.requestDate}</span>
                                <span><b>Due Date:</b> {item.dueDate}</span>
                            </div>
    
                            <div className="loan-item-details">
                                <span><b>Amount:</b> NGN {item.amout}</span>
                                <span><b>Status:</b> <span className={`loan-status loan-${item.status.toLowerCase()}`}>{item.status}</span></span>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                    </div>
        </Fragment>

    )
}
