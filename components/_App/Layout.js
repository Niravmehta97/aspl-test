import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Salesforce Services & Custom Software Development Company in USA| Ashapura Softech </title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Our aim is to create an awesome web space for your business. With over decade experience in Salesforce development, Ashapura offers enterprise web and mobility solutions for the clients across the globe. " />
                <meta name="og:title" property="og:title" content="Salesforce Services & Custom Software Development Company in USA| Ashapura Softech"></meta>
                <meta name="twitter:card" content="Our aim is to create an awesome web space for your business. With over decade experience in Salesforce development, Ashapura offers enterprise web and mobility solutions for the clients across the globe. "></meta>
                <meta name="google-site-verification" content="FOEuOM6h7z7x6xLU_DCKpVLxEogSHZmCOk2e_7TAuSE" />
                {/* <link rel="canonical" href="https://ashapurasoftech.com/"></link> */}
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;