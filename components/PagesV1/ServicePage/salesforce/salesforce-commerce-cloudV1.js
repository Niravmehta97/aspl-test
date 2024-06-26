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
import { getSalesforceCloudServiceData } from '../../../ComponentV1/SalesforceServices/Data/SalesforceCloudServiceDataV1'
import { getsalesforcecommerceData } from '../../../ComponentV1/ServiceBanner/Data/Salesforce_Commerce_Cloud_Data'
import { getsalesforcecommercecloudwhyData } from '../../../ComponentV1/WhyYouNeedV1/Data/Salesforce_Commerce_Cloud_Data'
import { getsalesforcecommercecloudOfferData } from '../../../ComponentV1/ServicesWeOffer/Data/Salesforce_Commerce_Cloud_DataV1'
import { getSalesforceCommerceCloudFAQDataV1 } from '../../../ComponentV1/FAQ/Data/SalesforceCommerceCloudFAQV1_Data'


export default function SalesforceCommerceCloudV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getsalesforcecommerceData()} />
    <TrustedByV1 />
    <WhyYouNeedV1 data={getsalesforcecommercecloudwhyData()} />
    <ServiceWeOffer data={getsalesforcecommercecloudOfferData()} />
    <SalesforceServicesV1 data={getSalesforceCloudServiceData()}/>
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getSalesforceCommerceCloudFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
