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
                <title>Clang | Designed Mobile App, Android And IOS App For Almost 200 Independent Music Singers And Artist</title>
                <meta name="description" content="Clang | Designed Mobile App, Android And IOS App For Almost 200 Independent Music Singers And Artist" />
                <link rel='canonical' href={`${baseUrl}/our-portfolio/clang`}></link>
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
                            <img className='sr-full-img' src="/images/portfolio-detail/Clang-mobile/clang-logo.png" alt="image" />  
                        </div>
                        <h1>Clang</h1>
                        <p>Be the first to discover independant music from over 200 artists all around the world.</p>
                        <div className='tagwrap'><span>Android</span></div>
                    </div>
                </div>
            </div>

            <div className='port-det-banner'>
                <img src="/images/portfolio-detail/Clang-mobile/Banner.png" alt="image" /> 
            </div>

            <div className="services-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="port-det-text ">
                                <div className=''>
                                    <h3>The greatest advantage is our database of music intelligence and over 2.2 million artists and counting, this one-of-a-kind resource offers data-driven solutions. It assists you in comprehending and acting on your target groups' listening habits. We provide you with a new set of marketing metrics, including brand appreciation, brand identity, emotional connection level, and brand-music correlation.</h3>
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
                                <h4>Discovery App, Music World-map, Featured Artists</h4>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cust-cont">
                                <h4>Discovery App</h4>
                                <p>Be the first to discover independent music all around the world.</p>
                                <h4>Music World-map</h4>
                                <p>Every song tells a story. What's yours?  Share your music story with the world.</p>
                                <h4>Featured Artists</h4>
                                <p>Be an Independent artist and showcase your talent to the whole world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="mobbanner-sec clang-smbanner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='small-bann'>                            
                                <img src="/images/portfolio-detail/Clang-mobile/Small-banner.svg" alt="image" /> 
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='smallban-det'>
                                <h4>Log in quickly with Facebook or Clang - Mix and match from 16 primary genres - 45+ million audio titles from Apple Music, Jamedo, and Clang Music</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<div className="about-area blog-details-desc pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp portdet-clang-bg"></div>
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
                            <img src="/images/portfolio-detail/Clang-mobile/1.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/2.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/3.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/4.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/5.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/6.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/7.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/8.png" alt="image" />
                        </div>

                        <div className="screenimg-item">
                            <img src="/images/portfolio-detail/Clang-mobile/9.png" alt="image" />
                        </div>
                    </Slider>
                    {/* </OwlCarousel> */}
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