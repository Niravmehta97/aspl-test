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
import { getOffshoreFAQDataV1 } from '../../ComponentV1/FAQ/Data/OffshoreServicesFAQV1_Data'
import { getOffshoreServiceData } from '../../ComponentV1/ServiceBanner/Data/Offshore_Services_Data'
import { getOffshoreData } from '../../ComponentV1/WhyYouNeedV1/Data/Offshore_Data'
import { getOffshoreServiceWeOfferData } from '../../ComponentV1/ServicesWeOffer/Data/OffshoreServicesOfferV1_Data'

export default function OffshoreStaffingV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getOffshoreServiceData()}/>
    <TrustedByV1 />
    <WhyYouNeedV1 data={getOffshoreData()} />
    <ServiceWeOffer data={getOffshoreServiceWeOfferData()}/>
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getOffshoreFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
