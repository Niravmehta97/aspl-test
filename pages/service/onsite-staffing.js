import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import SubscribeForm from '../../components/Home/SubscribeForm';
import Partners from '../../components/Home/Partners';
import { Helmet } from 'react-helmet';
import baseUrl from '../../utils/baseUrl';

const ServicesDetails = () => {
    return (
        <>
            <Helmet>
                <title>onsite staffing Solution services Company in USA - Ashapura Softech</title>
                <meta name="description" content="As an onsite staffing Solutions Company, we thrive to avail our clients with customized onsite IT staffing solutions, which eventually help them procure necessities to the next level." />
                <link rel='canonical' href={`${baseUrl}/service/onsite-staffing`}></link>
            </Helmet>
			<Navbar />

			<PageBanner 
                pageTitle="Onsite Staffing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="item-bg1" 
            />

            <div className="services-details-area pt-70 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="services-details-desc ">
                                <div className='text-center'>
                                    <h2>ARE YOU LOOKING FOR ONSITE STAFFING SERVICES?</h2>
                                    <p>As an onsite staffing Solutions Company, we thrive to avail our clients with customized onsite IT staffing solutions, which eventually helps them procure necessities to next level. We give a specialist at your work area, who will spend significant time in the concerned undertaking you need to employ. Our group will deal with all your staffing necessities; they will accurately fill your staffing demands and will screen every last action of the hopefuls so the execution and the profitability can be evaluated in the best possible manner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div className="about-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp onsite-staffing"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">
                                {/* <span>About Us</span> */}
                                <h2>WHY YOU NEED ONSITE IT STAFFING SOLUTIONS?</h2>
                                <div className="bar"></div>
                                <p>With regards to the on-location employing occasions we can undoubtedly serve you with an ideal answer for every one of your needs, it is possible that it is your office or some other area suitable for the occasion with the assistance of our accomplished group and their thorough endeavors we are fit for giving that sort of onsite IT staffing solutions which are relatively difficult to get from some other onsite staffing solutions company in the market and that too in an extremely conservative manner. Our administrations are much better in context of their experience and professional approach when compared to others prevailing in the market.</p>
                                <p>All the coordination and promoting requirements for the contracting occasion is overseen by us, and we orchestrate the correct number of enrollment specialists for screening, short posting and finishing the hopefuls, and give any help which your in-house group requires for the occasion.</p>
                                <p>Our clients have dependably indicated confide in us at whatever point they needed dedicated onsite staffing services with the best ROI across the globe, and we never let them down and dependably took the occasion to the next level to help them have the return on investment their business deserves.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 pt-70">
                            <img className='sr-full-img' src="/images/onsite_staffing/bigimg.svg" alt="image" />                        
                        </div>
                    </div>
                </div>
            </div> 
            <div className="services-area bg-fff pb-70">
                <div className="container">
                    <div className='about-content text-center pb-70'>
                        <h2>EVERYTHING YOU NEED FOR YOUR BUSINESS</h2>
                        <div className="bar" style={{"margin": "10px auto 25px"}}></div>
                        <p>Hiring is one of the crucial parts of the business improvement process which is experienced by each organization; be that as it may, the urgent factor here is to have the capacity to get the best staff with the master cost enhancement. To expect industry learning and most recent specialized abilities from the staff isn’t excessively, since for quickening the business development amount and quality both ought to be particularly set up.</p>
                        <p>As an onsite staffing Solutions Company we gloat of our aptitude in providing Onsite IT staffing solutions and guarantee to stand consistently with it. We insert a conferred nearby group for ventures and guarantee an impeccable undertaking conveyance with no additional time and cost spent on ability improvement and preparing.</p>
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
            
            {/* <SubscribeForm /> */}

            <div className="pt-70">
                <Partners />
            </div>
			<Footer />
		</>
    )
}

export default ServicesDetails;