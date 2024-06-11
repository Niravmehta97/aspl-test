import React from 'react'
import Headerv1 from '../../../ComponentV1/Header/HeaderV1'
import FooterV1 from '../../../ComponentV1/Footer/FooterV1'
import ContactV1 from '../../../ComponentV1/Contact/ContactV1'
import FAQV1 from '../../../ComponentV1/FAQ/FAQV1'
import WhyChooseUsV1 from '../../../ComponentV1/WhyChooseUs/WhyChooseUsV1'
import IndustryWeServeV1 from '../../../ComponentV1/IndustryWeServe/IndustryWeServeV1'
import ServiceWeOffer from '../../../ComponentV1/ServicesWeOffer/ServiceWeOfferV1'
import TrustedByV1 from '../../../ComponentV1/TrustedBy/TrustedByV1'
import ServiceBannerV1 from '../../../ComponentV1/ServiceBanner/ServiceBannerV1'
import { getmicrosoftazureOfferData } from '../../../ComponentV1/ServicesWeOffer/Data/MicrosoftAzureOfferV1_Data'
import TransformAzureBusinessV1 from '../../../ComponentV1/TransformAzureBusiness/TransformAzureBusinessV1'
import { getmicrosoftazureData } from '../../../ComponentV1/ServiceBanner/Data/microsoft_azure_Data'
import { getMicrosoftAzureFAQDataV1 } from '../../../ComponentV1/FAQ/Data/MicrosoftAzureFAQV1_Data'

export default function MicrosoftAzureDevelopmentV1() {
  return (
    <>
    <Headerv1 />
    <ServiceBannerV1 data={getmicrosoftazureData()} />
    <TrustedByV1 />
    <TransformAzureBusinessV1 />
    <ServiceWeOffer data={getmicrosoftazureOfferData()} />
    <WhyChooseUsV1 />
    <IndustryWeServeV1 />
    <FAQV1 data={getMicrosoftAzureFAQDataV1()} />
    <ContactV1 />
    <FooterV1 />
</>
  )
}
