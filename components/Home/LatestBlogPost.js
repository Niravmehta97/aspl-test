import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area pt-70">
            <div className="container">
                <div className="section-title">
                    <span>Blog</span>
                    <h2>Latest News From Blog</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-new/types-of-crm.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>December 15, 2021</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Types Of CRM Software</a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-new/salesforce-developers.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>December 15, 2021</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Salesforce Certified Developers-I</a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog">
                            <div className="image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog-new/top-crm-consulting-agency.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>October 21, 2021</span>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Top CRM Consulting Agency</a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                    <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                </Link>
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

export default LatestBlogPost;