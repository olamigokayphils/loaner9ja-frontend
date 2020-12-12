import React, { Fragment } from 'react'
import Header from "../components/common/Header"

export default function HomePage() {
    return (
        <Fragment>
            <Header/>
            <div>
                <div className="image-bg-section">
                <div className="call-to-action">
                    <div className="intro">
                    <p>Fast Loans in No-time</p>
                    <div className="intro-btn-container">
                        <button className="btn">Apply for Loan</button>
                        <button className="btn">Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>
                    </div>
                 </div>
            </div>
            </div>
        </Fragment>
    )
}
