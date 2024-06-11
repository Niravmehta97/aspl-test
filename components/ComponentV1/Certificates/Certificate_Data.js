const clutch = require('./Assets/clutch.svg').default.src
const designrush = require('./Assets/designrush.svg').default.src
const goodfirm = require('./Assets/goodfirm.svg').default.src
const google = require('./Assets/google.svg').default.src
const topdeveloper = require('./Assets/topdeveloper.svg').default.src

export const getCertificateData = () => {
    return [
        {
            icon: clutch,
            rating: '4.7'
        },
        {
            icon: goodfirm,
            rating: '5.0'
        },
        {
            icon: designrush,
            rating: '4.5'
        },
        {
            icon: topdeveloper,
            rating: '4.8'
        },
        {
            icon: google,
            rating: '4.1'
        },
    ]
}