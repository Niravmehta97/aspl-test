import React from 'react';
import Head from "next/head"
import baseUrl from '../../../utils/baseUrl';
import SalesforceCommerceCloudV1 from '../../../components/PagesV1/ServicePage/salesforce/salesforce-commerce-cloudV1';

const ServicesDetails = () => {
    return (
        <>
            <Head>
                <title>Salesforce Commerce Cloud Experts in USA & UK</title>
                <meta name="description" content="Boost your online sales with Ashapura Softech, leading Salesforce Commerce Cloud Experts in USA & UK. We craft custom solutions to drive growth." />
                <meta name="og:title" property="og:title" content="Salesforce Commerce Cloud Experts in USA & UK"></meta>
                <meta name="twitter:card" content="Boost your online sales with Ashapura Softech, leading Salesforce Commerce Cloud Experts in USA & UK. We craft custom solutions to drive growth."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-commerce-cloud`}></link>
            </Head>
            <SalesforceCommerceCloudV1 />
        </>
    )
}

export default ServicesDetails;