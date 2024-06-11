import React from 'react'
import Css from './SalesforceServicesV1.module.css'

export default function SalesforceServicesV1({data}) {
    return <>
        <section class="container-fluid benefits-sec py-4">
            <div class="container">
                <h2 className={`text-center fw-bold ${Css['salesforce-service-card-title']} my-3`}>
                    Salesforce <span>Cloud Services</span>
                </h2>
                <div class="row my-5">
                {
                    data.listData.map(({ title, desc, img }) => {
                        return <div className={`col-12 col-md-6 col-lg-4 mb-4`}>
                                    <div className={`${Css['salesforce-service-card']} py-4`}>
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <h4>{title}</h4>
                                            <img className={`${Css['custom-service-img']}`} src={img} alt="image" />
                                        </div>
                                        <p>{desc}</p>
                                    </div>
                            </div>
                        })
                }
                </div>
            </div>
        </section>

        </>
}