import { connect } from "react-redux";
import Greeting from "./greeting";
import { login, logout, signup } from "../../actions/session_actions";

const mapSTP = (state) => {
    return ({
        user: state.entities.users[state.session.id]
    })
}

const mapDTP = (dispatch) => {
    return ({
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout())
    })

}

export default connect(mapSTP, mapDTP)(Greeting)