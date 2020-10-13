import React from "react";
import GreetingContainer from "./greetings/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { Route } from "react-router-dom";

// NB: this file is complete - you do not to write/edit anything!
const App = () => (
    <div>
        <header>
            <h1>$$SENDPAL$$</h1>
            <Route exact path="/" component={GreetingContainer}/>
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;