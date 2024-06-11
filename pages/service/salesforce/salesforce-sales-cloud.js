import React from 'react';
import baseUrl from '../../../utils/baseUrl';
import Head from "next/head"
import SalesforceSalesCloudV1 from '../../../components/PagesV1/ServicePage/salesforce/salesforce-sales-cloudV1';

const ServicesDetails = () => {
    return (
        <>
            <Head>
                <title>Salesforce Sales Cloud Experts | India, USA, UK | Ashapura Softech</title>
                <meta name="description" content="Transform your sales process with Ashapura Softech's Salesforce Sales Cloud expertise. We deliver tailored solutions across India, USA, & UK." />
                <meta name="og:title" property="og:title" content="Salesforce Sales Cloud Experts | India, USA, UK | Ashapura Softech"></meta>
                <meta name="twitter:card" content="Transform your sales process with Ashapura Softech's Salesforce Sales Cloud expertise. We deliver tailored solutions across India, USA, & UK."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-sales-cloud`}></link>
            </Head>
            <SalesforceSalesCloudV1 />

        </>
    )
}

export default ServicesDetails;