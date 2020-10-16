import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{

    render(){
        return(
        <>
            <div className='main'>
                <div className='header'>
                    <div className='header-container'>
                        <div className='header-logo'>
                            <Link className='header-logo-a' to="/">
                                    <img className='senpal-logo' src={window.sendpalLogo} alt=""/>
                            </Link>
                        </div>
                        <div className='login-button'>
                            <Link to={`/login`}>
                                    <button className='bTnlogin'> Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='content-container'>
                        <div className='signup'>
                            <div className='main-message'>Send Me Money. Safely.
                                <p className='sub-message'>Securely.</p>
                                <button className='signup-button' to="/signup">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className='content-image-container'>
                        <img className="homepage-img"/>
                    </div>
                    <div className="covid">
                        <p className="covid-message">Learn how we're responding to COVID-19 and how we can help your business adapt</p>
                    </div>
                </div>
            </div>
        </>
        )            
    }
}

export default Splash;