import React from 'react'
import { getObjectiveData } from './Objectives_Data'
import Css from './Objectives.module.css'

export const Objectives = () => {
    return (
        <section className="container-fluid objectivies-sec py-4">
            <div className="container">
                <div className="row">
                    {
                        getObjectiveData().map(({ img, title, desc }) => {
                            return <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <div className={Css["objective-card"]}>
                                    <img src={img} alt="" />
                                    <h5 className="fw-semibold my-3">{title}</h5>
                                    <p>
                                       {desc}
                                    </p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
