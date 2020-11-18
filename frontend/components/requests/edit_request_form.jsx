import React from 'react';
import { Link } from 'react-router-dom';

class EditRequestForm extends React.Component {
    componentDidMount(){
        this.props.fetchRequest(this.props.match.params.requestId);
    }

    render() {
        const { formType, request, updateRequest } = this.props;
        
        if (!request) return null;
        return (
            <div>
                return null
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