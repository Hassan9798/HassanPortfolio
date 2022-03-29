import React, { useContext } from 'react'
import './Toggle.css' 
import Sunicon from '../../img/sunicon.png'
import Moonicon from '../../img/moonicon.png'
import { ThemeContext } from '../../context'
function Toggle() {
  const theme=useContext(ThemeContext);
  const handleClick=(e)=>{
    e.preventDefault();
    theme.dispatch({type:'TOGGLE'});
  }
  return (
    <div className='t'>
        <img src={Sunicon} alt="" className="t-icon" />
        <img src={Moonicon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left:theme.state.darkmode?0:25}}>

        </div>
    </div>
  )
}

export default Toggle