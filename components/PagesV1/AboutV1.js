import React from 'react'
import ContactV1 from '../ComponentV1/Contact/ContactV1'
import FAQV1 from '../ComponentV1/FAQ/FAQV1'
import TrustedByV1 from '../ComponentV1/TrustedBy/TrustedByV1'
import WhyChooseUsV1 from '../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import FooterV1 from '../ComponentV1/Footer/FooterV1'
import Headerv1 from '../ComponentV1/Header/HeaderV1'
import { Certificates } from '../ComponentV1/Certificates/Certificates'
import { AboutBannerV1 } from '../ComponentV1/AboutBannerV1/AboutBannerV1'
import { AboutDetailV1 } from '../ComponentV1/AboutDetailV1/AboutDetailV1'
import AboutVisionV1 from '../ComponentV1/AboutVisionV1/AboutVisionV1'
import { Objectives } from '../ComponentV1/Objectives/Objectives'
import { getFAQData } from '../ComponentV1/FAQ/FAQV1_Data'

export const AboutV1 = () => {
    
    return (
        <>
            <Headerv1 />
            <AboutBannerV1 />
            <TrustedByV1 />
            <AboutDetailV1 />
            <AboutVisionV1 />
            <Objectives />
            <WhyChooseUsV1 />
            <FAQV1 data={getFAQData()}/>
            <ContactV1 />
            <Certificates />
            <FooterV1 />
        </>
    )
}
