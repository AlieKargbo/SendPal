import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    componentDidMount(){
        this.props.fetchRequest(this.props.match.params.requestId);
    }
    
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { formType, request, updateRequest } = this.props;
        
        if (!request) return null;
        return (
            <div>
                <form action="">
                    <input className="form-amount"
                        type="text"
                        placeholder="$0.00"
                        onChange={this.update('amount')}
                    />
                    <input className="note-box"
                        type="text"
                        placeholder="Add a note"
                        onChange={this.update('note')}
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