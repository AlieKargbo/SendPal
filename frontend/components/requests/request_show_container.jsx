import { connect } from 'react-redux';
import RequestShow from './request_show';
import { fetchRequest } from '../../actions/request_actions';

const mapSTP = (state, ownProps) => {
    return ({
        request: state.entities.requests
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