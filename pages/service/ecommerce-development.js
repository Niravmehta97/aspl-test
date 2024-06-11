import React from 'react'
import EcommerceSoftwareDevelopmentV1 from '../../components/PagesV1/ServicePage/ecommerce-developmentV1'
import { Helmet } from 'react-helmet'
import Head from "next/head"
import baseUrl from '../../utils/baseUrl'

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Grow Your Online Store | Ecommerce Development | Ashapura Softech</title>
                <meta name="description" content="Launch your dream online store with Ashapura Softech, a top eCommerce development company in India, USA, UK. Contact us for expert solutions." />
                <meta name="og:title" property="og:title" content="Grow Your Online Store | Ecommerce Development | Ashapura Softech"></meta>
                <meta name="twitter:card" content="Launch your dream online store with Ashapura Softech, a top eCommerce development company in India, USA, UK. Contact us for expert solutions."></meta>
                <link rel='canonical' href={`${baseUrl}/service/ecommerce-development`}></link>
            </Head>
            <EcommerceSoftwareDevelopmentV1 />
        </>
    )
}