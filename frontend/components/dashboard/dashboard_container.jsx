import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPayments } from "../../actions/payment_actions";
import { login, logout, signup } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    debugger
    return ({
        payments: state.entities.payments,
        user: state.entities.users[state.session.id],
        authPath: (ownProps.location.pathname === "/login") || (ownProps.location.pathname === "/signup"),
        path: ownProps.location.pathname === "/"
    })
}

const mapDTP = (dispatch, ownProps) => {
    debugger
    return ({
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        resetUrl: () => ownProps.history.push("/"),
        fetchPayments: () => dispatch(fetchAllPayments())
    })

}

export default connect(mapSTP, mapDTP)(Dashboard)