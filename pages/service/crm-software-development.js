import React from 'react'
import CRMSoftwareDevelopmentV1 from '../../components/PagesV1/ServicePage/crm-software-developmentV1'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>CRM Software Development company in USA, UK, India</title>
                <meta name="description" content="Get a custom CRM solution designed for your unique needs. Contact Ashapura Softech, a top provider in the USA, UK, & India." />
                <meta name="og:title" property="og:title" content="CRM Software Development company in USA, UK, India"></meta>
                <meta name="twitter:card" content="Get a custom CRM solution designed for your unique needs. Contact Ashapura Softech, a top provider in the USA, UK, & India."></meta>
                <link rel='canonical' href={`${baseUrl}/service/crm-software-development`}></link>
            </Head>
            <CRMSoftwareDevelopmentV1 />
        </>
    )
}
