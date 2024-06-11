import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import Css from './ContactFormV1.module.css'
import { crmUrl } from '../../../utils/baseUrl';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from 'react-bootstrap';
import { getCountryName, getIPAddress } from '../../Contact/userIP';
import CountryCodes from '../ServiceContactForm/Asset/CountryCode.json'

let countryName = '';
const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
    countryCode: 'US'
};

let gtoken = "";
function onChange(value) {
    gtoken = value;
}

export default function ContactFormV1({ customMessage }) {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm({
        reValidateMode: 'onBlur',
    });
    const [showThankModal, setShowThankModal] = useState(false);


    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handlePhoneNumber = (e) => {
        const { value } = e.target;
        if (value.length <= 15) {
            handleChange(e);
        }
    }

    function closeModal() {
        setShowThankModal(false);
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            // if (gtoken === "") {
            //     toast("Please verify google captcha");

            //     return false;
            // }
            // e.preventDefault();
            // axios.post('https://www.google.com/recaptcha/api/siteverify', par);
            // const url = "https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts";
            const { name, email, number, countryCode, text } = contact;
            const countryDialCode = CountryCodes.find(({ code }) => code == countryCode)
            const payload = {
                "emailAddress": email,
                "salutationName": "Mr.",
                "firstName": name,
                "lastName": '',
                "middleName": "",
                "phoneNumber": `${countryDialCode && countryDialCode.dial_code} ${number}`,
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
                    toast(error.message);
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

    React.useEffect(async () => {
        const getIP = await getIPAddress()
        if (getIP) {
            countryName = await getCountryName(getIP);
            setContact({ ...contact, countryCode: countryName })
        }
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={`fw-bold ${Css['contact-title']} mb-3 mb-xl-4`}>
                    {
                        customMessage ? <span className='text-dark'>{customMessage}</span> : <>Want to chat about your <span>dream project?</span></>
                    }
                </h3>
                <div>
                    <input
                        className={`"form-control form-control-lg ${Css['form-control']} mb-xl-4 mb-2"`}
                        type="text"
                        placeholder="Full Name"
                        aria-label="full-name"
                        value={contact.name}
                        name="name"
                        onChange={handleChange}
                        required
                        ref={register({ required: true })}
                    />
                    <div className='invalid-feedback' style={{ display: 'block' }}>
                        {errors.name && 'Name is required.'}
                    </div>
                </div>
                <div>
                    <input
                        className={`"form-control form-control-lg ${Css['form-control']} mb-xl-4 mb-2"`}
                        type="text"
                        placeholder="Email"
                        aria-label="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <div className='invalid-feedback' style={{ display: 'block' }}>
                        {errors.email && 'Email is required.'}
                    </div>
                </div>
                <div>
                    <div className={Css['contacy-number-componenet']}>
                        <select className={`"form-control form-control-lg ${Css['form-control']} mb-3"`} name="countryCode" id="" onChange={handleChange} value={contact.countryCode}>
                            {
                                CountryCodes.map(({ code, dial_code }) => {
                                    return <option key={code+dial_code} value={code}>{dial_code}</option>
                                })
                            }
                        </select>
                        <div className='w-100'>
                            <input
                                className={`"form-control form-control-lg ${Css['form-control']} mb-xl-4 mb-2"`}
                                type="text"
                                placeholder="Contact Number"
                                aria-label="phone-number"
                                value={contact.number}
                                name="number"
                                required
                                onChange={handlePhoneNumber}
                                ref={register({ required: true, pattern: /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/ })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.number && 'Number is required.'}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input
                        className={`"form-control form-control-lg ${Css['form-control']} mb-xl-4 mb-2"`}
                        type="text"
                        placeholder="Project Details"
                        aria-label="project"
                        name="text"
                        value={contact.text}
                        onChange={handleChange}
                        required
                        ref={register({ required: true })}
                    />
                    <div className='invalid-feedback' style={{ display: 'block' }}>
                        {errors.text && 'Text body is required.'}
                    </div>
                </div>
                <div className='d-grid d-md-flex d-lg-grid d-xl-flex justify-content-xl-between justify-content-md-between align-items-center'>
                    <ReCAPTCHA
                        sitekey="6LdvMikeAAAAAOrPn0Qql0qaWigvy2cB65bIoGHx"
                        onChange={onChange}
                    />
                    <button className={`${Css["inquire-btn"]} mt-3 mt-sm-0 ms-xl-3 mb-3`}>
                        Inquire Now
                    </button>
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
            </Modal>
        </>
    )
}
