import React, { useState, useEffect } from "react";
import Link from '../../utils/ActiveLink';
import Image from "next/image";
import asplLogo from "../../public/images/aspl-logo.webp";
// import { useHistory } from "react-router-dom";

let temp_url = "";
const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
        // let historywindow.location.href = useHistory();
        setPageURL(window.location.pathname);

        // console.log("URL =>",  window.location.pathname);
    })
    temp_url = JSON.stringify(pageURL);
    const splitLocation = temp_url.split("/");
    // console.log("LOCATION =>",splitLocation);
    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    //assigning location variable
    // const location = useLocation();

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                <div className="nav-bar-logo"><Image src={asplLogo} alt="logo" height={45} width={183.25} /></div>
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>


                                    <li className={splitLocation[1] === "service" ? "nav-item active" : "nav-item"} >
                                        <Link href="/service" activeClassName="active" >
                                            <a className="nav-link">
                                                Services
                                                <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu service-drop">
                                            <li>
                                                <div className="ser-img-box">
                                                    <img src="/images/ser-drop.png" alt="logo" />
                                                    <div className="drop-img-cont">
                                                        <h4>Consult With Us</h4>
                                                        <p>To discuss your idea and consult with our technology experts.</p>
                                                        <Link href="/contact-us">
                                                            <a className="default-btn">
                                                                Let's talk
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><h4>Custom Services</h4></li>
                                                    <li className="nav-item">
                                                        <Link href="/service/crm-software-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Customer Relationship Management (CRM)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service/enterprise-software-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Enterprise Resource Planning (ERP)</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service/web-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Web Development</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service/ecommerce-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">E-Commerce Web Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/mobile-app-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Mobile App Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/software-testing-qa" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Software Testing And QA</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/offshore-staffing" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Offshore Staffing</a>
                                                        </Link>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <Link href="/service/onsite-staffing" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Onsite Staffing</a>
                                                        </Link>
                                                    </li> */}
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><h4>Salesforce</h4></li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce-cloud-services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce Cloud Services</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-crm-development-company" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce CRM Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-service-cloud" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce Service Cloud</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-marketing-cloud" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce Marketing Cloud</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-commerce-cloud" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce Commerce Cloud</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-sales-cloud" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce Sales Cloud</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/salesforce/salesforce-devops" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Salesforce DevOps</a>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <ul>
                                                    <li><h4>Microsoft Services</h4></li>
                                                    <li className="nav-item">
                                                        <Link href="/service/microsoft/microsoft-azure-development-services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Microsoft Azure Development Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/service/microsoft/microsoft-sharepoint-development-services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Microsoft Sharepoint Development Services</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                        </ul>
                                    </li>


                                    <li className={splitLocation[1] === "our-portfolio" ? "nav-item active" : "nav-item"}>
                                        <Link href="/our-portfolio" activeClassName="active">
                                            <a className="nav-link">
                                                Our Work
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us" activeClassName="active">
                                            <a className="nav-link">
                                                About Us
                                            </a>
                                        </Link>

                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Company <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">Career</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    <li className={splitLocation[1] === "blog" ? "nav-item active" : "nav-item"}>
                                        <Link href="/blog" activeClassName="active">
                                            <a className="nav-link">
                                                Blog
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact-us" activeClassName="active">
                                            <a className="nav-link">
                                                Contact Us
                                            </a>
                                        </Link>

                                    </li>
                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                {/* <div className="option-item">
                                    <i className="search-btn flaticon-loupe" onClick={handleToggleSearchModal} ></i>
                                </div> */}

                                <div className="option-item">
                                    <Link href="/contact-us">
                                        <a className="default-btn letstalkbtn">
                                            Let's talk <i className="bx bx-right-arrow-alt"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default Navbar;