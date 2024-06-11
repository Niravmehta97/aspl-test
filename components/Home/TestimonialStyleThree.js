import React from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import testimonial from "../../public/images/testimonial.jpg";
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 500,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-next'></i>"
    ],
};

const TestimonialStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="client-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>Client’s Review</h2>
                    <div className="bar"></div>
                </div>

                {display ? <OwlCarousel 
                    className="client-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="client-item">
                        <p><q>The team at Ashapura Softech Pvt Ltd went above and beyond client expectations. Their approach to problem-solving was noteworthy. They're positive, efficient, and personable. </q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            <h3>Project Manager, PiaFX</h3>
                            <span>Cesare Rozzisi</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>Internal and external feedback has been overwhelmingly positive. Ashapura Softech Pvt Ltd executives not only enhance the project creatively but also demonstrate a vested interest in long-term success. The team’s attention to detail and quality deliverables set them up for an ongoing engagement.</q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            {/* <img src="/images/testimonial.jpg" alt="image" /> */}
                            <h3>CEO, XA Interactive</h3>
                            <span>Michael Prozer</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>Ashapura Softech delivers excellent coding and development work. They’re skilled and organized. Despite time differences, their team is proactive and communicative. Their supportive approach supplemented their professional management style.</q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            <h3>President, MNH SoftSkills Inc</h3>
                            <span>Vipul Shah</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>With full functionality and negligible software bugs, Ashapura Softech’s deliverable met all the most critical requirements. A group of industry-based beta testers has praised the product’s sleek design and seamless navigation. Strong communication skills made the workflow rapidly progress.</q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            <h3>CEO, Music Streaming Service</h3>
                            <span>Salim Kraatz</span>
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>After carefully dividing tasks into milestones, Ashapura Softech has been completing every step. Their workflow has been hight effective, using Slack and Skype to communicate seamlessly.</q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            <h3>Director<br/> IT Services Company</h3>
                            {/* <span>Web Developer</span> */}
                        </div>
                    </div>

                    <div className="client-item">
                        <p><q>Thanks to Ashapura Softech Pvt Ltd's efforts, the client's IT expenditure lessened, sales representatives saved time, and helpdesk calls decreased significantly. Their workflow was seamless, adjusting easily to the client's timezone.</q></p>

                        <div className="client-info">
                        <div id="client-info"><Image src={testimonial} alt="logo" height={100} width={100} /></div>
                            <h3>Project Manager<br/> Financial Services Company</h3>
                            {/* <span>Web Developer</span> */}
                        </div>
                    </div>

                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TestimonialStyleThree;