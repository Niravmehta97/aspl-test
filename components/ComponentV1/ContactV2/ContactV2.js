import React from 'react'
import ContactFormV1 from '../ContactForm/ContactFormV1'
import Css from './ContactV2.module.css'


const Behance = require('./Asset/behance.svg').default.src
const Facebook = require('./Asset/facebook.svg').default.src
const Insta = require('./Asset/instagram.svg').default.src
const Linkedin = require('./Asset/linkedin.svg').default.src
const Twitter = require('./Asset/twitter.svg').default.src  

export default function ContactV2() {
    return (
        <>
            
            <section className="main-section my-md-3">
                <div className="container p-4">
                    <div className="bnr-main-div">
                        <div className="row">
                            <div className="col-12 col-md-9 m-auto order-2 order-md-1">
                                <div className="bnr-content-div">
                                    <h1 className={`fw-bold ${Css['h1-title-text']} mb-3`}>
                                        Let’s build something great
                                    </h1>
                                    <p className="mb-0 fw-bold text-dark text-justify">
                                        Please get in touch with any questions you may have about working
                                        with us, or the services we provide.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 order-1 order-md-2">
                                <div className="eclipse text-md-end text-center d-grid d-md-block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-main-sec">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-12 col-lg-8 m-auto">
                            <div className={Css['contact-main-sec']}>
                                <ContactFormV1 customMessage={'Drop us a message'} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 m-auto mt-3">
                            <h2 className="fw-bold contact-title mb-4">Direct touch to us</h2>
                            <div className="d-flex align-items-center mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 15 15"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        d="M6 11.5h3m-5.5 3h8a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                                    />
                                </svg>
                                <h6 className={`fw-semibold ms-3 mb-0 ${Css['text-lightblue']}`}>Give us a call</h6>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <a href="tel:+19136668022" className="fw-semibold me-4">
                                    <span>+1 913 666 80 22</span>
                                </a>
                                <a href="tel:+14302766212" className="fw-semibold">
                                    <span>+1 430 276 62 12</span>
                                </a>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 25 25"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                                    />
                                </svg>
                                <h6 className={`fw-semibold ms-3 mb-0 ${Css['text-lightblue']}`}>Email us</h6>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <a href="mailto:info@ashapurasoftech.com" className="fw-semibold">
                                    <span>info@ashapurasoftech.com</span>
                                </a>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395"
                                    />
                                </svg>
                                <h6 className={`fw-semibold ms-3 mb-0 ${Css['text-lightblue']}`}>USA</h6>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <a
                                    href="https://maps.app.goo.gl/Nc57ShJVXXqDid1K9"
                                    target="_blank"
                                    className="fw-semibold"
                                >
                                    <span>
                                        2055 Limestone Rd, Wilmington, Delaware, 19808
                                    </span>
                                </a>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395"
                                    />
                                </svg>
                                <h6 className={`fw-semibold ms-3 mb-0 ${Css['text-lightblue']}`}>INDIA</h6>
                            </div>
                            <div className="d-flex mb-3">
                                <a
                                    href="https://maps.app.goo.gl/XJkqWccwPJGb9QGQA"
                                    target="_blank"
                                    className="fw-semibold"
                                >
                                    <span>
                                        1011-12, Satyamev Eminance Near Shukan
                                        Mall, Science City Rd, Ahmedabad, Gujarat - 380060
                                    </span>
                                </a>
                            </div>
                            <div className={`d-flex ${Css['social-icons']} justify-content-between px-5 px-lg-0 flex-wrap`}>
                                <a
                                    href="https://in.linkedin.com/company/ashapura-softech-inc"
                                    className="me-3 mb-3"
                                    target="_blank"
                                >
                                    <img src={Linkedin} alt="" />
                                </a>
                                <a
                                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fashapura"
                                    className="me-3 mb-3"
                                    target="_blank"
                                >
                                    <img src={Twitter} alt="" />
                                </a>
                                <a
                                    href="https://www.facebook.com/ashapurasofttechpvtltd/"
                                    className="me-3 mb-3"
                                    target="_blank"
                                >
                                    <img src={Facebook} alt="" />
                                </a>
                                <a href="https://www.instagram.com/ashapurasoftech/" className="me-3 mb-3" target="_blank">
                                    <img src={Insta} alt="" />
                                </a>
                                <a
                                    href="https://www.behance.net/info941e35a8"
                                    className="me-3 mb-3"
                                    target="_blank"
                                >
                                    <img src={Behance} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
