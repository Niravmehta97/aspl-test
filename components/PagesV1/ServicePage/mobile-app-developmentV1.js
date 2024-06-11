import React from 'react'
import Headerv1 from '../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import IndustryWeServeV1 from '../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import WhyYouNeedV1 from '../../ComponentV1/WhyYouNeedV1/WhyYouNeedV1'
import SolutionV1 from '../../ComponentV1/Solution/SolutionV1'
import ServiceWeOffer from '../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import TrustedByV1 from '../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getMobileFAQDataV1 } from '../../ComponentV1/FAQ/Data/MobileServiesFAQV1_Data'
import { getMobileServiceData } from '../../ComponentV1/ServiceBanner/Data/Mobile_Services_Data'
import { getMobileData } from '../../ComponentV1/WhyYouNeedV1/Data/Mobile_Data'
import { getMobileServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/MobileServicesOfferV1_Data'
import { getMobileSolutionData } from '../../ComponentV1/Solution/Data/Mobile_Data'

export default function MobileAppDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getMobileServiceData()}/>
    <TrustedByV1 />
    <WhyYouNeedV1 data={getMobileData()} />
    <ServiceWeOffer data={getMobileServiceWeOfferData()}/>
    <SolutionV1 data={getMobileSolutionData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getMobileFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
