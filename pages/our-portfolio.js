import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Home/SubscribeForm';
import Footer from '../components/_App/Footer';
import MainBanner from '../components/AllBanner/PortfolioBanner';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
import Image from "next/image";
import creditFreedom from "../public/images/portfolio/Credit-freedom.webp";
import Clang from "../public/images/portfolio/Clang.webp";
import MRB from "../public/images/portfolio/MRB.webp";
import ClangWeb from "../public/images/portfolio/Clang-Web.webp";
import Bodhi from "../public/images/portfolio/Bodhi.webp";
import XAInc from "../public/images/portfolio/XAInc.webp";
import Head from "next/head"

// import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const Services = () => {
    return (
        <>
            <Head>
                <title>Our Work Portfolio - Ashapura Softech</title>
                <meta name="description" content="Explore Ashapura Softech's portfolio of creative and innovative custom web & mobile app solutions." />
                <meta name="og:title" property="og:title" content="Our Work Portfolio - Ashapura Softech"></meta>
                <meta name="twitter:card" content="Explore Ashapura Softech's portfolio of creative and innovative custom web & mobile app solutions."></meta>
                <link rel='canonical' href={`${baseUrl}/our-portfolio`}></link>
            </Head>
			<Navbar />
            <MainBanner />
            <div className="portfolio-area home-portfolio bg-fff5ee pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Portfolio Showcase</span>
                        <h2>Our Impressive Portfolio</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row port-row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/credit-freedom">
                                        <a>
                                            <picture>
                                            <Image src={creditFreedom} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/my-retail-buddy">
                                        <a>
                                            {/* <img src="/images/portfolio/MRB.png" alt="image" /> */}
                                            <picture>
                                            <Image src={MRB} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/clang">
                                        <a>
                                            {/* <img src="/images/portfolio/Clang.png" alt="image" /> */}
                                            <picture>
                                            <Image src={Clang} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/clang-web">
                                        <a>
                                            {/* <img src="/images/portfolio/Clang-Web.png" alt="image" /> */}
                                            <picture>
                                            <Image src={ClangWeb} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/Bodhi">
                                        <a>
                                            {/* <img src="/images/portfolio/Bodhi.jpg" alt="image" /> */}
                                            <picture>
                                            <Image src={Bodhi} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/our-portfolio/XA-INC">
                                        <a>
                                            {/* <img src="/images/portfolio/XAInc.png" alt="image" /> */}
                                            <picture>
                                            <Image src={XAInc} alt="image" height={300} width={440.86} />
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
                            </div>
                        </div>
                    </div>
                    {/* <div className="overview-btn text-center">
                        <Link href="">
                            <a className="default-btn">
                                Load More
                            </a>
                        </Link>
                    </div> */}
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <img src="/images/default-shape/default-shape1.png" alt="image" />
                    </div>
                    <div className="shape2">
                        <img src="/images/default-shape/default-shape2.png" alt="image" />
                    </div>
                    <div className="shape3">
                        <img src="/images/default-shape/default-shape3.png" alt="image" />
                    </div>
                    <div className="shape4">
                        <img src="/images/default-shape/default-shape4.png" alt="image" />
                    </div>
                </div>
            </div>

            {/* <WeWorkForIndustries /> */}
            {/* <SubscribeForm /> */}
			<Footer />
		</>
    )
}

export default Services;