export const getsalesforceservicecloudOfferData = () => {
    const listData = [
        {
            title: 'Omni-Channel Routing',
            desc: `With omni channel routing, service agents don't have to waste time going back and forth between multiple apps while they're trying to resolve a customer issue. Administrators are able to distribute the workload based on skillset, availability, and capacity in order to get work done.`
        },
        {
            title: 'Lightning Service Console',
            desc: ` It's all about how you can stay connected and engage with your customers in real-time. If you let your agents do other tasks like checking email and looking at the computer screen during calls, then they will be more efficient at resolving the customer's issue.`
        },
        {
            title: 'Case Management',
            desc: `All of your customer's interactions with your company are organized in one place, so you can better understand how they're using your products and services. For example, if a customer calls with an issue, but also opens a support ticket through email, both of those interactions will be visible in case management.`
        },
        {
            title: 'Knowledge Base',
            desc: `You'll have instant access to all of your customers' information. This means that when a customer calls in with an issue, your agent can quickly search for related articles, previous interactions, or other data.`
        },
        {
            title: 'Automation With Macros',
            desc: `It's not always easy for an agent to know which steps should be taken first when resolving a problem. A team of support agents should have time freed up from their jobs with the use of automation. We ensure you serve with this feature as a core activity.`
        },
        {
            title: 'Service Wave Analytics',
            desc: `This is a new, intuitive way for your agents to visualize all of their interactions with customers in one place. The visual interface gives them easy access to data about their interactions, including what was said and done during calls and support tickets.`
        },
        {
            title: 'Asset And Order Management',
            desc: `You can use asset management to track all of your company's assets, including physical goods or services. For example, if you're a telecom provider, you could use asset management to keep track of cell phones.`
        },
        {
            title: 'Live Agent Instantly From Any Device',
            desc: `With Live Agent, you can provide your customers with 24/7 support without having to hire additional agents. All of your customer's interactions are recorded in one place so that they can be accessed at anytime.`
        },
        {
            title: 'Salesforce Service Cloud Support & Training',
            desc: `Our combined Salesforce support and training services ensure your organization delivers agile and efficient customer service. Leverage our team of 24/7 Service Cloud experts to keep your platform optimized and reach its full potential. Go beyond support with our training programs, equipping your team with best practices and the latest implementation tools.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` `

    return {...title, description, listData}
}