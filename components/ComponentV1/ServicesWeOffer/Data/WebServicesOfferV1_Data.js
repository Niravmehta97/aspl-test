export const getWebServiceWeOfferData = () => {
    const listData = [
        {
            title: 'CONSULTANCY',
            desc: `Our experts are always prepared to assist you with all your queries linked with web development services. We believe sharing boosts the knowledge.`
        },
        {
            title: 'STAFFING',
            desc: ` Have dedicated resources for your project and stay updated on a real-time basis with the progress of your project.`
        },
        {
            title: 'INTEGRATION',
            desc: `Whether be it a third party integration or an innovative feature or service you wish to integrate into your website, we have you back.`
        },
        {
            title: 'SUPPORT',
            desc: `Need help and support in the context of your prevailing website or a new project? Well, you can share that with us and we’ll ensure leading you the right way`
        },
        {
            title: 'DEVELOPMENT',
            desc: `From the start till the end, you build an idea and share it with us. We’ll ensure pursuing a development process to bring your ideas into the practical world.`
        },
        {
            title: 'INTEGRATION RIGHT TECHNOLOGY CREATIVELY',
            desc: `While everyone is looking for innovative technologies, we believe in keeping things simple yet highly efficient. Having said this, with us, you can always expect to have innovative and creative ways while we build a website for you`
        },
    ]
    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` With years of expertise and hands-on over numerous technologies, our team of web developers has gained tremendous knowledge in building custom web development solutions for our global clients. We leave no stone unturned to serve our clients with best custom web development services. Few names from our range of services include:`

    return {...title, description, listData}
}