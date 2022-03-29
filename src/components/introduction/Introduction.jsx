import React from 'react'
import './Introduction.css';
import Me from '../../img/me1.jpg';
function Introduction() {
  return (
    <div className='intro'>
        
        <div className="introLeft">
            <div className="introLeftWrapper">
                <h2 className='i-Intro'>Hello,My Name is</h2>
                <h1 className='i-Name'>Hassan Ali Khan</h1>
                <div className="introTitle">
                    <div className="introTitleWrapper">
                        <div className="introTitleItem">Node Js</div>
                        <div className="introTitleItem">React Js</div>
                    </div>
                </div>
                <div className="introDescp">
                    I am FullStack Developer,
                    i design and develop services for customers of all sizing
                </div>
            </div>
        </div>
        <div className="introRight">
            <div className="intro-bg"></div>
            {/* <img src={Me} alt="" className='introImg'/> */}
        </div>
        
    </div>
  )
}

export default Introduction