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
import { getERPFAQDataV1 } from '../../ComponentV1/FAQ/Data/ERPServicesFAQV1_Data'
import { getERPServiceData } from '../../ComponentV1/ServiceBanner/Data/ERP_Services_Data'
import { getERPData } from '../../ComponentV1/WhyYouNeedV1/Data/ERP_Data'
import { getERPServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/ERPServicesOfferV1_Data'
import { getERPSolutionData } from '../../ComponentV1/Solution/Data/ERP_Data'

export default function ERPSoftwareDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getERPServiceData()}/>
    <TrustedByV1 />
    <WhyYouNeedV1 data={getERPData()} />
    <ServiceWeOffer data={getERPServiceWeOfferData()}/>
    <SolutionV1 data={getERPSolutionData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getERPFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
