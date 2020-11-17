import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPayments } from "../../actions/payment_actions";
import { fetchAllRequests } from "../../actions/request_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { login, logout, signup } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    // debugger
    return ({
        authPath: (ownProps.location.pathname === "/login") || (ownProps.location.pathname === "/signup"),
        path: ownProps.location.pathname === "/",
        user: state.entities.users[state.session.id],
        users: state.entities.users,
        payments: Object.values(state.entities.payments),
        requests: Object.values(state.entities.requests)
    })
}

const mapDTP = (dispatch, ownProps) => {
    // debugger
    return ({
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        resetUrl: () => ownProps.history.push("/"),
        fetchUsers: () => dispatch(fetchAllUsers()),
        fetchPayments: (userId) => dispatch(fetchAllPayments(userId)),
        fetchRequests: (userId) => dispatch(fetchAllRequests(userId))
    })

}

export default connect(mapSTP, mapDTP)(Dashboard)