import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
            .then(() => this.props.history.push("/login"))
    }

    render() {
        // ?<Redirect to="/myaccount" /> 
        if (this.props.user) {
            return (
                <>
                    <h2>Welcome to SendPal,  {this.props.user.email}!</h2>
                    <button onClick={this.handleClick}>Logout</button>
                </>
            )
        } else {
            return (
                <>
                    <Link to={`/signup`}>
                        <button>Sign Up</button>
                    </Link>
                    <Link to={`/login`}>
                        <button>Login</button>
                    </Link>
                </>
            )
        }
    }
}

export default Greeting