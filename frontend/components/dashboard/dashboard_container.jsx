import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPayments } from "../../actions/payment_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { login, logout, signup } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    debugger
    return ({
        payments: Object.values(state.entities.payments),
        user: state.entities.users[state.session.id],
        users: state.entities.users,
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
        fetchPayments: (userId) => dispatch(fetchAllPayments(userId)),
        fetchUsers: () => dispatch(fetchAllUsers())
    })

}

export default connect(mapSTP, mapDTP)(Dashboard)