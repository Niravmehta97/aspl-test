import React from 'react'
import { getOurClientData } from './OurClientV1_Data'
import Css from './OurClientV1.module.css'

// const descktopMockup = require('./Asset/desktop-mnh.webp').default
const backShapeImage = require('./Asset/back-shape.svg').default

export default function OurClientV1() {
    const [ClientReviewIndex, setClientReviewIndex] = React.useState(0)
    const clientReviewList = getOurClientData()

    const nextPage = () => {
        setClientReviewIndex((i) => {
            if(i < (clientReviewList.length - 1)){
                return i+1
            }else{
                return i
            }
        })
    }
    
    const prevPage = () => {
        setClientReviewIndex((i) => {
            if(i !== 0){
                return i-1
            }else{
                return i
            }
        })
    }

    return (
        <>
            {/* our clients start */}
            <section className={`${Css['our-clients-sec']} py-5`}>
                <div class="container  container-lg-fluid">
                    <h2 className={`text-center fw-bold ${Css['our-clients-title']} mb-5`}>
                        Let's See What <span>Our Clients Says</span>
                    </h2>
                    <div className="row mb-3 align-items-end">
                        <div className={`col-12 col-lg-5 mb-4 mb-lg-0 text-align-center px-5`}>
                            <div className={Css['client-img']} style={{backgroundImage: `url(${backShapeImage.src})`}}>
                                <img src={clientReviewList[ClientReviewIndex].mockupImage} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className={`d-flex justify-content-between ${Css['px-6']} px-6`}>
                                <h1 className={`fw-bold ${Css['text-secondary']}`}>{clientReviewList[ClientReviewIndex].title}</h1>
                                <div className={`d-flex ${Css['slide-icons']}`}>
                                    <svg
                                        className={`${ClientReviewIndex === 0 ? Css['disabled'] : ''} me-3`}
                                        onClick={prevPage}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={25}
                                        height={25}
                                        viewBox="0 0 38 38"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.6252 18.9995C35.6252 18.6846 35.5001 18.3826 35.2774 18.1599C35.0547 17.9372 34.7526 17.812 34.4377 17.812H6.4293L13.9034 10.3403C14.0138 10.2299 14.1014 10.0988 14.1612 9.95456C14.2209 9.8103 14.2517 9.65569 14.2517 9.49955C14.2517 9.34341 14.2209 9.18879 14.1612 9.04454C14.1014 8.90028 14.0138 8.76921 13.9034 8.6588C13.793 8.54839 13.6619 8.46081 13.5177 8.40105C13.3734 8.3413 13.2188 8.31055 13.0627 8.31055C12.9065 8.31055 12.7519 8.3413 12.6077 8.40105C12.4634 8.46081 12.3323 8.54839 12.2219 8.6588L2.72192 18.1588C2.61133 18.2691 2.52359 18.4001 2.46373 18.5444C2.40386 18.6887 2.37305 18.8433 2.37305 18.9995C2.37305 19.1557 2.40386 19.3104 2.46373 19.4547C2.52359 19.5989 2.61133 19.73 2.72192 19.8403L12.2219 29.3403C12.3323 29.4507 12.4634 29.5383 12.6077 29.598C12.7519 29.6578 12.9065 29.6885 13.0627 29.6885C13.2188 29.6885 13.3734 29.6578 13.5177 29.598C13.6619 29.5383 13.793 29.4507 13.9034 29.3403C14.0138 29.2299 14.1014 29.0988 14.1612 28.9546C14.2209 28.8103 14.2517 28.6557 14.2517 28.4995C14.2517 28.3434 14.2209 28.1888 14.1612 28.0445C14.1014 27.9003 14.0138 27.7692 13.9034 27.6588L6.4293 20.187H34.4377C34.7526 20.187 35.0547 20.0619 35.2774 19.8392C35.5001 19.6165 35.6252 19.3145 35.6252 18.9995Z"
                                            fill="currentcolor"
                                        />
                                    </svg>
                                    <svg
                                        onClick={nextPage}
                                        className={ClientReviewIndex === (clientReviewList.length - 1) ? Css['disabled'] : ''}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={25}
                                        height={25}
                                        viewBox="0 0 38 38"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.37483 18.9995C2.37483 18.6846 2.49994 18.3826 2.72264 18.1599C2.94534 17.9372 3.24738 17.812 3.56233 17.812H31.5707L24.0966 10.3403C23.9862 10.2299 23.8986 10.0988 23.8388 9.95456C23.7791 9.8103 23.7483 9.65569 23.7483 9.49955C23.7483 9.34341 23.7791 9.18879 23.8388 9.04454C23.8986 8.90028 23.9862 8.76921 24.0966 8.6588C24.207 8.54839 24.3381 8.46081 24.4823 8.40105C24.6266 8.3413 24.7812 8.31055 24.9373 8.31055C25.0935 8.31055 25.2481 8.3413 25.3923 8.40105C25.5366 8.46081 25.6677 8.54839 25.7781 8.6588L35.2781 18.1588C35.3887 18.2691 35.4764 18.4001 35.5363 18.5444C35.5961 18.6887 35.627 18.8433 35.627 18.9995C35.627 19.1557 35.5961 19.3104 35.5363 19.4547C35.4764 19.5989 35.3887 19.73 35.2781 19.8403L25.7781 29.3403C25.6677 29.4507 25.5366 29.5383 25.3923 29.598C25.2481 29.6578 25.0935 29.6885 24.9373 29.6885C24.7812 29.6885 24.6266 29.6578 24.4823 29.598C24.3381 29.5383 24.207 29.4507 24.0966 29.3403C23.9862 29.2299 23.8986 29.0988 23.8388 28.9546C23.7791 28.8103 23.7483 28.6557 23.7483 28.4995C23.7483 28.3434 23.7791 28.1888 23.8388 28.0445C23.8986 27.9003 23.9862 27.7692 24.0966 27.6588L31.5707 20.187H3.56233C3.24738 20.187 2.94534 20.0619 2.72264 19.8392C2.49994 19.6165 2.37483 19.3145 2.37483 18.9995Z"
                                            fill="currentcolor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className={`fw-semibold text-justify ${Css['px-6']} px-6 text-gray`}>
                                {clientReviewList[ClientReviewIndex].desc}
                            </p>
                            <div className={`${Css['testimonial-card-main']} ${Css['px-6']} px-6 ${Css['pt-6']} pt-6 ms-3`}>
                                <div className={`${Css['testimonial-div']} ${Css['px-6']} px-6`}>
                                    <p className="mb-2 text-gray fw-semibold">Review</p>
                                    <h5 className="text-dark fw-bold">"{clientReviewList[ClientReviewIndex].subject}"</h5>
                                    <p className="text-gray fw-semibold">Feedback Summary</p>
                                    <p className="text-dark mb-3 mb-lg-5">
                                    {clientReviewList[ClientReviewIndex].feedback} 
                                    </p>
                                    <p className="text-gray fw-semibold mb-2">{clientReviewList[ClientReviewIndex].clientName}</p>
                                    <p className="text-gray mb-0">{clientReviewList[ClientReviewIndex].designation}</p>
                                </div>
                                <div className={`${Css['clutch-div']} mt-3`}>
                                    <img src={clientReviewList[ClientReviewIndex].img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our clients end */}
        </>
    )
}
