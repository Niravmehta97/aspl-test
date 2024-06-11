export const getSoftwareServiceWeOfferData = () => {
    const listData = [
        {
            title: 'Usability Testing',
            desc: `Usability test is conducted keeping in mind different user expectation of your target audience. It ensures long-term benefits and user retention.`
        },
        {
            title: 'Non-Functional Testing',
            desc: ` The test is executed to check non-functional requirements like the way system operates and behaves.`
        },
        {
            title: 'Specialized Testing',
            desc: `This is customized testing application and includes everything that comes from cloud testing to scalability.`
        },
        {
            title: 'Mobile Application Testing',
            desc: `Here we test software to check its usability, functionality, and consistency keeping different parameters in mind.`
        },
        {
            title: 'Testing as a Service',
            desc: `It is important to have a timely check of your software and applications to ensure a seamless experience`
        },
        {
            title: 'Integration Testing',
            desc: `Integration has always been a hectic task. Our integration testing services help you accomplish it flawlessly.`
        },
        {
            title: 'Functionl Testing',
            desc: `Every app has its distinct purpose. Functional testing ensures that all purposes are served without any glitches.`
        },
        {
            title: 'System Testing',
            desc: `We test the past and current landscape of technology and processes from embedded systems, and mainframe to current mobile platforms.`
        },
        {
            title: 'Localization Testing',
            desc: `This is conducted keeping in mind the end users and the purpose behind. This is the best way to test an enterprise app.`
        },
        {
            title: 'Creating a Test Script and Data',
            desc: `We leave no stone unturned to keep you updated with the results and data involved. Creating test scripts and data is a part of it.`
        },
        {
            title: 'Acceptance Testing',
            desc: `To build a transparent our-portfolio culture. We share with you Realtime user results of various tests we organized to affirm flawless procedure.`
        },
        {
            title: 'Graphical User Interface (GUI) Testing',
            desc: `We perform GUI testing to ensuring proper Graphical User Interface functionality as per the business requirement.`
        },
    ]
    const title = {title: 'We Offer', span_title: 'Services'}
    const description = ` We are into QA and software testing services for a long time now and have earned immense experience in quality assurance services by following Agile Methods. We give a scope of administrations on enterprise application testing services with the help of our profound experience in QA Testing. It is dependably a decent practice to set up a successful bug report. Settling a bug relies on how successfully you set up your bug report. We give day by day test answer to our customer which will help them to stay refreshed about the tasks.`

    return {...title, description, listData}
}