import React from 'react';
import { Link } from 'react-router-dom';

class PaymentShow extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchPayment(this.props.match.params.paymentId)
    }

    render() {
        return (
            <div className="confirmation-container">
                <div className="confirmation-wrapper">
                    <div className="confirmation-content">
                        <img className="confirmation-image" src={window.check_icon} alt=""/>
                        <div className="confirmation-text">You've sent $"this.props.amount" to "user"</div>
                    </div>
                    <Link className="confirmation-button" to="/myaccount/pay">Send More Money
                        {/* <button className="confirmation-link1"></button> */}
                    </Link>
                    
                    <Link className="confirmation-link" to="/myaccount">Go to Summary</Link>
                </div>
            </div>
            // <>
            //     <h1>{this.props.post.title}</h1>
            //     <p>{this.props.post.body}</p>
            //     <Link to="/">Index</Link>
            // </>
        )
    }
}

export default PaymentShow;