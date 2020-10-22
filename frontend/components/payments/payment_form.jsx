import React from 'react';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = this.props.payments;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // debugger
        // this.state = {
        //     amount: '',
        // };
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
                }).then(() => this.props.history.push("/myaccount"))
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

    // handleChange(e) {
    //     const re = /[0-9.]+/g;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         this.setState({ value: e.target.value });
    //     }
    // }
    // let errors = this.props.errors.map((error, idx) => {
    //     return <ul key={idx}>{error}</ul>
    // })

    render() {
    // debugger
        return (
            <div className="form-content">
                <div className="form-container">
                    <div className="form-box">
                        <div>
                            <form className="form-fields" onSubmit={() => this.handleSubmit("jdeezy@noblecheetah.io")}>
                                <div className="form-header">
                                    <img src={window.test_user} alt=""/>
                                    <h1>YourPal@cheetahs.io</h1>
                                </div>
                                <input className="form-amount"
                                    type="text"
                                    // pattern="[0-9]*" 
                                    placeholder="$0.00" 
                                    onChange={this.update('amount')}
                                    // onChange={this.handleChange}
                                    // value={this.state.amount}
                                    />
                                <input className="note-box"
                                    type="text" 
                                    placeholder="Add a note"
                                    onChange={this.update('note')}
                                    />
                                <div className="form-button">
                                    <input
                                        type="submit"
                                        className="continue-Btn"
                                        value="Send to Pal"
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
                            Are you sure you want to send the payment? There are no take-backs!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PaymentForm;