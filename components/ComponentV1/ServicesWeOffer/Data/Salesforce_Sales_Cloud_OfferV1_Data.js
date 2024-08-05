export const getsalesforcesalescloudOfferData = () => {
    const listData = [
        {
            title: 'Sales Cloud Consulting',
            desc: `Our Sales Cloud Consulting service involves working closely with Salesforce experts who understand your specific business needs and objectives. We tailor Sales Cloud to align with your unique processes and goals, ensuring that the platform operates with maximum efficiency and effectiveness.`
        },
        {
            title: 'Sales Cloud Customization',
            desc: ` Customization services allow you to adapt Sales Cloud to fit your business workflows seamlessly. Our consultants create custom objects, fields, and page layouts to ensure the platform reflects your existing processes and enhances your operational efficiency.`
        },
        {
            title: 'Sales Cloud Analytics',
            desc: `Our Analytics services enable you to leverage Sales Cloud’s powerful reporting and data visualization tools. Our experts assist in designing custom reports, dashboards, and insights, empowering you to make data-driven decisions and effectively monitor your sales performance.`
        },
        {
            title: 'Sales Cloud Support & Training',
            desc: `Ongoing support is vital after implementation. We provide comprehensive training to empower your team with the skills needed to utilize Sales Cloud effectively. Our support includes guidance on features, best practices, and troubleshooting assistance to ensure you fully maximize your CRM investment.`
        },
        {
            title: 'Sales Cloud Integration',
            desc: `Integrating Sales Cloud with other tools and systems in your tech stack enhances overall functionality. We assist with seamless integration of applications such as email clients, marketing automation platforms, and ERP systems, enabling efficient data sharing and streamlined processes.`
        },
        {
            title: 'Sales Cloud Implementation',
            desc: `Our professionals guide you through the setup and configuration of Sales Cloud according to your organization’s needs. This includes defining data structures, user roles, security settings, and configuring workflows and automation to ensure the system is tailored to your requirements.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}