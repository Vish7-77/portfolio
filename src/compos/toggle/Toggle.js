import React,{useContext} from 'react'
import "./toggle.scss"
import sun from "../img/sun.png"
import moon from "../img/moon.png"
import { ThemeContext } from '../../Context'
const Toggle = () => {
    const theme=useContext(ThemeContext)
  const handleClick=()=>{
    theme.dispatch({type:"TOGGLE" })
  }
  return (
    <div className="t">
<img className='t-icon' src={sun} alt=''/>
<img className='t-icon' src= {moon} alt=''/>
  <div className='t-button' style={{left:theme.state.darkMode ? 25:0}}onClick={handleClick}> </div>
  
    </div>
  )
}

export default Toggle