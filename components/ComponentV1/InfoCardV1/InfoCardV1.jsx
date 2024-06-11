import React from 'react'
import Css from './InfoCardCss.module.css'

export default function InfoCardV1({ img, title, desc, colorVariant }) {
    return (
        <div className={`${Css['sharepoint-card']} py-4`}>
            <div className={`${Css['icon']} ${Css[colorVariant]} mb-2`}>
                <img src={img} alt="image" />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}
