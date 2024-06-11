const Img1 = require('../Assets/team.svg').default
const Img2 = require('../Assets/easy-to-use.svg').default
const Img3 = require('../Assets/centralized.svg').default
const Img4 = require('../Assets/popularity.svg').default
/**
 * 
 * @returns 
 * @param colorVarient color-1, color-2, color-3, color-4
 */

export default function () {
    return [
        {
            title: 'Collaboration and Customization',
            desc: 'SharePoint offers customization options that let you edit components and create custom apps. This will help you make informed decisions and increase your ROI.',
            img: Img1.src,
            colorVarient: 'color-1'
        },
        {
            title: `It's Easy To Use`,
            desc: 'To use the platform, you would not require the assistance of a specialist, nor will it be necessary to ask for the assistance of a developer.',
            img: Img2.src,
            colorVarient: 'color-2'
        },
        {
            title: `Centralized Administration Console`,
            desc: 'Administrators can access the console function to access basic operations features, restore information, and use configuration wizards.',
            img: Img3.src,
            colorVarient: 'color-3'
        },
        {
            title: `Popularity`,
            desc: 'SharePoint is a content management system used by almost 75% of people today. It reduces costs, minimizes IT-related risks, and fosters collaboration.',
            img: Img4.src,
            colorVarient: 'color-4'
        }
    ]
}