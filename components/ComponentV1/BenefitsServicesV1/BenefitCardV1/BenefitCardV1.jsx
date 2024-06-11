import React from 'react'
import Css from './BenefitCardCss.module.css'

export default function BenifitCardV1({ img, title, desc, colorVarient }) {
    return (
            <div className={`${Css['benefits-card']} py-4`}>
                <div className={`${Css['icon']} ${Css[colorVarient]} mb-2`}>
                    <img src={img} alt="image" />
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
    )
}
