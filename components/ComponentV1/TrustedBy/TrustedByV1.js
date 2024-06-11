import React from 'react'
import Css from './TrustedByV1.module.css'

const img1 = require('./Asset/ausape.svg').default
const img2 = require('./Asset/bodhi.svg').default
const img3 = require('./Asset/bupa.svg').default
const img4 = require('./Asset/crm.svg').default
const img5 = require('./Asset/digital_plus_solutions_1_1x.svg').default
const img6 = require('./Asset/djo.svg').default
const img7 = require('./Asset/lesrik.svg').default

export default function TrustedByV1() {
    const image = [
        img1.src,
        img2.src,
        img3.src,
        img4.src,
        img5.src,
        img6.src,
        img7.src,
        img1.src,
        img2.src,
        img3.src,
        img4.src,
        img5.src,
        img6.src,
        img7.src,
    ]
    return (
        <div className={`w-100 ${Css['client-logo-slider']} pt-5 pb-4`}>
            <h1 className={`text-center fw-bold text-white ${Css['client-logo-title']}`}>
                We're <span>trusted</span> by
            </h1>
            <div className={Css["logos"]}>
                <div className={Css["logo_items"]}>
                    {
                        image.map((item) => {
                            return <img src={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
