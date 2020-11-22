import { connect } from 'react-redux';
import PaymentShow from './payment_show';
import { fetchPayment } from '../../actions/payment_actions';

const mapSTP = (state, ownProps) => {
    return ({
        payment: state.entities.payments,
        payer: state.entities.users[state.entities.payments.payer_id],
        payee: state.entities.users[state.entities.payments.payee_id]
        // payment: state.entities.payments[ownProps.match.params.paymentId],
    })
}

const mapDTP = (dispatch) => {
    return ({
        fetchPayment: (paymentId) => {
            return dispatch(fetchPayment(paymentId));
        },
    });
};

export default connect(mapSTP, mapDTP)(PaymentShow);