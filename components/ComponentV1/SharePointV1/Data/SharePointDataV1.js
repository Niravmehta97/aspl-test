const Img1 = require('../Asset/Flexible-Engagement-Models.svg').default
const Img2 = require('../Asset/timely-delivery.svg').default
const Img3 = require('../Asset/Expert-Developers.svg').default
const Img4 = require('../Asset/transparency.svg').default
/**
 * 
 * @returns 
 * @param colorVariant color-1, color-2, color-3, color-4
 */
export default function () {
    return [
        {
            title: 'Flexible-Engagement-Models',
            desc: 'Developers can be hired hourly or at a fixed rate through a customized, customer-centric engagement model.',
            img: Img1.src,
            colorVariant: 'color-1'
        },
        {
            title: 'Timely Delivery',
            desc: 'We value time and insist on timely delivery. Experts will deliver your project within the set timeframe at Ashapura Softech Inc..',
            img: Img2.src,
            colorVariant: 'color-2'
        },
        {
            title: 'Expert Developers',
            desc: 'A skilled and experienced team of developers at Ashapura Softech Inc can handle your business needs efficiently.',
            img: Img3.src,
            colorVariant: 'color-3'
        },
        {
            title: '100% Transparency',
            desc: 'To ensure that our client and team are on the same page, we have a 100% transparency policy.',
            img: Img4.src,
            colorVariant: 'color-4'
        }
    ]
}