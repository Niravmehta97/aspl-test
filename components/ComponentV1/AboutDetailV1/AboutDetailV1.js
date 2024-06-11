import React from 'react'
import Css from './AboutDetailV1.module.css'
const DetailImg = require('./Asset/detail-about.svg').default.src

export const AboutDetailV1 = () => {
    return (
        <section className={`container-fluid ${Css['about-detail-sec']} pt-4 pb-2`}>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                        <p className={`${Css['text-justify']}`}>
                            Our expert team of designers and developers use innovation and
                            favorable best-in-class quality solutions for the clients and their
                            customers to engage with technology, building excellent user
                            experiences. Our clientele has reached across the globe, serving small
                            business startups to large enterprises, this makes us more credible to
                            work with clients project of any horizon and domain.
                        </p>
                        <p className={`${Css['text-justify']}`}>
                            Ashapura Softech is a leading Enterprise Solutions provider company
                            located in Wilmington, Delaware USA. The company was founded in the year 2012 by 2
                            highly experienced technocrats carrying a vision to create an
                            extensive company that serves dream-big people and provides solutions
                            to those who explore newer possibilities in IT. They bring in 10+
                            years of experience in software development and IT consultancy. The
                            company was founded with sole aim for providing the best IT solutions
                            to the clients, which brings success to their business in the highly
                            competitive market.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <div className="text-center">
                            <img
                                className={Css["about-detail-img"]}
                                src={DetailImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
