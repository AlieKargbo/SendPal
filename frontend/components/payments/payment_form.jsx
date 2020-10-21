import React from 'react';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = this.props.payments;
        this.handleSubmit = this.handleSubmit.bind(this)
        // debugger
    };

    componentDidMount(){
        // debugger
        this.props.fetchUsers();
    };
    

    //update function will update

    handleSubmit(email) {
        event.preventDefault();
        this.props.allUsers.map((user) => {
            if(user.email === email){
                this.userId = user.id 
            }
        })
        // debugger

        if(this.props.currentUser.balance >= Number(this.state.amount) && Number(this.state.amount) !== 0){
            // debugger
            this.props.createPayment({
                    amount: this.state.amount, 
                    note: this.state.note,
                    payer_id: this.props.currentUser.id,
                    payee_id: this.userId
                })
        } else {
            return "errors" // create error props
        }
        // make check if user exists && sufficient balance on the backend
           // execute payment
            // else send errors    
            // let newBalance = (this.props.currentUser.balance - this.props.payment.amount)
            // if(this.props.currentUser.balance > 0) && amount user is going to pay{
            //     return newBalance;
            // }
    };

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
    // debugger
    // const friend = this.props.email
        return (
            <div className="send-content">
                <div className="send-container">
                    <div className="send-box">
                        <div>
                            <form className="send-fields" onSubmit={() => this.handleSubmit("jdeezy@noblecheetah.io")}>
                                <div className="send-header">
                                    <img src={window.test_user} alt=""/>
                                    <h1>NewCheetah16@cheetahs.io</h1>
                                </div>
                                <input className="send-amount"
                                    type="text" 
                                    placeholder="$0.00" 
                                    onChange={this.update('amount')}
                                    />
                                <input className="note-box"
                                    type="text" 
                                    placeholder="Add a note"
                                    onChange={this.update('note')}
                                    />
                                <div className="send-button">
                                    <input
                                        type="submit"
                                        className="continue-Btn"
                                        value="Continue"
                                        // onClick={() => this.props.createPayment(this.props.payments.id)}
                                        
                                        />
                                </div>
                            </form>
                            <div className="cancel-link">
                                <Link className="cancel-text" to="/myaccount">Cancel</Link>
                            </div>
                        </div>
                    </div>
                    <div className="message-container">
                        <div className="message">
                            Are you sure you want to send money to me?
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PaymentForm;