export const getERPServiceWeOfferData = () => {
    const listData = [
        {
            title: 'ERP Sales Management Solution',
            desc: `Boost your sales and manage the orders and inventory flawlessly.`
        },
        {
            title: 'ERP Production Management Solution',
            desc: ` Manage your production cycle effortlessly and serve your client needs with more precise solutions.`
        },
        {
            title: 'ERP Supply Chain Management',
            desc: `Boost productivity of your company with our custom ERP supply chain management solutions`
        },
        {
            title: 'ERP Human Capital Management',
            desc: `Human power is the most crucial capital you invest in your business. Manage it flawless to enhance your our-portfolioing.`
        },
        {
            title: 'ERP Customer Relation Management',
            desc: `Customers are the fuel for your business. Manage your relations with them to build a better market identity.`
        },
        {
            title: 'ERP FInance Management Solutions',
            desc: `Manage your finance without any error through our custom ERP software.`
        },
        {
            title: 'ERP Project Management Solutions',
            desc: `Be it a small project cycle or a bigger one, with our ERP project management solutions you can manage them all`
        },
        {
            title: 'ERP Services Management Solutions',
            desc: `Are you a service provider? We have custom service management solutions for you.`
        },
        {
            title: 'ERP Manufacturing Management Solutions',
            desc: `Concerned about managing the manufacturing cycle of your products. We have you backed.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` With our team of experienced ERP software developers, we have built an invincible command over the technology standards. To ensure that you get best ERP software development services, we enable companies by creating custom calendar, simple informal community and Messaging Service, our-portfolioed in plan for the day and undertakings, time log passages, inserted announcing frameour-portfolio with office suite combination. Our services include:`

    return {...title, description, listData}
}