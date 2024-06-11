export const getOffshoreServiceWeOfferData = () => {
    const listData = [
        {
            title: 'System Analysis',
            desc: `This plays a crucial role and has to be done under strict surveillance of industry experts. We have tremendous experience in executing it.`
        },
        {
            title: 'Web Development and Design',
            desc: ` Hire some of the best designers and developers for your upcoming online portal and grab the attention of your target audience.`
        },
        {
            title: 'Project Management',
            desc: `While we manage your projects flawlessly, you can invest your time in planning strategies to grow your business.`
        },
        {
            title: 'Testing and Quality Assurance',
            desc: `Users need the best and to stay in the ultra-competitive market, it is crucial that you give them an err-free platform.`
        },
        {
            title: 'Modification or Integration',
            desc: `Technology and user expectations change with time. Modify and integrate innovative technology to rule the market.`
        },
        {
            title: 'Software and Product Development',
            desc: `Planning to have a software or a product? We can have you the same without any additional efforts from you.`
        },
    ]

    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` As indicated by your demand, we will give the resumes of experts who have the significant innovations and ranges of abilities you require. This procedure will best meet your pre-characterized criteria and can be furthermore met by you before propelling new activities. Basically, we cover everything that you need. However, we’d here be sharing some of the largely asked services. Our aggressive estimating is cited on a month to month rate for engineers as indicated by the specialized level, programming aptitude required, and the venture scope. At the initiation of new vital organizations, when the administration starts, we can convey specifically by email, moment dispatcher, or phone, so that your offshore staff can react expeditiously working in conjunction with your group.`

    return {...title, description, listData}
}