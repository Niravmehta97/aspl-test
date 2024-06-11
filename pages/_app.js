import '../styles/bootstrap.min.css'
import '../styles/animate.css'
import '../styles/boxicons.min.css'
import '../styles/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/style.css'
import '../styles/common.css'
import '../styles/responsive.css'
// import TagManager from "react-gtm-module"
import Layout from '../components/_App/Layout';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactFormTwo from '../components/Contact/ContactCommon';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import Image from "next/image";
import contactPopup from "../public/images/contact-popup.svg";
import Script from 'next/script';
import TawkTo from 'tawkto-react'

    const MyApp =  ({ Component, pageProps }) => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        ReactGA.initialize('G-GGJ9L1PKXW');
        // setTimeout(() => setShowModal(true), 30000);

    }, []);
    useEffect(() => {
        console.log('pageviewcalled')
        ReactGA.pageview(window.location.pathname + window.location.search);
        var tawk = new TawkTo('5c59249e7cf662208c941506', 'default')
        tawk.onLoad((status) => 
        {
        
        })
    }, [router.asPath]);

    // function closeModal() {
    //     setShowModal(false);
    // }
    return (
        <Layout>
            {/* <Modal centered
            className='cust-cont-pop'
            show={showModal} 
            size='xl'
            onHide={closeModal}
            >
                <Modal.Header closeButton className='modal-cust-header'>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-box'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-7'>
                                <div className='img-addres-sec'>
                                    <div className='img-box'>
                                    <Image src={contactPopup} alt="image" height={318.4} width={635.16} />
                                    </div>
                                    <div className='addr-box-pop'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='popcont-add'>
                                                    <h4>USA</h4>
                                                    <p>1095, Sugar View Dr, Sheridan, WY, 82801</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12'>
                                <div className="contact-form-inner cont-pop-right contact-commonbox">
                                    <h3>Let's Discuss Your Project!</h3>
                                    <p>Have an inquiry for your project with us? <br/>Fill out the form below contact our team.</p>
                                    <ContactFormTwo setShowModal={setShowModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp