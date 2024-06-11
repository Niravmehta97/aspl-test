import React from 'react';
// import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
import Head from "next/head"
import HomeV1 from '../components/PagesV1/HomeV1';

const Index = () => {

  const schemaSearch = {
    "@context":"https://schema.org",
    "@graph":[
    {"@type":"Organization",
    "@id":"https://ashapurasoftech.com/#organization",
    "name":"Ashapura Softech",
    "url":"https://ashapurasoftech.com/",
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
    "url":"https://ashapurasoftech.com/",
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
    "target":["https://ashapurasoftech.com/"]
    }]}]
  }
  const schemaData =
  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Custom CRM Development",
      "item": "https://ashapurasoftech.com/service/crm-software-development/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Salesforce CRM Services",
      "item": "https://ashapurasoftech.com/service/salesforce/salesforce-crm-development-company"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Salesforce Services",
      "item": "https://ashapurasoftech.com/service/salesforce/"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Company",
      "item": "https://ashapurasoftech.com/about-us/"
    }]
  }
  return (
    <>
      <Head>
        <title>Salesforce | Microsoft | CRM, ERP & Custom Dev | Ashapura Softech</title>
        <meta name="description" content="Ashapura Softech is a global provider of end-to-end Salesforce, Microsoft, CRM, ERP, and custom development services." />
        <meta name="og:title" property="og:title" content="Salesforce | Microsoft | CRM, ERP & Custom Dev | Ashapura Softech"></meta>
        <meta name="twitter:card" content="Ashapura Softech is a global provider of end-to-end Salesforce, Microsoft, CRM, ERP, and custom development services."></meta>
        <link rel='canonical' href={`${baseUrl}`}></link>
      </Head>
      {/* <MainBanner /> */}
      <HomeV1 />
      <script async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSearch) }}
      />
    </>
  )
}

export default Index;