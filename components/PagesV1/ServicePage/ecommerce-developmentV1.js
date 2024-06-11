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
import { getEcommerceFAQDataV1 } from '../../ComponentV1/FAQ/Data/EcommerceServicesFAQV1_Data'
import { getEcommerceServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/EcommerceServicesOfferV1_Data'
import { getEcommerceServiceData } from '../../ComponentV1/ServiceBanner/Data/Ecommerce_Services_Data'
import { getEcommerceData } from '../../ComponentV1/WhyYouNeedV1/Data/Ecommerce_Data'
import { getEcommerceSolutionData } from '../../ComponentV1/Solution/Data/Ecommerce_Data'

export default function EcommerceSoftwareDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getEcommerceServiceData()}/>
    <TrustedByV1 />
    <WhyYouNeedV1 data={getEcommerceData()} />
    <ServiceWeOffer data={getEcommerceServiceWeOfferData()}/>
    <SolutionV1 data={getEcommerceSolutionData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getEcommerceFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
