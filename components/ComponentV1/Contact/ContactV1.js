import React from 'react'
import Css from './ContactV1.module.css'
import ContactFormV1 from '../ContactForm/ContactFormV1'

const USA = require('./Asset/usa.webp').default.src
const IND = require('./Asset/india.webp').default.src

const Behance = require('./Asset/behance.svg').default.src
const Facebook = require('./Asset/facebook.svg').default.src
const Insta = require('./Asset/instagram.svg').default.src
const Linkedin = require('./Asset/linkedin.svg').default.src
const Twitter = require('./Asset/twitter.svg').default.src

export default function ContactV1 () {
    return (
        <section className={`w-100 ${Css['contact-sec']} py-5 mt-4`}>
            <div className="container">
                <div className="row">
                    <div className={`col-12 col-lg-5 col-xl-6`}>
                        <div className={`${Css['form-col']} p-xl-4 p-3`}>
                            <ContactFormV1 />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 p-4">
                        <div className={`row`}>
                            <div className={`col-12 col-sm-6 col-xxl-5`}>
                                {/* <h6 className=" mt-3 mb-3">Our Offices</h6> */}
                                <div className={`${Css['border-right']}`}>
                                    <div className="d-flex my-3 align-items-center text-center">
                                        <img
                                            className={`${Css['country-logo']} mt-1`}
                                            src={USA}
                                            alt=""
                                        />
                                        <h5 className='ms-3'>
                                            USA
                                        </h5>
                                    </div>
                                    <a
                                        className="text-decoration-none text-light"
                                        href="https://maps.app.goo.gl/52FDvohdu775pxnw6"
                                        target="_blank"
                                    >
                                        <div className="">
                                            <p className="mb-0  text-wrap">2055 Limestone Rd,</p>
                                            <p className="mb-0  text-wrap">Wilmington, Delaware</p>
                                            <p className="mb-0  text-wrap">19808</p>
                                        </div>
                                    </a>
                                    <div className=" d-grid mb-3 mt-5">
                                        <a
                                            className="text-decoration-none  text-wrap mb-3"
                                            href="mailto:info@ashapurasoftech.com"
                                        >
                                            info@ashapurasoftech.com
                                        </a>
                                        <a
                                            className="text-decoration-none "
                                            href="tel:+19136668022"
                                        >
                                            +1 913 666 80 22
                                        </a>
                                        <a
                                            className="text-decoration-none "
                                            href="tel:+14302766212"
                                        >
                                            +1 430 276 62 12
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xxl-7 mb-3 ps-4">
                                <div className="d-flex my-3 align-items-center text-center">
                                    <img
                                        className={`${Css['country-logo']} mt-1`}
                                        src={IND}
                                        alt=""
                                    />
                                    <h5 className='ms-3'>
                                        INDIA
                                    </h5>
                                </div>
                                    <a
                                        className="text-decoration-none "
                                        href="https://maps.app.goo.gl/XJkqWccwPJGb9QGQA"
                                        target="_blank"
                                    >
                                        <div className="">
                                            <p className="mb-0  text-wrap">1011-12, Satyamev Eminence</p>
                                            <p className="mb-0  text-wrap">
                                                Near Shukan Mall, Science
                                            </p>
                                            <p className="mb-0  text-wrap">
                                                City Rd, Ahmedabad,
                                            </p>
                                            <p className="mb-0  text-wrap">Gujarat, 380060</p>
                                        </div>
                                    </a>
                                    <div className=" d-grid mb-3 mt-3">
                                    <a
                                        className="text-decoration-none  text-wrap mb-3"
                                        href="mailto:hr@ashapurasoftech.com"
                                    >
                                        hr@ashapurasoftech.com
                                    </a>
                                    <a
                                            className="text-decoration-none "
                                            href="tel:+917946019924"
                                        >
                                            +91 79460 19924
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 mt-4">
                            <div className="col-10">
                                {/* <div className="">
                                    <h6 className="mb-4">Social Media</h6>
                                </div> */}
                                <div className={`d-flex px-5 ${Css['social-icons']} justify-content-between`}>
                                    <a
                                        href="https://in.linkedin.com/company/ashapura-softech-inc"
                                        className="me-3"
                                        target="_blank"
                                    >
                                        <img src={Linkedin} alt="" />
                                    </a>
                                    <a
                                        href="https://twitter.com/i/flow/login?redirect_after_login=%2Fashapura"
                                        className="me-3"
                                        target="_blank"
                                    >
                                        <img src={Twitter} alt="" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/ashapurasofttechpvtltd/"
                                        className="me-3"
                                        target="_blank"
                                    >
                                        <img src={Facebook} alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/ashapurasoftech/" className="me-3" target="_blank">
                                        <img src={Insta} alt="" />
                                    </a>
                                    <a
                                        href="https://www.behance.net/info941e35a8"
                                        className="me-3"
                                        target="_blank"
                                    >
                                        <img src={Behance} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
