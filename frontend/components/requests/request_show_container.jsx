import { connect } from 'react-redux';
import RequestShow from './request_show';
import { fetchRequest } from '../../actions/request_actions';

const mapSTP = (state, ownProps) => {
    // debugger
    return ({
        request: state.entities.requests,
        requestor: state.entities.users[state.entities.requests.requestor_id],
        requestee: state.entities.users[state.entities.requests.requestee_id]
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchRequest: (requestId) => {
            return dispatch(fetchRequest(requestId));
        },
    });
};

export default connect(mapSTP, mapDTP)(RequestShow);