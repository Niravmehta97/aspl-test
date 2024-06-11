import React from 'react'
import Css from './DevelopmentProcessV1.module.css'
import { getDevelopmentProcessData } from './DevelopmentProcessV1_Data'

export default function DevelopmentProcessV1() {
    return (
        <div className="container development-process-sec py-4 pb-0">
            <h2 className={`text-center fw-bold ${Css['development-title']} my-3`}>
                Our Development <span>Process</span>
            </h2>
            <div className="row my-5">
                {
                    getDevelopmentProcessData().map(({ img, title, desc, itemClass }) => {
                        return <div className="col-12 col-lg-6">
                            <div className={`${Css['dev-card']} ${Css[itemClass]} p-4 mb-5`}>
                                <div className="d-flex">
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h5 className="fw-bold">{title}</h5>
                                        <p className="mb-0">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
