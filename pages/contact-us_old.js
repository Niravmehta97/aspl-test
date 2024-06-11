import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactFormTwo from '../components/Contact/ContactFormTwo';
import MainBanner from '../components/AllBanner/ContactBanner';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Ashapura for Enterprise Mobile and Web Development Solutions - Ashapura Softech Pvt. Ltd.  </title>
                <meta name="description" content="Contact Ashapura for Enterprise Mobile and Web Development Solutions" />
                <link rel='canonical' href={`${baseUrl}/contact-us`}></link>
            </Helmet>
			<Navbar />

			{/* <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                BGImage="contact-bg" 
            /> */}
            <MainBanner />
            {/* <ContactInfo /> */}
 
            <div className="contact-area pb-70">
                <div className="container">
                    {/* <div className="section-title">
                        <h2>Ready to Get Started?</h2>
                        <div className="bar"></div>
                    </div> */}

                    {/* <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-image">
                                <img src="/images/contact.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-inner"> */}
                            {/* <GoogleReCaptchaProvider reCaptchaKey="6LeHSKkZAAAAAGErW0zX3iswbfprjuek-XbwJkw-"> */}
                                {/* <ContactFormTwo /> */}
                            {/* </GoogleReCaptchaProvider> */}
                            {/* </div>
                        </div>
                    </div> */}

                    <div className="general-contact-info contpageinfo">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <ContactInfo />
                            </div>
                            <div className='col-lg-6'>
                                <div className="contact-info-content pt-100">
                                    <h3 className='mt-4'>Contact us by Phone Number or Email Address</h3>
                                    <h2>
                                        <a href="tel:9136668022">+1 913 666 80 22</a><br/>
                                        <a href="tel:4302766212">+1 430 276 62 12</a>
                                        <span>OR</span>
                                        <a href="mailto:info@ashapurasoftech.com">info@ashapurasoftech.com</a><br/>
                                        {/* <a href="mailto:support@ashapurasoftech.com">support@ashapurasoftech.com</a><br/>
                                        <a href="mailto:hr@ashapurasoftech.com">hr@ashapurasoftech.com</a> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


			<Footer />
		</>
    )
}

export default Contact;