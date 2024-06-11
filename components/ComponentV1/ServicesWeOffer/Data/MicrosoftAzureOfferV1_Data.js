export const getmicrosoftazureOfferData = () => {
    const listData = [
        {
            title: 'Azure App Development',
            desc: `You need expert Azure developers to help you get the most from Microsoft's Azure cloud. We at (company name) can transform your ideas into profitable business-driving strategies. We leverage our experience designing and scaling infrastructure to support dynamic, compliant, secure applications.`
        },
        {
            title: 'Cloud Migration',
            desc: ` With the right guidance, tools, and support, you can accelerate your migration from on-premises databases to cloud-based databases. This will allow you to achieve flexibility, agility, and cost-effective management.`
        },
        {
            title: 'Integration Services',
            desc: `We provide top-rated Azure Integration Services to our clients and create custom architecture solutions that are secure and seamlessly scale up depending on your business requirements. We analyze existing technology and develop custom integration solutions that meet all your needs.`
        },
        {
            title: 'Cloud Security & Risk Management',
            desc: `Microsoft Azure offers many built-in services to protect your data, apps, and infrastructure. To fully utilize their intelligent features, you must be a certified Azure developer. Azure consulting services help you ensure strong security with audits, complete integrations, risk management, and technical architecture solutions.`
        },
        {
            title: 'Azure Consulting Services',
            desc: `Our world-class Azure Consulting services will help you strengthen your cloud initiative while reducing your infrastructural costs. The certified team at (company name) can assist you with all aspects of the implementation, including planning migration and deploying Azure apps for best practices in cloud computing.`
        },
        {
            title: 'Azure Cognitive Services',
            desc: `We provide developers with a range of AI-powered APIs and services for adding intelligent features to their applications. With capabilities like computer vision, language understanding, and speech recognition, developers can create more engaging and intuitive user experiences.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}