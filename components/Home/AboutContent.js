import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// const ModalVideo = dynamic(() => import('react-modal-video'), {
//     ssr: false
// });

const AboutContent = () => {
    
    return (
        <>
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-image-warp image-three ab-bg">
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp">
                                <span>About Us</span>
                                <h3>CREATING AWESOME WEB SPACE FOR BUSINESS</h3>
                                <div className="bar"></div>
  
                                <p>Our expert team of designers and developers use innovation and favorable best-in-class quality solutions for the clients and their customers to engage with technology, building excellent user experiences. Our clientele has reached across the globe, serving small business startups to large enterprises, this makes us more credible to work with clients project of any horizon and domain.</p>
                                <p>Ashapura Softech is a leading Enterprise Solutions provider company located in Wyoming USA. The company was founded in the year 2012 by 2 highly experienced technocrats carrying a vision to create an extensive company that serves dream-big people and provides solutions to those who explore newer possibilities in IT. They bring in 10+ years of experience in software development and IT consultancy. The company was founded with sole aim for providing the best IT solutions to the clients, which brings success to their business in the highly competitive market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            
        </>
    )
}

export default AboutContent;