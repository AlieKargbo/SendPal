import React from 'react';

 const FooterLinks = () => {

    const linkedIn = "https://www.linkedin.com/in/trivta/"
    const gitHub = "https://github.com/iamtreetop"

    return (
        <>
            <div className='footer'>
                <div className='icons-wrapper'>
                    <div className='icons-container'>
                        <div className='icon'>
                            <a href={linkedIn} className="footer-links">
                                <img src={window.linkedIn} alt="" />
                            </a>
                        </div>
                        <div className='icon'>
                            <a href={gitHub} className="footer-links">
                                <img src={window.gitHub} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterLinks;