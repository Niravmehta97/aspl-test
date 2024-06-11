export const getMobileServiceWeOfferData = () => {
    const listData = [
        {
            title: 'Application Idea',
            desc: `We help you build your raw mobile app idea into a well-researched and analyzed concept which can yield you better results.`
        },
        {
            title: 'Application Design',
            desc: ` Design is one of the first things that not just users but app stores notice. Our designers have unmatched knowledge in designing user-centric and industry-focused mobile app designs.`
        },
        {
            title: 'Application Development',
            desc: `Today ‘there’s an app for everything’. In this ultra-competitive market, we develop innovative mobile app solutions for your business.`
        },
        {
            title: 'Support and Maintenance',
            desc: `We never leave you after developing a mobile application. Our support team leaves no stone unturned to provide you best mobile app support and maintenance whenever you need.`
        },
        {
            title: 'Application Marketing',
            desc: `Your mobile application can be the best thing people can have. But they need to know about it. This is where a dedicated custom mobile app marketing strategy is required.`
        },
        {
            title: 'Hardware Integration',
            desc: `Well, it isn’t just the back end or marketing and promotion. We are always here to give your best in industry hardware integration based on your requirements.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` We firmly believe that despite the tremendous growth, there’s a lot more in the mobile application sector which can be relished. However, to do the same we need to ensure putting best efforts in bringing personalized, research-oriented mobile application development services. Having said this, we thrive on a more customized approach for all our clients. From scratch to the tomb, when it’s about mobile app development, we have you back. Here are some of the services that we offer and for rest, you can anytime contact our team.`

    return {...title, description, listData}
}