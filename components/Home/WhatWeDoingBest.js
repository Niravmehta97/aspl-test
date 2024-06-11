import React from 'react';
import Link from 'next/link';

const WhatWeDoingBest = () => {
    return (
        <div className="overview-area home-custover pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="overview-content about-content home-crm-cont">
                            {/* <span>What We Doing Best</span> */}
                            <h3>Salesforce CRM Free Consultation Services</h3>
                            <div className="bar"></div>
                            <p>Ashapura Softech is now one of the leading CRM consultant professionals in Sheridan, Wyoming USA. Our Salesforce CRM certified consultants assist organizations in selecting and implementing the finest CRM software (customer relationship management systems) fit according to your industry and scenario. In order to increase CRM adoption and team productivity, we also create new CRM systems and applications and improve or customize your existing CRM solutions.</p> 

                            <div className="overview-btn">
                                <Link href="/service/salesforce/salesforce-crm-development-company">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="overview-image">
                            <video
                                src="/images/salesforce_crm/Feature.m4v"
                                controls= {false}
                                muted
                                autoPlay={"autoplay"}
                                preLoad="auto"
                                loop
                            > something</video>
                            {/* <img src="/images/overview.jpg" alt="image" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoingBest;