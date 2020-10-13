import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push("/"))

        this.setState({
            email: "",
            password: ""
        });;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }
 
    render(){
        const header = (this.props.formType === "login") ? "Log In!" : "Sign Up!"
        
        const otherButton = (this.props.formType === "login") ? (
            <Link to="/signup" >
                <button>Signup</button>
            </Link >
        ) : (
            <Link to="/login" >
                <button>Login</button>
            </Link >    
        );
        
        return (
        <form onSubmit={this.handleSubmit}>
            {otherButton}
            <h1>{header}</h1>
            <label>Email:
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
            </label>
            <label>Password:
                <input
                    type="password"
                    onChange={this.update('password')}
                />
            </label>
            <input
                type="submit"
                value={this.props.formType}
            />
        </form>
        )
    }

}

export default SessionForm;