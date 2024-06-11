import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
    return (
        <div className="portfolio-area home-portfolio bg-fff5ee pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    {/* <span>Portfolio Showcase</span> */}
                    <h2>PORTFOLIO</h2>
                    <div className="bar"></div>
                </div>

                <div className="row port-row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/credit-freedom">
                                    <a>
                                        <img src="/images/portfolio/Credit-freedom.png" alt="image" />
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
                                <div className='tagwrap'><span>CRM</span><span>Android</span><span>iOS</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/my-retail-buddy">
                                    <a>
                                        <img src="/images/portfolio/MRB.png" alt="image" />
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
                                <div className='tagwrap'><span>React</span><span>Codeigniter</span><span>PHP</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/clang">
                                    <a>
                                        <img src="/images/portfolio/Clang.png" alt="image" />
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
                                        <img src="/images/portfolio/Clang-Web.png" alt="image" />
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
                                <div className='tagwrap'><span>HTML</span><span>MySQL</span><span>Wordpress</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/our-portfolio/Bodhi">
                                    <a>
                                        <img src="/images/portfolio/Bodhi.jpg" alt="image" />
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
                                        <img src="/images/portfolio/XAInc.png" alt="image" />
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
    )
}

export default OurProjects;