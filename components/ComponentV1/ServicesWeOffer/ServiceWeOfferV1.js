import React from 'react'
import Css from './ServiceWeOfferV1.module.css'

export default function ServiceWeOffer({data}) {
  return <>
    <section className={`w-100 ${Css['services-sec']} py-4`}>
      <div className="container">
        <h2 className={`text-center text-light fw-bold ${Css['services-title']} my-4`}>
          <span>{data.span_title}</span> {data.title}
        </h2>
        <p className="text-justify">
          {data.description}
        </p>
        <div className="row my-5">
          {
            data.listData.map(({ title, desc }) => {
              return <div className={`col-12 col-md-4 ${Css['service-col']}`}>
                <div>
                  <h5 className="fw-semibold text-light mb-3">{title}</h5>
                  <p className="text-justify">
                    {desc}
                  </p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  </>
}