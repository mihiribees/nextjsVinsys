"use client"
import { useGetApi } from '@/lib/apicallHooks';
import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"





const SITE_KEY = process.env.REACT_APP_API_GOOGLE_RECAPTCHA_KEY;;

const GetQuoteForm = ({ children, style, FormStyle, formType }) => {

    const {
        register,
        handleSubmit: reactFormSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const {
        data: getdata,
        error,
        doFetch,
    } = useGetApi("");

    const [errormessage, setErrorMessage] = useState(null);

    const TokensCodes = Cookies.get('access_token');
    const [getquoteData, setGetquoteData] = useState(null);
    const [getquoteStatedata, setGetquoteStatedata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [headerdata, setHeaderdata] = useState([]);
    const [flsServicelist, setflsServicelist] = useState([])

    const [filterVal, SetfilterVal] = useState({
        name: '',
        email: '',
        phone_number: '',
        company: '',
        country: 0,
        services: '',
        message: '',
        page_url: window.location.href,
        form_type: 'Get Quote'
    });


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

        // Input Validation
        $(document).on('keypress', '.alpha-input', function (e) {
            const key = String.fromCharCode(e.which);
            const alphabetRegex = /^[A-Za-z]$/;

            if (!alphabetRegex.test(key)) {
                e.preventDefault();
            }
        });

        $(document).on('keypress', '.phone-input', function (e) {
            const key = String.fromCharCode(e.which);
            const phoneRegex = /^[0-9-+() ]$/;

            if (!phoneRegex.test(key)) {
                e.preventDefault();
            }
        });

        const fetchData = async () => {
            try {
                const getquoteData = await fetch(`${ApiPath()}/get_all_counrty`, {
                    headers: {
                        'Authorization': `Bearer ${TokensCodes}`
                    }

                });
                const currentgetquoteData = await getquoteData.json();
                setGetquoteData(currentgetquoteData);

                const getquoteDatas = await fetch(`${ApiPath()}/get_state_by_country/${filterVal.country}`, {
                    headers: {
                        'Authorization': `Bearer ${TokensCodes}`
                    }
                });
                const currentgetquoteDatas = await getquoteDatas.json();
                setGetquoteStatedata(currentgetquoteDatas);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
        fetchHeaderdata();
        getflsservicedata();

    }, [filterVal, TokensCodes]);




    const getflsservicedata = async () => {
        try {

            const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/get-fls-solution`);
            setflsServicelist(data.our_services_list);

        } catch (error) {
            

        }

    }


    const fetchHeaderdata = async () => {
        try {

            const flsheaderdata = await fetch(`${ApiPath()}/fls_header_menu`, {
                headers: {
                    'Authorization': `Bearer ${TokensCodes}`
                }

            });

            const headerdata = await flsheaderdata.json();

            setHeaderdata(headerdata);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }




    if (loading) {
        return (
            
            <h1>Loading...</h1>
        );
    }

    if (!getquoteData, !getquoteStatedata) {
        return <div className='text-center'>No data available.</div>;
    }

    const handleOnClick = (data) => {


        setIsLoading(true);

        window.grecaptcha.ready(() => {
            try {
                window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                    if (token) {

                        handleSubmit(token, data);
                    }
                });

            } catch (error) {

                setIsLoading(false);
                setErrorMessage("Security Check Failed");
                doFetch("/googl-recaptcha-error")
            }

        });

    }

    const handleSubmit = (token, data) => {

        if (token) {
            axios.post(`${ApiPath()}/post-fls-form-data/`, {
                ...data,
                page_url: window.location.href,
                form_type: formType ? formType : 'Get Quote'
            }, {
                headers: {
                    'Authorization': `Bearer ${TokensCodes}`
                }

            })
                .then((response) => {
                    // 
                    // Perform additional actions on successful submission           
                    window.location.href = '/foreign-language-services/thank-you'
                    setIsLoading(false);

                })
                .catch((error) => {
                    // console.error('Form submission failed!', error);
                    // Handle the error state or display an error message            
                    setIsLoading(false);
                });

        }



    }

    return (
        <div className={style}>
            {children}

            <form onSubmit={reactFormSubmit(handleOnClick)}>
                <ul className={FormStyle}>

                    <li>
                        <input type="text" placeholder="Your Name" pattern="[A-Za-z0-9\s]+" id="name" name="name" {...register("name", {
                            required: true, pattern: /^[A-Za-z ]+$/i
                        })} />
                        {errors.name && errors.name.type === "required" && (
                            <p className="errorMsg">Name is required.</p>
                        )}
                        {errors.name && errors.name.type === "pattern" && (<p className="errorMsg">Alphabetical character only</p>)}
                    </li>

                    <li>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="errorMsg">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="errorMsg">Email is not valid.</p>
                        )}

                    </li>

                    <li>
                        <input onChange={handleChange} className='phone-input' type="number" placeholder="Phone Number" id="phone_number" name="phone_number" {...register("phone_number", {
                            required: true, maxLength: 15,
                        })} />

                        {errors.phone_number && errors.phone_number.type === "required" && (
                            <p className="errorMsg">Phone is required.</p>
                        )}
                        {errors.phone_number && errors.phone_number.type === "maxLength" && (<p className="errorMsg">Phone Number can not exceed with more than 15 digit</p>)}
                    </li>

                    <li class="w-100">
                        <input type="text" placeholder="Company Name" id="company" name="company" {...register("company", {
                            required: true
                        })} />

                        {errors.company && errors.company.type === "required" && (
                            <p className="errorMsg">Company Name is required.</p>
                        )}
                    </li>


                    <li>
                        <select onChange={handleChange} name="country"  {...register("country", { required: true })}>
                            <option value="">Select Country</option>
                            {getquoteData.map((val) => {
                                return (
                                    <option value={val.id} key={val.id}>{val.name}</option>
                                )
                            })}
                        </select>

                        {errors.country && errors.country.type === "required" && (
                            <p className="errorMsg">Country is required.</p>
                        )}

                    </li>


                    <li class="w-100">
                        <select onChange={handleChange} name="services" id="services" {...register("services", { required: true })}>
                            <option value="">Select Service</option>
                            {
                                flsServicelist && flsServicelist.map((p) => (
                                    <>
                                        <option value={p.heading} key={p.heading}>{p.heading}</option>
                                    </>
                                ))

                            }

                        </select>

                        {errors.services && errors.services.type === "required" && (
                            <p className="errorMsg">Service is required.</p>
                        )}
                    </li>

                    <li>
                        <textarea name="message" id="message" rows="5" placeholder="Your Message" {...register("message")}></textarea>
                        <input type="checkbox" name="fax" style={{ display: 'none' }} />

                        {errors.message && errors.message.type === "required" && (
                            <p className="errorMsg">Message is required.</p>
                        )}

                    </li>

                    <li>
                        <div className="w-100">
                            <button type="submit" className="common-btn" disabled={isLoading}>Submit Now <i className="icon">&nbsp;</i></button>
                        </div>
                        <p className="errorMsg">{errormessage}</p>
                    </li>
                </ul>
            </form>
        </div>

    )
}
export default GetQuoteForm;