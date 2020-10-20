import { connect } from "react-redux";
import PaymentForm from "./payment_form";
import { createPayment, fetchAllPayments } from "../../actions/payment_actions";
import { fetchUser } from "../../actions/user_actions"

const mapSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        allUsers: Object.values(state.entities.users),
        formType: 'send_payment'
    })
}

const mapDTP = (dispatch) => {
    return ({
        createPayment: (paymentId) => dispatch(createPayment(paymentId)),
        // fetchAllPayments: () => dispatch(fetchAllPayments()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
}

export default connect(mapSTP, mapDTP)(PaymentForm)