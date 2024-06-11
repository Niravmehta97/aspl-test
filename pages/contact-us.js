import React from 'react'
import ContactV2 from '../components/ComponentV1/ContactV2/ContactV2'
import FooterV1 from '../components/ComponentV1/Footer/FooterV1'
import Headerv1 from '../components/ComponentV1/Header/HeaderV1'
import { Helmet } from 'react-helmet'
import baseUrl from '../utils/baseUrl';
import Head from "next/head"

export default function Contact() {
  return (
    <>
    <Head>
      <title>Contact Us - Ashapura Softech</title>
      <meta name="description" content="Get a quote for Salesforce and Microsoft development services, including CRM, ERP, web development, eCommerce development, mobile app development, and software consulting." />
      <meta name="og:title" property="og:title" content="Contact Us - Ashapura Softech"></meta>
      <meta name="twitter:card" content="Get a quote for Salesforce and Microsoft development services, including CRM, ERP, web development, eCommerce development, mobile app development, and software consulting."></meta>
      <link rel='canonical' href={`${baseUrl}/contact-us`}></link>
    </Head>
    <Headerv1 />
    <ContactV2 />
    <FooterV1 />
    </>
  )
}
