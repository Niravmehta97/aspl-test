import React from 'react'
import { getCertificateData } from './Certificate_Data'
const star = require('./Assets/star.svg').default.src
import Css from './Certificates.module.css'

export const Certificates = () => {
  const listData = getCertificateData();

  return (
    <section className={`w-100 ${Css['cerification-sec']} py-5`}>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between px-3">
          {
            listData.map(({ icon, rating }, i) => {
              return <div className="d-flex mb-3 align-items-center">
                <div className={`${Css['cerificate-img']} me-4`}>
                  <img src={icon} alt="" />
                </div>
                <div className="star-img me-3">
                  <img src={star} alt="" />
                </div>
                <div className={`${Css['star-number']} me-4`}>
                  <p className="mb-0">{rating}</p>
                </div>
                {
                  i < (listData.length - 1)
                  ? <div>
                      <span className={Css["line-span"]}>|</span>
                    </div>
                  : ''
                }
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}