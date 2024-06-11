import React from 'react'
import Css from './SolutionV1.module.css'

export default function SolutionV1({data}) {
    return (
        <section className="container-fluid crm-solution-sec py-4">
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <h2 className="fw-bold text-wrap my-3">
                            {data.title}
                        </h2>
                        <p className={`${Css['text-justify']} mb-0`}>
                            {data.description}
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <div className="text-center">
                            <img
                                className={Css["crm-solution-img"]}
                                src={data.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
