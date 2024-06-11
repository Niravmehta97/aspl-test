import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import TeamMemberStyleTwo from '../components/Home/TeamMemberStyleTwo';
import WhyChooseUs from '../components/about/whychooseus';
import SubscribeForm from '../components/Home/SubscribeForm';
import Partners from '../components/Home/Partners';
import MainBanner from '../components/AllBanner/AboutBanner';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';
import { AboutV1 } from '../components/PagesV1/AboutV1';
import Head from "next/head"
const FeaturesOne = () => {
    return (
        <>
            <Head>
                <title>About Us - Ashapura Softech</title>
                <meta name="description" content="Empower your business with Ashapura Softech's Salesforce & Microsoft development expertise. Empower your business with Ashapura Softech's Salesforce & Microsoft development expertise." />
                <meta name="og:title" property="og:title" content="About Us - Ashapura Softech"></meta>
                <meta name="twitter:card" content="Empower your business with Ashapura Softech's Salesforce & Microsoft development expertise. Empower your business with Ashapura Softech's Salesforce & Microsoft development expertise."></meta>
                {/* <link rel='canonical' href={baseUrl + "/about-us"}></link> */}
                <link rel='canonical' href={`${baseUrl}/about-us`}></link>
            </Head>
			<AboutV1 />
		</>
    )
}

export default FeaturesOne;