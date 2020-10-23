import React from 'react';
import { Link } from 'react-router-dom';

class RequestShow extends React.Component {
    // componentDidMount() {
    //     // debugger
    //     this.props.fetchRequest(this.props.match.params.requestId)
    // }

    render() {
        debugger
        return (
            <div className="confirmation-container">
                <div className="confirmation-wrapper">
                    <div className="confirmation-content">
                        <img className="confirmation-image" src={window.check_icon} alt="" />
                        <div className="confirmation-text">You've requested ${this.props.request.amount}</div>
                    </div>
                    <Link className="confirmation-button" to="/myaccount/request">Request More Money</Link>
                    <Link className="confirmation-link" to="/myaccount">Go to Summary</Link>
                </div>
            </div>
        )
    }
}

export default RequestShow;