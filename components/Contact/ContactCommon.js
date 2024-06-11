import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl, { crmUrl } from '../../utils/baseUrl';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from 'react-bootstrap';
import { getCountryName, getIPAddress } from './userIP';

// import { GoogleReCaptcha } from "react-google-recaptcha-v3";
let gtoken = "";
const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully sent and we will get back to you soon!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    company: "",
    text: ""
};
function onChange(value) {
    console.log("Captcha value:", value);
    gtoken = value;
}
const ContactFormTwo = ({ setShowModal }) => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm({
        reValidateMode: 'onBlur',
    });
    const [showThankModal, setShowThankModal] = useState(false);
    // const [t, setT] = useState("");
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }
    function closeModal() {
        setShowThankModal(false);
        // setTimeout(() => setShowModal(true), 30000);
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            if(gtoken === "")
            {
                toast("Please verify google captcha");
                
                return false;
            }
            // e.preventDefault();
            // axios.post('https://www.google.com/recaptcha/api/siteverify', par);
            // const url = "https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts";
            let countryName = '';

            const getIP = await getIPAddress()
            if(getIP){
                countryName = await getCountryName(getIP);
            }

            const { firstname, lastname, email, number, company, text } = contact;
            const payload = {
                "emailAddress": email,
                "salutationName": "Mr.",
                "firstName": firstname,
                "lastName": lastname,
                "middleName": "",
                "phoneNumber": number,
                "addressCountry": countryName,
                "description": text
            };
            await axios.post(`${crmUrl}/api/v1/LeadCapture/9a2349aa768cae26379c39ff0858a53f`, payload)
                .then((response) => {
                    // alert("Created SuccessFully");
                    gtoken = '';
                    // toast("Created SuccessFully");
                    setShowThankModal(true);
                    setContact(INITIAL_STATE);
                    // setShowModal(false)
                })
                .catch((error) => {
                    // alert("Email already exist");
                    // gtoken = '';
                    toast("Email already exist");
                })
            // console.log(url);
            // setContact(INITIAL_STATE);
            // alertContent();

        } catch (error) {
            // console.log(error)
            // gtoken = '';
            toast("Something went wrong, please try after sometime.");
        }
    };

    return (
        <>
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                // placeholder="First Name" 
                                className="form-control"
                                value={contact.firstname}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            // required
                            // {...register("contact", {
                            //     required: true})}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.firstname && 'First Name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                // placeholder="First Name" 
                                className="form-control"
                                value={contact.lastname}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.lastname && 'Last Name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="email"
                                // placeholder="Your email address" 
                                className="form-control"
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.email && 'Email is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group phn_no_filed">
                            <label>Contact Number</label>
                            <input
                                type="text"
                                name="number"
                                // placeholder="+91 " 
                                className="form-control"
                                value={contact.number}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/ })}
                            // type="number" pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.number && 'Number is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Company Name</label>
                            <input
                                type="text"
                                name="company"
                                // placeholder="Your Company" 
                                className="form-control"
                                value={contact.company}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.company && 'Company name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="text"
                                cols="30"
                                rows="4"
                                // placeholder="Write your message..." 
                                className="form-control"
                                value={contact.text}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.text && 'Text body is required.'}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <ReCAPTCHA
                            sitekey="6LdvMikeAAAAAOrPn0Qql0qaWigvy2cB65bIoGHx"
                            onChange={onChange}
                        />
                    </div>
                    {/* <GoogleReCaptcha onVerify={token => setT(token)} /> */}
                    <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn">Get in touch</button>
                    </div>
                </div>
                <ToastContainer />
            </form>
            <Modal centered
                className='cust-cont-pop'
                show={showThankModal}
                size='md'
                onHide={closeModal}
            >
                <Modal.Header closeButton className='modal-cust-header thank-header'>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-box'>
                        <div className='row'>
                            <div className='thanku-cont'>
                                <div className="icon"><i className="flaticon-check"></i></div>
                                <h2>Thank you for contacting us</h2>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default ContactFormTwo;