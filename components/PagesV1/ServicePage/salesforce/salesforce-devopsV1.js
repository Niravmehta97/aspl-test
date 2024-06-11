import React from 'react'
import Headerv1 from '../../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import WhyYouNeedV1 from '../../../ComponentV1/WhyYouNeedV1/WhyYouNeedV1'
import IndustryWeServeV1 from '../../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import ServiceWeOffer from '../../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import SalesforceServicesV1 from '../../../ComponentV1/SalesforceServices/SalesforceServicesV1'
import TrustedByV1 from '../../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getMicrosoftSharepointFAQDataV1 } from '../../../ComponentV1/FAQ/Data/MicrosoftSharepointFAQV1_Data'
import { getsalesforcecloudOfferData } from '../../../ComponentV1/ServicesWeOffer/Data/Salesforce_Cloud_Service_OfferV1_Data'
import { getsalesforcecloudwhyData } from '../../../ComponentV1/WhyYouNeedV1/Data/Salesforce_Cloud_Service_Data'
import { getSalesforceCloudServiceData } from '../../../ComponentV1/SalesforceServices/Data/SalesforceCloudServiceDataV1'
import { getsalesforcedevopsData } from '../../../ComponentV1/ServiceBanner/Data/Salesforce_Devops_Data'


export default function SalesforceDevOpsV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getsalesforcedevopsData()} />
    <TrustedByV1 />
    <WhyYouNeedV1 data={getsalesforcecloudwhyData()} />
    <ServiceWeOffer data={getsalesforcecloudOfferData()} />
    <SalesforceServicesV1 data={getSalesforceCloudServiceData()}/>
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getMicrosoftSharepointFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
