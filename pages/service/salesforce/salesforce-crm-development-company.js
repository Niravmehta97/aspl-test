import React from 'react';
import Head from "next/head"
import baseUrl from '../../../utils/baseUrl';
import SalesforceCRMServiceV1 from '../../../components/PagesV1/ServicePage/salesforce/salesforce-CRM-serviceV1';

const ServicesDetails = () => {

    const schemaSearch = {
    "@context":"https://schema.org",
    "@graph":[
    {"@type":"Organization",
    "@id":"https://ashapurasoftech.com/#organization",
    "name":"Ashapura Softech",
    "url":"https://ashapurasoftech.com/service/salesforce/salesforce-crm-development-company/",
    "sameAs":[],
    "logo":{"@type":"ImageObject",
    "@id":"https://ashapurasoftech.com/#logo",
    "inLanguage":"en-US",
    "url":"https://ashapurasoftech.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Faspl-logo.c68cfe92.webp&w=256&q=75",
    "width":180,
    "height":60,
    "caption":"Ashapura Softech"},
    "image":{"@id":"https://ashapurasoftech.com/#logo"}
    },
    {"@type":"WebSite",
    "@id":"https://ashapurasoftech.com/#website",
    "url":"https://ashapurasoftech.com/service/salesforce/salesforce-crm-development-company/",
    "name":"ashapurasoftech.com",
    "inLanguage":"en-US",
    "description":"Salesforce & Web Development Company",
    "publisher":{"@id":"https://ashapurasoftech.com/#organization"},
    "potentialAction":[{"@type":"SearchAction",
    "target":"https://ashapurasoftech.com/?s={search_term_string}",
    "query-input":"required name=search_term_string"}
    ]
    },
    {"@type":"WebPage",
    "@id":"https://ashapurasoftech.com/#webpage",
    "url":"https://ashapurasoftech.com/",
    "name":"Salesforce Services & Custom Software Development Company in USA| Ashapura Softech ",
    "isPartOf":{"@id":"https://ashapurasoftech.com/#website"},
    "inLanguage":"en-US",
    "about":{"@id":"https://ashapurasoftech.com/#organization"},
    "primaryImageOfPage":{"@id":"https://ashapurasoftech.com/#primaryimage"},
    "datePublished":"2017-08-01T10:27:45+00:00",
    "dateModified":"2022-02-27T13:35:34+00:00",
    "description":"Our aim is to create an awesome web space for your business. With over decade experience in Salesforce development, Ashapura offers enterprise web and mobility solutions for the clients across the globe.",
    "potentialAction":[
    {"@type":"ReadAction",
    "target":["https://ashapurasoftech.com/service/salesforce/salesforce-crm-development-company/"]
    }]}]
    }

    return (
        <>
            <Head>
                <title>Salesforce CRM Development Company in USA, UK and India</title>
                <meta name="description" content="Need a top Salesforce CRM consultant in USA, UK and India? Ashapura Softech offers personalized solutions to optimize your CRM & drive results." />
                <meta name="og:title" property="og:title" content="Salesforce CRM Development Company in USA, UK and India"></meta>
                <meta name="twitter:card" content="Need a top Salesforce CRM consultant in USA, UK and India? Ashapura Softech offers personalized solutions to optimize your CRM & drive results."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-crm-development-company`}></link>
            </Head>
            <SalesforceCRMServiceV1 />
        </>
    )
}

export default ServicesDetails;