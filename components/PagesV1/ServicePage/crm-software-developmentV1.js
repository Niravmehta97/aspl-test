import React from 'react'
import Headerv1 from '../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import IndustryWeServeV1 from '../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import ServiceWeOffer from '../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import WhyYouNeedV1 from '../../ComponentV1/WhyYouNeedV1/WhyYouNeedV1'
import TrustedByV1 from '../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getCRMFAQDataV1 } from '../../ComponentV1/FAQ/Data/CRMServicesFAQV1_Data'
import { getCRMServiceData } from '../../ComponentV1/ServiceBanner/Data/CRM_Service_Data'
import { getCostomizeCRMData } from '../../ComponentV1/WhyYouNeedV1/Data/CustomizeCRM_Data'
import { getCRMServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/CRMServiceOfferV1_Data'
import SolutionV1 from '../../ComponentV1/Solution/SolutionV1'
import { getCustomCRMSolutionData } from '../../ComponentV1/Solution/Data/CustomCRM_Data'

export default function CRMSoftwareDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getCRMServiceData()} />
    <TrustedByV1 />
    <WhyYouNeedV1 data={getCostomizeCRMData()} />
    <ServiceWeOffer data={getCRMServiceWeOfferData()} />
    <SolutionV1 data={getCustomCRMSolutionData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getCRMFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
