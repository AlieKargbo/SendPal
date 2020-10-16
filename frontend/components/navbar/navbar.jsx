import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class NavBar extends React.Component{
    render (){
        if (this.props.user) {
            return (
                <>
                    <div className="nav-main">
                        <section className="nav-logo" >
                            <Link to="/myaccount">
                                <img className='senpal-logo' src={window.sendpalLogo} alt="" />
                            </Link>
                        </section>

                        <nav className="nav-section">
                            <ul className="nav-list">
                                <li to="/myaccount" className="nav-link">SEND</li>
                                <li to="/myaccount" className="nav-link">REQUEST</li>
                                {/* <li to="/myaccount" className="nav-link-header">REQUEST</li> */}
                            </ul>
                        </nav>
                        
                        <div className="nav-buttons">
                            <button className="nav-button" id="signup">Log out</button>
                        </div>
                    </div>
                    
                </>
            )
        }
    }
};

export default NavBar;