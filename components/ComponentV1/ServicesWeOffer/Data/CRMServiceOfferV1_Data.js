export const getCRMServiceWeOfferData = () => {
    const listData = [
        {
            title: 'CRM Consulting Services',
            desc: `Before having CRM solutions, it is important you understand its
            need and implementations. You can always count on us.`
        },
        {
            title: 'CRM Implementation',
            desc: ` Strangled over the implementation of Customer Relationship
            Management Software in your company? We help you at every phase of
            it.`
        },
        {
            title: 'CRM Development Solutions',
            desc: `We have years of experience in building CRM solutions for
            different industries and companies with the different workforce.`
        },
        {
            title: 'CRM Mobile Application',
            desc: `Mobility has evolved itself as a need. Having a CRM mobile
            application helps you relish better results.`
        },
        {
            title: 'CRM Integration Services',
            desc: `Well, we not only integrate CRM into your working standards, we
            also help you integrate third-party apps for ease.`
        },
        {
            title: 'CRM Migration Solutions',
            desc: `Planning to migrate your CRM software but worried about time and
            efforts? We have best CRM migration solutions for you.`
        },
        {
            title: 'CRM Training & Support',
            desc: `We believe in building longer bonds. Hence, we don’t just develop
            CRM software but also ensure giving your training and after-sale
            support.`
        },
        {
            title: 'CRM Maintenance & Upgrades',
            desc: `While maintaining a software is undoubtedly important, upgrading
            it as per time and needs is equally crucial. We can help you.`
        },
        {
            title: 'CRM Software Development',
            desc: `Leveraging industry-leading practices in CRM development, we deliver bug-free applications that empower businesses to enhance customer relationship management.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` We are one of the leading Customized CRM software development company.
    Our team of experts has years of experience in availing best CRM
    development services to our global clients. While we do not confine our
    services and love to innovate new realms for our clients, we would like
    to share with you some of the highly demanded CRM software services our
    clients usually seek for.`

    return {...title, description, listData}
}