import React from 'react';
import './Contact.css';
import FacebookLogo from '../../img/facebooklogo.png'
import Githublogo from '../../img/githublogo.png'
import Linkedinlogo from '../../img/linkedinlogo.png'
function Contact() {
  return (
    <div className='c'>
        <div className="c-top">
            <h1 className="c-title">CONTACT</h1>
            {/* <h1 className="c-title">Hassan Ali Khan</h1> */}
        </div>
        <div className="c-bottom">
            <div className="c-itemlist">
                <div className="c-item"><a href='https://www.facebook.com/profile.php?id=100001815415341' target='_blank'> <img src={FacebookLogo} alt="" className="c-item-logo" /></a></div>
                <div className="c-item"><a href='https://github.com/Hassan9798' target='_blank'><img src={Githublogo} alt="" className="c-item-logo" /></a></div>
                <div className="c-item"><a href='https://www.linkedin.com/in/hassan-ali-630651205/' target='_blank'><img src={Linkedinlogo} alt="" className="c-item-logo" /></a></div>
            </div>
        </div>
    </div>
  )
}

export default Contact