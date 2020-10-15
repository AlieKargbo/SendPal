import React from "react";
import GreetingContainer from "./greetings/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import Splash from "./splash"


const App = () => (
    <div>
        {/* <header>

        </header> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/myaccount" component={GreetingContainer}/>
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
        {/* <footer>
            <FooterLinks />
        </footer> */}
    </div>
);



export default App;