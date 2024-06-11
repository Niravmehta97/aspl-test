import React from 'react'
import ERPSoftwareDevelopmentV1 from '../../components/PagesV1/ServicePage/enterprise-software-developmentV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Custom Enterprise Software Development Company in USA, UK</title>
                <meta name="description" content="Empower your business with Ashapura Softech's custom enterprise software solutions. We design, develop, and implement tailored applications to meet your unique needs." />
                <meta name="og:title" property="og:title" content="Custom Enterprise Software Development Company in USA, UK"></meta>
                <meta name="twitter:card" content="Empower your business with Ashapura Softech's custom enterprise software solutions. We design, develop, and implement tailored applications to meet your unique needs."></meta>
                <link rel='canonical' href={`${baseUrl}/service/enterprise-software-development`}></link>
            </Head>
            <ERPSoftwareDevelopmentV1 />
        </>
    )
}