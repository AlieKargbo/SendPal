import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            amount: '',
            note: ''
        };
    }
    
    componentDidMount(){
        debugger
        if(this.props.formType === "update_request") {
            this.props.fetchRequest(this.props.match.params.requestId);
        }
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit() {
        event.preventDefault();

        if (Number(this.state.amount) >= 0) {
            this.props.updateRequest({
                amount: this.state.amount,
                note: this.state.note,
            })
        } else { 
            return "errors"
        }
    };


    render() {
        // const { formType, request, updateRequest } = this.props;
        debugger
        // const request = this.props.requests;
        // if (!request) return null;
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <br/>
                    <label>AMOUNT</label>
                    <input
                        type="text"
                        value={this.state.amount} //prefilled
                        placeholder="AMOUNT"
                        onChange={this.update('amount')}
                        required={true}
                    />
                    <label>NOTE</label>
                    <input 
                        type="text"
                        value={this.state.note}
                        onChange={this.update('note')}
                        required={true}
                    />
                    <input 
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