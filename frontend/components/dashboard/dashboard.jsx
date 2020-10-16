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
        // if (!this.props.path && !this.props.authPath){
        //     this.props.history.push("/")
        // }
        // render navbar at top
        // render left component
          // balance component
        // render right component
          // send and request buttons
          // friends comp
            //friendsIndex
        if (this.props.user) {
            return (
                <>
                    <h1>Welcome to SendPal!</h1>
                    <h2>Dashboard Component</h2>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={this.handleClick}>Logout</button>
                </>
            )
        } 
    }
}

export default Dashboard;