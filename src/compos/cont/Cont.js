import React,{useContext} from 'react'
import "./cont.scss"
import Phone from "../img/Phone.png"
import Email from "../img/Email.png"
import lpin from "../img/lpin.png"
import { ThemeContext } from '../../Context'

const Cont = () => {
    const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode;

  return (
    <div className='c'>
        <div className='c-bg'> </div>
        <div className="c-wrap">
            <div className="c-left">
                <h1 className='c-title'>lets discuss your project</h1>
            <div className='c-info'>

                <div className='c-team'>
                    <img 
                    className='c1-icon'
                    src={Phone} alt="here" />
                    93538801**
                </div>
                <div className='c-team'>
                    <img 
                    src={Email} alt="" className='c1-icon'/>
                    vishalgehlot334@gmail.com
                </div>
                <div className='c-team'>
                    <img 
                    src={lpin} alt="" className='c1-icon'/>
                    bangalore india
                </div>
            </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>whats your story ?</b>get in touch,remember that a good product attracts a good  customer
                </p>
                <form >
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="name" name="user_name"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="subject" name="user_subject"/>
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="email" name="user_email"/>
               <textarea  style={{backgroundColor:darkMode && "#333"}} row="15" placeholder="message"/>
               <button disabled={false}>submit</button> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Cont