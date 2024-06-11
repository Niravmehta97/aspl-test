import React from 'react';
import Link from '../../utils/ActiveLink';

const MainBanner = () => {
    return (
        <div className="main-banner common-banner-wrap">
            <div className="main-banner-item item-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="page-banner-content commonbanner-cont main-banner-content pr-15">
                                        <h2>About Us</h2>
                                        <ul><li>
                                                <Link href="/"><a>Home</a></Link>
                                            </li>
                                           <li className="active">About Us</li></ul>
                                        <p>Expertise in technological innovation, business process re-engineering and overall relationship building to scale collectively.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="common-banner">
                                        <img src="/images/all-banner/About/Aboutus.webp" alt="image" />
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