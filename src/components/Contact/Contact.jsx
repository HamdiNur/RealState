import React from 'react';
import "./Contact.css"
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left Side */}
            <div className="c-left">
                Left
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
