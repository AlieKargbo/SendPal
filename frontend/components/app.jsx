import React from "react";
import GreetingContainer from "./greetings/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { Route } from "react-router-dom";
import { AuthRoute } from ".././util/route_util"
import Splash from "./splash"

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        {/* <Route exact path="/" component={GreetingContainer}/> */}
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;