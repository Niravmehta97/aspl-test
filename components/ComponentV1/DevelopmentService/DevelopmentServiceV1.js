import React from 'react'
import { getDevelopmentServiceV1_Category_Data, getDevelopmentServiceV1_Detail_Data } from './DevelopmentServiceV1_Data';
import Css from  './DevelopmentServiceV1.module.css'
import Link from 'next/link';

export default function DevelopmentServiceV1() {
    const [SelectedCategory, setSelectedCategory] = React.useState(1);

    return (
        <>
            <section className={`w-100 ${Css['dev-services-sec']} py-4`}>
                <div className="container">
                    <h2 className={`text-center fw-bold ${Css['dev-services-title']} my-3`}>
                        Our <span>Development Services</span>
                    </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 align-items-end text-end">
                            <Link href="/service">
                                <a className={`text-decoration-none fw-bold ${Css['text-primary']}`}>
                                    All Services &nbsp;
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.37572 10.9999C1.37572 10.8176 1.44815 10.6427 1.57709 10.5138C1.70602 10.3848 1.88089 10.3124 2.06322 10.3124H18.2786L13.9515 5.98664C13.8876 5.92272 13.8368 5.84684 13.8023 5.76332C13.7677 5.6798 13.7499 5.59029 13.7499 5.49989C13.7499 5.40949 13.7677 5.31998 13.8023 5.23646C13.8368 5.15295 13.8876 5.07706 13.9515 5.01314C14.0154 4.94922 14.0913 4.89852 14.1748 4.86392C14.2583 4.82933 14.3478 4.81152 14.4382 4.81152C14.5286 4.81152 14.6181 4.82933 14.7017 4.86392C14.7852 4.89852 14.8611 4.94922 14.925 5.01314L20.425 10.5131C20.489 10.577 20.5398 10.6529 20.5745 10.7364C20.6091 10.8199 20.627 10.9095 20.627 10.9999C20.627 11.0903 20.6091 11.1799 20.5745 11.2634C20.5398 11.3469 20.489 11.4228 20.425 11.4866L14.925 16.9866C14.8611 17.0506 14.7852 17.1013 14.7017 17.1359C14.6181 17.1705 14.5286 17.1883 14.4382 17.1883C14.3478 17.1883 14.2583 17.1705 14.1748 17.1359C14.0913 17.1013 14.0154 17.0506 13.9515 16.9866C13.8876 16.9227 13.8368 16.8468 13.8023 16.7633C13.7677 16.6798 13.7499 16.5903 13.7499 16.4999C13.7499 16.4095 13.7677 16.32 13.8023 16.2365C13.8368 16.1529 13.8876 16.0771 13.9515 16.0131L18.2786 11.6874H2.06322C1.88089 11.6874 1.70602 11.615 1.57709 11.486C1.44815 11.3571 1.37572 11.1822 1.37572 10.9999Z"
                                            fill="#31C2E1"
                                        />
                                    </svg>
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="row my-3 desktop-view">
                            <div className="col-12 col-lg-3 mb-3">
                                <ul
                                    className={`nav ${Css['servicesTab']} ${Css['nav-pills']} nav-pills flex-column`}
                                    role="tablist"
                                >
                                    {
                                        getDevelopmentServiceV1_Category_Data().map(({ title, id }) => {
                                            return <li className={Css["nav-item"]} onClick={() => setSelectedCategory(id)}>
                                                <a
                                                    className={`${Css['nav-link']} fw-bold ${id == SelectedCategory ? Css['active'] : ''}`}
                                                    id="custom-tab"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    aria-controls="custom"
                                                    aria-selected="true"
                                                >
                                                    {title}
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            {/* /.col-md-4 */}
                            <div className="col-12 col-lg-9">
                                <div className="tab-content" id="servicesTabContent">
                                    <div
                                        className="tab-pane fade show active text-left text-light"
                                        id="custom_services"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="row px-4">
                                            {
                                                (getDevelopmentServiceV1_Detail_Data()[SelectedCategory]).map(({title, desc, link}) => {
                                                    return <div className="col-12 col-lg-6 mb-4 mt-4 px-4">
                                                    <div className={`${Css['services-card']} ${Css['border-bottom']}`}>
                                                    <Link href={link}>
                                                        <a className="text-decoration-none">
                                                            <h5 className={`${Css['text-primary']} fw-bold mb-4`}>
                                                                {title}
                                                            </h5>
                                                            <p className="text-justify text-gray mb-0">
                                                               {desc}
                                                            </p>
                                                            <div className={`text-end ${Css['right-icon-div']}`}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={30}
                                                                    height={38}
                                                                    viewBox="0 0 30 38"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M1.87528 18.9995C1.87528 18.6846 1.97405 18.3826 2.14986 18.1599C2.32568 17.9372 2.56413 17.812 2.81278 17.812H24.9247L19.024 10.3403C18.9369 10.2299 18.8677 10.0988 18.8205 9.95456C18.7734 9.8103 18.7491 9.65569 18.7491 9.49955C18.7491 9.34341 18.7734 9.18879 18.8205 9.04454C18.8677 8.90028 18.9369 8.76921 19.024 8.6588C19.1112 8.54839 19.2147 8.46081 19.3286 8.40105C19.4424 8.3413 19.5645 8.31055 19.6878 8.31055C19.811 8.31055 19.9331 8.3413 20.047 8.40105C20.1609 8.46081 20.2644 8.54839 20.3515 8.6588L27.8515 18.1588C27.9388 18.2691 28.0081 18.4001 28.0554 18.5444C28.1026 18.6887 28.127 18.8433 28.127 18.9995C28.127 19.1557 28.1026 19.3104 28.0554 19.4547C28.0081 19.5989 27.9388 19.73 27.8515 19.8403L20.3515 29.3403C20.2644 29.4507 20.1609 29.5383 20.047 29.598C19.9331 29.6578 19.811 29.6885 19.6878 29.6885C19.5645 29.6885 19.4424 29.6578 19.3286 29.598C19.2147 29.5383 19.1112 29.4507 19.024 29.3403C18.9369 29.2299 18.8677 29.0988 18.8205 28.9546C18.7734 28.8103 18.7491 28.6557 18.7491 28.4995C18.7491 28.3434 18.7734 28.1888 18.8205 28.0445C18.8677 27.9003 18.9369 27.7692 19.024 27.6588L24.9247 20.187H2.81278C2.56413 20.187 2.32568 20.0619 2.14986 19.8392C1.97405 19.6165 1.87528 19.3145 1.87528 18.9995Z"
                                                                        fill="#31C2E1"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
