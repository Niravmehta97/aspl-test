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
                                        <h2>Microsoft Sharepoint Development Services</h2>
                                        <ul><li>
                                                <Link href="/"><a>Home</a></Link>
                                            </li>
                                            <li>
                                                <Link href="/service"><a>Services</a></Link>
                                            </li>
                                            <li className="active">Microsoft Sharepoint Development Services</li></ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="common-banner">
                                        <picture>
                                            <img src="/images/all-banner/Services/microsoft-sharepoint-development-services.webp" alt="image" />
                                        </picture>
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