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
        "name": "ZOHO CRM",
        "image": ["https://ashapurasoftech.com/images/blog-new/ZohoCRMBlog.png"],
    "description": "Zoho CRM is a feature-rich platform that gives you insight into sales, marketing, and customer service.",
        "brand": {
        "@type": "thing",
        "name": "ashapurasoftech"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
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
                <title>ZOHO CRM</title>
                <meta name="description" content="	Zoho CRM is a feature-rich platform that gives you insight into sales, marketing, and customer service. The information is kept in a safe vault, much as at a bank." />
                <link rel='canonical' href={`${baseUrl}/blog/zoho-crm`}></link>
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
                                    <h2>ZOHO CRM</h2>
                                    <div className="bar"></div>
                                </div> */}
                                <div className="article-image">
                                    <img src="/images/blog-new/ZohoCRMBlog.png" alt="image" />
                                </div>

                                <div className="article-content blog-detail-cont">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span> <a href="#">February 02, 2022</a>
                                            </li>
                                            {/* <li>
                                                <span>Posted By:</span> <a href="#">John Anderson</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <br/>
                                    <p>Zoho CRM is a feature-rich platform that gives you insight into sales, marketing, and customer service. The information is kept in a safe vault, much as at a bank. Zoho CRM now has over 250 thousand users, and that figure is steadily increasing. For product lifecycle management, Zoho CRM provides customer relationship management solutions. The service integrates sales, marketing, customer support and services, and inventory management into an unified business system, providing management tools for the complete sales, marketing, customer support and services, and inventory management process.</p>
                                    
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Zoho CRM allows you to keep track of all of your sales, allowing you to automate procedures and close more transactions in less time. For future up-sells and cross-sells, you'll be able to use current client data.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            You can organize your promotions as effectively as possible, boost your ROI, and track your spend using Zoho CRM marketing automation.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Zoho CRM allows you to streamline your company's customer service process while also integrating the sales and customer service processes into a single solution. Additionally, you will be able to track purchases of goods or services from your chosen suppliers' list.
                                        </li>
                                    </ul>

                                    <p>We recognize that building a dream company isn't always simple. You may need to learn the art of multitasking to take on ordinary chores that aren't usually apparent but are critical to your company's success. Some of these chores will be easier to manage using Zoho Forms. In Zoho Forms, a new function called a slave form was recently added. Online shopping will now be much more convenient. You can also concentrate on what you're selling rather than how you're selling. You may add a subordinate form to your request form to make it more dynamic. Previously, you could only choose specific goods, but now you may choose from a list of products in various price ranges and categories, and then add them all up.</p>

                                    <p>CRM software is a Zoho sales and Zoho marketing automation software that is hosted in the cloud. Companies may use Zoho CRM to communicate with customers and partners, convert leads, and generate thorough sales reports. A customer relationship management system (CRM) aids in increasing sales, automating corporate procedures, storing customer and transaction data, and making informed decisions based on data analysis. Zoho CRM is appropriate for both small and large businesses.</p>

                                    <p>Zoho CRM has several tools for automating the work of sales, marketing and help desk departments - lead management, deals, contact management and workflow automation. Lead management allows you to capture and find potential customers using forms, calls, identify them, create contacts and direct managers for further interaction. Deal management allows you to track the stages of interaction with customers, focus on the most promising options, study past activities and identify future opportunities, issue invoices and build sales funnels. </p>

                                    <p>Automation in Zoho CRM allows you to save employees from routine by setting up rules for processing data, creating tasks, and notifying customers. Managers and employees can set up the creation of automatic reports that will be generated at the close of transactions or the end of the working day. Reports contain information about profits, the effectiveness of customer contacts and lead processing.</p>

                                    <h4>Features of Zoho CRM:</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Lead, deal and contact management
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Sales automation
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Building sales processes and setting rules
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Setting up communication channels with clients (phone, email, social networks, etc.)
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Analytics and reports
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Billing
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Predictions with artificial intelligence
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Integration with services Google Workspace and Microsoft 365
                                        </li>
                                    </ul>

                                    <p>With so many CRM alternatives available, you may be unsure which one is ideal for your business and lead generation. The beauty of zoho CRM is that it can be used in any stream, including Zoho Marketing tool for marketing purpose, Zoho sales tool for sales management, and customer service. Improve your sales using CRM for your business by taking advantage of a free consultation to see how zoho CRM can help you gain your niche audience's contact information. This can help startups increase sales by transforming insights into leads. The entire technique is also simpler to learn and utilize for newcomers.</p>
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
            <script async
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
		</>
    )
}

export default BlogPage;