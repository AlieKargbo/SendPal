import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { login, logout, signup } from "../../actions/session_actions";

const mapSTP = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        authPath: (ownProps.location.pathname === "/login") || (ownProps.location.pathname === "/signup"),
        path: ownProps.location.pathname === "/"
    })
}

const mapDTP = (dispatch, ownProps) => {
    return ({
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        resetUrl: () => ownProps.history.push("/")
    })

}

export default connect(mapSTP, mapDTP)(Dashboard)