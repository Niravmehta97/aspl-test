import React from 'react'
import MobileAppDevelopmentV1 from '../../components/PagesV1/ServicePage/mobile-app-developmentV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Mobile App Development Company in USA, UK, and India</title>
                <meta name="description" content="Turn your app idea into reality. Ashapura Softech, a trusted mobile app development company in USA, UK, India, crafts innovative solutions for businesses of all sizes." />
                <meta name="og:title" property="og:title" content="Mobile App Development Company in USA, UK, and India"></meta>
                <meta name="twitter:card" content="Turn your app idea into reality. Ashapura Softech, a trusted mobile app development company in USA, UK, India, crafts innovative solutions for businesses of all sizes."></meta>
                <link rel='canonical' href={`${baseUrl}/service/mobile-app-development`}></link>
            </Head>
            <MobileAppDevelopmentV1 />
        </>
    )
}