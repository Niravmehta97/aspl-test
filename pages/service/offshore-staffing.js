import React from 'react'
import OffshoreStaffingV1 from '../../components/PagesV1/ServicePage/offshore-staffingV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Offshore Staffing Services | Best Offshore Company in India</title>
                <meta name="description" content="Looking for reliable offshore staffing solutions? Ashapura Softech offers tailored teams to meet your budget & project needs. Contact us today!" />
                <meta name="og:title" property="og:title" content="Offshore Staffing Services | Best Offshore Company in India"></meta>
                <meta name="twitter:card" content="Looking for reliable offshore staffing solutions? Ashapura Softech offers tailored teams to meet your budget & project needs. Contact us today!"></meta>
                <link rel='canonical' href={`${baseUrl}/service/offshore-staffing`}></link>
            </Head>
            <OffshoreStaffingV1 />
        </>
    )
}