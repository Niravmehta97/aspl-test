import React from 'react'
import Css from './AboutVisionV1.module.css'
import { getAboutVisionData } from './AboutVisionV1_Data'

export default function AboutVisionV1() {
    return (
        <div className="container development-process-sec py-4 pb-0">
            <div className="row my-5">
                {
                    getAboutVisionData().map(({ img, title, desc, itemClass }) => {
                        return <div className="col-12 col-lg-6">
                            <div className={`${Css['mission-vision-card']} ${Css[itemClass]} p-4 mb-5`}>
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
