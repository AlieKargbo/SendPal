import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, signup, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<Root/>, root)
    window.login = login;
    window.logout = logout;
    window.signup = signup;
})