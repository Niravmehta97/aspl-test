import React from 'react'
import { getExploreOurCreationV1Data } from './ExploreOurCreationV1_Data'
import Css from './ExploreOurCreationV1.module.css'
import Link from 'next/link';

export default function ExploreOurCreationV1() {
    return (
        <section className={`w-100 ${Css['our-creation-sec']} py-4`}>
            <div className="container">
                <h2 className={`text-center fw-bold ${Css['our-creation-title']} my-3`}>
                    Explore <span>Our Creations</span>
                </h2>
                <div className="row my-5">
                    {
                        getExploreOurCreationV1Data().map(({ img, title, appStack, link }) => {
                            return <div className="col-12 col-md-4">
                                <Link  href={link}>
                                <a>
                                    <div className={`${Css['creation-card']} mb-3`}>
                                        <img src={img} alt="" />
                                        <h4 className="fw-bold mt-3">{title}</h4>
                                        <div className="d-flex flex-wrap">
                                            {
                                                appStack.map((app) => <span className={`${Css['language-badge']} badge me-3 mb-2`}>{app}</span>)
                                            }
                                        </div>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        })
                    }
                    <div className="col-12 text-center mt-5">
                    <Link href="/our-portfolio">
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
