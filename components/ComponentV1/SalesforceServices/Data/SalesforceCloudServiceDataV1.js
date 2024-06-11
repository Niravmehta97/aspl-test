const Img = require('../Asset/Sales-Cloud.webp').default

export const getSalesforceCloudServiceData = () => {
    const listData = [
        {
            title: 'Salesforce Sales Cloud',
            desc: 'The Sales Cloud supports the optimization and automation of sales processes: At the core of the Sales Cloud is the central storage of contact and customer information in a central location. Existing internal data on customers and leads is enriched with additional information from social networks, which reduces research time in business development. Sales employees also benefit from the improved data quality and can thus tailor their measures more specifically to leads and customers. With the Sales Cloud, the efficiency of sales is increased both in the office and in the field - at the same time, all data is stored centrally. The focus of the Sales Cloud is the networking of all people involved in the process and thus the increased transparency and visibility of relevant information. This information provides data-driven decision support at a strategic level.',
            img: Img.src
        },
        {
            title: `Salesforce Service Cloud`,
            desc: 'According to the company, the Salesforce Service Cloud wants to give companies the opportunity to connect their customer service, digital support and field service and thus ensure that service employees work efficiently at any time and at any place. For this purpose, a central platform is offered through which all interactions with customers or prospects and their data can be organized. To be integrated are self-service portals, AI-supported chatbots, direct interaction via chat, SMS, WhatsApp, Facebook Messenger and other channels, special field service tools that quickly solve problems remotely, and much more. According to the developer, the Salesforce Service Cloud has already convinced more than 150,000 customers worldwide.',
            img: Img.src
        },
        {
            title: `Salesforce Commerce Cloud`,
            desc: 'The Salesforce Commerce Cloud defines an essential idea as the cornerstone of the platform: Every business model is different. And often this is especially true for B2B models. Because not all customers are the same. Behind each individual is a multitude of stakeholders, interests and specific business requirements. So basically B2B2C – although that is of course still a simplified formulation. The reality is significantly more complex. With the Salesforce Commerce Cloud, Salesforce tries to transform this complexity into an experience that is as easy as shopping for shoes online. And the best part? The Salesforce Commerce Cloud not only optimizes your own business. Because B2B2C deals are inherently deeply embedded in the value chain of another business model, the Salesforce Commerce Cloud creates value across the entire value chain.',
            img: Img.src
        },
        {
            title: `Salesforce Marketing Cloud`,
            desc: 'With the Salesforce Marketing Cloud , Salesforce has created a unique platform for building and expanding your customer relationships. This enables communication across marketing, sales and customer service. Salesforce is a scalable platform for all areas of your company. The Salesforce Marketing Cloud helps to master the challenges of modern marketing. Customers in the B2B and B2C environment want to be enthusiastic about a variety of digital channels. By e-mail, in social media, via online advertising, on websites and with the help of mobile messaging in all its facets: as SMS, push or group messages. The Marketing Cloud transfers multichannel marketing to omnichannel marketing. All channels and contact points used are networked with one another.',
            img: Img.src
        },
        {
            title: `Salesforce DevOps`,
            desc: 'Salesforce DevOps is not much different from the actual DevOps, but it is primarily focused on enabling organizations to leverage Salesforce on a scale. The DevOps for Salesforce reimagines the way business manage their Salesforce processes such as customizing orgs, building new features, and deploying changes, then pushing that work along a release pipeline for integration and testing before the production release. It seamlessly collaborates with all the Salesforce experts to contribute to an iterative development and release cycle, irrespective of their technical skillsets or job role.',
            img: Img.src
        },
    ]

    return {listData}
}