import React from 'react';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.payment;
        this.handleSubmit = this.handleSubmit.bind(this)
        // set state to user or payment?

    };

    componentDidMount(){
        //fetch all the users
        this.props.fetchUser(this.props.match.params.userId)
    };
    

    //update function will update

    handleSubmit(e) {
        e.preventDefault();
        const payment = Object.assign({}, this.state);
        // createPayment: (paymentId) => dispatch(createPayment(paymentId))
            this.props.createPayment({
                amount: this.state.amount,
                note: this.state.note,
                payer_id: this.props.currentUser,
                // payee_id: ??
            })

            //this,setState
    };

    sendPay() {
        let newBalance = (this.props.user.balance - this.props.payment.amount)

        return newBalance;
    };

    render() {

        return (
            <div className="send-content">
                <div className="send-container">
                    <div className="send-box">
                        <h1>PAL's NAME</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="$0.00" />
                            <input type="text" placeholder="Add a note"/>
                        </form>
                    </div>
                    <div className="message-container">
                        <div className="message">
                            Are you sure you want to send money to me?
                        </div>
                    </div>
                    <button className="continue-Btn">Continue</button>
                </div>
            </div>
        )
    }
};

export default PaymentForm;