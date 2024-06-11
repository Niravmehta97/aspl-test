import React from 'react'
import { getIndustryWeServeDataV1 } from './IndustryWeServerV1_Data'
import Css from './IndustryWeServeV1.module.css'

export default function IndustryWeServeV1() {
    return (
        <section className="w-100 industries-sec py-4">
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['industries-title']} my-3`}>
                    <span>Industries</span> We Serve
                </h2>
                <div className="row my-5 px-3">
                    {
                        getIndustryWeServeDataV1().map(({ title, infoList }) => {
                            return <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                                <div className={`${Css['industries-card']} pt-5 pb-4`}>
                                    <h6 className="fw-semibold mb-3">{title}</h6>
                                    {
                                        infoList.map((item) => {
                                            return <p className="mb-2">
                                                <svg
                                                    className='me-2'
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 256 256"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
                                                    />
                                                </svg>
                                                {item}
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
