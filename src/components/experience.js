import React from "react";

const MyExp = () => {
    
    return (
        
        <section className="experience-section part" id="experience">
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 hidden">
                    <div className="window-size">
                        <div className="top-bar-size">
                            <div className="top-bar-elements">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="top-bar-middle">
                                <div>Sales Manager</div>
                            </div>
                            <div className="top-bar-icon">
                             <i className="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                        <div className="window">
                            <div className="row" style={{width : '100%'}}>
                                <div className="window-text col-9">
                                    Sep 2022 -> Present
                                </div>
                                <div className="window-picture col-3">
                                    <img className='images'style={{marginTop : '15px'}}src={require('./style/img/gymandmore.webp')} />
                                </div>
                                <div className="window-picture col-12">
                                    I work as a Sales Manager at Gym&More in Arad.<br/>
                                    I'm responsible for any sales data in this shop and advertising products to get more sales.<br/>
                                    Since the shop is a small start-up supplement shop, the shop is pretty easy.
                                    <a href="http://adriandan1998.000webhostapp.com">Click me to go to go to website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 hidden">
                    <div className="window-size">
                        <div className="top-bar-size">
                            <div className="top-bar-elements">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="top-bar-middle">
                                <div>Wordpress Dev.</div>
                            </div>
                            <div className="top-bar-icon">
                                <div><i className="fa-brands fa-wordpress"></i></div>
                            </div>
                        </div>
                        <div className="window">
                            <div className="row" style={{width : '100%'}}>
                                <div className="window-text col-9">
                                    Aug 2022 -> Present
                                </div>
                                <div className="window-picture col-3">
                                    <img className='images'style={{marginTop : '15px'}}src={require('./style/img/gymandmore.webp')} />
                                </div>
                                <div className="window-picture col-12">
                                    I work as a Wordpress Developer at Gym&More in Arad.<br/>
                                    I'm responsible for updating product attributes and adding new products.<br/>
                                    I made my first website working here, so it's a pretty newbish site.<br/>
                                    Editing Wordpress files to create a custom theme, felt really hard all by my own while studying Php and SEO.<br/>
                                    Website is online and running well and we had a sale the first week the site went online!
                                    <a href="https://gym-and-more.ro">Click me to go to go to website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyExp;