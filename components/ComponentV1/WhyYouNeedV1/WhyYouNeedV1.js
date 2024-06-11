import React from 'react'
import Css from './WhyYouNeedV1.module.css'
export default function WhyYouNeedV1({data}) {
    return (
        <section className="w-100 crm-software-sec py-4">
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['crm-software-title']} my-3`}>
                    {data.title} <span>{data.span_title}</span>
                </h2>
                <div className="row my-5">
                    <div className="col-12">
                        {
                            data.desc.map((d) => {
                                return <p className={`${Css['text-justify']}`}>{d}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}
