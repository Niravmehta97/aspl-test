import React from 'react'
import Css from './AboutBannerV1.module.css'

const AboutBanner = require('./Asset/about-banner.svg').default.src

export const AboutBannerV1 = () => {
    return (
        <section className="main-section my-md-5">
            <div className="container p-4">
                <div className="bnr-main-div">
                    <div className="row">
                        <div className="col-12 col-md-8 m-auto order-2 order-md-1">
                            <div className={Css["bnr-content-div"]}>
                                <h1 className={`fw-bold ${Css['h1-title-text']}`}>About us</h1>
                                <p className="mb-0">
                                    Expertise in technological innovation, business process
                                    re-engineering and overall relationship building to scale
                                    collectively.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2">
                            <div className={`${Css['eclipse']} text-md-end text-center justify-content-center justify-content-md-end d-grid d-md-block`}>
                                <img
                                    className={`${Css['bnr-img']} main`}
                                    src={AboutBanner}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
