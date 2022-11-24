import React from "react";
import { useState } from "react";


const TopBar = () => {
    const [active, setActive] = useState();
    

    function something() 
    {
        if(active === 'active')
        {
            setActive('notactive');
        }
        else
        {
            setActive('active');
        }

        console.log(active);
    }

  



    return (
        <div className="top-bar" style={active === 'active' ? {left: '0px'} : {left: '-140px'}}>
            <button onClick={something} className="top-bar-button" style={active === 'active' ? {left: '140px'} : {left: '0px'}}>{active === 'active' ? <i className="fa-solid fa-arrow-left"></i> : <i className="fa-solid fa-arrow-right"></i>}</button>
            <div className="top-bar-right">
                <a href="#about" className="top-category">About Me</a>
                <a href='#skills' className="top-category">Skills</a>
                <a href='#experience' className="top-category">Experience</a>
                <a href='#projects' className="top-category">Projects</a>
                <a href="https://drive.google.com/file/d/1sHfGGrQ9Q8U1fpw2JOlpS3-FQH-wJkbF/view?usp=share_link"><button className="download-btn">Download</button></a>
            </div>
            <div className="top-bar-left">
                <div>Made by Dan Adrian V1.0</div>
            </div>
        </div>
    )
}

export default TopBar;

