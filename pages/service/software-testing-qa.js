import React from 'react'
import SoftwareTestingV1 from '../../components/PagesV1/ServicePage/software-testing-qaV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../../utils/baseUrl'
import Head from "next/head"

export default function ServicesDetails() {
    return (
        <>
            <Head>
                <title>Software Testing and Quality Assurance (QA) Services</title>
                <meta name="description" content="Ensure software quality with Ashapura Softech's QA & testing services. We deliver reliable, secure, and high-performing applications." />
                <meta name="og:title" property="og:title" content="Software Testing and Quality Assurance (QA) Services"></meta>
                <meta name="twitter:card" content="Ensure software quality with Ashapura Softech's QA & testing services. We deliver reliable, secure, and high-performing applications."></meta>
                <link rel='canonical' href={`${baseUrl}/service/software-testing-qa`}></link>
            </Head>
            <SoftwareTestingV1 />
        </>
    )
}