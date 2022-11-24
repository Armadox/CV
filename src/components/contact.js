import React from "react";
import DeviceContent from "./deviceContent";

const ContactMe = () => {





    return (
        <section className="part" id="contact">
            <div className="device-area">
                <div className="device">
                    <div className="screenON hidden">
                        <div className="screen hidden">
                            <DeviceContent />
                        </div>  
                    </div>
                </div>
                <div className="monitor-neck-shadow"><div></div></div>
                <div className="monitor-neck"/>
                <div className="monitor-thingie"/>
            </div>
        </section>
    )
}

export default ContactMe;