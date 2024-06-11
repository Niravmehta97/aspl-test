import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import ContactFormTwo from '../../components/Contact/ContactFormTwo';
import Partners from '../../components/Home/Partners';
import OurProjects from '../../components/Portfolio/OurProjects';
import { Helmet } from 'react-helmet';
import baseUrl from '../../utils/baseUrl';

const ServicesDetails = () => {
    return (
        <>
            <Helmet>
                <title>Salesforce Services & Custom Software Development Company in USA| Ashapura Softech </title>
                <meta name="description" content="Salesforce Services & Custom Software Development Company in USA| Ashapura Softech" />
                <link rel='canonical' href={`${baseUrl}/our-portfolio/XA-INC`}></link>
            </Helmet>
			<Navbar />

			{/* <PageBanner 
                pageTitle="CRM Software Development" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="item-bg1" 
            /> */}

            <div className="portfolio-logo-area pt-100 pb-100">
                <div className="container ">
                    <div className='portfolio-logo-wrapper text-center'>
                        <div className='portfolio-logo'>
                            <img className='sr-full-img' src="/images/portfolio-detail/XAINC/logo.png" alt="image" />  
                        </div>
                        <h1>XA Interactive</h1>
                        <p>Solving the problems of digital ad fraud using advanced technology and blockchain.</p>
                        <div className='tagwrap'><span>HTML</span><span>MySQL</span><span>Wordpress</span></div>
                    </div>
                </div>
            </div>

            <div className='port-det-banner'>
                <div className='container'>
                    <img src="/images/portfolio-detail/XAINC/111.png" alt="image" /> 
                </div>                
            </div>

            <div className="services-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="port-det-text ">
                                <div className=''>
                                    <h3>XA Interactive is a development stage company specializing in digital advertising platforms, cutting edge app development, cryptocurrency and blockchain technology. Through the use of XA’s digital advertising platform and SXR tokens, users of various social media, telecommunications, and messaging platforms will be able to interact with digital ads and safely and securely make payment transactions for products and services without risk of their personal information being compromised.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="website-data_box xa-web">
                                <img src="/images/portfolio-detail/XAINC/ssxa.png" alt="image" /> 
                            </div>                            
                        </div>
                    </div>
                </div>
            </div> 

			<div className="about-area blog-details-desc pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp portdet-xa-bg"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp article-content">
                                {/* <span>About Us</span> */}
                                <h2>Feature Section</h2>
                                <div className="bar"></div>
                                <ul className="features-list">
                                    <li>
                                        <i className="flaticon-check"></i>
                                        As consulting firm for music marketing we help our clients make significant and lasting improvements to their marketing performance.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        you can search by genre, country/city, instruments and year.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Real music played by real artists.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Tackling important music-related topics for the younger generation, without boundaries, filters or discriminations has, in this sense, always been one of the main goals of the magazine.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            
            <OurProjects />

            {/* <SubscribeForm /> */}

            <div className="pt-100">
                <Partners />
            </div>

            {/* <div className="contact-area  pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Get in Touch</span>
                        <h2>Ready to Get Started?</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact-image">
                                <img src="/images/contact.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-inner">
                                <ContactFormTwo />
                            </div>
                        </div>
                    </div>

                    <div className="general-contact-info">
                        <div className="contact-info-content">
                            <h3>Contact us by Phone Number or Email Address</h3>
                            <h2>
                                <a href="tel:9136668022">+1 913 666 80 22</a><br/>
                                <a href="tel:4302766212">+1 430 276 62 12</a>
                                <span>OR</span>
                                <a href="mailto:info@ashapurasoftech.com">info@ashapurasoftech.com</a><br/>
                            </h2>

                            <ul className="social">
                                <li><a href="https://twitter.com/ashapura" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UC3kcuNxZBbKw_H7dpG9D4Iw" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a href="https://www.facebook.com/ashapurasofttechpvtltd/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="https://www.linkedin.com/company/ashapura-softech-pvt-ltd" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                <li><a href="https://www.behance.net/info941e35a8" target="_blank"><i className='bx bxl-behance'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

			<Footer />
		</>
    )
}

export default ServicesDetails;