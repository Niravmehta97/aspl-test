export const getsalesforcemarketingcloudOfferData = () => {
    const listData = [
        {
            title: 'Better Customer Service',
            desc: `It's true that CRM today has many major functions- but its main benefit remains the relationship building between the business and its customers. Our CRM manages all your contacts and key information about your customers.`
        },
        {
            title: 'Increase Sales And Attribution',
            desc: ` Our CRM is known to ease your sales process by targeting quality leads, eventually, leading to an increase in sales. Salesforce CRM can help you to establish a guide for your employees to maintain a unique sales journey.`
        },
        {
            title: 'Customer Retention',
            desc: `Once you have converted your lead, it becomes more than important to retain them. We provide exclusive management and retention solutions to help your business grow.`
        },
        {
            title: 'Higher Productivity And Results',
            desc: `At Salesforce, we’ve created an intelligent CRM technology that helps your business and employees to automate campaigns such as drip mail campaigns. Now your employees can focus on the tasks that really rely on their talent and manual powers!`
        },
        {
            title: 'Centralized Database Of Information',
            desc: `Our CRM centralizes all the data and information of your company and customers. It’s so easy to manage, arrange and segregate that you’ll never go back to your traditional excel!`
        },
        {
            title: 'Automated Sales Report',
            desc: `Now manage your customers, their profiles and ongoing tickets with just one click! Our CRM tool helps your employees to check the active prospective leads, and evaluate their KPIs, quotes, goals, etc.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}