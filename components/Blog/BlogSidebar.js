import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';

let temp_url = "";

const BlogSidebar = () => {
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {

        setPageURL(window.location.pathname);
        // console.log("URL =>",  window.location.pathname);
    })
    temp_url = JSON.stringify(pageURL);
    const splitLocation = temp_url.split("/");
    return (
        <div className="widget-area pl-10">
            {/* <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="flaticon-loupe"></i>
                    </button>
                </form>
            </div> */}

            <div className="widget widget_spix_posts_thumb">
                <h3 className="widget-title">Recent Blogs</h3>
                <div className="item">
                    <Link href="/blog/salesforce-vs-odoo">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/best-crm-software-2024.webp" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>March 20, 2024</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-vs-odoo">
                                <a>Best CRM Software in 2024: Top 7 Platforms</a>
                            </Link>
                        </h4>
                    </div>
                </div>
                <div className="item">
                    <Link href="/blog/salesforce-vs-odoo">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/salesforce-vs-odoo.webp" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>March 20, 2024</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-vs-odoo">
                                <a>Salesforce vs Odoo: Which CRM is better for your business?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-are-main-salesforce-marketing-cloud-major-features">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/what-are-main-salesforce-marketing-cloud-major-features.webp" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>February 06, 2023</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-are-main-salesforce-marketing-cloud-major-features">
                                <a>What Are Main Salesforce Marketing Cloud Major Features?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/utilization-and-benefits-of-salesforce-service-cloud-for-business">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/utilization-and-benefits-of-salesforce-service-cloud-for-business.webp" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>January 27, 2023</span>
                        <h4 className="title usmall">
                            <Link href="/blog/utilization-and-benefits-of-salesforce-service-cloud-for-business">
                                <a>Utilization And Benefits Of Salesforce Service Cloud To Direct Your Business To The Right Path</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks.webp" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>December 26, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks">
                                <a>Outsourcing in Salesforce e-commerce offers benefits and drawbacks</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>November 16, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform">
                                <a>Salesforce Marketing Cloud: A Complete Guide Of Power Marketing Platform</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-is-salesforce-financial-service-cloud">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/what-is-salesforce-financial-service-cloud.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>October 6, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-is-salesforce-financial-service-cloud">
                                <a>What Is Salesforce Financial Service Cloud</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/introducing-salesforce-service-cloud-objects">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/introducing-salesforce-service-cloud-objects.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>September 8, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/introducing-salesforce-service-cloud-objects">
                                <a>Introducing Salesforce Service Cloud Objects</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/Salesforce-Sales-Cloud-and-Salesforce-Marketing-Cloud.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>July 13, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud">
                                <a>Difference between Salesforce Sales Cloud & Salesforce Marketing Cloud</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/What-Is-Salesforce-Sales-cloud.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>May 27, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us">
                                <a>What is Salesforce Sales Cloud?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/What-Is-Salesforce-Commerce-Cloud.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>May 06, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it">
                                <a>What is Salesforce Commerce Cloud?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-is-salesforce-marketing-cloud">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/What-is-salesforce-marketing-cloud-copy.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>May 06, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-is-salesforce-marketing-cloud">
                                <a>What is Salesforce Marketing Cloud?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/what-is-salesforce-service-cloud">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/sl-cl-blog.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>April 13, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/what-is-salesforce-service-cloud">
                                <a>What is Salesforce Service Cloud?</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/salesforce-illuminate-approach-for-digital-transformation">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/salesforce-illuminate.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>March 02, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-illuminate-approach-for-digital-transformation">
                                <a>Successfully Execute Your Digital Strategy with Salesforce's Illuminate Approach</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/zoho-crm">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/ZohoCRMBlog.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>February 02, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/zoho-crm">
                                <a>ZOHO CRM</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/salesforce-marketing-cloud-platform">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/salesforce-marketing.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>January 20, 2022</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-marketing-cloud-platform">
                                <a>Salesforce Marketing Cloud Consultation</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/top-4-types-of-crm-software">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/types-of-crm.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>December 15, 2021</span>
                        <h4 className="title usmall">
                            <Link href="/blog/top-4-types-of-crm-software">
                                <a>Types Of CRM Software</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/salesforce-certified-developers-1">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/salesforce-developers.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>December 15, 2021</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-certified-developers-1">
                                <a>Salesforce Certified Developers-I</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/salesforce-crm-customer-relationship-management-agency">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/top-crm-consulting-agency.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>October 21, 2021</span>
                        <h4 className="title usmall">
                            <Link href="/blog/salesforce-crm-customer-relationship-management-agency">
                                <a>Top CRM Consulting Agency</a>
                            </Link>
                        </h4>
                    </div>
                </div>

                <div className="item">
                    <Link href="/blog/erp-in-healthcare-industry">
                        <a className="thumb">
                            <img className="fullimage cover" src="/images/blog-new/erp-in-Health.png" alt="image" />
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 28, 2021</span>
                        <h4 className="title usmall">
                            <Link href="/blog/erp-in-healthcare-industry">
                                <a>ERP in Healthcare Industry</a>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>
                {splitLocation[2] === "top-4-types-of-crm-software" ?
                    <div className="tagcloud">
                        <a href="#">CRM</a>
                        <a href="#">CRM Software</a>
                        <a href="#">Customer Relationship Management</a>
                        <a href="#">Custom CRM</a>
                        <a href="#">Customized CRM Software</a>
                        <a href="#">CRM Software Development</a>
                        <a href="#">CRM Development Company</a>
                        <a href="#">Contact Tracking Software</a>
                        <a href="#">Marketing Automation Software</a>
                        <a href='#'>Customer Feedback Systems CRM</a>
                    </div>
                    : null}

                {splitLocation[2] === "salesforce-certified-developers-1" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce</a>
                        <a href="#">Salesforce Development</a>
                        <a href="#">Salesforce Certification</a>
                        <a href="#">Salesforce Certified</a>
                        <a href="#">Salesforce Certified Developers</a>
                        <a href="#">Salesforce Developers</a>
                        <a href="#">Salesforce Developer</a>
                    </div>
                    : null}

                {splitLocation[2] === "salesforce-crm-customer-relationship-management-agency" ?
                    <div className="tagcloud">
                        <a href="#">consulting salesforce</a>
                        <a href="#">salesforce consulting</a>
                        <a href="#">salesforce consultants</a>
                        <a href="#">salesforce consultation</a>
                        <a href="#">salesforce for consultants</a>
                        <a href="#">salesforce consultancy services</a>
                        <a href="#">salesforce consulting service</a>
                        <a href="#">salesforce consulting services</a>
                        <a href="#">salesforce consultant services</a>
                    </div>
                    : null}

                {/* {splitLocation[2] === "difference-between-nodejs-vs-java" ?
                <div className="tagcloud">
                    <a href="#">Java</a>
                    <a href="#">Node JS</a>
                    <a href="#">Website/Data APIs</a>
                    <a href="#">security concerned</a>
                    <a href="#">Real-Time Apps</a>
                    <a href="#">CPU-Heavy jobs</a>
                    <a href="#">Simple worker queue/crons</a>
                </div>
                : null} */}

                {splitLocation[2] === "erp-in-healthcare-industry" ?
                    <div className="tagcloud">
                        <a href="#">ERP</a>
                        <a href="#">Enterprises Resource Planning</a>
                        <a href="#">Healthcare Industry</a>
                        <a href="#">Pharma Industry</a>
                        <a href="#">Advantage Of ERP Software</a>
                        <a href="#">ERP Software</a>
                    </div>
                    : null}

                {splitLocation[2] === "ai-uses-in-crm" ?
                    <div className="tagcloud">
                        <a href="#">AI</a>
                        <a href="#">Artificial Intellegence</a>
                        <a href="#">Customer Relationship Management</a>
                        <a href="#">AI Powere CRM</a>
                        <a href="#">AI Based CRM</a>
                    </div>
                    : null}

                {splitLocation[2] === "erp-in-finance-industry" ?
                    <div className="tagcloud">
                        <a href="#">ERP</a>
                        <a href="#">Enterprises Resource Planning</a>
                        <a href="#">Finance Industry</a>
                        <a href="#">Financial Groups</a>
                        <a href="#">ERP For Banking Sectors</a>
                        <a href="#">ERP For Fintech</a>
                    </div>
                    : null}

                {splitLocation[2] === "salesforce-marketing-cloud-platform" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce Marketing</a>
                        <a href="#">Salesforce Marketing Cloud</a>
                        <a href="#">Salesforce Consultation</a>
                        <a href="#">Customer Journey Builder</a>
                        <a href="#">Online Marketing Cloud</a>
                        <a href="#">Marketing Automation Software</a>
                        <a href="#">Digital Marketing Software</a>
                    </div>
                    : null}

                {splitLocation[2] === "salesforce-crm-consulting-services" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce</a>
                        <a href="#">Salesforce CRM</a>
                        <a href="#">Salesforce Services</a>
                        <a href="#">Salesforce Development</a>
                        <a href="#">Salesforce Free Consultation</a>
                        <a href="#">Salesforce CRM Free Consultation</a>
                        <a href="#">Salesforce CRM Software</a>
                        <a href="#">Customer Relationship Management Software</a>
                    </div>
                    : null}

                {splitLocation[2] === "top-10-vtiger-crm-plugins" ?
                    <div className="tagcloud">
                        <a href="#">VTiger</a>
                        <a href="#">VTiger CRM Plugins</a>
                        <a href="#">Vtiger CRM</a>
                        <a href="#">Customer Relationship Management</a>
                        <a href="#">Plugins</a>
                        <a href="#">Software Plugin</a>
                        <a href="#">Top VTiger Plugins</a>
                        <a href="#">Custom Form</a>
                    </div>
                    : null}

                {splitLocation[2] === "zoho-crm" ?
                    <div className="tagcloud">
                        <a href="#">Zoho CRM</a>
                        <a href="#">Zoho Software</a>
                        <a href="#">Zoho marketing automation</a>
                        <a href="#">Marketing Automation Software</a>
                        <a href="#">customer relationship management system</a>
                        <a href="#">Automation in Zoho CRM</a>
                    </div>
                    : null}

                {splitLocation[2] === "what-is-salesforce-service-cloud" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce Cloud Services</a>
                        <a href="#">what is salesforce service cloud</a>
                        <a href="#">what is service cloud in salesforce</a>
                        <a href="#">salesforce cloud service</a>
                        <a href="#">salesforce services cloud</a>
                        <a href="#">salesforce service cloud features</a>
                        <a href="#">salesforce service cloud professional</a>
                    </div>
                    : null}

                {splitLocation[2] === "what-is-salesforce-marketing-cloud" ?
                    <div className="tagcloud">
                        <a href="#">marketing cloud salesforce</a>
                        <a href="#">salesforce cloud marketing</a>
                        <a href="#">marketing cloud in salesforce</a>
                        <a href="#">salesforce marketing cloud training</a>
                        <a href="#">how to use marketing cloud in salesforce</a>
                        <a href="#">what is salesforce marketing cloud</a>
                        <a href="#">salesforce.com marketing cloud</a>
                        <a href="#">salesforce marketing cloud companies</a>
                        <a href="#">salesforce marketing cloud consultant</a>
                    </div>
                    : null}

                {splitLocation[2] === "what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it" ?
                    <div className="tagcloud">
                        <a href="#">salesforce commerce cloud</a>
                        <a href="#">commerce cloud</a>
                        <a href="#">salesforce ecommerce</a>
                        <a href="#">what is salesforce commerce cloud</a>
                        <a href="#">salesforce commerce cloud agency</a>
                        <a href="#">salesforce commerce cloud marketplace</a>
                    </div>
                    : null}

                {splitLocation[2] === "salesforce-illuminate-approach-for-digital-transformation" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce</a>
                        <a href="#">Salesforce services</a>
                        <a href="#">salesforce crm software</a>
                        <a href="#">Best CRM Software</a>
                        <a href="#">what is salesforce software</a>
                        <a href="#">salesforce cloud</a>
                        <a href="#">saas</a>
                        <a href="#">customer management</a>
                        <a href="#">customer relationship</a>
                        <a href="#">customer relationship management</a>
                        <a href="#">customer satisfaction</a>
                        <a href="#">salesforce marketing cloud</a>
                        <a href="#">salesforce illuminate</a>
                        <a href="#">illuminate approach salesforce illuminate methodology</a>
                        <a href="#">salesforce app cloud</a>
                        <a href="#">salesforce professional services</a>
                    </div>
                    : null}

                {splitLocation[2] === "what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us" ?
                    <div className="tagcloud">
                        <a href="#">salesforce sales cloud</a>
                        <a href="#">sales cloud</a>
                        <a href="#">on cloud sales</a>
                        <a href="#">cloud sales</a>
                        <a href="#">what is salesforce sales cloud</a>

                    </div>
                    : null}

                {splitLocation[2] === "salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform" ?
                    <div className="tagcloud">
                        <a href="#">Salesforce marketing cloud</a>
                        <a href="#">Marketing cloud salesforce</a>
                        <a href="#">Marketing Cloud in Salesforce</a>
                        <a href="#">Salesforce Cloud Marketing</a>
                    </div>
                    : null}

            </div>
        </div>
    )
}

export default BlogSidebar;