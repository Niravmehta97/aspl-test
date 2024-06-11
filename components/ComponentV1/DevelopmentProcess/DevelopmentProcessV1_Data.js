const research = require('./Assets/research.svg').default
const creativity = require('./Assets/creativity.svg').default
const engineering = require('./Assets/engineering.svg').default
const planning = require('./Assets/planning.svg').default
export const getDevelopmentProcessData = () => {

    return [
        {
            img: research.src,
            title: 'Research',
            desc: `Before we dive into the development process, we make quick and
            detail research of the project and choose the best-suited
            platform..`,
            itemClass: 'research'
        },
        {
            img: planning.src,
            title: 'Planning',
            desc: `With the scope of the project fixed and the idea conceptualized,
            we create a roadmap for go to successful development and launch of
            an application.`,
            itemClass: 'planning'
        },
        {
            img: creativity.src,
            title: 'Creativity',
            desc: `Every business is unique and has potential to make it huge.Our
            experienced team adds creative flavour to make the project a
            success.`,
            itemClass: 'creativity'
        },
        {
            img: engineering.src,
            title: 'Engineering',
            desc: `With all the boxes ticked we help you launch the feature-rich
            high-quality application in the marketplace with all your desired
            functionality.`,
            itemClass: 'engineering'
        },
    ]
}