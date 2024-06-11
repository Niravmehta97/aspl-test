import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';
// import { GoogleReCaptcha } from "react-google-recaptcha-v3";

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
    country: "",
    company: "",
    text: ""
};

const ContactFormTwo = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();
    // const [t, setT] = useState("");
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            // e.preventDefault();
            window.grecaptcha.ready(function() {
                window.grecaptcha.execute('6LflpvcdAAAAAD-4EOIkuYXbIp4-p5EA_dhSDhtM', {action: 'submit'}).then(function(token) {
                // Send form value as well as token to the server
                console.log(token);
                const p1 = axios.get("https://www.google.com/recaptcha/api/siteverify?secret=6LflpvcdAAAAAOa8qY0wzsb3AMulXKPb6DOS3hzJ&response="+token);
                console.log(p1);
                // const par = {
                //     "secret":"6LflpvcdAAAAAOa8qY0wzsb3AMulXKPb6DOS3hzJ",
                //     "response":"03AGdBq25xELyv9FQXyKVOvEa9XQbbs2O1lZtzWu7vyFnlIK5fhDWPObsrpyc1Ax7xrAv8W7U76gpnr8GlbYnxt8za6kTEfGzA5nhm6huQ_NEiiXq_2h0UN349lpvtww7s6OZ_XHxs2LYKSXZ-OtSsIZh5Y_UK_6vDmAOA3dLBtgFhY3eciMNNUavaMcpXMXL4khNmpkS8j0Q0wy_241Bb9XNJWjWCc9DdpsrOHBQzUf5FTNmHvfJfz1s9AGracAUzlX1hChhQx_j7K38UBhSn5J_AxDpun0Y-xLDn5whLnFQdbAgEb-b4eQL-WYyQPdWDkrPGgYiK8qwybocpSNI2II_y2-WeAQ0UlkTuF5mQXdbmfZUocvVhj19Dq5j6YP7UDu3u8e8OOuYBXeKO_4HlSkVRoHs1_EA1V68X80fYRnKu6YxH2KeRp3c1Zt7FALUvUy4NywLBqjsJl2wdGG_kCi5J5wD9OkmHYKGgg8m2ajMPsWH7rsawQGFiE_A8sIl7OUDSHhKugssxsR-UOcjtY134lmPp4TmZ1Q"
                // }
                // axios.post('https://www.google.com/recaptcha/api/siteverify', par);
                // const url = `${baseUrl}/api/contact`;
                // const { name, email, number, country, company, text } = contact;
                // const payload = { name, email, number, country, company, text, token };
                // await axios.post(url, payload);
                // console.log(url);
                // setContact(INITIAL_STATE);
                // alertContent();
                });
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            className="form-control" 
                            value={contact.name}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.name && 'Name is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Your email address" 
                            className="form-control" 
                            value={contact.email}
                            onChange={handleChange}
                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.email && 'Email is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="number" 
                            placeholder="Your phone number" 
                            className="form-control" 
                            value={contact.number}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.number && 'Number is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="country" 
                            placeholder="Your Country" 
                            className="form-control" 
                            value={contact.country}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.country && 'Country is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="company" 
                            placeholder="Your Company" 
                            className="form-control" 
                            value={contact.company}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.company && 'Company name is required.'}
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <textarea 
                            name="text" 
                            cols="30" 
                            rows="5" 
                            placeholder="Write your message..." 
                            className="form-control" 
                            value={contact.text}
                            onChange={handleChange}
                            ref={register({ required: true })}
                        />
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.text && 'Text body is required.'}
                        </div>
                    </div>
                </div>
                {/* <GoogleReCaptcha onVerify={token => setT(token)} /> */}
                <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="default-btn">Send Message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactFormTwo;