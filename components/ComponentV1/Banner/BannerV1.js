import React from "react";
import Css from "BannerV1.module.css";
import Link from "next/link";
import TypewriterEffect from "../TypeWriteEffect/TypeWriteEffect";

const banner1 = require("./Asset/main-bnr.svg").default;
export default function BannerV1() {
  return (
    <section className="main-section my-md-5">
      <div className="container p-4">
        <div className="bnr-main-div">
          <div className="row align-items-center">
            <div className="col-12 col-md-8 m-auto order-2 order-md-1">
              <div className="bnr-content-div">
                <h1 className={`fw-bold ${Css["h1-title-text"]}`}>
                  Your Trusted Partner for Business Success
                </h1>
                <span>
                  <TypewriterEffect
                    lines={[
                      "Salesforce Development",
                      "Microsoft Development",
                      "Custom Application Development",
                      "CRM & ERP Development",
                    ]}
                  />
                </span>
                <div className={`${Css["sub-content-main-div"]} my-3 mb-4 p-3`}>
                  <div className={Css["sub-content-div"]}>
                    <p className="mb-0">
                      Boost your digital presence with one-stop solution for
                      software consultations and developments. We help
                      businesses to grow and streamline their processes with
                      innovative software solutions.
                    </p>
                  </div>
                </div>
                <div className="btn-div mt-5">
                  <Link href="/contact-us">
                    <a className={`${Css["bnr-btn"]} ${Css["quote"]} text-center me-3 mb-3`}>
                      Get A Quote
                    </a>
                  </Link>
                  <Link href="https://calendly.com/ashapurasoftech/30min" target="_blank">
                    <a className={`${Css["bnr-btn"]} ${Css["schedule"]} text-center`} target="_blank">
                      Schedule A Call
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2">
              <div className={Css["eclipse"]}></div>
              <div className={`${Css["bnr-img-div"]} text-md-end text-center justify-content-center justify-content-md-end d-grid d-md-block`}>
                <img
                  className={`${Css["bnr-img"]} main`}
                  src={banner1.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
