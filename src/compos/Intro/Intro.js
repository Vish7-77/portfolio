import React from 'react'
import "./intro.css"
import me from "../img/me.png"

const intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrap">
                    <h2 className="i-intro"> Hello, my name is </h2>
                    <h1 className="i-name"> Vishal gehlot </h1>
                    <div className="i-title">
                        <div className="i-title-wrap">
                            <div className="i-title-item">
                                Web-developer
                            </div>
                            <div className="i-title-item">
                            Native-developer
                            </div>
                            <div className="i-title-item">
                                Graphic-desaigner
                            </div>
                            <div className="i-title-item">
                                cinematographer
                            </div>
                        </div>
                    </div>
                    <p className="i-desc"> Hello there its Vishal, i use React-js to develop and code my all projects with development i am a cinematographer also and a graphic-designer</p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="me" className='i-img'/>
            </div>
        </div>
    )
}

export default intro
