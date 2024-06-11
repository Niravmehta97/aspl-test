import React from 'react';
import styles from './FooterV1.module.css';
import Link from 'next/link';

const appFutura = require('./Asset/appfutura.svg').default
const software = require('./Asset/software.svg').default
const dmca = require('./Asset/dmca.svg').default
const clutch = require('./Asset/clutch.svg').default
const iso15 = require('./Asset/iso-2015.svg').default
const iso13 = require('./Asset/iso-2013.svg').default

const FooterV1 = () => {
    return (
        <footer className={`w-100 ${styles['footer-sec']} pt-5 px-3`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-4">
                    <h4 className={`text-light mb-4`}>Custom Services</h4>
                        <ul className={`${styles['footer-list']} text-light`}>
                            <li>
                                <Link href="/service/crm-software-development">
                                    <a>Customer Relationship Management (CRM)</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/enterprise-software-development">
                                    <a>Enterprise Resource Planning (ERP)</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/web-development">
                                    <a>Web Development</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/ecommerce-development">
                                    <a>E-Commerce Web Development</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/mobile-app-development">
                                    <a>Mobile App Development</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/software-testing-qa">
                                    <a>Software Teasting and QA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/offshore-staffing">
                                    <a>Offshore Staffing</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                    <h4 className={`text-light mb-4`}>Salesforce</h4>
                        <ul className={`${styles['footer-list']} text-light`}>
                            <li>
                                <Link href="/service/salesforce-cloud-services">
                                    <a>Salesforce Cloud Services</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/salesforce/salesforce-crm-development-company">
                                    <a>Salesforce CRM Services</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/salesforce/salesforce-service-cloud">
                                    <a>Salesforce Services Cloud</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/salesforce/salesforce-marketing-cloud">
                                    <a>Salesforce Marketing Cloud</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/salesforce/salesforce-commerce-cloud">
                                    <a>Salesforce Commerce Cloud</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/salesforce/salesforce-sales-cloud">
                                    <a>Salesforce Sales Cloud</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/salesforce/salesforce-devops">
                                    <a>Salesforce DevOps</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                        <h4 className={`text-light mb-4`}>Microsoft Services</h4>
                        <ul className={`${styles['footer-list']} text-light`}>
                            <li>
                                <Link href="/service/microsoft/microsoft-azure-development-services">
                                    <a>Microsoft Azure Development Services</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/service/microsoft/microsoft-sharepoint-development-services">
                                    <a>Microsoft Sharepoint Development Services</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-2">
                        <h4 className="text-light mb-4">Important Links</h4>
                        <ul className={`${styles['footer-list']} text-light`}>
                            <li>
                                <Link href="/about-us">
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-portfolio">
                                    <a>Our Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/service">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us">
                                    <a>Contact Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy">
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service">
                                    <a>Terms & Conditions</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`mt-4 ${styles['border-top']}`}>
                <div className="container">
                    <div className={`row ${styles['footer-btm-row']} py-3`}>
                        <div className="col-12 col-md-6 text-start order-2 order-md-1">
                            <p>Copyright © 2024 Ashapura Softech.</p>
                        </div>
                        <div className="col-12 col-md-6 text-start text-md-end order-1 order-md-2">
                            <div className="text-light">
                                <Link href="/terms-of-service">
                                    <a className="text-decoration-none text-light mr-1">
                                        Terms of Service
                                    </a>
                                </Link>
                                &nbsp;|&nbsp;
                                <Link href="/privacy-policy">
                                    <a className="text-decoration-none text-light ml-1">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterV1;