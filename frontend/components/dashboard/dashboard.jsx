import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
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
                    <h2>Welcome to SendPal!</h2>
                    <button onClick={this.handleClick}>Logout</button>
                </>
            )
        } 
    }
}

export default Dashboard;