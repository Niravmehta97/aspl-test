export const getOurClientData = () => {
    const mockImage1 = require('./Asset/desktop-mnh.webp').default
    const mockImage2 = require('./Asset/desktop-machine.webp').default
    const clutchImage1 = require('./Asset/ClientReview/clutch4.5.svg').default
    const clutchImage2 = require('./Asset/ClientReview/clutch5.svg').default

    return [
        {
            mockupImage: mockImage1.src,
            title: 'MNH Softskills INC',
            desc: `Ashapura Softech has collaborated with an IT services company to
            develop their product. Key deliverables include Salesforce and web
            application.`,
            subject: `Ashapura Softech is an experienced team that's ready to support their clients. `,
            feedback: `After carefully dividing tasks into milestones, Ashapura Softech
            has been completing every step. Their workflow has been highly
            effective, using Slack and Skype to communicate seamlessly.`,
            clientName: 'Mr. Vipul Shah',
            designation: 'President, MNH SoftSkills Inc',
            img: clutchImage1.src
        },
        {
            mockupImage: mockImage2.src,
            title: 'MachineAI',
            desc: `Ashapura Softech developed a CRM solution for a financial services company.The team provided POC to create an implementation plan for the project.`,
            subject: 'They were very involved and knowledgeable',
            feedback: `Thanks to Ashapura Softech's effort, the client's IT expenditure lessened, sales representatives saved time, and helpdesk calls decreased significantly. Their workflow was seamless, adjusting easily to the client's timezone.`,
            clientName: 'Mr. Anonymous',
            designation: 'Project Manager, Financial Services Company',
            img: clutchImage2.src
        },
    ]
}