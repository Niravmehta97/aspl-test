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
        "name": "Salesforce Marketing Cloud Consultation",
        "image": ["https://ashapurasoftech.com/images/blog-new/salesforce-marketing.jpg"],
      "description": "The Salesforce Marketing Cloud is the leading CRM platform for digital marketing automation and data analysis. Use the various possibilities to interact with your customers across channels and devices and reach your target group with automated advertising campaigns.",
        "brand": {
          "@type": "thing",
          "name": "ashapurasoftech"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
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
                <title>Salesforce Marketing Cloud Consultation</title>
                <meta name="description" content="Salesforce Marketing Cloud consultation offers extensive opportunities for increasing personalization and effectiveness. Carried out marketing campaigns across all digital channels." />
                <link rel='canonical' href={`${baseUrl}/blog/salesforce-marketing-cloud-platform`}></link>
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
                                    <h2>Salesforce Marketing Cloud Consultation</h2>
                                    <div className="bar"></div>
                                </div> */}
                                <div className="article-image">
                                    <img src="/images/blog-new/salesforce-marketing.jpg" alt="image" />
                                </div>

                                <div className="article-content blog-detail-cont">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span> <a href="#">January 20, 2022</a>
                                            </li>
                                            {/* <li>
                                                <span>Posted By:</span> <a href="#">John Anderson</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <h4>What is the Salesforce Marketing Cloud?</h4>
                                    <p>The Salesforce Marketing Cloud is the leading CRM platform for digital marketing automation and data analysis. Use the various possibilities to interact with your customers across channels and devices and reach your target group with automated advertising campaigns. With the <Link href="https://www.salesforce.com/in/products/marketing-cloud/overview/"><a target="_blank">Salesforce Marketing Cloud</a></Link> consultation you can create individual customer journeys across all digital channels. In this way, you can easily develop new ways of communicating with your customers and win new customer segments for your company. Accompany your customers along the entire customer journey and always deliver the right offer at the right time via the preferred channel, regardless of whether B2C or B2B. Analyze your campaigns that have led to successful deals to see what works and what doesn’t — optimize your campaigns and increase your marketing success.</p>
                                    

                                    <h4>Accompany your customers along their customer journey:</h4>
                                    <p>In today’s connected world, every single customer interaction counts. Individual customer journeys create the basis for permanent, personal customer relationships and optimized sales marketing. The <Link href="/service/salesforce-cloud-services"><a>Salesforce </a></Link>Marketing Cloud combines customer data from sales, marketing and service, which is constantly being enriched with further information. This makes it possible to analyze real customer behavior along the entire customer journey and to react appropriately. All available data sources are linked in individual contact data records. This means that all the information is available that is required for highly personalized and relevant cross-channel and cross-device communication. By personalizing your customer approach, you create positive, unforgettable shopping experiences with the help of the Salesforce Marketing Cloud.</p>

                                    <h4>What can Salesforce Marketing Cloud do?</h4>
                                    <p>Salesforce Marketing Cloud consultation offers extensive opportunities for increasing personalization and effectiveness. Carried out marketing campaigns across all digital channels. This enables you to accompany leads through the customer life cycle from the first contact to the purchase — and to provide helpful information for decision-making at the right time on the way from potential to real customer. Thanks to the integration with the Salesforce Marketing Cloud and sales representatives can now e-mail address directly from the Salesforce Sales Cloud ship out or customers through social media. With the help of sophisticated algorithms and the artificial intelligence based on them,</p>

                                    <h4>Features of the Salesforce Marketing Cloud:</h4>
                                    <p>The Marketing Cloud is the world’s leading CRM platform for email marketing, mobile marketing, social media marketing, online advertising and marketing automation. The Salesforce Marketing Cloud is made up of different components that help you to create specific target groups and to combine data from any source in order to deliver marketing messages in a more targeted manner. Learn how Salesforce Combines marketing via email, social networks and mobile devices in a central digital marketing platform. Create excellent e-mail campaigns and increase customer interactions with personalized landing pages and forms. Calculate the marketing ROI and gain valuable insight, what do your customers do on the way from first click to completion. The Salesforce Marketing Cloud is made up of different components and consists of the following modules,</p>

                                    <h4>Customer Journey Builder</h4>
                                    <p>Accompany your customers across all devices and channels away by a personalized customer journey, pick up each customer according to their needs in the right marketing channel. With the customer journey Builder of the Salesforce Marketing Cloud They network your marketing and sales team with every touch point, get to the customers your business contact. To support you in setting up a journey, you can choose from many predefined, partially configured journey templates based on common use cases and known marketing best practices.</p>

                                    <h4>Audience Builder</h4>
                                    <p>Seamlessly integrate any data into the Marketing Cloud and use it effectively: The Audience Builder of the Salesforce Marketing Cloud enables target groups to be segmented quickly and easily using drag-and-drop from various data sources and to address them individually. In this way, meaningful information can be obtained from complex data, such as from the <Link href="https://www.salesforce.com/in/products/sales-cloud/overview/"><a target="_blank">Salesforce Sales Cloud</a></Link>, the Service Cloud, from social networks or website analysis, and segmented in a data-based manner. With the Audience Builder you address certain segments individually and guide customers through a personalized customer journey.</p>

                                    <h4>Email Studio</h4>
                                    <p>Create convincing and effective email campaigns and newsletters. The Email Studio is one of the central features of the Salesforce Marketing Cloud. Send your customers dynamic messages and tailored content that inspires them to engage with your company. Thanks to responsive design, you can reach your customers on any device and communicate with each customer in real time along the entire customer journey. Email Studio offers the right functions for numerous use cases — from simple newsletters to complex, multi-level e-mail campaigns and dynamic landing pages. This is how you create close, long-term customer relationships and inspire your customers with a unique customer experience.</p>

                                    <h4>Personalization Builder</h4>
                                    <p>The Personalization Builder helps to collect data on behavior in order to adapt content based on the derived interests and preferences and to design personalized offers. Regardless of whether you want to collect data on behavior, design your next content dynamically or send personalized messages across channels and devices — with the Personalization Builder you can achieve your marketing goals faster and increase your ROI.</p>

                                    <h4>Content Builder</h4>
                                    <p>The Content Builder is a cross-channel content management tool that enables you to manage images centrally, documents and other content in the Marketing Cloud. During the increasing importance of marketing automation, the content builder can be used to summarize all content from different channels in one central location. This enables a uniform and convincing appearance of your brand in all digital channels and simplifies the implementation of an individual 1: 1 customer journey.</p>

                                    <h4>Social studio</h4>
                                    <p>Observe and interact with your customers on social networks and publish your own contributions using powerful social media marketing tools. <Link href="/service/salesforce/salesforce-crm-development-company"><a>Salesforce CRM</a></Link> allows you to align your social media marketing activities with all of your other marketing, customer service and sales activities. Use your data in the Salesforce Marketing Cloud Consultation to listen to your fans and followers or to target new content efficiently and ads to the right target group and to analyze the reactions. In this way, you can make social media marketing even more efficient and make social networks an important touch-point within your customers’ customer journey.</p>
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