import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            payment: ''
        };
    }
    
    componentDidMount(){
        this.props.fetchRequest(this.props.match.params.requestId);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(email) {
        event.preventDefault();

        if (Number(this.state.amount) >= 0) {
            this.props.updateRequest({
                amount: this.state.amount,
                note: this.state.note,
                requestor_id: this.props.currentUser.id,
                requestee_id: this.userId
            })
        } else { 
            return "errors"
        }
    };


    render() {
        const { formType, request, updateRequest } = this.props;
        
        if (!request) return null;
        return (
            <div>
                <form action="">
                    <input className="form-amount"
                        type="text"
                        value={this.state.amount} //prefilled
                        onChange={this.update('amount')}
                        required={true}
                    />
                    <input className="note-box"
                        type="text"
                        value={this.state.note}
                        onChange={this.update('note')}
                        required={true}
                    />
                    <input className="edit-request-btn"
                        type="submit"
                        value="Edit Request"
                    />
                </form>
            </div>
            // <RequestForm
            // formType={formType}
            // request={request}    
            // updateRequest={updateRequest}
            // />
        )
    };
};

export default EditRequestForm;