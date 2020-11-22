import React from 'react';
import { Link } from 'react-router-dom';

class RequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            payment: ''
        };
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(email) {
        event.preventDefault();
        // if formtype === "create"
        // debugger
        this.props.allUsers.map((user) => {
            if (user.email === email) {
                this.userId = user.id
            };
        });

        if (Number(this.state.amount) >= 0) {
            this.props.createRequest({
                amount: this.state.amount,
                note: this.state.note,
                requestor_id: this.props.currentUser.id,
                requestee_id: this.userId
            }).then(() => this.props.history.push(`/req_confirmation/${this.props.request.id}`))
        } else { 
            return "errors" // create error props
        }
    };

    // handleChange(e) {
    //     const re = /[0-9.]+/g;
    //     if (e.target.value === '' || re.test(e.target.value)) {
    //         this.setState({ value: e.target.value });
    //     }
    // }

    render(){
        let users = this.props.allUsers;
        let options = users.map((user) =>
            <option key={user.email}>{user.email}</option>)
        // debugger
        return (
            
            <div className="form-content">
                <div className="form-container">
                    <div className="form-box">
                        <div>
                            <form className="form-fields" onSubmit={() => this.handleSubmit(this.state.email)}>
                                <div className="form-header">
                                    <img src={window.test_user} alt="" />
                                </div>
                                <select className="form-email"
                                    // type="email"
                                    placeholder="Email"
                                    onChange={this.update('email')}>
                                    {options}
                                </select>
                                <input className="form-amount"
                                    type="text"
                                    // pattern="[0-9]*" 
                                    placeholder="$0.00"
                                    onChange={this.update('amount')}
                                    // onChange={this.handleChange}
                                    // value={this.state.value}
                                />
                                <input className="note-box"
                                    type="text"
                                    placeholder="Add a note"
                                    onChange={this.update('note')}
                                />
                                <div className="request-button">
                                    <input
                                        type="submit"
                                        className="continue-Btn"
                                        value="Request from Pal"
                                    // onClick={() => this.props.createPayment(this.props.payments.id)}
                                    />
                                </div>
                            </form>
                            <div className="cancel-link">
                                <Link className="cancel-text" to="/myaccount">Cancel</Link>
                            </div>
                        </div>
                    </div>
                    <div className="form-message-container">
                        <div className="message">
                            Are you sure you want REQUEST payment? There are no take-backs!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestForm;