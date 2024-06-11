import React from 'react'
import BenefitCardV1 from './BenefitCardV1/BenefitCardV1'
import Css from './BenefitServiceCss.module.css'

export default function BenefitServiceV1({ cardList }) {
    return (
        <section class="container-fluid benefits-sec py-4">
            <div class="container">
                <h2 className={`text-center fw-bold ${Css['benefits-title']} my-3`}>
                    <span>Benefits</span> of using Sharepoint
                </h2>
                <div class="row my-5">
                    
                        {
                            cardList.map(({ img, title, desc, colorVarient }, i) => <div class="col-12 col-md-6 col-lg-6 mb-4"><BenefitCardV1 key={i} desc={desc} img={img} title={title} colorVarient={colorVarient} /></div>)
                        }
                    
                </div>
            </div>
        </section>

    )
}
