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
                                <img className='senpal-logo' src="/assets/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className='login-button'>
                            <Link to={`/login`}>
                              <button>Log In</button>
                            </Link>
                            <Link to={`/signup`}>
                              <button>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='content-container'>
                        <div className='content-image-container'>
                            <img className="homepage-img" src="https://www.paypalobjects.com/marketing/ps/us/MORS_Home_Page_Placement_US_1600x530_V2.png" alt="" />
                        </div>
                        <div className='demo'>
                            <p className='main-message'>Send Money Today!</p>
                            <Link className='demo-link' to="/">
                                <button className='demo-button'>Demo</button>
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

        // <div className="homepage">
        //     <div className="homepage-text">
        //         <h1>SendPal Splash Page</h1>
        //         <div className="btnSplash">
        //             <Link to={`/login`}>
        //                 <button>Login</button>
        //             </Link>
        //             <Link to={`/signup`}>
        //                 <button>Sign Up</button>
        //             </Link>
        //         </div>
        //         <img className="homepage-img" src="https://www.paypalobjects.com/marketing/ps/us/MORS_Home_Page_Placement_US_1600x530_V2.png" alt=""/>
        //         {/* <img src="https://www.paypalobjects.com/marketing/web/shared/mobile-apps/paypal-app/xoom.png" alt=""/> */}
        //     </div>
        // </div>