import{ React,useEffect} from 'react'
import './About.css'
import Me from '../../img/me1.jpg'
import Aos from 'aos';
import {Button} from '@mui/material';
import 'aos/dist/aos.css';
function About() {
  useEffect(()=>{
   Aos.init();
  },[])
  return (
    <div data-aos="fade-zoom-in" data-aos-offset="400" className='a'>
        <div className="a-Left">
<div className="a-card bg"></div>
<div className="a-card">
    <img src={Me} alt="" className="a-card-img" />
</div>
        </div>
        <div className="a-Right">
<h1 className="a-title">ABOUT ME</h1>
<p className="a-descp">
    Hello! My name is Hassan ALi Khan,</p>
<p className="a-descp">
    I am Mern Stack developer.</p>
<p className="a-descp">
    My passion is making ideas come to life, be it working solo, as part of a team.</p>
<p className="a-descp">
    I am resposinble for build modern-day UI components to improvise application performance
    and for writing server-side web application logic in JavaScript.
</p>
<a href='/assets/file/hassanaliresume.pdf' target='_blank'  tabIndex='0'><Button className='getcv-button' variant='contained'>Get Resume</Button></a>
        </div>
    </div>
  )
}

export default About