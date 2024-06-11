import React from 'react';
import Link from 'next/link';
const SubscribeForm = () => {
    return (
        <div className="subscribe-area pt-100 pb-70">
            <div className="container">
                <div className="subscribe-content">
                    <span>LET'S DISCUSS YOUR PROJECT</span>
                    <h2>Get Free Consultation And Let Us Know Your Project Idea To Turn It Into An Amazing Digital Product.</h2>
                    <Link href="/contact-us"><button className="btn discuss-prjectbtn">Contact Us</button></Link>
                    {/* <form className="newsletter-form">
                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />

                        <button type="submit">Subscribe</button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm;