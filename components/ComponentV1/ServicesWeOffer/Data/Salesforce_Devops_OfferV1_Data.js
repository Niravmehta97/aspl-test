export const getsalesforcedevopsOfferData = () => {
    const listData = [
        {
            title: 'Salesforce Environment Management',
            desc: `Streamlined Workspaces: We create and manage multiple Salesforce environments, ensuring they're all in sync. This provides your development teams with a unified platform to work on, improving efficiency.`
        },
        {
            title: 'Continuous Integration for Salesforce',
            desc: ` Early Issue Detection: We implement Continuous Integration (CI) tools and processes. This allows your teams to seamlessly merge code changes frequently, catching issues early in the development cycle.`
        },
        {
            title: 'Code Quality and Security',
            desc: `Robust Code Reviews: Our code reviews and industry-standard tools identify and fix code quality issues. This ensures your applications are secure, reliable, and function as intended.`
        },
        {
            title: 'Platform and Mobile Compatibility Testing',
            desc: `Cross-Device Confidence: We perform comprehensive testing of your Salesforce applications across various platforms and mobile devices. This guarantees a seamless user experience on any device.`
        },
        {
            title: 'Rigorous Quality Assurance',
            desc: `Value-Driven Testing: We conduct regular testing and Quality Assurance (QA) to ensure your applications meet your business needs and deliver value to your organization.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}