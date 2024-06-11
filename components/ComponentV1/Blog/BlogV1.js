import React from 'react'
import { getBlogData } from './BlogV1_Data'
import Css from './BlogV1.module.css'
import Link from 'next/link';

const calendar = require('./Asset/calendar.webp').default
const user = require('./Asset/person.webp').default
export default function BlogV1() {
    return (
        <section className={`w-100 ${Css['blog-sec']} py-4`}>
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['blog-title']} my-3`}>
                    Latest <span>Blog</span> Updates
                </h2>
                <div className="row my-5">
                    {
                        getBlogData().map(({ img, date, by, title, desc, link }) => {
                           return <div className="col-12 col-md-6 col-lg-4 mb-3">
                                <div className={`${Css['blog-card']}  mb-3 pb-3`}>
                                    <img className="mb-3" src={img} alt="" />
                                    <div className="content-div px-3">
                                        <div className="d-flex flex-wrap">
                                            <div className="d-flex align-items-center me-2 mb-2">
                                                <img
                                                    className={Css["icon-img"]}
                                                    src={calendar.src}
                                                    alt=""
                                                />
                                                <span className={`${Css['icon-text']}  ms-2`}>{date}</span>
                                            </div>
                                            {/* <div className="d-flex align-items-center me-2 mb-2">
                                                <img
                                                    className={Css["icon-img"]}
                                                    src={user.src}
                                                    alt=""
                                                />
                                                <span className="icon-text ms-2">{by}</span>
                                            </div> */}
                                        </div>
                                        <h5 className=" text-wrap mb-xl-4 mb-3">{title}</h5>
                                        {/* <p className="text-wrap mb-4">
                                            {desc}
                                        </p> */}
                                        <a href={link} className={Css["read-more-btn"]}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className="col-12 text-center mt-5">
                        <Link href="/blog">
                            <a className={`${Css['load-more-btn']} fw-bold`}>
                                Load More
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
