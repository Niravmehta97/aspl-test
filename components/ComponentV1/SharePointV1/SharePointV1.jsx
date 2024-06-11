import React from 'react'
import InfoCardV1 from '../InfoCardV1/InfoCardV1'
import Css from './SharePointV1Css.module.css'

export default function SharePointV1({ cardList }) {
    return (
        <section class="container-fluid sharepoint-sec py-4">
            <div class="container">
                <h2 class={`text-center fw-bold ${Css['sharepoint-title']} my-3`}>
                    Highly skilled and experienced <span>SharePoint Developers</span>
                </h2>
                <p>
                    Being unique is our quality! Ashapura Softech Inc believes in what gives us an advantage over our competition. Our reputation as a mobile and software application development company is unmatched in providing end-to-end support for our customers.
                </p>
                <div class="row my-5">
                    
                        {
                            cardList.map(({img, title, desc, colorVariant}, i) => <div class="col-12 col-md-6 col-lg-6 mb-4"><InfoCardV1 key={i} desc={desc} img={img} title={title} colorVariant={colorVariant} /></div>)
                        }
                    
                </div>
            </div>
        </section>
    )
}
