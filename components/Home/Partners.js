import React from 'react';
import dynamic from 'next/dynamic';
// import Image from "next/image";
// import Min1 from "../../public/images/1-min.webp";
// import Min2 from "../../public/images/2-min.webp";
// import Min3 from "../../public/images/3-min.webp";
// import Min4 from "../../public/images/4-min.webp";
// import Min5 from "../../public/images/5-min.webp";
// import Min6 from "../../public/images/6-min.webp";

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area pb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="partner-item">
                    <img src="/images/1-min.webp" alt="image" />
                    </div>

                    <div className="partner-item">
                    <img src="/images/2-min.webp" alt="image" />
                    </div>

                    <div className="partner-item">
                    <img src="/images/3-min.webp" alt="image" />
                    </div>

                    <div className="partner-item">
                    <img src="/images/4-min.webp" alt="image" />
                    </div>

                    <div className="partner-item">
                    <img src="/images/5-min.webp" alt="image" />
                    </div>

                    <div className="partner-item">
                    <img src="/images/6-min.webp" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partners;