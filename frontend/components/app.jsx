import React from "react";
import DashboardContainer from "./dashboard/dashboard_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from ".././util/route_util"
import Splash from "./splash"
import FooterLinks from "./footer"
import NavBar from "./navbar"

const App = () => (
    <div>
        {/* <header>
            <NavBar/>
        </header> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/myaccount" component={DashboardContainer}/>
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
        <footer>
            <FooterLinks />
        </footer>
    </div>
);



export default App;