import React from 'react'
import Headerv1 from '../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import IndustryWeServeV1 from '../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import ServiceWeOffer from '../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import WhyYouNeedV1 from '../../ComponentV1/WhyYouNeedV1/WhyYouNeedV1'
import SolutionV1 from '../../ComponentV1/Solution/SolutionV1'
import TrustedByV1 from '../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getWebFAQDataV1 } from '../../ComponentV1/FAQ/Data/WebServicesFAQV1_Data'
import { getWebServiceData } from '../../ComponentV1/ServiceBanner/Data/Web_Services_Data'
import { getWebData } from '../../ComponentV1/WhyYouNeedV1/Data/Web_Data'
import { getWebServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/WebServicesOfferV1_Data'
import { getWebSolutionData } from '../../ComponentV1/Solution/Data/Web_Data'

export default function WebDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getWebServiceData()}/>
    <TrustedByV1 />
    <WhyYouNeedV1 data={getWebData()} />
    <ServiceWeOffer data={getWebServiceWeOfferData()}/>
    <SolutionV1 data={getWebSolutionData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getWebFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
