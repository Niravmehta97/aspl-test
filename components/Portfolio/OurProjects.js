import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Slider from "react-slick";

// const optionsport = {
//     loop: true,
//     nav: false,
//     dots: true,
    // navText: [
    //     "<i class='flaticon-left-arrow'></i>",
    //     "<i class='flaticon-next'></i>"
    // ],
//     smartSpeed: 500,
//     margin: 30,
//     autoplayHoverPause: true,
//     autoplay: true,
//     responsive: {
//         0: {
//             items: 1
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
let temp_url = "";
const OurProjects = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
      };
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
        
        setPageURL(window.location.pathname);        
        // console.log("URL =>",  window.location.pathname);
    })
    temp_url = JSON.stringify(pageURL);
    const splitLocation = temp_url.split("/");
    console.log("LOCATION =>",splitLocation);
    return (
            <div className="portfolio-area home-portfolio bg-fff5ee pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Portfolio Showcase</span> */}
                        <h2>Next Projects</h2>
                        <div className="bar"></div>
                    </div>
                    <Slider {...settings}>
      
    
                    {/* <OwlCarousel 
                        className="portfolio-slider  owl-carousel owl-theme"
                        {...optionsport}
                    >  */}
                        {splitLocation[2] === "credit-freedom" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/credit-freedom">
                                    <a>
                                        {/* <img src="/images/portfolio/Credit-freedom.png" alt="image" /> */}
                                        <picture>
                                            <source srcset="/images/portfolio/Credit-freedom.webp" type="image/webp" />
                                            <img src="/images/portfolio/Credit-freedom.png" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>
                            
                            <div className="portfolio-content">
                                <span className='pro-sub'>Credit repair</span>
                                <h3>
                                    <Link href="/our-portfolio/credit-freedom">
                                        <a>Credit Freedom App</a>
                                    </Link>
                                </h3>
                                <p>It's application for Credit repair Company's client over there they can track update</p>
                                <div className='tagwrap'><span>vTiger CRM</span><span>Android</span><span>Ios</span><span>AWS Web Services</span></div>
                            </div> 
                        </div>}

                        {splitLocation[2] === "my-retail-buddy" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/my-retail-buddy">
                                    <a>
                                        {/* <img src="/images/portfolio/MRB.png" alt="image" /> */}
                                        <picture>
                                           <source srcset="/images/portfolio/MRB.webp" type="image/webp" />
                                            <img src="/images/portfolio/MRB.png" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <span className='pro-sub'>Retail</span>
                                <h3>
                                    <Link href="/our-portfolio/my-retail-buddy">
                                        <a>My Retail Buddy App</a>
                                    </Link>
                                </h3>
                                <p>Easily deliver payrolls checks of employees at any of your stores through an online platform.</p>
                                <div className='tagwrap'><span>AWS Web Services</span><span>React Native</span><span>Codeigniter</span><span>PHP</span></div>
                            </div>
                        </div>}

                        {splitLocation[2] === "clang" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/clang">
                                    <a>
                                        {/* <img src="/images/portfolio/Clang.png" alt="image" /> */}
                                        <picture>
                                           <source srcset="/images/portfolio/Clang.webp" type="image/webp" />
                                            <img src="/images/portfolio/Clang.png" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <span className='pro-sub'>Music</span>
                                <h3>
                                    <Link href="/our-portfolio/clang">
                                        <a>Clang Music App</a>
                                    </Link>
                                </h3>
                                <p>Be the first to discover independant music from over 200 artists all around the world.</p>
                                <div className='tagwrap'><span>Android</span></div>
                            </div>
                        </div>}

                        {splitLocation[2] === "clang-web" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/clang-web">
                                    <a>
                                        {/* <img src="/images/portfolio/Clang-Web.png" alt="image" /> */}
                                        <picture>
                                           <source srcset="/images/portfolio/Clang-Web.webp" type="image/webp" />
                                            <img src="/images/portfolio/Clang-Web.png" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <span className='pro-sub'>Music</span>
                                <h3>
                                    <Link href="/our-portfolio/clang-web">
                                        <a>Clang Web</a>
                                    </Link>
                                </h3>
                                <p>Discover astonishing indie music and artists around the world</p>
                                <div className='tagwrap'><span>Codeigniter</span><span>Android</span><span>iOS</span></div>
                            </div>
                        </div>}

                        {splitLocation[2] === "Bodhi" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/Bodhi">
                                    <a>
                                        {/* <img src="/images/portfolio/Bodhi.jpg" alt="image" /> */}
                                        <picture>
                                           <source srcset="/images/portfolio/Bodhi.webp" type="image/webp" />
                                            <img src="/images/portfolio/Bodhi.jpg" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <span className='pro-sub'>Ecommerce </span>
                                <h3>
                                    <Link href="/our-portfolio/Bodhi">
                                        <a>Bodhi Web</a>
                                    </Link>
                                </h3>
                                <p>It is a modern Cycling Fashion Company. We focus on comfort, with a love for detail and elegance.</p>
                                <div className='tagwrap'><span>HTML</span><span>MySQL</span><span>Wordpress</span></div>
                            </div>
                        </div>}

                        {splitLocation[2] === "XA-INC" ? null :
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/XA-INC">
                                    <a>
                                        {/* <img src="/images/portfolio/XAInc.png" alt="image" /> */}
                                        <picture>
                                           <source srcset="/images/portfolio/XAInc.webp" type="image/webp" />
                                            <img src="/images/portfolio/XAInc.png" alt="image" />
                                        </picture>
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <span className='pro-sub'>Block chain wallet </span>
                                <h3>
                                    <Link href="/our-portfolio/XA-INC">
                                        <a>XA Interactive</a>
                                    </Link>
                                </h3>
                                <p>Solving the problems of digital ad fraud using advanced technology and blockchain</p>
                                <div className='tagwrap'><span>HTML</span><span>MySQL</span><span>Wordpress</span></div>
                            </div>
                        </div>}
                        </Slider>
                    {/* </OwlCarousel> */}
                </div>
            </div>
    )
}

export default OurProjects;