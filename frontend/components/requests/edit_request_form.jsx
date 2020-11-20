import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.request;
        // {
        //     // id: this.props.request.id,
        //     email: this.props.requestee.email,
        //     amount: this.props.request.amount,
        //     note: this.props.request.note
        // };
    }
    
    // componentDidMount(){
    //     debugger
    //     this.props.fetchRequest(this.props.requestId);
    // }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit() {
        // debugger
        event.preventDefault();

        if (Number(this.state.amount) >= 0) {
            this.props.updateRequest(this.state)
            .then(() => this.props.closeModal())
        } else { 
            return "errors"
        }
    };


    render() {
        // const { formType, request, updateRequest } = this.props;
        // debugger
        // const request = this.props.requests;
        // if (!request) return null;
        return (
            <div className="edit-request-container" >
                <div className="edit-request-wrapper">
                    <div className="edit-request-header">
                        <h1>REQUESTEE EMAIL HERE</h1>
                        <h1 className="request-amount">$ AMOUNT HERE</h1>
                    </div>
                    <div className="edit-details-wrapper">
                        <div className="left-details-wrapper">
                            <div className="left-details">
                                <h2>Requested By</h2>
                                <p>Requestor Email</p>
                            </div>
                            <div className="left-details">
                                <h2>Transaction ID</h2>
                                <p>request ID here</p>
                            </div>
                        </div>
                        <form className="edit-form" onSubmit={this.handleSubmit}>
                            <br/>
                            <label>NOTE</label>
                            <input 
                                type="text"
                                value={this.state.note}
                                onChange={this.update('note')}
                                required={true}
                            />
                            <label>AMOUNT</label>
                            <input
                                type="text"
                                value={this.state.amount} //prefilled
                                placeholder="AMOUNT"
                                onChange={this.update('amount')}
                                required={true}
                            />
                            <input className="edit-request-btn"
                                type="submit"
                                value="Edit Request"
                            />
                        </form>
                    </div>
                </div>
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