import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import ContactFormTwo from '../../components/Contact/ContactFormTwo';
import Partners from '../../components/Home/Partners';
import OurProjects from '../../components/Portfolio/OurProjects';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import baseUrl from '../../utils/baseUrl';

// const options = {
//     loop: true,
//     nav: false,
//     dots: true,
//     navText: [
//         "<i class='flaticon-left-arrow'></i>",
//         "<i class='flaticon-next'></i>"
//     ],
//     smartSpeed: 500,
//     margin: 30,
//     autoplayHoverPause: true,
//     autoplay: true,
//     responsive: {
//         0: {
//             items: 2
//         },
//         576: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1024: {
//             items: 3
//         },
//         1200: {
//             items: 3
//         }
//     }
// };


const ServicesDetails = () => {
    var settingsSlide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
          ]
      };
    return (
        <>
            <Helmet>
                <title>Credit Freedom | Credit Repair Industry, Finance, CRM Portal Developed in Vtiger And Mobile App</title>
                <meta name="description" content="Credit Freedom | Credit Repair Industry, Finance, CRM Portal Developed in Vtiger And Mobile App" />
                <link rel='canonical' href={`${baseUrl}/our-portfolio/credit-freedom`}></link>
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
                            <img className='sr-full-img' src="/images/portfolio-detail/Credit-freedom-Mobile/CF_logo.png" alt="image" />  
                        </div>
                        <h1>Credit Freedom & Restoration</h1>
                        <p>It's application for Credit repair Company's client over there they can track update</p>
                        <div className='tagwrap'><span>vTiger CRM</span><span>Android</span><span>Ios</span><span>AWS Web Services</span></div>
                    </div>
                </div>
            </div>

            <div className='port-det-banner'>
                <img src="/images/portfolio-detail/Credit-freedom-Mobile/Credit-Freedom-banner.png" alt="image" /> 
            </div>

            <div className="services-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="port-det-text ">
                                <div className=''>
                                    <h3>Our mission is to extend compassion, empathy and understanding to demonstrate the healing love of God to clients and their loved ones. You may owe money. You may be in over your head.The truth is, most people with serious money problems do not intend to be in debt, they just end up there.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="portdet-cont">
                                <h1>Project <br/>Background</h1>
                                <h4>Full Analysis Of Your Credit History, Challenges The Damage You Disagree With, Sets You Up With a Plan To Build Positive Credit, Release New Credit Reports, Updated With Progress Report Showing The Overall Changes</h4>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cust-cont">
                                <h4>Full Analysis Of Your Credit History:</h4>
                                <p>Credit report analysis is assessing the information contained in a credit report, such as a customer's personal information, credit summary, and payment history.</p>
                                <h4>Challenges The Damage You Disagree With:</h4>
                                <p>It may also be beneficial to contact the vendor if you are encountering issues with debit or credit card charges.</p>
                                <h4>Sets You Up With a Plan To Build Positive Credit:</h4>
                                <p>If you've made on-time payments and managed debt responsibly for a long time, you're likely to have a good credit score and a better chance of being accepted for credit with favorable conditions.</p>
                                <h4>Release New Credit Reports:</h4>
                                <p>The credit bureaus release new credit reports to show the changes made.</p>
                                <h4>Updated With Progress Report Showing The Overall Changes:</h4>
                                <p>Your account page at creditfreedomrestoration.com is updated with a progress report showing the overall changes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="mobbanner-sec">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='small-bann'>                            
                                <img src="/images/portfolio-detail/Credit-freedom-Mobile/Small-banner-image.svg" alt="image" /> 
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='smallban-det'>
                                <h4>Credit Freedom and Restoration will assist in restoring your credit and changing your future.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<div className="about-area blog-details-desc pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp portdet-credit-bg"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp article-content">
                                {/* <span>About Us</span> */}
                                <h2>Feature Section</h2>
                                <div className="bar"></div>
                                <ul className="features-list">
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Track credit update and credit score with Equifax, Transunion and Experian
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Plan your montly budget with app
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Bill remainder to avoid credit score dispute
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Document management
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Credit factor by all 3 credit buero Equifax, Transunion and Experian
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Affiliate and Refferal
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Wallet
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Credit History
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Online Payment and Credit Card managent
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Video Review
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="screen-area pb-100">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Portfolio Showcase</span> */}
                        <h2>Visuals</h2>
                        <div className="bar"></div>
                    </div>
                    
                    {/* <OwlCarousel 
                        className="portfolio-slider owl-carousel owl-theme"
                        {...options}
                    >  */}
                    <Slider {...settingsSlide}>
                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f1.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f2.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f3.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f4.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f5.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f6.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f7.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f8.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Credit-freedom-Mobile/f9.png" alt="image" />
                        </div>
                    {/* </OwlCarousel> */}
                    </Slider>
                
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