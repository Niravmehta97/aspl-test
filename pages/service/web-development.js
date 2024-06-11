import React from 'react'
import WebDevelopmentV1 from '../../components/PagesV1/ServicePage/web-developmentV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Award-Winning Web Development Agency | Ashapura Softech</title>
                <meta name="description" content="Craft your dream website with Ashapura Softech, a leading web development company. We deliver award-winning, custom solutions that drive results." />
                <meta name="og:title" property="og:title" content="Award-Winning Web Development Agency | Ashapura Softech"></meta>
                <meta name="twitter:card" content="Craft your dream website with Ashapura Softech, a leading web development company. We deliver award-winning, custom solutions that drive results."></meta>
                <link rel='canonical' href={`${baseUrl}//service/web-development`}></link>
            </Head>
            <WebDevelopmentV1 />
        </>
    )
}