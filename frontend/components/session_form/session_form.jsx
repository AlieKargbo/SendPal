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

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push("/"))

        this.setState({
            email: "",
            password: ""
        });
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }
 
    render(){
        const header = (this.props.formType === "login") ? "Already a Member? Log In." : "Don't have an account? Sign Up Today!"
        
        const otherButton = (this.props.formType === "login") ? (
            <Link to="/signup" >
                <button>Signup</button>
            </Link >
        ) : (
            <Link to="/login" >
                <button>Login</button>
            </Link >    
        );
        let errors = this.props.errors.map((error, idx) => {
            return <li key={idx}>{error}</li>
        })
        
        return (
        <div className="session-form">
            <header>💲ENDPAL</header>
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
                {errors}
                <button>{this.props.formType}</button>
            </form>
        </div>
        )
    }

}

export default SessionForm;