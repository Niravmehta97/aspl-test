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
    return (
        <>

            <Helmet>
                <title>Salesforce Services & Custom Software Development Company in USA| Ashapura Softech </title>
                <meta name="description" content="Salesforce Services & Custom Software Development Company in USA| Ashapura Softech" />
                <link rel='canonical' href={`${baseUrl}/blog/headless-cms`}></link>
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
                                    <h2>Headless CMS</h2>
                                    <div className="bar"></div>
                                </div> */}
                                <div className="article-image">
                                    <img src="/images/blog-new/headless-CMS.jpg" alt="image" />
                                </div>

                                <div className="article-content blog-detail-cont">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted On:</span> <a href="#">June 28, 2021</a>
                                            </li>
                                            {/* <li>
                                                <span>Posted By:</span> <a href="#">John Anderson</a>
                                            </li> */}
                                        </ul>
                                    </div>

                                    <h4>What is headless CMS?</h4>
                                    <p>A headless CMS is one that does not do any rendering of content and where the rendering is decoupled from the management interface. Because of this, some use the terms “headless” and “decoupled” interchangeably, although “decoupled” generally refers to parts of the architecture being separate. The figurative “head” refers to the front-end rendering or presentation of the content, while the “body” refers to the back-end storage and administration of the content.</p>
                                    <p>A headless CMS only captures and stores content, provides a UI for creating and managing content, and provides a mechanism to access the content, typically via REST APIs as JSON. It is thus also known as “API-first” CMS. The content can be delivered to and integrated with a third-party system, such as an e-commerce tool, or delivered to and displayed using any front-end technology, whether in a browser, mobile application, or syndication service. Many headless CMS are also cloud-based solutions, also called “content as a service” (CaaS).</p>
                                    <p>A headless CMS decouples the rendering and presentation system and allows you to replace it with front-end or other technologies of your choice. The CMS is simply a content store and web application for content creators, and the content is delivered to the front-end or other system via an API (application programming interface).</p> 
                                    <p>Headless ensures that you store content in a pure format, ready for use in any context. Use content for multiple delivery channels, from desktop web to native mobile or touchscreen applications.</p>

                                    <h4>Advantages of headless CMS ?</h4>
                                    <p>A headless CMS is one that does not do any rendering of content and where the rendering is decoupled from the management interface. Because of this, some u</p>

                                    <h5>Start instantly with no obstacles/easy to use :</h5>
                                    <p>The barriers to getting started with headless are very low. Headless is often available as a service, provides a basic authoring interface that is fast and easy to learn, and your front-end team can integrate it into your existing website.</p>

                                    <h5>Fit into existing infrastructure:</h5>
                                    <p>You do not need to change your existing delivery tier. Headless is open to all other systems such as CRM and e-commerce that consume content from it—access is provided through APIs.</p>

                                    <h5>App-focused projects:</h5>
                                    <p>Headless is ideal for developing web and mobile apps, as it allows practically any application— web, mobile, IoT, smart TV, touchscreens—to pull and push content. You are no longer working with a CMS that renders HTML from templates, but with one that provides content in its simplest form via content APIs your team needs for app development.</p>
                                    <p>You can write script that takes the published content from the headless CMS and exports it to the mBaaS, which then distributes the content to your app. By doing this, you eliminate the need to modify the app while still reaping the benefits of a user-friendly CMS that supports the full content lifecycle.</p>

                                    <h5>Going into the cloud:</h5>
                                    <p>Headless is often provided on cloud-based platforms. For enterprises aiming to outsource their infrastructure, this means less upfront costs, rapid iteration for digital projects and scalability.</p>
                                    <p>You can import content from various sources into a single cloudbased repository where you can collaborate on it with your colleagues. Then you can export it to other systems to ensure consistency or make it directly available to your website or custom applications using an API.</p>

                                    <h5>Work in parallel:</h5>
                                    <p>Different teams—front-end developers, back-end developers, marketing and content editors—can get started right away and work independently of one another.</p>

                                    <h5>Take a front-end approach:</h5>
                                    <p>Empower front-end devs—they do not have to learn the inner workings of a CMS or its templating system because they simply work with a content API.</p>
                                    <p>The developer team can use its preferred frameworks such as Handlebars, Angular and React, and have complete control over the end-user experience.</p>

                                    <h5>Re-use content: create once, publish everywhere:</h5>
                                    <p>Stop creating content in different places and having to deal with the problems of updating and versions getting out of sync. Headless lets you create content in one place and use it everywhere.</p>
                                    <p>Eg:- Instead of creating content for your website and knowledge base separately, you can create it once and then export it to both your CMS and knowledge base.</p>

                                    <h5>Future-proof content: multichannel, Omni channel:</h5>
                                    <p>Headless supports content that does not contain any presentation formatting, and that can be used and re-used on any channel, now and in the future.</p>

                                    <h4>Omni channel :</h4>
                                    <p>Omni channel content delivery the API provided by a headless CMS allows you to deliver content to any channel, any device, and any platform. While many of these channels are obvious, let’s have a look at some specific scenarios.</p>

                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Static page generation—you can use the headless CMS for content storage and then use script to generate static HTML files for your website.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Conversational interfaces, such as digital assistants or catboats, need a specific content structure that may not be well supported by traditional page-oriented systems.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Micro content for SaaS—think of a banking application that contains hints, short product descriptions, or various promotions displayed in the context of the application.
                                        </li>
                                    </ul>

                                    
                                    <h4>Multichannel: </h4>
                                    <p>If you invested big money into building highly customized solutions on top of a legacy CMS and cannot easily replace it, you can use a headless CMS as a proxy: simply export the content into the headless CMS and then benefit from its scalable API.</p>
                                    <p>At the same time, you can leverage the API to deliver the content to any channel and boost the performance of your legacy CMS, without spending more on servers and perpetual licenses.</p>

                                    <h5>Micro services:</h5>
                                    <p>The growing number of customer touch points requires companies to provide a much broader set of applications.</p>
                                    <p>Headless works well in a micro services environment and supports cross-functional teams working in an agile mode to get tasks done quickly. The front-end is uncoupled from the back-end. You get more flexibility and it’s easier to switch and replace various pieces of functionality in the principle of best-of-breed.</p>
                                    <p>The use of micro services allows you to quickly assemble applications using multiple APIs from different vendors. What used to be a tedious integration task is now much easier.</p>
                                    <p>These APIs are provided as a service which means you don’t have to worry about running any software and you can benefit from ongoing innovation without complex upgrades.</p>

                                    <h4>Choose a headless CMS if</h4>
                                    <ul className="features-list">
                                        <li>
                                            <i className="flaticon-check"></i>
                                            You want to create content for multiple channels, not just a website.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            You want to leverage all benefits of a true SaaS solution provided as a cloud service.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            You want to build your applications using a microservices architecture.
                                        </li>
                                        <li>
                                            <i className="flaticon-check"></i>
                                            Your marketers are able to adopt an omnichannel content strategy.
                                        </li>
                                    </ul>

                                    <p>se the terms “headless” and “decoupled” interchangeably, although “decoupled” generally refers to parts of the architecture being separate. The figurative “head” refers to the front-end rendering or presentation of the content, while the “body” refers to the back-end storage and administration of the content.</p>
                                    
                                    <p>A headless CMS only captures and stores content, provides a UI for creating and managing content, and provides a mechanism to access the content, typically via REST APIs as JSON. It is thus also known as “API-first” CMS. The content can be delivered to and integrated with a third-party system, such as an e-commerce tool, or delivered to and displayed using any front-end technology, whether in a browser, mobile application, or syndication service. Many headless CMS are also cloud-based solutions, also called “content as a service” (CaaS).</p>
                                    
                                    <p>A headless CMS decouples the rendering and presentation system and allows you to replace it with front-end or other technologies of your choice. The CMS is simply a content store and web application for content creators, and the content is delivered to the front-end or other system via an API (application programming interface).</p>

                                    <p>Headless ensures that you store content in a pure format, ready for use in any context. Use content for multiple delivery channels, from desktop web to native mobile or touchscreen applications.</p>
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