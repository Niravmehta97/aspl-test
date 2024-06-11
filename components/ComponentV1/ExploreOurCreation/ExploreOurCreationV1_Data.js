const CFA = require('./Asset/crm.webp').default
const MRB = require('./Asset/mrb.webp').default
const CLANG = require('./Asset/clang.webp').default

export const getExploreOurCreationV1Data = () => {
    return [
        {
            img: CFA.src,
            title: 'Credit Freedom App',
            appStack: ['vTiger CRM', 'Android', 'Ios', 'AWS Web Services'],
            link: '/our-portfolio/credit-freedom'
        },
        {
            img: MRB.src,
            title: 'My Retail Buddy App',
            appStack: ['AWS Web Services', 'React Native', 'CodeIgniter', 'PHP'],
            link: '/our-portfolio/my-retail-buddy'
        },
        {
            img: CLANG.src,
            title: 'Clang Music App',
            appStack: ['Android'],
            link: '/our-portfolio/clang'
        },
    ]
}