import React from 'react'
import Css from './FreeConsultant.module.css'

export default function FreeConsultantV1() {
    return (
        <section className={`w-100 ${Css['salesforce-crm-sec']} py-4`}>
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['salesforce-crm-title']} my-3`}>
                    <span>Salesforce CRM</span> Free Consultation Services
                </h2>
                <div className="row my-5">
                    <div className="col-12">
                        <p className={`text-justify mb-5 ${Css['fs-18']}`}>
                            Ashapura Softech is now one of the leading CRM consultant
                            professionals in Wilmington, Delaware USA. Our Salesforce CRM certified
                            consultants assist organizations in selecting and implementing the
                            finest CRM software (customer relationship management systems) fit
                            according to your industry and scenario. In order to increase CRM
                            adoption and team productivity, we also create new CRM systems and
                            applications and improve or customize your existing CRM solutions.
                        </p>
                        <div className="text-center">
                            <a href="/service/salesforce/salesforce-crm-development-company" className={`${Css['learn-more-btn']} fw-bold`}>
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
