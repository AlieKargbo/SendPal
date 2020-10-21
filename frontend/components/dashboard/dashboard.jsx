import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
            .then(() => this.props.history.push("/login"))
    }

    render() {
        // debugger
        // ?<Redirect to="/myaccount" /> 
        // if (!this.props.path && !this.props.authPath){
        //     this.props.history.push("/")
        // }
        // render navbar at top
        // render left component
          // balance component
        // render right component
          // send and request buttons
          // friends comp
            //friendsIndex
        if (this.props.user) {
            // debugger
            return (
                <div className="dashboard">
                    <div className="dashboard-content-container">
                        <section className="left-container">
                            <div className="greeting-container">
                                <p className="greeting-message"></p> Why, Hello There.
                            </div>
                            <div className="balance-container">
                                <h3 className="balance-header-message">SendPal Balance</h3>
                                {/* <div className="overflow-image">
                                    <button className="three-dots">* * *</button>
                                </div> */}
                                <span className="currency-balance">${this.props.user.balance}</span>
                                <span className="currency-balance-message">Available in your SendPal Cash Account</span>
                                <button className="pay-btn">
                                    <Link className="pay-link" to="/myaccount/pay">Transfer Money</Link>
                                </button>
                            </div>
                        </section>

                        <section className="right-container">
                            <div className="transaction-container">
                                <ul className="transaction-Btns">
                                    <div className="quicklink-btns">
                                        <button id="transaction-Btn">
                                            <Link to="/myaccount/pay" ><img id="transaction-Btn-icon1" src={window.send_icon} alt=""/></Link>
                                        </button>
                                        <div id="quicklinks">Send</div>
                                    </div>
                                    <div className="quicklink-btns">
                                        <button id="transaction-Btn">
                                            <Link to="/myaccount/request" ><img id="transaction-Btn-icon2" src={window.request_icon} alt=""/></Link>
                                        </button>
                                        <div id="quicklinks">Request</div>
                                    </div>
                                </ul>
                            </div>

                            <div className="pals-container">
                                <h3 className="pals-header">PALS</h3>
                                <ul className="pals-list">
                                    <button id="pals">A B</button>
                                    <button id="pals">C D</button>
                                    <button id="pals">E F</button>
                                    <button id="pals">G H</button>
                                </ul>
                            </div>


                            <ul className="recent-activity">
                                <li id="activity">ACTIVITY 1</li>
                                <li id="activity">ACTIVITY 2</li>
                                <li id="activity">ACTIVITY 3</li>
                            </ul>
                        </section>

                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Dashboard;