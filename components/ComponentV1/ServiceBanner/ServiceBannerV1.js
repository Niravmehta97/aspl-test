import React from 'react'
import Css from './ServiceBannerV1.module.css'
import ServiceContactFormV1 from '../ServiceContactForm/ServiceContactFormV1'

const Clutch = require('./Asset/clutch.svg').default
const Google = require('./Asset/google.svg').default

function ServiceBannerV1({data}) {
    return (
        <>
            {/* banner section start */}
            <section className="main-section my-md-2">
                <div className="container p-4">
                    <div className={Css["bnr-main-div"]}>
                        <div className="row">
                            <div className="col-12 col-lg-7 m-auto">
                                <div className={Css["bnr-content-div"]}>
                                    <h1 className={`fw-bold ${Css['h1-title-text']}`}>
                                        <span>{data.span_title} </span> {data.title} 
                                    </h1>
                                    <p className="text-justify">
                                        {data.description}
                                    </p>
                                    <div className="d-flex mt-4">
                                        <img
                                            src={Clutch.src}
                                            className="me-3"
                                            alt=""
                                        />
                                        <img src={Google.src} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className={Css["eclipse"]}></div>
                                <div className={Css['contact-form']}>
                                    <ServiceContactFormV1 customMessage={'Want to chat about your dream project?'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
        </>
    )
}

export default ServiceBannerV1