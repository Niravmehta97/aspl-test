import React from 'react';
import Navbar from '../../components/_App/Navbar';
// import PageBanner from '../../components/Common/PageBanner';
// import SubscribeForm from '../components/Home/SubscribeForm';
import Footer from '../../components/_App/Footer';
import MainBanner from '../../components/AllBanner/BlogDetailBanner';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import baseUrl from '../../utils/baseUrl';
// import WeWorkForIndustries from '../components/Common/WeWorkForIndustries';

const BlogPage = () => {
    const schemaData = 
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Salesforce Certified Developers",
        "image": ["https://ashapurasoftech.com/images/blog-new/salesforce-developers.jpg"],
    "description": "The Salesforce Certified Developers-I (SFCD-I) has the necessary knowledge, skills, and experience to create custom declarative and programmatic applications on the Force.",
        "brand": {
        "@type": "thing",
        "name": "ashapurasoftech"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.75",
        "ratingCount": "890"
        },
        "offers": {
        "@type": "offers",
        "priceCurrency": "USD",
        "price": "0"
        } 
    }
    return (
        <>  
            <Helmet>
                <title>Salesforce Certified Developers-I</title>
                <meta name="description" content="Are you looking for Salesforce Certified Developers-I for your company or do you need support in the implementation of individual development work for your Salesforce CRM system?" />
                <link rel='canonical' href={`${baseUrl}/blog/salesforce-certified-developers-1`}></link>
            </Helmet>
			<Navbar />

			{/* <PageBanner 
                pageTitle="Our Work" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Work" 
                BGImage="portfolio-bg" 
            /> */}
            <MainBanner />
            
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                {/* <div className='features-inner-content blog-det-title'>
                                    <h2>Salesforce Certified Developers-I</h2>
                                    <div className="bar"></div>
                                </div> */}
                                <div className="article-image">
                                    <img src="/images/blog-new/salesforce-developers.jpg" alt="image" />
                                </div>

                                <div className="article-content blog-detail-cont">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span> <a href="#">December 15, 2021</a>
                                            </li>
                                            {/* <li>
                                                <span>Posted By:</span> <a href="#">John Anderson</a>
                                            </li> */}
                                        </ul>
                                    </div>

                                    <h4>What does a Salesforce Certified Platform Developer do?  </h4>
                                    <p>The Salesforce Certified Developers-I (SFCD-I) has the necessary knowledge, skills, and experience to create custom declarative and programmatic applications on the Force.com developer platform and on the Lightning platform to develop customer-specific interfaces and to expand Salesforce with Apex and Visualforce. The developer must be familiar with the development lifecycle from development to testing and know the available development environments.</p>

                                    <h4>What are Salesforce Certificates? </h4>
                                    <p><Link href="/service/salesforce-cloud-services"><a>Salesforce </a></Link> certifications are a measurable indication of the level of skills, experience, and “know-how” of the certified person. In addition, if they are completed in the correct order, they are a perfect guide in the professional development of a developer, administrator, consultant, or architect of this technology. They are a confirmation that a certain specialist can design and implement an optimal solution for a certain scenario.</p>

                                    <h4>Salesforce Certified Developers-1 Cloud Marketing Solution  </h4>
                                    <p>Marketing Cloud Certified Developers have hands-on development experience across the Salesforce platform. Applicants must have experience as a full-time developer for Marketing Cloud and create:</p>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Personalized, dynamic marketing and sales messages;
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Home pages;
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Fluent in Marketing Cloud Scripting languages;
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Have experience in customizing data manipulation:
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Experience in expanding segmentation, reporting and analysis.
                                        </li>
                                    </ul>
                                    <p>
                                    The <Link href="https://www.salesforce.com/in/products/marketing-cloud/overview/" target="_blank"><a target="_blank">Salesforce Marketing Cloud </a></Link>Developer understands how to manage subscribers across all channels and can handle many programming languages that are utilized to create tactical and strategic email campaigns.
                                    </p>

                                    <h4>We offer competent Salesforce developers on request  </h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Experience Levels:  Regular (min. 2 years), Senior (min. 5 years) and Lead Developer (min. 7 years),
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            SFDC Development: Apex, Lightning, Visualforce,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Products / Applications: AppExchange, Sales Cloud, Service Cloud,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Databases: Database.com, Oracle, Microsoft and IBM,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Testing: Selenium, Assure Click, QTP,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Cloud providers: Force.com, Heroku, Amazon AWS, MS Azure, Google,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Remote developer as a scalable solution to the IT skills shortage
                                        </li>
                                    </ul>

                                    <h4>Compensate for missing resources with remote developers at short notice </h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Long-term expansion of IT clout and lower personnel costs,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            25 years of experience in setting up, managing and scaling offshore and nearshore teams,
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            On request, with German-speaking project management and advice from a certified SAP service partner.
                                        </li>
                                    </ul>

                                    <h4>Looking for certified Salesforce developers?  </h4>
                                    <p>Are you looking for Salesforce Certified Developers-I for your company or do you need support in the implementation of individual development work for your Salesforce CRM system? At Ashapura Softech, you get professional help with process modeling, the development of individual applications, and the integration of Salesforce with web services or other applications. Our Salesforce consultants provide you with tailor-made support for your IT challenges or, as proven CRM experts, take on the implementation of complete projects. Just contact us. We will gladly support you! Ashapura Softech is a consulting company for sales cloud, community cloud, professional services, and support based on the Salesforce platform. We implement cloud-based business software, develop individual software solutions and ensure integration with ERP backend systems. A special focus is the integration of marketing and sales with marketing automation and campaign management software and the Salesforce CRM platform as well as the cooperation between service and sales.</p>
                                    
                                </div>

                                {/* Comments */}
                                {/* <Comments /> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
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