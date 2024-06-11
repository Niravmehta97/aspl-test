import React from 'react'
import { Helmet } from 'react-helmet'
import baseUrl from '../../../utils/baseUrl'
import Head from "next/head"
import MicrosoftAzureDevelopmentV1 from '../../../components/PagesV1/ServicePage/microsoft/microsoft-azure-development-servicesV1'

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Microsoft Azure Outsourcing Development Services in India, USA</title>
                <meta name="description" content="Outsource your Microsoft Azure development to Ashapura Softech. Get expert solutions & cost-effective services in India & the USA." />
                <meta name="og:title" property="og:title" content="Microsoft Azure Outsourcing Development Services in India, USA"></meta>
                <meta name="twitter:card" content="Outsource your Microsoft Azure development to Ashapura Softech. Get expert solutions & cost-effective services in India & the USA."></meta>
                <link rel='canonical' href={`${baseUrl}/service/microsoft/microsoft-azure-development-services`}></link>
            </Head>
            <MicrosoftAzureDevelopmentV1 />
        </>
    )
}
