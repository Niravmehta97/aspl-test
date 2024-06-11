import React from 'react'
import ContactV1 from '../ComponentV1/Contact/ContactV1'
import FAQV1 from '../ComponentV1/FAQ/FAQV1'
import BlogV1 from '../ComponentV1/Blog/BlogV1'
import FreeConsultantV1 from '../ComponentV1/FreeConsultant/FreeConsultantV1'
import BannerV1 from '../ComponentV1/Banner/BannerV1'
import TrustedByV1 from '../ComponentV1/TrustedBy/TrustedByV1'
import WhyChooseUsV1 from '../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import DevelopmentProcessV1 from '../ComponentV1/DevelopmentProcess/DevelopmentProcessV1'
import WebSpaceV1 from '../ComponentV1/WebSpace/WebSpaceV1'
import IndustryWeServeV1 from '../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import DevelopmentServiceV1 from '../ComponentV1/DevelopmentService/DevelopmentServiceV1'
import ExploreOurCreationV1 from '../ComponentV1/ExploreOurCreation/ExploreOurCreationV1'
import OurClientV1 from '../ComponentV1/OurClient/OurClientV1'
import FooterV1 from '../ComponentV1/Footer/FooterV1'
import Headerv1 from '../ComponentV1/Header/HeaderV1'
import { Certificates } from '../ComponentV1/Certificates/Certificates'
import { getFAQData } from '../ComponentV1/FAQ/FAQV1_Data'

const HomeV1 = () => {
    return <>
        <Headerv1 />
        <BannerV1 />
        <TrustedByV1 />
        <DevelopmentProcessV1 />
        <WebSpaceV1 />
        <DevelopmentServiceV1 />
        <WhyChooseUsV1 />
        <IndustryWeServeV1 />
        <ExploreOurCreationV1 />
        <OurClientV1 />
        <FreeConsultantV1 />
        <BlogV1 />
        <FAQV1 data={getFAQData()} />
        <ContactV1 />
        <Certificates />
        <FooterV1 />
    </>
}

export default HomeV1