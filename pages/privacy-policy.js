import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
// import SubscribeForm from '../components/Common/SubscribeForm';
import MainBanner from '../components/AllBanner/PolicyBanner';
import Link from '../utils/ActiveLink';
import { Helmet } from 'react-helmet';
import baseUrl from '../utils/baseUrl';

const TermsOfService = () => {
    return (
        <>
            <Helmet>
                <title>Salesforce Services & Custom Software Development Company in USA| Ashapura Softech </title>
                <meta name="description" content="Salesforce Services & Custom Software Development Company in USA| Ashapura Softech" />
                <link rel='canonical' href={`${baseUrl}/privacy-policy`}></link>
            </Helmet>
			<Navbar />

			{/* <PageBanner 
                pageTitle="Terms Of Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms Of Service" 
                BGImage="item-bg2" 
            /> */}

            <MainBanner />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        <h3>Who we are</h3>
                        <p>Our website address is: <Link href="/"><a>http://ashapurasoftech.com</a></Link></p>
                        
                        <p>What personal data we collect and why we collect it Comments, When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        
                        <p>An anonymized string created from your email address may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <Link href="/privacy-policy"><a>https://ashapurasoftech.com/privacy/</a></Link>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

                        <h3>Media</h3>
                        <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

                        <h2>Contact forms</h2>
                        <h3>Cookies</h3>

                        <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                        <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                        <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                        <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>

                        <h3>Embedded content from other websites</h3>
                        <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

                        <h3>Analytics</h3>
                        <p>Who we share your data with<br/>How long we retain your data<br/>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                        <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                        
                        <h3>What rights you have over your data</h3>
                        <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        <p>Where we send your data Visitor comments may be checked through an automated spam detection service.</p>

                        <h3>Your contact information</h3>
                        <p>If you have any queries regarding your data and information. You can contact us on our website by filling the contact us form. You can also click on Contact Us link to go to the form.  You can also write us directly at <a href="mailto:info@ashapurasoftech.com" target="_blank">info@ashapurasoftech.com</a></p>
                        
                        <h3>Additional information</h3>
                        <p>Our overall approach towards imparting cloud-based software’s to various businesses is to make them surge their business. We are always eager to empower all brands all over the nation so that they can get a competitive edge over others.</p>
                    </div>
                </div>
            </div>
			 
			{/* <SubscribeForm /> */}

			<Footer />
		</>
    )
}

export default TermsOfService;