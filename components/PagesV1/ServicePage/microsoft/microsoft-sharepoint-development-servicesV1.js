import React from 'react'
import Headerv1 from '../../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import WhyYouNeedV1 from '../../../ComponentV1/WhyYouNeedV1/WhyYouNeedV1'
import IndustryWeServeV1 from '../../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import ServiceWeOffer from '../../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import TrustedByV1 from '../../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getmicrosoftsharepointData } from '../../../ComponentV1/ServiceBanner/Data/microsoft_sharepoint_Data'
import { getMicrosoftSharepointplatformData } from '../../../ComponentV1/WhyYouNeedV1/Data/MicrosoftSharepoint_Data'
import { getmicrosoftsharepointOfferData } from '../../../ComponentV1/ServicesWeOffer/Data/MicrosoftSharepointOfferV1_Data'
import SharePointV1 from '../../../ComponentV1/SharePointV1/SharePointV1'
import SharePointDataV1 from '../../../ComponentV1/SharePointV1/Data/SharePointDataV1'
import BenefitServiceV1 from '../../../ComponentV1/BenefitsServicesV1/BenefitServiceV1'
import BenefitServiceDataV1 from '../../../ComponentV1/BenefitsServicesV1/Data/BenefitServiceDataV1'
import { getMicrosoftSharepointFAQDataV1 } from '../../../ComponentV1/FAQ/Data/MicrosoftSharepointFAQV1_Data'


export default function MicrosoftSharepointDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getmicrosoftsharepointData()} />
    <TrustedByV1 />
    <WhyYouNeedV1 data={getMicrosoftSharepointplatformData()} />
    <ServiceWeOffer data={getmicrosoftsharepointOfferData()} />
    <BenefitServiceV1 cardList={BenefitServiceDataV1()} />
    <SharePointV1 cardList={SharePointDataV1()}  />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getMicrosoftSharepointFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
