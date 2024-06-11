import React from 'react'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"
import SalesforceCloudServiceV1 from '../../components/PagesV1/ServicePage/salesforce/salesforce-cloud-serviceV1'

export default function ServicesDetails() {
    return (
   <>
            <Head>
            <title>Salesforce Service Cloud Services and Consulting</title>
                <meta name="description" content="Transform your customer service with Ashapura Softech's Salesforce Service Cloud expertise. We deliver end-to-end solutions & consulting to elevate your support." />
                <meta name="og:title" property="og:title" content="Salesforce Service Cloud Services and Consulting"></meta>
                <meta name="twitter:card" content="Transform your customer service with Ashapura Softech's Salesforce Service Cloud expertise. We deliver end-to-end solutions & consulting to elevate your support."></meta>
                <link rel='canonical' href={`${baseUrl}/service/salesforce/salesforce-cloud-services`}></link>
            </Head>
            <SalesforceCloudServiceV1 />
        </>
    )
}