import React from 'react'
import { Helmet } from 'react-helmet'
import baseUrl from '../../../utils/baseUrl'
import Head from "next/head"
import MicrosoftSharepointDevelopmentV1 from '../../../components/PagesV1/ServicePage/microsoft/microsoft-sharepoint-development-servicesV1'

export default function ServicesDetails() {
    return (
   <>
            <Head>
                <title>Microsoft SharePoint Development Services Companies in India, USA</title>
                <meta name="description" content="Ashapura Softech: Your global Microsoft SharePoint development partner. We provide expert services in India and the USA." />
                <meta name="og:title" property="og:title" content="Microsoft SharePoint Development Services Companies in India, USA"></meta>
                <meta name="twitter:card" content="Ashapura Softech: Your global Microsoft SharePoint development partner. We provide expert services in India and the USA."></meta>
                <link rel='canonical' href={`${baseUrl}/service/microsoft/microsoft-sharepoint-development-services`}></link>
            </Head>
            <MicrosoftSharepointDevelopmentV1 />
        </>
    )
}