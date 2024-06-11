import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import CRM_1 from "../../public/images/services/CRM_1.svg";
import Salesforce_2 from "../../public/images/services/Salesforce_2.svg";
import Service from "../../public/images/all-banner/Services/Services.webp";
import Marketing from "../../public/images/all-banner/Services/marketing.webp";
import Commerce from "../../public/images/all-banner/Services/Commerce.webp";
import Sales from "../../public/images/all-banner/Services/Sales.webp";

const ServicesStyleTwo = () => {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Services we provided</span>
                    <h2>OUR DEVELOPMENT SERVICES</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center services-img">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/crm-software-development">
                                    <a>
                                    <Image src={CRM_1} alt="image" height={170} width={353.7} />
                                        {/* <img src="/images/services/CRM_1.webp" alt="image" /> */}
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/crm-software-development">
                                        <a>CRM SOFTWARE DEVELOPMENT</a>
                                    </Link>
                                </h3>
                                <span>CRM</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/salesforce-cloud-services">
                                    <a>
                                    <Image src={Salesforce_2} alt="image" height={170} width={264.96} />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/salesforce-cloud-services">
                                        <a>SALESFORCE CLOUD SERVICES</a>
                                    </Link>
                                </h3>
                                <span>SALESFORCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/salesforce/salesforce-service-cloud/">
                                    <a>
                                    <Image src={Service} alt="image" height={170} width={264.95} />
                                        {/* <img src="/images/services/ERP_3.webp" alt="image" /> */}
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/salesforce/salesforce-service-cloud/">
                                        <a>SALESFORCE SERVICE CLOUD</a>
                                    </Link>
                                </h3>
                                <span>SALESFORCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/salesforce/salesforce-marketing-cloud/">
                                    <a>
                                    <Image src={Marketing} alt="image" height={174} width={264.95} />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/salesforce/salesforce-marketing-cloud/">
                                        <a>SALESFORCE MARKETING CLOUD</a>
                                    </Link>
                                </h3>
                                <span>SALESFORCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/salesforce/salesforce-commerce-cloud/">
                                    <a>
                                    <Image src={Commerce} alt="image" height={170} width={264.95} />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/salesforce/salesforce-commerce-cloud/">
                                        <a>SALESFORCE COMMERCE CLOUD</a>
                                    </Link>
                                </h3>
                                <span>SALESFORCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-services-item">
                            <div className="image">
                                <Link href="/service/salesforce/salesforce-sales-cloud/">
                                    <a>
                                    <Image src={Sales} alt="image" height={170} width={264.95} />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/service/salesforce/salesforce-sales-cloud/">
                                        <a>SALESFORCE SALES CLOUD</a>
                                    </Link>
                                </h3>
                                <span>SALESFORCE</span>
                            </div>
                        </div>
                    </div>
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
    )
}

export default ServicesStyleTwo;