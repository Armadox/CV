import React from "react";

const MyProject = () => {

    return (
        
            <section className="part projects" id="projects">
                <div className="container projects-part hidden">
                    <div className="row">
                        <h3 className="col-xxl-5 col-xl-5 col-lg-6 projectName">Gym&More E-Commerce Site </h3>
                        <div className="col-xxl-6 col-xl-6 col-lg-5"><hr/></div>
                        <div className="col-lg-6"><img className='images'style={{marginTop : '15px'}}src={require('./style/img/gymsite.png')} /></div>
                        <p className="col-lg-6">
                            Dynamic Wordpress/WooCommerce website that was built with Wordpress and has it's own self made theme.<br/>
                            The custom theme was built by reverse engineering and editing Wordpress php files.<br/>
                            Website was built by mainly using Php, Javascript, jQuery, Bootstrap-5 and CSS.<br/>
                            Functional AJAX cart that updates every time you add something in the cart.<br/>
                            Project took around 2 weeks.<br/>
                            <a href="http://adriandan1998.000webhostapp.com">Click to go to go to website !</a>
                        </p>
                    </div>
                </div>
           

           
                <div className="container projects-part hidden">
                    <div className="row">
                        <h3 className="col-xxl-5 col-xl-5 col-lg-6 projectName">Test assignment from ScandiWeb</h3>
                        <div className="col-xxl-6 col-xl-6 col-lg-5"><hr/></div>
                        <div className="col-lg-6"><div className="testsite"><img className='testsite2 images2' src={require('./style/img/testsite.png')}></img></div></div>
                        <p className="col-lg-6">
                            Built while following OOP principles (+meaningful classes that extend each other).<br/>
                            Web app containing two pages (Product list, Adding product page).<br/>
                            Frontend uses React, backend uses Php, MySQL and it was designed with Sass.<br/>
                            Website was built using Php, MySQL, Sass, Bootstrap-5, Javascript, React (Uses React Browser Routing) and dotenv.<br/>
                            Project took around 2 weeks while studying React and JSON.<br/>
                            Passed the test with 12/12 :D .<br/>
                            <a href="https://gym-and-more.ro">Click to go to go to website !</a>
                        </p>
                    </div>
                </div>
            </section>
    )
}

export default MyProject;