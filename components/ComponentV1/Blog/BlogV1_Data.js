const blog1 = require('./Asset/best-crm-software-2024.webp').default
const blog2 = require('./Asset/salesforce-vs-odoo.webp').default
const blog3 = require('./Asset/what-are-main-salesforce-marketing-cloud-major-features.webp').default


export const getBlogData = () => {
    return [
        {
            img: blog1.src,
            date: '18 Apr, 2024',
            title: 'Best CRM Software in 2024: Top 7 Platforms',
            link: '/blog/best-crm-software-2024'
        },
        {
            img: blog2.src,
            date: '20 Mar, 2024',
            title: 'Salesforce vs Odoo: Which CRM is better for your business?',
            link: '/blog/salesforce-vs-odoo'
        },
        {
            img: blog3.src,
            date: '06 Feb, 2023',
            title: 'What Are Main Salesforce Marketing Cloud Major Features?',
            link: '/blog/what-are-main-salesforce-marketing-cloud-major-features'
        },
    ]
}