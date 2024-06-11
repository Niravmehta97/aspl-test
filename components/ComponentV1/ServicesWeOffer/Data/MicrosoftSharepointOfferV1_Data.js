export const getmicrosoftsharepointOfferData = () => {
    const listData = [
        {
            title: 'Web And App Development',
            desc: `You need expert Azure developers to help you get the most from Microsoft's Azure cloud. We can transform your ideas into profitable business-driving strategies.`
        },
        {
            title: 'Consulting And Advisory',
            desc: ` Our SharePoint consulting services address all aspects of pre-and post-deployment issues to ensure that the end solution is properly implemented and users have a positive experience.`
        },
        {
            title: 'Enterprise Content Management',
            desc: `SharePoint application development allows you to create and publish content quickly on the intranet, extranet, or internet sites using familiar tools.`
        },
        {
            title: 'Customization',
            desc: `Our SharePoint experts are capable of turning diverse business requirements into flexible, scalable SharePoint solutions that will propel your business to new heights.`
        },
        {
            title: 'SharePoint Health Checks & Assessments',
            desc: `Our services can help you identify problems before they happen, save time, avoid costly mistakes, overcome challenges, and protect the final product.`
        },
        {
            title: 'Migration/Upgrade/Support',
            desc: `Our solutions reduce complexity and support all aspects of migration and upgrade. Our support services will ensure your business's performance remains high and accessible.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}