import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/AllBanner/ServiceBanner';
// import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Home/SubscribeForm';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
import Head from "next/head"
// import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const Services = () => {
    const [showLoader, setshowLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => setshowLoader(false), 3000);
    }, []);

    return (
        <>
            <Head>
                <title>Salesforce Customization, Microsoft and Custom CRM Services</title>
                <meta name="description" content="Streamline your operations with Ashapura Softech's Salesforce & Microsoft development services. We offer comprehensive solutions from CRM & ERP to web, e-commerce, mobile apps & software consulting." />
                <meta name="og:title" property="og:title" content="Salesforce Customization, Microsoft and Custom CRM Services"></meta>
                <meta name="twitter:card" content="Streamline your operations with Ashapura Softech's Salesforce & Microsoft development services. We offer comprehensive solutions from CRM & ERP to web, e-commerce, mobile apps & software consulting."></meta>
                <link rel='canonical' href={`${baseUrl}/service`}></link>
            </Head>
            {/* { showLoader ?  
            <div className="loader">
                <img src="/images/loader-aspl.gif" alt="image" />
            </div>: null } */}
            <Navbar />

            {/* <PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="service-bg" 
            /> */}
            <MainBanner />

            <div className="services-area cust-service-area pt-100 pb-70">
                <div className="container">
                    <div className="row ">
                        <h1>Microsoft Services</h1>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/microsoft/microsoft-azure-development-services">
                                        <a>
                                            <img src="/images/all-banner/Services/microsoft-azure-development-services.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/microsoft/microsoft-azure-development-services">
                                        <a>Microsoft Azure Development</a>
                                    </Link>
                                </h3>
                                <p>Hire Azure Developers from Ashapura Softech Inc, as we are the leading and reputed service provider for Microsoft Azure.</p>
                                <Link href="/service/microsoft/microsoft-azure-development-services">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/microsoft/microsoft-sharepoint-development-services">
                                        <a>
                                            <img src="/images/all-banner/Services/microsoft-sharepoint-development-services.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/microsoft/microsoft-sharepoint-development-services">
                                        <a>Microsoft Sharepoint Development</a>
                                    </Link>
                                </h3>
                                <p>We create and customize many applications such as content management, document management, and enterprise search.</p>
                                <Link href="/service/microsoft/microsoft-sharepoint-development-services">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <h1>Salesforce Services</h1>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce-cloud-services">
                                        <a>
                                            <img src="/images/service-new/Salesforce.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce-cloud-services">
                                        <a>Salesforce Cloud Services </a>
                                    </Link>
                                </h3>
                                <p>At Ashapura Softech, We have a much experienced and technical team of Salesforce developers and CRM experts, to carter help you in your business to increase leads and sales.</p>

                                <Link href="/service/salesforce-cloud-services">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-crm-development-company">
                                        <a>
                                            <img src="/images/service-new/Salesforce-CRM-Services.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-crm-development-company">
                                        <a>Salesforce CRM Services</a>
                                    </Link>
                                </h3>
                                <p>Customer relationship management (CRM) is a system for managing all of your company's customer and potential client relationships and interactions.</p>

                                <Link href="/service/salesforce/salesforce-crm-development-company">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-service-cloud">
                                        <a>
                                            <img src="/images/salesforce_crm/salesforce-services.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-service-cloud">
                                        <a>Salesforce Service Cloud</a>
                                    </Link>
                                </h3>
                                <p>The Salesforce Service Cloud is a cloud-based platform that enables companies and organizations to support their customers easily and deliver great customer service.</p>

                                <Link href="/service/salesforce/salesforce-service-cloud">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-marketing-cloud">
                                        <a>
                                            <img src="/images/salesforce_crm/SMC2.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-marketing-cloud">
                                        <a>Salesforce Marketing Cloud</a>
                                    </Link>
                                </h3>
                                <p>Salesforce Marketing Cloud intrigues to boost your business with an integrated setup to focus on your email marketing, social media, mobile, web advertising, and data interpretations.</p>

                                <Link href="/service/salesforce/salesforce-marketing-cloud">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-commerce-cloud">
                                        <a>
                                            <img src="/images/all-banner/Services/salesforce-commerce-cloud.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-commerce-cloud">
                                        <a>Salesforce Commerce Cloud</a>
                                    </Link>
                                </h3>
                                <p>Solve your retail challenges with enterprise-grade solutions from Salesforce Commerce Cloud. Maximize your ROI while minimizing investment. Salesforce ecommerce brings together our best-in-class retail applications.</p>

                                <Link href="/service/salesforce/salesforce-commerce-cloud">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-sales-cloud">
                                        <a>
                                            <img src="/images/all-banner/Services/salesforce-sales-cloud.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-sales-cloud">
                                        <a>Salesforce Sales Cloud</a>
                                    </Link>
                                </h3>
                                <p>Sales Cloud is an across-the-board device that oversees CRM that consolidates a large portion of similar abilities in different instruments.</p>

                                <Link href="/service/salesforce/salesforce-sales-cloud">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/salesforce/salesforce-devops">
                                        <a>
                                            <img src="/images/all-banner/Services/Salesforce-Devops.webp" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/salesforce/salesforce-devops">
                                        <a>Salesforce DevOps</a>
                                    </Link>
                                </h3>
                                <p>Salesforce DevOps is the same as the more extensive meaning of the word, yet it is explicitly revolved around guaranteeing Admins.</p>

                                <Link href="/service/salesforce/salesforce-devops">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <h1>Custom Services</h1>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/crm-software-development">
                                        <a>
                                            <img src="/images/service-new/CRM.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/crm-software-development">
                                        <a>Customer Relationship Management</a>
                                    </Link>
                                </h3>
                                <p>We are one of the leading Customized CRM software development company. Our team of experts has years of experience in availing best CRM development services to our global clients.</p>

                                <Link href="/service/crm-software-development">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/enterprise-software-development">
                                        <a>
                                            <img src="/images/service-new/Enterprise-ERP.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/enterprise-software-development">
                                        <a>Enterprise Resource Planning</a>
                                    </Link>
                                </h3>
                                <p>With our team of experienced ERP software developers, we have built an invincible command over the technology standards.</p>

                                <Link href="/service/enterprise-software-development">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/web-development">
                                        <a>
                                            <img src="/images/service-new/Web-Devlopment.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/web-development">
                                        <a>Web Development</a>
                                    </Link>
                                </h3>
                                <p>CUSTOM WEB DEVELOPMENT SERVICES OFFERED BY US With years of expertise and hands-on over numerous technologies, our team of web developers has gained tremendous knowledge in building custom web development solutions for our global clients.</p>

                                <Link href="/service/web-development">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/ecommerce-development">
                                        <a>
                                            <img src="/images/service-new/E-commerce-Devlopment.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/ecommerce-development">
                                        <a>E-Commerce Web Development</a>
                                    </Link>
                                </h3>
                                <p>We are one of the leading Customized CRM software development company. Our team of experts has years of experience in availing best CRM development services to our global clients.</p>

                                <Link href="/service/ecommerce-development">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/mobile-app-development">
                                        <a>
                                            <img src="/images/service-new/Mobile-app.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/mobile-app-development">
                                        <a>Mobile App Development</a>
                                    </Link>
                                </h3>
                                <p>We firmly believe that despite the tremendous growth, there’s a lot more in the mobile application sector which can be relished.</p>

                                <Link href="/service/mobile-app-development">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/software-testing-qa">
                                        <a>
                                            <img src="/images/service-new/QA-Software-testing.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/software-testing-qa">
                                        <a>Software Testing And QA</a>
                                    </Link>
                                </h3>
                                <p>We are into QA and software testing services for a long time now and have earned immense experience in quality assurance services by following Agile Methods.</p>

                                <Link href="/service/software-testing-qa">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/offshore-staffing">
                                        <a>
                                            <img src="/images/service-new/Offsore-staffing.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/offshore-staffing">
                                        <a>Offshore Staffing </a>
                                    </Link>
                                </h3>
                                <p>As indicated by your demand, we will give the resumes of experts who have the significant innovations and ranges of abilities you require.</p>

                                <Link href="/service/offshore-staffing">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="image">
                                    <Link href="/service/onsite-staffing">
                                        <a>
                                            <img src="/images/service-new/services-6.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <h3>
                                    <Link href="/service/onsite-staffing">
                                        <a>Onsite Staffing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                                
                                <Link href="/service/onsite-staffing">
                                    <a className="services-btn">
                                        Read More <i className='bx bx-chevrons-right'></i>
                                    </a>
                                </Link>
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

export default Services;