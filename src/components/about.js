import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('show')
                    entry.target.classList.remove('hidden')
                }
                else
                {
                    console.log('321')
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });


    return (
    <div className="row" id="start">
        <section className="greeting part">
            <h2>Hello, my name is Dan Adrian. <br/><span className="comment">//or_Ady_forShort --></span></h2>
            <h3>Very = (nice) => &#10100; meet you! :D &#10101;</h3>
            <p className="introduction">myIntroduction<span>()</span> </p>
            <p className="introduction-text">&#10100;<br/>I'm a self-taught <span>Web Developer</span> that is looking forward to build some of the <span>greatest f*king websites</span> out there with a kickass team! <br/>
            I wish you a wonderful day!<br/>&#10101;</p>
        </section>

        <section className="about-me part" id="about">
            <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-12">
                    <div>
                        <h3 className="head hidden">#about-me</h3>
                    </div>
                    <div>
                        <p className="about-me-text hidden">Hello, ladies and gentlemen, my name is <span>.Adrian_Dan</span> and becoming a <span>.web-developer is my goal</span>.<br/>
                        A few years back, in my former highschool, I've got to run C code on IC's for the first time <span>...and I really enjoyed it</span>.<br/>
                        My classmates always complimented my <span>.programming-skills</span>, and I would always help them out!<br/>
                        Over the last few years, my interest in <span>.game-developing</span> and <span>.software-developing</span> peaked.<br/>
                        I started learning <span>C++, C#, LinQ</span> AAAAND I learned <span>.3D-modelling</span> by using <span>#Blender</span>.<br/></p>
                        <br/>
                        <p className="about-me-text hidden">Fast forward a year or two, I developed my interest in creating <span>.fullstack-websites</span>.
                        I started learning from courses, youtube tutorials and had to figure stuff out I couldn't find anywhere on the web.
                        I was lucky enough for some of my distant family members to open up a small business in <span>Romania</span> where I had the opportunity to work while <span>continuing to develop my webdev skills</span>.<br/>
                        Being thankful to them, I studied on how to make a working <span>#Wordpress-Website</span> and developed a <span>.custom-theme</span> for them. <span className="comment">//by reverse engineering some wordpress files</span>.</p>
                        <br/>
                        <p className="about-me-text hidden">I have come a long way since then but <span>nowhere near my finish line</span><br/>
                        Here are the <span>.technologies</span> I'm using in website development:<br/></p>
                        
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-12 image-area"><img className="hidden images pfp" src={require('./style/img/pfp.png')} /></div>
            </div>
            
            <div className="row icons">
                        <i className="fa-brands fa-html5 col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-css3-alt col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-js col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-php col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-bootstrap col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-sass col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <i className="fa-brands fa-react col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 hidden"></i>
                        <img className="col-xxl-1 col-xl-1 col-lg-1 col-md-2 hidden" src={require('./style/img/mysql.png')} />
                    </div>
        </section>
    </div>
    )
}

export default AboutMe;