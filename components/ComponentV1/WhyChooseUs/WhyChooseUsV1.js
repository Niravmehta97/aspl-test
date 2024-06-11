import React from 'react'
import { getWhyChooseUsV1Data } from './WhyChooseUsV1_Data'
import Css from './WhyChooseUsV1.module.css'

export default function WhyChooseUsV1() {
    return (
        <section className={`w-100 ${Css['why-choose-sec']} py-4`}>
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['why-choose-title']} my-3`}>
                    Why Choose <span>Ashapura Softech?</span>
                </h2>
                <div className="row my-5 px-xl-5 position-responsive">
                    {
                        getWhyChooseUsV1Data().map((item, i) => {
                            return <div className={`col-12 col-md-6 col-lg-6 col-xl-3 ${Css['Card-component']}`}>
                                <div className={`${Css['why-choose-card']} text-center  ${i % 2 !== 0 ? Css['Down'] : ''}`}>
                                    <div>
                                        <img src={item.img} alt="" />
                                        <h6 className="mt-3">{item.desc}</h6>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
