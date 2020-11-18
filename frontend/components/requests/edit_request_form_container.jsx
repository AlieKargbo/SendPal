import EditRequestForm from "./edit_request_form";
import { connect } from 'react-redux';
import { fetchRequest, updateRequest } from "../../actions/request_actions";

const mapSTP = (state, ownProps) => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        // request: state.entities.requests[ownProps.match.params.requestId],
        request: state.entities.requests,
        formType: 'update_request',
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchRequest: (requestId) => dispatch(fetchRequest(requestId)),
        updateRequest: (request) => dispatch(updateRequest(request))
    });
}

export default connect(mapSTP, mapDTP)(EditRequestForm)