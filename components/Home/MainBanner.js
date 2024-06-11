import React from 'react';
import Image from "next/image";
import mainBannerImage from "../../public/images/Main_banner_image.webp";

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="item-five">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="main-banner-home" style={{"max-width":"1380px"}}>
                                        <center><h1>Salesforce Services And Software Development Company</h1>
                                        <p>Boost your digital presence with one-stop solution for software consultations and developments. We help businesses to grow and streamline their processes with innovative software solutions.</p></center>
                                    </div>
                                </div>
                                        {/* <img src="/images/Main_banner_image.webp" alt="image" /> */}
                                {/* <div className="col-lg-6">
                                    <div className="main-banner-image pl-15">
                                    <Image src={mainBannerImage} alt="image" height={575.73} width={664.3} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;