export const getsalesforcecommercecloudOfferData = () => {
    const listData = [
        {
            title: 'Increase Efficiency',
            desc: `You can centralize and automate repetitive tasks, integrate data from external sources, or use a template or app for one of many everyday tasks like product management or content syndication.`
        },
        {
            title: 'Low Setup Time',
            desc: ` Fast implementation means fewer headaches. Configure your system within hours instead of weeks or months, so you can start increasing revenue sooner than ever before.`
        },
        {
            title: 'Stay Connected',
            desc: `With Salesforce Commerce Cloud's open API, it's easy to build custom integrations between various systems that don't have an out-of-the-box integration.`
        },
        {
            title: 'Reduce IT Maintenance',
            desc: `Get ongoing help from Salesforce experts, so you don't need to train someone from scratch or spend hours on support tickets.`
        },
        {
            title: 'Customizable',
            desc: `Integrate Commerce Cloud with a variety of third-party solutions, including ecommerce platforms`
        },
        {
            title: 'SFCC Integration',
            desc: `Our integration services unlock the true potential of your SFCC store by seamlessly connecting it with your preferred third-party systems. This fosters a unified experience across all touchpoints and optimizes your marketing efforts.  In short, we help you do more with your commerce platform.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}