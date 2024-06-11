import React from 'react';
import Link from 'next/link';
import ContactFormTwo from '../Contact/ContactCommon';
import Image from "next/image";
import contactMe from "../../public/images/contact-me.webp";
import asplLogo from "../../public/images/aspl-logo.png";
import one from "../../public/images/footer-img/1.webp";
import two from "../../public/images/footer-img/2.webp";
import three from "../../public/images/footer-img/3.webp";
import four from "../../public/images/footer-img/4.webp";
import five from "../../public/images/footer-img/5.webp";
import six from "../../public/images/footer-img/6.webp";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-contact-box pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className='col-md-12 col-lg-6'>
                            <div className='footercont-leftbox'>
                                <h3>Thanks for your interest in Ashapura softech!</h3>
                                <p>Want to learn more about the all-in-one Software development and solutions? Submit this form and our sales representative will contact you soon.</p>
                                <Image src={contactMe} alt="image" height={374.26} width={673.3} />
                                {/* <img src="/images/contact-me.webp" alt="image" /> */}
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                            <div className="contact-form-inner contact-commonbox">
                                <ContactFormTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo" id="footer-logo">
                                    <Link href="/">
                                        <a>
                                        <Image src={asplLogo} alt="image" height={55} width={223.98} />
                                        </a>
                                    </Link>
                                </div>

                                <p>Ashapura Softech is a leading Enterprise Solutions provider company located in Wyoming USA.</p>

                                <ul className="social">
                                    <li>
                                        <a href="https://twitter.com/ashapura" className="twitter" target="_blank" rel="nofollow">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UC3kcuNxZBbKw_H7dpG9D4Iw" target="_blank" className='youtube' rel="nofollow">
                                            <i className='bx bxl-youtube'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/ashapurasofttechpvtltd/" className="facebook" target="_blank" rel="nofollow">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/ashapura-softech-pvt-ltd" target="_blank" className="linkedin" rel="nofollow">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.behance.net/info941e35a8" target="_blank"  className="behance" rel="nofollow">
                                            <i className='bx bxl-behance'></i>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-7 col-sm-6">
                                    <div className="single-footer-widget pl-5">
                                        <h3>Featured Services</h3>
                
                                        <ul className="quick-links">
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
                                                <Link href="/service/salesforce-cloud-services">
                                                    <a>Salesforce</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/service/salesforce/salesforce-crm-development-company">
                                                    <a>Salesforce CRM Services</a>
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
                                                    <a>Software Testing And QA</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service/offshore-staffing">
                                                    <a>Offshore Staffing</a>
                                                </Link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-5 col-sm-6">
                                    <div className="single-footer-widget pl-5">
                                        <h3>Important Links</h3>
                
                                        <ul className="quick-links">
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
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Information</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Phone</span>
                                        <p><a href="tel:9136668022">+1 913 666 80 22</a><br/>
                                        <a href="tel:4302766212">+1 430 276 62 12</a></p> 
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>Email</span>
                                        <a href="mailto:info@ashapurasoftech.com">info@ashapurasoftech.com</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>Address</span>
                                        {/* <a href='https://goo.gl/maps/uu2PRoozGKLtE3SQ7' target="_blank">1011-12, Satyamev eminance, Near Shukan Mall, Science City road,<br/> Ahmedabad -380060</a> */}
                                        <a href="https://goo.gl/maps/3opMe7e8v3KMGwUNA" target="_blank">Ashapura Softech INC <br/>1095, Sugar View Dr, Sheridan ,<br/> WY , 82801</a>
                                        <hr/>
                                        <a href="https://www.google.com/maps/place/Ashapura+Softech+Pvt+Ltd/@23.0723388,72.5134739,17.25z/data=!4m19!1m13!4m12!1m4!2m2!1d72.515584!2d23.0719488!4e1!1m6!1m2!1s0x395e84f3edcf448d:0x155579f1aadbe2fa!2sashapurasoftech!2m2!1d72.5151492!2d23.0724306!3m4!1s0x395e84f3edcf448d:0x155579f1aadbe2fa!8m2!3d23.0724306!4d72.5151492" target="_blank">Ashapura Softech Pvt Ltd <br/>1011-12, Satyamev eminance Near Shukan Mall , Science City Rd, <br />Ahmedabad, Gujarat - 380060</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy; {currentYear} Ashapura Softech.
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-tag-area pt-4'>
                <div className='container'>
                    <div className="about-content  text-center">
                        <span>Check what our clients says about us</span>
                        <h2>We are highly recommended !!</h2>                        
                    </div>
                    <div className='foot-tags'>
                        {/* <img src="/images/footer-img/1.webp" alt="image" />
                        <img src="/images/footer-img/2.webp" alt="image" />
                        <img src="/images/footer-img/3.webp" alt="image" />
                        <img src="/images/footer-img/4.webp" alt="image" />
                        <img src="/images/footer-img/5.webp" alt="image" />
                        <img src="/images/footer-img/6.webp" alt="image" /> */}
                        <div className='img-tags'><Image src={one} alt="image" height={172.79} width={191.88} /></div>
                        <div className='img-tags'><Image src={two} alt="image" height={164.44} width={191.88} /></div>
                        <div className='img-tags' id="foot-tag-three"><Image src={three} alt="image" height={95.94} width={191.88} /></div>
                        <div className='img-tags' id="foot-tag-four"><Image src={four} alt="image" height={71.43} width={191.88} /></div>
                        <div className='img-tags'><Image src={five} alt="image" height={191.88} width={191.88} /></div>
                        <div className='img-tags'><Image src={six} alt="image" height={191.88} width={191.88} /></div>
                    </div>
                </div>
            </div>
            <div className='foottags-box'>
                <a href="/service/crm-software-development" target="_blank"><span className="foottag">CRM software development</span></a>
                <a href="/service/crm-software-development" target="_blank"><span className="foottag">CRM software development company</span></a>
                <a href="/service/salesforce-cloud-services" target="_blank"><span className="foottag">salesforce consultants</span></a>
                <a href="/service/salesforce/salesforce-crm-development-company" target="_blank"><span className="foottag">salesforce consulting service</span></a>
                <a href="/service/salesforce-cloud-services" target="_blank"><span className="foottag">crm software</span></a>
                <a href="/blog/salesforce-marketing-cloud-platform" target="_blank"><span className="foottag">Salesforce Marketing Cloud</span></a>
                <a href="/blog/top-10-vtiger-crm-plugins/" target="_blank"><span className="foottag">Vtiger CRM</span></a>
                <a href="/service/salesforce/salesforce-service-cloud/" target="_blank"><span className="foottag">Salesforce Cloud Services</span></a>
                <a href="/blog/what-is-salesforce-service-cloud/" target="_blank"><span className="foottag">what is salesforce service cloud</span></a>
                <a href="/blog/what-is-salesforce-service-cloud/" target="_blank"><span className="foottag">what is service cloud in salesforce</span></a>
                <a href="/blog/what-is-salesforce-service-cloud/" target="_blank"><span className="foottag">salesforce services cloud</span></a>
                <a href="/service/salesforce/salesforce-service-cloud/" target="_blank"><span className="foottag">salesforce cloud service</span></a>
                <a href="/service/salesforce/salesforce-service-cloud/" target="_blank"><span className="foottag">salesforce service cloud features</span></a>
                <a href="/service/salesforce/salesforce-service-cloud/" target="_blank"><span className="foottag">salesforce service cloud professional</span></a>
                <a href="/service/crm-software-development" target="_blank"><span className="foottag">CRM Development</span></a>
                <a href="/blog/salesforce-certified-developers-1/" target="_blank"><span className="foottag">Salesforce Developers</span></a>
                <a href="/service/salesforce/salesforce-crm-development-company/" target="_blank"><span className="foottag">Salesforce CRM</span></a>
                <a href="/service/salesforce/salesforce-marketing-cloud/" target="_blank"><span className="foottag">Marketing Cloud Salesforce</span></a>
                <a href="/service/salesforce/salesforce-marketing-cloud/" target="_blank"><span className="foottag">Salesforce Cloud Marketing</span></a>
                <a href="/blog/what-is-salesforce-marketing-cloud/" target="_blank"><span className="foottag">Marketing Cloud in Salesforce</span></a>
                <a href="/blog/what-is-salesforce-marketing-cloud/" target="_blank"><span className="foottag">What is Salesforce Marketing Cloud</span></a>
                <a href="/blog/what-is-salesforce-marketing-cloud/" target="_blank"><span className="foottag">salesforce.com Marketing Cloud</span></a>
                <a href="/service/salesforce/salesforce-commerce-cloud/" target="_blank"><span className="foottag">salesforce commerce cloud</span></a>
                <a href="/service/salesforce/salesforce-commerce-cloud/" target="_blank"><span className="foottag">commerce cloud</span></a>
                <a href="/service/salesforce/salesforce-commerce-cloud/" target="_blank"><span className="foottag">salesforce ecommerce</span></a>
                <a href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it/" target="_blank"><span className="foottag">what is salesforce commerce cloud</span></a>
                <a href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it/" target="_blank"><span className="foottag">salesforce commerce cloud agency</span></a>
                <a href="/service/salesforce/salesforce-sales-cloud" target="_blank"><span className="foottag">on Cloud sales</span></a>
                <a href="/blog/what-is-salesforce-commerce-cloud-and-how-ecommerce-could-use-it/" target="_blank"><span className="foottag">salesforce commerce cloud marketplace</span></a>
                <a href="/service/salesforce/salesforce-sales-cloud" target="_blank"><span className="foottag">Salesforce Sales Cloud</span></a>
                <a href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us/" target="_blank"><span className="foottag">What is salesforce Sales Cloud</span></a>
                <a href="/service/salesforce/salesforce-sales-cloud" target="_blank"><span className="foottag">Sales Cloud</span></a>
                <a href="/service/salesforce/salesforce-sales-cloud" target="_blank"><span className="foottag">cloud sales force</span></a>
                <a href="/service/salesforce/salesforce-sales-cloud" target="_blank"><span className="foottag">Cloud Sales</span></a>
                <a href="/blog/what-is-salesforce-sales-cloud-and-how-the-sales-cloud-helps-us/" target="_blank"><span className="foottag">what is sales cloud</span></a>





            </div>
        </>
    );
}

export default Footer;