import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    render(){
        return(
        <div className="homepage">
            <div className="homepage-text">
                <h1>SendPal Splash Page</h1>
                <div className="btnSplash">
                    <Link to={`/login`}>
                        <button>Login</button>
                    </Link>
                    <Link to={`/signup`}>
                        <button>Sign Up</button>
                    </Link>
                </div>
                <img className="homepage-img" src="https://www.paypalobjects.com/marketing/ps/us/MORS_Home_Page_Placement_US_1600x530_V2.png" alt=""/>
            </div>
        </div>
        )            
    }
}

export default Splash;
