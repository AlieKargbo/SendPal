import React from 'react';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = this.props.payments;
        // this.handleChange = this.handleChange.bind(this);
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            payment: ''
        };
    };

    componentDidMount(){
        // debugger
        this.props.fetchUsers();
    };

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
                .then((res) => {
                    // debugger    
                    this.props.history.push(`/confirmation/${this.props.payment.id}`)})                
                    // .then(() => this.props.history.push("/myaccount"))
        } else {
            return "errors"
        }
    };

    update(field) {
        return (e) => this.setState({ [field]: (e.currentTarget.value) })
    }
    
    // handleChange(e) {
        // const re = /[0-9.]+/g;
        // if (e.target.value === '' || re.test(e.target.value)) {
        //     this.setState({ value: e.target.value });
        // }
        // }
    // let errors = this.props.errors.map((error, idx) => {
    //     return <ul key={idx}>{error}</ul>
    // })

    render() {
    // debugger
        let users = this.props.allUsers;
        let options = users.map((user) => 
            <option key={user.email}>{user.email}</option>)
        return (
            <div className="form-content">
                <div className="form-container">
                    <div className="form-box">
                        <div>
                            <form className="form-fields" onSubmit={() => this.handleSubmit(this.state.email)}>
                                <div className="form-header">
                                    <img src={window.test_user} alt=""/>
                                </div>
                                <select className="form-email"
                                    // type="email"
                                    placeholder="Email"
                                    onChange={this.update('email')}>
                                    {options} 
                                </select>
                                {/* <input className="form-email"
                                    type="email" 
                                    placeholder="email"
                                    onChange={this.update('email')}/> */}
                                <input className="form-amount"
                                    // type="number"
                                    inputMode="numeric"
                                    step="0.01"
                                    min="0.00"
                                    // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                                    // data-type="currency"
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