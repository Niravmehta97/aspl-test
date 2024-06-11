import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';

let temp_url = "";
const MainBanner = () => {
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
        
        setPageURL(window.location.pathname);        
        // console.log("URL =>",  window.location.pathname);
    })
    temp_url = JSON.stringify(pageURL);
    const splitLocation = temp_url.split("/");

    return (
        <div className="main-banner common-banner-wrap">
            <div className="main-banner-item item-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="page-banner-content commonbanner-cont main-banner-content pr-15">
                                        {splitLocation[2] === "top-4-types-of-crm-software" ?
                                            <h2>Types Of CRM Software</h2> : null}
                                        {splitLocation[2] === "salesforce-certified-developers-1" ?
                                            <h2>
                                                {/* Salesforce Certified Developers-I */}
                                                Salesforce Developers
                                                </h2> : null}
                                        {splitLocation[2] === "salesforce-crm-customer-relationship-management-agency" ?
                                            <h2>
                                                {/* Top CRM Consulting Agency */}
                                                CRM Consulting
                                                </h2> : null}
                                        {/* {splitLocation[2] === "difference-between-nodejs-vs-java" ?
                                            <h2>Difference Between Node JS Vs Java</h2> : null} */}
                                        {splitLocation[2] === "enterprise-resource-planning" ?
                                            <h2>Enterprise Resource Planning-(ERP)</h2> : null}
                                        {splitLocation[2] === "ai-uses-in-crm" ?
                                            <h2>AI Uses In CRM</h2> : null}
                                        {splitLocation[2] === "erp-in-finance-industry" ?
                                            <h2>ERP In Finance Industry</h2> : null}
                                        {splitLocation[2] === "erp-in-healthcare-industry" ?
                                            <h2>ERP In Healthcare Industry</h2> : null}
                                        {splitLocation[2] === "salesforce-marketing-cloud-platform" ?
                                            <h2>Salesforce Marketing Cloud Consultation</h2> : null}
                                        {splitLocation[2] === "what-is-salesforce-marketing-cloud" ?
                                            <h2>What is Salesforce Marketing Cloud?</h2> : null}
                                        {splitLocation[2] === "what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it" ?
                                            <h2>What is Salesforce Commerce Cloud?</h2> : null}
                                        {splitLocation[2] === "what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us" ?
                                            <h2>What is Salesforce sales Cloud?</h2> : null}
                                        {splitLocation[2] === "salesforce-crm-consulting-services" ?
                                            <h2>Salesforce CRM Software Free Consultation
                                            </h2> : null}
                                        {splitLocation[2] === "top-10-vtiger-crm-plugins" ?
                                            <h2>Top 10 Vtiger CRM Plugins</h2> : null}
                                        {splitLocation[2] === "zoho-and-salesforce-crm" ?
                                            <h2>Difference Between Zoho And Salesforce CRM</h2> : null}
                                        {splitLocation[2] === "task-management-software-for-enterprise" ?
                                            <h2>Task Management Software For Enterprise
                                            </h2> : null}
                                        {splitLocation[2] === "microsoft-sharepoint" ?
                                            <h2>Microsoft SharePoint</h2> : null}
                                        {splitLocation[2] === "headless-cms" ?
                                            <h2>Headless CMS</h2> : null}
                                        {splitLocation[2] === "zoho-crm" ?
                                            <h2>ZOHO CRM</h2> : null}
                                        {splitLocation[2] === "salesforce-illuminate-approach-for-digital-transformation" ?
                                            <h2>Successfully Execute Your Digital Strategy with Salesforce’s Illuminate Approach</h2> : null}
                                        {splitLocation[2] === "what-is-salesforce-service-cloud" ?
                                            <h2>What is Salesforce Service Cloud?</h2> : null}
                                        {splitLocation[2] === "what-is-salesforce-financial-service-cloud" ?
                                            <h2>What is Salesforce Financial Service Cloud?</h2> : null}
                                        {splitLocation[2] === "difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud" ?
                                            <h2>Salesforce Sales Cloud v/s Salesforce Marketing Cloud</h2> : null}
                                        {splitLocation[2] === "introducing-salesforce-service-cloud-objects" ?
                                        <h2>Introducing Salesforce Service Cloud Objects</h2> : null}
                                        {splitLocation[2] === "salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform" ?
                                            <h2>Salesforce Marketing Cloud: A Complete Guide Of Power Marketing Platform</h2> : null}
                                        {splitLocation[2] === "outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks" ?
                                            <h2>Outsourcing in Salesforce e-commerce offers benefits and drawbacks</h2> : null}
                                        {splitLocation[2] === "utilization-and-benefits-of-salesforce-service-cloud-for-business" ?
                                            <h2>Utilization and Benefits of Salesforce Service Cloud to direct your business to the right path</h2> : null}
                                        {splitLocation[2] === "what-are-main-salesforce-marketing-cloud-major-features" ?
                                            <h2>What Are Main Salesforce Marketing Cloud Major Features?</h2> : null}
                                        {splitLocation[2] === "salesforce-vs-odoo" ?
                                            <h2>Salesforce vs Odoo: Which CRM is better for your business?</h2> : null}
                                        {splitLocation[2] === "best-crm-software-2024" ?
                                            <h2>Best CRM Software in 2024: Top 7 Platforms</h2> : null}
                                            <ul>
                                                <li>
                                                    <Link href="/"><a>Home</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog"><a>Blog</a></Link>
                                                </li>

                                                {splitLocation[2] === "top-4-types-of-crm-software" ?
                                                <li className="active">Types Of CRM Software</li> : null}

                                                {splitLocation[2] === "salesforce-certified-developers-1" ?
                                                <li className="active">
                                                    {/* Salesforce Certified Developers-I */}
                                                    Salesforce Developers
                                                    </li> : null}

                                                {splitLocation[2] === "salesforce-crm-customer-relationship-management-agency" ?
                                                <li className="active">
                                                    {/* Top CRM Consulting Agency */}
                                                    CRM Consulting
                                                    </li> : null}

                                                {/* {splitLocation[2] === "difference-between-nodejs-vs-java" ?
                                                <li className="active">Difference Between Node JS Vs Java</li> : null} */}

                                                {splitLocation[2] === "enterprise-resource-planning" ?
                                                <li className="active">Enterprise Resource Planning-(ERP)</li> : null}

                                                {splitLocation[2] === "ai-uses-in-crm" ?
                                                <li className="active">AI Uses In CRM</li> : null}

                                                {splitLocation[2] === "erp-in-finance-industry" ?
                                                <li className="active">ERP In Finance Industry</li> : null}

                                                {splitLocation[2] === "erp-in-healthcare-industry" ?
                                                <li className="active">ERP In Healthcare Industry</li> : null}

                                                {splitLocation[2] === "salesforce-marketing-cloud-platform" ?
                                                <li className="active">Salesforce Marketing Cloud Consultation</li> : null}

                                                {splitLocation[2] === "what-is-salesforce-marketing-cloud" ?
                                                <li className="active">What is Salesforce Marketing Cloud?</li> : null}

                                                {splitLocation[2] === "what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it" ?
                                                <li className="active">What is Salesforce Commerce Cloud?</li> : null}

                                                {splitLocation[2] === "what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us" ?
                                                <li className="active">What is Salesforce Sales Cloud?</li> : null}

                                                {splitLocation[2] === "salesforce-crm-consulting-services" ?
                                                <li className="active">Salesforce CRM Software Free Consultation
                                                </li> : null}

                                                {splitLocation[2] === "top-10-vtiger-crm-plugins" ?
                                                <li className="active">Top 10 Vtiger CRM Plugins</li> : null}

                                                {splitLocation[2] === "zoho-and-salesforce-crm" ?
                                                <li className="active">Difference Between Zoho And Salesforce CRM</li> : null}

                                                {splitLocation[2] === "task-management-software-for-enterprise" ?
                                                <li className="active">Task Management Software For Enterprise</li> : null}

                                                {splitLocation[2] === "microsoft-sharepoint" ?
                                                <li className="active">Microsoft SharePoint</li> : null}

                                                {splitLocation[2] === "headless-cms" ?
                                                <li className="active">Headless CMS</li> : null}

                                                {splitLocation[2] === "zoho-crm" ?
                                                <li className="active">ZOHO CRM</li> : null}

                                                {splitLocation[2] === "salesforce-illuminate-approach-for-digital-transformation" ?
                                                <li className="active">Successfully Execute Your Digital Strategy with Salesforce’s Illuminate Approach</li> : null}

                                                {splitLocation[2] === "what-is-salesforce-service-cloud" ?
                                                <li className="active">What is Salesforce Service Cloud?</li> : null}

                                                {splitLocation[2] === "difference-between-salesforce-sales-cloud-and-salesforce-marketing-cloud" ?
                                                <li className="active">Salesforce Sales Cloud v/s Salesforce Marketing Cloud</li> : null}
                                                
                                                {splitLocation[2] === "introducing-salesforce-service-cloud-objects" ?
                                                <li className="active">Introducing Salesforce Service Cloud Objects</li> : null}

                                                {splitLocation[2] === "what-is-salesforce-financial-service-cloud" ?
                                                <li className="active">What Is Salesforce Financial Service Cloud?</li> : null}

                                                {splitLocation[2] === "salesforce-marketing-cloud-a-complete-guide-of-power-marketing-platform" ?
                                                <li className="active">Salesforce Marketing Cloud: A Complete Guide Of Power Marketing Platform</li> : null}
                                                {splitLocation[2] === "outsourcing-in-salesforce-e-commerce-offers-benefits-and-drawbacks" ?
                                                <li className="active">Outsourcing in Salesforce e-commerce offers benefits and drawbacks</li> : null}
                                                {splitLocation[2] === "utilization-and-benefits-of-salesforce-service-cloud-for-business" ?
                                                <li>Utilization and Benefits of Salesforce Service Cloud to direct your business to the right path</li> : null}
                                                {splitLocation[2] === "what-are-main-salesforce-marketing-cloud-major-features" ?
                                                <li>What Are Main Salesforce Marketing Cloud Major Features</li> : null}
                                                {splitLocation[2] === "salesforce-vs-odoo" ?
                                                <li>Salesforce vs Odoo: Which CRM is better for your business?</li> : null}
                                                {splitLocation[2] === "best-crm-software-2024" ?
                                                <li>Best CRM Software in 2024: Top 7 Platforms</li> : null}
                                            </ul>


                                        {/* <p>The glimpse of our creative and innovative web and mobile applications works</p> */}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="common-banner">
                                        <img src="/images/all-banner/blog/Blogbanner.svg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;