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
                <title>My Retail Buddy | US Based Cheque Printing & Time Sheet Management For Fue Station - Mobile App/Website</title>
                <meta name="description" content="My Retail Buddy | US Based Cheque Printing & Time Sheet Management For Fue Station - Mobile App/Website" />
                <link rel='canonical' href={`${baseUrl}/our-portfolio/my-retail-buddy`}></link>
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
                            <img className='sr-full-img' src="/images/portfolio-detail/MRB/MRB_logo.png" alt="image" />  
                        </div>
                        <h1>My Retail Buddy</h1>
                        <p>Easily deliver payrolls checks of employees at any of your stores through an online platform.</p>
                        <div className='tagwrap'><span>AWS Web Services</span><span>React Native</span><span>Codeigniter</span><span>PHP</span></div>
                    </div>
                </div>
            </div>

            <div className='port-det-banner'>
                <img src="/images/portfolio-detail/MRB/Banner.png" alt="image" /> 
            </div>

            <div className="services-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="port-det-text ">
                                <div className=''>
                                    <h3>My Retail Buddy helps in making check printing and time tracking easier than ever before. Using our application, you can view and print checks from any location. You can track employee time and save payroll costs with our app.</h3>
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
                                <h4>Easy Vendor Check Payment, Employee Payroll Check, Employee Clock In & Clock Out, Employee Shift Scheduling, Shift Text Reminder, Maintain Record for DOL</h4>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cust-cont">
                                <h4>Easy Vendor Check Payment</h4>
                                <p>Vendor payments, also known as supplier payments, are an important aspect of the accounts payable process.</p>
                                <h4>Employee Payroll Check</h4>
                                <p>The time it takes to complete payroll is determined by the approach you use.</p>
                                <h4>Employee Clock In & Clock Out</h4>
                                <p>Employees may record their shifts, track their hours, and submit overtime using a clock-in clock-out system.</p>
                                <h4>Employee Shift Scheduling</h4>
                                <p>Mobile Scheduling Tool Scalable Work Schedule Maker is a popular employee scheduling app that makes shift management simple. It is used by millions of people all over the world.</p>
                                <h4>Shift Text Reminder</h4>
                                <p>This message is for all Remind users. You may change your app and desktop alerts, as well as add, remove, or amend your mobile phone number and email address.</p>
                                <h4>Maintain Record for DOL</h4>
                                <p>Wage protections, housing and transportation safety regulations, agricultural labour contractor registration requirements, and transparency obligations are all included in the Act.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="mobbanner-sec mrb-smbanner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='small-bann'>                            
                                <img src="/images/portfolio-detail/MRB/Small-banner-image.svg" alt="image" /> 
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='smallban-det'>
                                <h4>MRB understands that in an attempt to not hinder the daily transactions, you end up losing peace of mind.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<div className="about-area blog-details-desc pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp portdet-mrb-bg"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp article-content">
                                {/* <span>About Us</span> */}
                                <h2>Feature Section</h2>
                                <div className="bar"></div>
                                <ul className="features-list">
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Create, Assign and Monitor tasks for your employees easily.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Set Renewal reminders for License to never miss a deadline.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Monitor and create regular audits in accordance with guidelines.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Keeping an account of Entry and Exit schedule of every employee.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Simplify your sales, Promotions, Reporting, Queue Management, and Payment with the MRB software.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Deliver Employee & Vendor Payments easily.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Maintain records of all payroll and vendor checks. Employee clock in and clock out timings.
                                    </li>
                                    <li>
                                        <i className="flaticon-check"></i>
                                        Encrypted database making the software safe to use.
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
                            <img src="/images/portfolio-detail/MRB/1.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/2.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/3.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/4.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/5.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/6.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/7.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/8.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/9.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/10.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/11.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/MRB/12.png" alt="image" />
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