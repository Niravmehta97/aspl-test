const commited = require('./Asset/commited.svg').default.src
const competitive = require('./Asset/competitive.svg').default.src
const responsible = require('./Asset/responsible.svg').default.src
const transparent = require('./Asset/transparent.svg').default.src

export const getObjectiveData = () => {
    return [
        {
            img: commited,
            title: 'Committed',
            desc: `We are a team of creative, designers and developers committed to providing the most feasible solutions for each client and standby throughout the process from inception to successful product launch in the marketplace.`
        },
        {
            img: responsible,
            title: 'Responsible',
            desc: `Ashapura Softech takes responsibility for transforming your idea into an innovation. In the process of building a long-term reliable relationship, we craft excellent solutions that help you achieve your business goals.`
        },
        {
            img: transparent,
            title: 'Transparent',
            desc: `With Flexibility Engagement Model we partner with clients providing transparent communication from the step one, scale the project development process and clearly address the requirements on time.`
        },
        {
            img: competitive,
            title: 'Competitive',
            desc: `We take pride in our competitive business spirit. In the rapidly changing technology space, we are here to offer you the most competitive and comprehensive software development solutions that align with your business goals.`
        },
    ]
}