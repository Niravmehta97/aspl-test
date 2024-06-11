const mission = require('./Assets/mission.svg').default
const vision = require('./Assets/vision.svg').default

export const getAboutVisionData = () => {

    return [
        {
            img: vision.src,
            title: 'Our Vision',
            desc: `To become a leader in strategic it solution partner for worldwide clients and provide one-stop solutions to fulfill their technology and business needs. Create solutions that get success to our associates and set them to stand tall with business competitors.`,
            itemClass: 'vision'
        },
        {
            img: mission.src,
            title: 'Our Mission',
            desc: `Time is money and we abide by that. Ashapura softech offers just-in-time, reliable, safe, secure, robust, cost-effective enterprise software development solutions. Extract the most from technology innovation and bring success to emerging entrepreneurs.`,
            itemClass: 'mission'
        }
    ]
}