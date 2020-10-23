import React from 'react';
import { Link } from 'react-router-dom';

class PaymentShow extends React.Component {
    // componentDidMount() {
    //     // debugger
    //     this.props.fetchPayment(this.props.match.params.paymentId)
    // }
    
    render() {
        debugger
        return (
            <div className="confirmation-container">
                <div className="confirmation-wrapper">
                    <div className="confirmation-content">
                        <img className="confirmation-image" src={window.check_icon} alt=""/>
                        <div className="confirmation-text">You've sent ${this.props.payment.amount}</div>
                    </div>
                    <Link className="confirmation-button" to="/myaccount/pay">Send More Money
                        {/* <button className="confirmation-link1"></button> */}
                    </Link>
                    
                    <Link className="confirmation-link" to="/myaccount">Go to Summary</Link>
                </div>
            </div>
        )
    }
}

export default PaymentShow;