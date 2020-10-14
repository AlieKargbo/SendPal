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
                Sign Up
            </Link >
        ) : (
            <Link to="/login" >
                Log In
            </Link >    
        );

        const toggleText = (this.props.formType === "login") ? (
            <text>
                Log In
            </text>
        ) : (
            <text>
                Sign Up
            </text >
        );

        let errors = this.props.errors.map((error, idx) => {
            return <li key={idx}>{error}</li>
        })
        
        return (
            <div className="form-main">
                <section className="form-container">
                    <div className="form-header">
                        <div className="contentContainer">
                            <header>
                                <p className="form-header"></p>
                                <img className="sendpal-logo-long" src="/assets/sendpal.jpg" />
                            </header>
                            <form onSubmit={this.handleSubmit}>
                                <div className="clearfix">
                                    <div className="formInput">
                                        <div className="formField">
                                            <label className="fieldLabel">Email</label>
                                            <input type="email" 
                                                value={this.state.email}
                                                onChange={this.update('email')} 
                                                placeholder="Email" 
                                            />
                                        </div>
                                    </div>
                                    <div className="formInput">
                                        <div className="formField">
                                            <label className="fieldLabel">Password</label>
                                            <input type="password" 
                                                onChange={this.update('password')}
                                                placeholder="Password"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="actionsSpaced">
                                    <button className="button actionContinue"
                                        value={this.props.formType}>{toggleText}
                                    </button>
                                </div>
                            </form>

                            <Link class="button secondary" id="createAccount">{otherButton}</Link>
                        </div>
                    </div>
                </section>
            </div>
            )
        }
    }


    export default SessionForm;