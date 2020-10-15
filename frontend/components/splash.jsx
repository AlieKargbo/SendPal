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
                        <div className='content-image-container'>
                                <img className="homepage-img" src={window.sendpalBanner} alt="" />
                        </div>
                        <div className='signup'>
                            <p className='main-message'>Send Money Today!</p>
                            {/* <Link to={`/signup`}>
                              <button>Sign Up</button>
                            </Link> */}

                            <Link className='signup-link' to="/signup">
                                <button className='signup-button'>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
        )            
    }
}

export default Splash;