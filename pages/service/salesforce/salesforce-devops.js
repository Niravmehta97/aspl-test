import React from 'react';
import baseUrl from '../../../utils/baseUrl';
import Head from "next/head"
import SalesforceDevOpsV1 from '../../../components/PagesV1/ServicePage/salesforce/salesforce-devopsV1';

const ServicesDetails = () => {

    const schemaSearch = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://ashapurasoftech.com/#organization",
                "name": "Ashapura Softech",
                "url": "https://ashapurasoftech.com/service/salesforce/salesforce-devops/",
                "sameAs": [],
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://ashapurasoftech.com/#logo",
                    "inLanguage": "en-US",
                    "url": "https://ashapurasoftech.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Faspl-logo.c68cfe92.webp&w=256&q=75",
                    "width": 180,
                    "height": 60,
                    "caption": "Ashapura Softech"
                },
                "image": { "@id": "https://ashapurasoftech.com/#logo" }
            },
            {
                "@type": "WebSite",
                "@id": "https://ashapurasoftech.com/#website",
                "url": "https://ashapurasoftech.com/service/salesforce/salesforce-devops/",
                "name": "ashapurasoftech.com",
                "inLanguage": "en-US",
                "description": "Salesforce & Web Development Company",
                "publisher": { "@id": "https://ashapurasoftech.com/#organization" },
                "potentialAction": [{
                    "@type": "SearchAction",
                    "target": "https://ashapurasoftech.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
                ]
            },
            {
                "@type": "WebPage",
                "@id": "https://ashapurasoftech.com/#webpage",
                "url": "https://ashapurasoftech.com/service/salesforce/salesforce-devops/",
                "name": "Salesforce Services & Custom Software Development Company in USA| Ashapura Softech ",
                "isPartOf": { "@id": "https://ashapurasoftech.com/#website" },
                "inLanguage": "en-US",
                "about": { "@id": "https://ashapurasoftech.com/#organization" },
                "primaryImageOfPage": { "@id": "https://ashapurasoftech.com/#primaryimage" },
                "datePublished": "2017-08-01T10:27:45+00:00",
                "dateModified": "2022-02-27T13:35:34+00:00",
                "description": "Our aim is to create an awesome web space for your business. With over decade experience in Salesforce development, Ashapura offers enterprise web and mobility solutions for the clients across the globe.",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": ["https://ashapurasoftech.com/service/salesforce/salesforce-devops/"]
                    }]
            }]
    }
    return (
        <>
            <Head>
                <title>Top Salesforce DevOps Companies in India</title>
                <meta name="description" content="Discover India's leading Salesforce DevOps companies, including Ashapura Softech. Get expert solutions to streamline development & deployment." />
                <meta name="og:title" property="og:title" content="Top Salesforce DevOps Companies in India"></meta>
                <meta name="twitter:card" content="Discover India's leading Salesforce DevOps companies, including Ashapura Softech. Get expert solutions to streamline development & deployment."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-marketing-cloud`}></link>
            </Head>
            <SalesforceDevOpsV1 />
        </>
    )
}

export default ServicesDetails;