import React, { useState, useEffect } from "react";
import Css from "./HeaderV1.module.css";
import Link from "../../../utils/ActiveLink";

let temp_url = "";
const LOGO = require("./Asset/Ashapura_Logo.svg").default;
const ServiceBanner = require("./Asset/ser-drop.png").default;
export default function Headerv1() {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };
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
  });
  temp_url = JSON.stringify(pageURL);
  const splitLocation = temp_url.split("/");
  // console.log("LOCATION =>",splitLocation);
  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="main-navbar">
        <nav className={`${Css["navbar"]} navbar navbar-expand-lg`}>
          <div className={`${Css["custom-container"]} container py-3`}>
            <Link href="/">
              <a
                onClick={toggleNavbar}
                activeClassName="active"
                className={`${Css["navbar-brand"]} navbar-brand`}
              >
                <img src={LOGO.src} alt="" />
              </a>
            </Link>
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div
              className={`${classOne} ${Css["margin-none"]}`}
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className={Css["nav-item"]}>
                  <Link href="/">
                    <a className={Css["nav-link"]}>Home</a>
                  </Link>
                </li>
                <li
                  className={`${Css["nav-item"]} nav-item ${
                    splitLocation[1] === "service" ? " active" : ""
                  }`}
                >
                  <Link href="/service" activeClassName="active">
                    <a className={`${Css["nav-link"]} p-0`}>
                      Services
                      <i className="bx bx-chevron-down ms-1"></i>
                    </a>
                  </Link>

                  <ul
                    className={`${Css["service-dropdown-custom"]} dropdown-menu service-drop`}
                  >
                    <li>
                      <div className={`${Css["ser-img-box"]} ser-img-box`}>
                        <img src={ServiceBanner.src} alt="logo" />
                        <div className="drop-img-cont">
                          <h4>Consult With Us</h4>
                          <p>
                            To discuss your idea and consult with our technology
                            experts.
                          </p>
                          <Link href="/contact-us">
                            <a className="default-btn">Let's talk</a>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <h4>Custom Services</h4>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/crm-software-development"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Customer Relationship Management (CRM)
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service/enterprise-software-development"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Enterprise Resource Planning (ERP)
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service/web-development"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Web Development
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service/ecommerce-development"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              E-Commerce Web Development
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/mobile-app-development"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Mobile App Development
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/software-testing-qa"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Software Testing And QA
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/offshore-staffing"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Offshore Staffing
                            </a>
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
                        <li>
                          <h4>Salesforce</h4>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce-cloud-services"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce Cloud Services
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-crm-development-company"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce CRM Services
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-service-cloud"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce Service Cloud
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-marketing-cloud"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce Marketing Cloud
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-commerce-cloud"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce Commerce Cloud
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-sales-cloud"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce Sales Cloud
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/service/salesforce/salesforce-devops"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Salesforce DevOps
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <ul>
                      <li>
                        <h4>Microsoft Services</h4>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/service/microsoft/microsoft-azure-development-services"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Microsoft Azure Development Services
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/service/microsoft/microsoft-sharepoint-development-services"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Microsoft Sharepoint Development Services
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className={Css["nav-item"]}>
                  <Link href="/our-portfolio">
                    <a className={Css["nav-link"]}>Our Work</a>
                  </Link>
                </li>
                <li className={Css["nav-item"]}>
                  <Link href="/about-us" activeClassName="active">
                    <a className={Css["nav-link"]}>About Us</a>
                  </Link>
                </li>
                <li className={Css["nav-item"]}>
                  <Link href="/blog">
                    <a className={Css["nav-link"]}>Blog</a>
                  </Link>
                </li>
              </ul>
              <Link href="/contact-us">
                <a className={` ${Css["contact-btn"]} contact-btn ms-auto`}>
                  Let's Talk
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
