import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100">
            <div className="container">
                <div className="row justify-content-center cust-continfo">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>USA</h3>
                            {/* <p><a href="https://www.google.com/maps/@24.9045273,91.8523559,15z" target="_blank">2750 Quadra Street Victoria Road, New York, Canada</a></p> */}
                            {/* <p><strong>India:</strong> 1011-12, Satyamev eminance, Near Shukan Mall, Science City road,<br/> Ahmedabad -380060</p> */}
                            <p><a href='https://goo.gl/maps/3opMe7e8v3KMGwUNA' target="_blank">1095, Sugar View Dr, Sheridan ,<br/> WY , 82801</a></p>
                            {/* <p><strong>Germany:</strong> Muskauer Str. 50, 10997Berlin,Germany </p> */}
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Germany</h3>
                            <p><a href='https://goo.gl/maps/VmoJjPRvB1n14E299' target="_blank">Muskauer Str. 50,<br/>10997Berlin,Germany </a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>India</h3>
                            <p><a href='https://goo.gl/maps/uu2PRoozGKLtE3SQ7' target="_blank">1011-12, Satyamev eminance, Near Shukan Mall, Science City road,<br/> Ahmedabad -380060</a></p>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default ContactInfo;