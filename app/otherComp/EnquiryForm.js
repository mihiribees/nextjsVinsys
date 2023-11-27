import React from 'react';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';
import ApiPath from './ApiPath';
import $ from 'jquery'
import { useGetApi } from '../../utils/Customhooks/ApiCalls';

$(document).ready(function () {
    $('body').bind('paste', function (event) {
        event.preventDefault();
    });
});

const SITE_KEY = process.env.REACT_APP_API_GOOGLE_RECAPTCHA_KEY;

const EnquiryForm = ({ children, style, FormStyle }) => {

    const {
        data: getdata,
        isLoading: apiloading,
        error,
        doFetch,
    } = useGetApi("");


    const TokensCodes = Cookies.get('access_token');
    const [enqdata, setEnqData] = useState(null);
    const [enqStatedata, setStatedata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filterVal, SetfilterVal] = useState({
        name: '',
        phone_number: '',
        email: '',
        services: '',
        country: 0,
        state: '',
        message: '',
        page_url: window.location.href
    })
    const [errormessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (event) => {
        SetfilterVal({ ...filterVal, [event.target.name]: event.target.value });
        if (event.target.value.trim() === '') {
            event.target.value = ""
        }
    };
    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            
        });

        const fetchData = async () => {
            try {
                const enqpagedata = await fetch(`${ApiPath()}/get_all_counrty`, {
                    headers: {
                        'Authorization': `Bearer ${TokensCodes}`
                    }

                });
                const currentenqpagedata = await enqpagedata.json();
                setEnqData(currentenqpagedata);

                const enqstatedatas = await fetch(`${ApiPath()}/get_state_by_country/${filterVal.country}`, {
                    headers: {
                        'Authorization': `Bearer ${TokensCodes}`
                    }

                });
                const currentenqstatedatas = await enqstatedatas.json();
                setStatedata(currentenqstatedatas);

                setLoading(false);



            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [filterVal, TokensCodes]);

    if (loading) {
        return (
            console.log("Loading...")

        );
    }

    if (!enqdata, !enqStatedata) {
        return <div className='text-center'>No data available.</div>;
    }

    const handleOnClick = e => {
        e.preventDefault();
        setIsLoading(true);
        window.grecaptcha.ready(() => {
            try {
                window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                    if (token) {

                        handleSubmit(token);
                    }
                });

            } catch (error) {
                setIsLoading(false);
                setErrorMessage("Security Check Failed");
                doFetch("/googl-recaptcha-error")
            }

        });
    }

    const handleSubmit = (token) => {
        axios.post(`${ApiPath()}/post-enquiry/`, filterVal, {
            headers: {
                'Authorization': `Bearer ${TokensCodes}`
            }

        })
            .then((response) => {
                // 
                // Perform additional actions on successful submission           
                window.location.href = '/thank-you'
                setIsLoading(false);

            })
            .catch((error) => {
                // console.error('Form submission failed!', error);
                // Handle the error state or display an error message            
                setIsLoading(false);
            });
    }

    return (
        <div className={style}>
            {children}
            <form onSubmit={handleOnClick}>
                <ul className={FormStyle}>
                    <li>
                        {/* <label>Name<sup>*</sup></label> */}
                        <input onChange={handleChange} type="text" placeholder="Your Name" pattern="[A-Za-z0-9\s]+" id="name" name="name" required />
                    </li>
                    <li>
                        {/* <label>Phone Number<sup>*</sup></label> */}
                        <input onChange={handleChange} type="number" placeholder="Your Number" id="Number" name="phone_number" required />
                        {/* <input onChange={handleChange} type="text" pattern="[0-9]{1}[0-9]{9}" placeholder="Your Number" id="Number" name="phone_number" required/> */}
                    </li>
                    <li>
                        {/* <label>Email<sup>*</sup></label> */}
                        <input onChange={handleChange} type="email" placeholder="Your Email" id="uemail" name="email" required />
                    </li>
                    <li>
                        {/* <label>Services<sup>*</sup></label> */}
                        <select onChange={handleChange} name="services" required>
                            <option value="">Select Services</option>
                            <option value="IT Services">IT Services</option>
                            <option value="Digital Learning">Digital Learning</option>
                            <option value="Training">Training</option>
                            <option value="Foreign Language Services">Foreign Language Services</option>
                            <option value="Resourcing & Recruitment">Resourcing & Recruitment</option>
                        </select>
                    </li>
                    <li>
                        {/* <label>Country<sup>*</sup></label> */}
                        <select onChange={handleChange} name="country" required>
                            <option value="">Select Country</option>
                            {enqdata.map((val) => {
                                return (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                )
                            })}
                        </select>
                    </li>
                    <li>
                        {/* <label>State<sup>*</sup></label> */}
                        <select onChange={handleChange} name="state" id="state" required>
                            <option value="">Select State</option>
                            {enqStatedata.map((val) => {

                                return (
                                    <option value={val.name} key={val.id}>{val.name}</option>
                                )

                            })}
                        </select>
                    </li>
                    <li>
                        <textarea onChange={handleChange} name="message" id="message" rows="5" placeholder="Your Message" required></textarea>
                        <input type="checkbox" name="fax" style={{ display: 'none' }} />
                    </li>
                    <li>
                        <div className="w-100">
                            <button type="submit" className="common-btn" disabled={isLoading}>Submit</button>
                        </div>
                        <p className="errorMsg">{errormessage}</p>

                    </li>
                </ul>
            </form>
        </div>

    )
}
export default EnquiryForm;