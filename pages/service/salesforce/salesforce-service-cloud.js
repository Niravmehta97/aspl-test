import React from "react";
import baseUrl from "../../../utils/baseUrl";
import Head from "next/head"
import SalesforceServieCloudV1 from "../../../components/PagesV1/ServicePage/salesforce/salesforce-service-cloudV1";

const ServicesDetails = () => {
  const schemaSearch = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ashapurasoftech.com/#organization",
        name: "Ashapura Softech",
        url: "https://ashapurasoftech.com/service/salesforce/salesforce-service-cloud/",
        sameAs: [],
        logo: {
          "@type": "ImageObject",
          "@id": "https://ashapurasoftech.com/#logo",
          inLanguage: "en-US",
          url: "https://ashapurasoftech.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Faspl-logo.c68cfe92.webp&w=256&q=75",
          width: 180,
          height: 60,
          caption: "Ashapura Softech",
        },
        image: { "@id": "https://ashapurasoftech.com/#logo" },
      },
      {
        "@type": "WebSite",
        "@id": "https://ashapurasoftech.com/#website",
        url: "https://ashapurasoftech.com/service/salesforce/salesforce-service-cloud/",
        name: "ashapurasoftech.com",
        inLanguage: "en-US",
        description: "Salesforce & Web Development Company",
        publisher: { "@id": "https://ashapurasoftech.com/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: "https://ashapurasoftech.com/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://ashapurasoftech.com/#webpage",
        url: "https://ashapurasoftech.com/service/salesforce/salesforce-service-cloud/",
        name: "Salesforce Services & Custom Software Development Company in USA| Ashapura Softech ",
        isPartOf: { "@id": "https://ashapurasoftech.com/#website" },
        inLanguage: "en-US",
        about: { "@id": "https://ashapurasoftech.com/#organization" },
        primaryImageOfPage: {
          "@id": "https://ashapurasoftech.com/#primaryimage",
        },
        datePublished: "2017-08-01T10:27:45+00:00",
        dateModified: "2022-02-27T13:35:34+00:00",
        description:
          "Our aim is to create an awesome web space for your business. With over decade experience in Salesforce development, Ashapura offers enterprise web and mobility solutions for the clients across the globe.",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [
              "https://ashapurasoftech.com/service/salesforce/salesforce-service-cloud/",
            ],
          },
        ],
      },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the advantages of using salesforce service cloud implementation services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It offers clients personalized attention while giving the agents the tools they need to assist in solving customer concerns. Businesses can manage all client data and service interactions centrally thanks to this customer service system. The Salesforce Service Cloud gives a 360-degree perspective of the client in order to deliver better, more rapid, and more personalized services to customers. It is based on many Salesforce matrices, such as the daily average for cases, the average response time for a client, the breakdown of cases by problems, etc.",
        },
      },
      {
        "@type": "Question",
        name: "Is salesforce service cloud a CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CRM programs on the Salesforce Platform include Service Cloud and Sales Cloud. Through its customer care console, live chat, and community software, Service Cloud assists organizations in supporting their current customers.",
        },
      },
    ],
  };
  return (
    <>
            <Head>
                <title>Top Salesforce Service Cloud Implementation Partner in India</title>
                <meta name="description" content="Ashapura Softech is your trusted Salesforce Service Cloud implementation expert in India, USA, UK. Get tailored solutions for exceptional customer service." />
                <meta name="og:title" property="og:title" content="Top Salesforce Service Cloud Implementation Partner in India"></meta>
                <meta name="twitter:card" content="Ashapura Softech is your trusted Salesforce Service Cloud implementation expert in India, USA, UK. Get tailored solutions for exceptional customer service."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-service-cloud`}></link>
            </Head>
            <SalesforceServieCloudV1 />
    </>
  );
};

export default ServicesDetails;
