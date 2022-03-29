import {React,useEffect} from 'react'
import './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
function Skills() {
    useEffect(()=>{
     Aos.init();
    },[])
  return (
    <div className='s' style={{color:'#222'}}>
        <div  data-aos="flip-up" data-aos-delay="400"  className="s-wrapper">
        <div className="s-top">
            <h1 className="s-title">SKILLS</h1>
        </div>
        <div className="s-bottom">
            <ul className="s-bottom-list">
                <li className="s-list-item">Node js</li>
                <li className="s-list-item">React js</li>
                <li className="s-list-item">Mongo db</li>
                <li className="s-list-item">Express js</li>
                <li className="s-list-item">Javascript</li>
                <li className="s-list-item">Html</li>
                <li className="s-list-item">Css</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Skills