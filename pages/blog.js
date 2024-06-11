import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Home/SubscribeForm';
import Footer from '../components/_App/Footer';
import MainBanner from '../components/AllBanner/BlogBanner';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
import Head from "next/head"
// import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const BlogPage = () => {
    return (
        <>

            <Head>
                <title>Latest Blog - Ashapura Softech</title>
                <meta name="description" content="Latest updates on salesforce and Microsoft, including CRM, ERP, web development, e-commerce development, mobile app development, and software testing." />
                <meta name="og:title" property="og:title" content="Latest Blog - Ashapura Softech"></meta>
                <meta name="twitter:card" content="Latest updates on salesforce and Microsoft, including CRM, ERP, web development, e-commerce development, mobile app development, and software testing."></meta>
                <link rel='canonical' href={`${baseUrl}/blog`}></link>
            </Head>
			<Navbar />

			{/* <PageBanner 
                pageTitle="Our Work" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Work" 
                BGImage="portfolio-bg" 
            /> */}
            <MainBanner />
            
            <div className="blog-area pt-70 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Blog</span>
                        <h2>Latest News From Blog</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/best-crm-software-2024">
                                        <a>
                                            <img src="/images/blog-new/best-crm-software-2024.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>April 18, 2024</span>
                                    <h3>
                                        <Link href="/blog/best-crm-software-2024">
                                            <a>Best CRM Software in 2024: Top 7 Platforms</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/best-crm-software-2024">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-vs-odoo">
                                        <a>
                                            <img src="/images/blog-new/salesforce-vs-odoo.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>March 20, 2024</span>
                                    <h3>
                                        <Link href="/blog/salesforce-vs-odoo">
                                            <a>Salesforce vs Odoo: Which CRM is better for your business?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-vs-odoo">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-are-main-salesforce-marketing-cloud-major-features">
                                        <a>
                                            <img src="/images/blog-new/what-are-main-salesforce-marketing-cloud-major-features.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>February 06, 2023</span>
                                    <h3>
                                        <Link href="/blog/what-are-main-salesforce-marketing-cloud-major-features">
                                            <a>What Are Main Salesforce Marketing Cloud Major Features?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-are-main-salesforce-marketing-cloud-major-features">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/utilization-and-benefits-of-salesforce-service-cloud-for-business">
                                        <a>
                                            <img src="/images/blog-new/utilization-and-benefits-of-salesforce-service-cloud-for-business.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>January 27, 2023</span>
                                    <h3>
                                        <Link href="/blog/utilization-and-benefits-of-salesforce-service-cloud-for-business">
                                            <a>Utilization and Benefits of Salesforce Service Cloud for business</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/utilization-and-benefits-of-salesforce-service-cloud-for-business">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks">
                                        <a>
                                            <img src="/images/blog-new/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>December 26, 2022</span>
                                    <h3>
                                        <Link href="/blog/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks">
                                            <a>Outsourcing in Salesforce e-commerce offers benefits and drawbacks</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform">
                                        <a>
                                            <img src="/images/blog-new/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>November 16, 2022</span>
                                    <h3>
                                        <Link href="/blog/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform">
                                            <a>Salesforce Marketing Cloud: A Complete Guide Of Power Marketing Platform</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-is-salesforce-financial-service-cloud">
                                        <a>
                                            <img src="/images/blog-new/what-is-salesforce-financial-service-cloud.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>October 6, 2022</span>
                                    <h3>
                                        <Link href="/blog/what-is-salesforce-financial-service-cloud">
                                            <a>What is salesforce financial service cloud?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-is-salesforce-financial-service-cloud">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    
                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/introducing-salesforce-service-cloud-objects">
                                        <a>
                                            <img src="/images/blog-new/introducing-salesforce-service-cloud-objects.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>September 8, 2022</span>
                                    <h3>
                                        <Link href="/blog/introducing-salesforce-service-cloud-objects">
                                            <a>Introducing Salesforce Service Cloud Objects</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/introducing-salesforce-service-cloud-objects">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud">
                                        <a>
                                            <img src="/images/blog-new/Salesforce-Sales-Cloud-and-Salesforce-Marketing-Cloud.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>July 13, 2022</span>
                                    <h3>
                                        <Link href="/blog/difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud">
                                            <a>Difference between Salesforce Sales Cloud & Salesforce Marketing Cloud</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us">
                                        <a>
                                            <img src="/images/blog-new/What-Is-Salesforce-Sales-cloud.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>May 27, 2022</span>
                                    <h3>
                                        <Link href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us">
                                            <a>What is Salesforce Sales Cloud, And How the Sales Cloud helps us?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it">
                                        <a>
                                            <img src="/images/blog-new/What-Is-Salesforce-Commerce-Cloud.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>May 20, 2022</span>
                                    <h3>
                                        <Link href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it">
                                            <a>What is Salesforce Commerce Cloud, And How E-commerce Could Use it?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-is-salesforce-marketing-cloud">
                                        <a>
                                            <img src="/images/blog-new/What-is-salesforce-marketing-cloud-copy.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>May 06, 2022</span>
                                    <h3>
                                        <Link href="/blog/what-is-salesforce-marketing-cloud">
                                            <a>What is Salesforce Marketing Cloud?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-is-salesforce-marketing-cloud">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/what-is-salesforce-service-cloud">
                                        <a>
                                            <img src="/images/blog-new/sl-cl-blog.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>April 13, 2022</span>
                                    <h3>
                                        <Link href="/blog/what-is-salesforce-service-cloud">
                                            <a>What is Salesforce Service Cloud?</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/what-is-salesforce-service-cloud">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-illuminate-approach-for-digital-transformation">
                                        <a>
                                            <img src="/images/blog-new/salesforce-illuminate.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>March 02, 2022</span>
                                    <h3>
                                        <Link href="/blog/salesforce-illuminate-approach-for-digital-transformation">
                                            <a>Successfully Execute Your Digital Strategy with Salesforce’s Illuminate Approach</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-illuminate-approach-for-digital-transformation">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/zoho-crm">
                                        <a>
                                            <img src="/images/blog-new/ZohoCRMBlog.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>February 02, 2022</span>
                                    <h3>
                                        <Link href="/blog/zoho-crm">
                                            <a>ZOHO CRM</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/zoho-crm">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-marketing-cloud-platform">
                                        <a>
                                            <img src="/images/blog-new/salesforce-marketing.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>January 20, 2022</span>
                                    <h3>
                                        <Link href="/blog/salesforce-marketing-cloud-platform">
                                            <a>Salesforce Marketing Cloud Consultation</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-marketing-cloud-platform">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/top-4-types-of-crm-software">
                                        <a>
                                            <img src="/images/blog-new/types-of-crm.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>December 15, 2021</span>
                                    <h3>
                                        <Link href="/blog/top-4-types-of-crm-software">
                                            <a>Types Of CRM Software</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/top-4-types-of-crm-software">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-certified-developers-1">
                                        <a>
                                            <img src="/images/blog-new/salesforce-developers.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>December 15, 2021</span>
                                    <h3>
                                        <Link href="/blog/salesforce-certified-developers-1">
                                            <a>Salesforce Certified Developers-I</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-certified-developers-1">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-crm-consulting-services">
                                        <a>
                                            <img src="/images/blog-new/Salesforce_CRM.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>November 16, 2021</span>
                                    <h3>
                                        <Link href="/blog/salesforce-crm-consulting-services">
                                            <a>Salesforce CRM Software Free Consultation</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-crm-consulting-services">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/salesforce-crm-customer-relationship-management-agency">
                                        <a>
                                            <img src="/images/blog-new/top-crm-consulting-agency.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>October 21, 2021</span>
                                    <h3>
                                        <Link href="/blog/salesforce-crm-customer-relationship-management-agency">
                                            <a>Top CRM Consulting Agency</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/salesforce-crm-customer-relationship-management-agency">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/erp-in-healthcare-industry">
                                        <a>
                                            <img src="/images/blog-new/erp-in-Health.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/erp-in-healthcare-industry">
                                            <a>ERP in Healthcare Industry</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/erp-in-healthcare-industry">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/top-10-vtiger-crm-plugins">
                                        <a>
                                            <img src="/images/blog-new/top10crm.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/top-10-vtiger-crm-plugins">
                                            <a>Top 10 Vtiger CRM Plugins</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/top-10-vtiger-crm-plugins">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/difference-between-nodejs-vs-java">
                                        <a>
                                            <img src="/images/blog-new/Node-Js-vs-Java.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 25, 2021</span>
                                    <h3>
                                        <Link href="/blog/difference-between-nodejs-vs-java">
                                            <a>Difference Between Node JS vs Java</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/difference-between-nodejs-vs-java">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/enterprise-resource-planning">
                                        <a>
                                            <img src="/images/blog-new/ERP-resource.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 25, 2021</span>
                                    <h3>
                                        <Link href="/blog/enterprise-resource-planning">
                                            <a>Enterprise resource planning-(ERP)</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/enterprise-resource-planning">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/ai-uses-in-crm">
                                        <a>
                                            <img src="/images/blog-new/ai-use-crm.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 25, 2021</span>
                                    <h3>
                                        <Link href="/blog/ai-uses-in-crm">
                                            <a>AI uses in CRM</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/ai-uses-in-crm">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/erp-in-finance-industry">
                                        <a>
                                            <img src="/images/blog-new/erp-in-finance-industry.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 25, 2021</span>
                                    <h3>
                                        <Link href="/blog/erp-in-finance-industry">
                                            <a>ERP in Finance Industry</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/erp-in-finance-industry">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/zoho-and-salesforce-crm">
                                        <a>
                                            <img src="/images/blog-new/salesforce-zoho.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/zoho-and-salesforce-crm">
                                            <a>Difference Between Zoho and Salesforce CRM</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/zoho-and-salesforce-crm">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/task-management-software-for-enterprise">
                                        <a>
                                            <img src="/images/blog-new/Task-Management.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/task-management-software-for-enterprise">
                                            <a>Task Management Software for Enterprise</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/task-management-software-for-enterprise">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/microsoft-sharepoint">
                                        <a>
                                            <img src="/images/blog-new/ms_sharepoint.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/microsoft-sharepoint">
                                            <a>Microsoft SharePoint</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/microsoft-sharepoint">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog/headless-cms">
                                        <a>
                                            <img src="/images/blog-new/headless-CMS.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <span>June 28, 2021</span>
                                    <h3>
                                        <Link href="/blog/headless-cms">
                                            <a>Headless CMS</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog/headless-cms">
                                        <a className="blog-btn">Read More <i className='bx bx-chevrons-right'></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

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
            {/* <WeWorkForIndustries /> */}
            {/* <SubscribeForm /> */}
			<Footer />
		</>
    )
}

export default BlogPage;