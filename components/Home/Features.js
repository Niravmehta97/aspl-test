import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import developmentProcess from "../../public/images/development-process.webp";

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title text-width">
                    <span>Work Cycle</span>
                    <h2>OUR DEVELOPMENT PROCESS</h2>
                    <div className="bar"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="features-image-warp">
                        <Image src={developmentProcess} alt="image" height={662.26} width={673.3} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="pl-30">
                            <div className="row home-feature">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-analysis"></i>
                                        </div>
                                        <h3>
                                            {/* <Link href="/services-details"> */}
                                                <a>Research</a>
                                            {/* </Link> */}
                                        </h3>
                                        <p>Before we dive into the development process, we make quick and detail research of the project and choose the best-suited platform.</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-network"></i>
                                        </div>
                                        <h3>
                                            {/* <Link href="/services-details"> */}
                                                <a>Planning</a>
                                            {/* </Link> */}
                                        </h3>
                                        <p>With the scope of the project fixed and the idea conceptualized, we create a roadmap for go to successful development and launch of an application.</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-vector"></i>
                                        </div>
                                        <h3>
                                            {/* <Link href="/services-details"> */}
                                                <a>Creativity</a>
                                            {/* </Link> */}
                                        </h3>
                                        <p>Every business is unique and has potential to make it huge.Our experienced team adds creative flavour to make the project a success.</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-cpu"></i>
                                        </div>
                                        <h3>
                                            {/* <Link href="/services-details"> */}
                                                <a>Engineering</a>
                                            {/* </Link> */}
                                        </h3>
                                        <p>With all the boxes ticked we help you launch the feature-rich high-quality application in the marketplace with all your desired functionality.</p>
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

export default Features;