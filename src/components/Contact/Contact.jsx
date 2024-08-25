import React from 'react';
import "./Contact.css";
import {MdCall} from 'react-icons/md';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import {BsChatDotsFill}from "react-icons/bs"
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left Side */}
            <div className=" flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We always ready to help by providing the 
                    best service beleive a good place to live can make your life better

                </span>
                <div className="flexColStart contactModes">
                    {/* First row */}
                    <div className="flexColStart row">
                        <div className="FlexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span>252619-xx-xx-xx</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                                
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="/contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;
