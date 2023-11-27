import React from 'react';
import {useRef, useState, useEffect} from "react";
import Cookies from 'js-cookie';
import axios from 'axios';
import ApiPath from './ApiPath';
import $ from 'jquery'
import { useGetApi } from '../../utils/Customhooks/ApiCalls';

$(document).ready(function() {
    $('body').bind('paste', function(event) {
        event.preventDefault();  
    });
});

const SITE_KEY = process.env.REACT_APP_API_GOOGLE_RECAPTCHA_KEY;

const DigiContactUsForm = () => {

    const {
        data: getdata,
        isLoading:apiloading,
        error,
        doFetch,
      } = useGetApi("");


    const TokensCodes = Cookies.get('access_token'); 
    const [enqdata, setEnqData] = useState(null);   
    const [enqStatedata, setStatedata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filterVal, SetfilterVal] = useState({           
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: 0,
        state: '',
        company: '',
        message: '',
        page_url: window.location.href,
        form_type: 'Contact Us'             
    })
    const [errormessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (event) => { 
        SetfilterVal({...filterVal, [event.target.name]: event.target.value});
        if(event.target.value.trim()===''){
            event.target.value=""
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
        
        // API
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
    },[filterVal, TokensCodes]);

    if (loading) {
        return(
            <><h1>Loading...</h1></>
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

                    if(token){
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
        axios.post(`${ApiPath()}/post-get-in-touch/`, filterVal, {
            headers: {
                'Authorization': `Bearer ${TokensCodes}`
            }

        })
        .then((response) => {   
            window.location.href = '/digital-learning-services/digilearn-thank-you'           
            setIsLoading(false);
                      
        })
        .catch((error) => {            
            setIsLoading(false);       
        });
    }

    return (
        <>  
            <form onSubmit={handleOnClick}>
                <ul class="common-from d-flex">
                    <li>
                        <label>First Name<sup>*</sup></label>
                        <input onChange={handleChange}  className="alpha-input" pattern="[A-Za-z]*" type="text" placeholder="First Name" id="f-name" name="first_name" required />
                    </li>
                    <li>
                        <label>Last Name<sup>*</sup></label>
                        <input onChange={handleChange}  className="alpha-input" pattern="[A-Za-z]*" type="text" placeholder="Last Name" id="l-name" name="last_name" required />
                    </li>
                    <li>
                        <label>Email<sup>*</sup></label>
                        <input onChange={handleChange} type="email" placeholder="Your Email" id="email" name="email" required />
                    </li>                   
                    <li>
                        <label>Phone Number<sup>*</sup></label>
                        <input onChange={handleChange} className='phone-input' type="number" placeholder="Phone Number" id="phone_number" name="phone_number" required />
                    </li>
                    <li>
                        <label>Country<sup>*</sup></label>
                        <select onChange={handleChange}  name="country" required>
                            <option value="">Select Country</option>  
                            {enqdata.map((val)=>{
                                return(
                                    <option value={val.id} key={val.id}>{val.name}</option>   
                                )
                            })}                                                                                   
                        </select>
                    </li>
                    <li>
                        <label>State<sup>*</sup></label>
                        <select onChange={handleChange} name="state"  id="state" required>
                            <option value="">Select State</option>  
                            {enqStatedata.map((val)=>{
                            
                                return(
                                    <option value={val.name} key={val.id}>{val.name}</option>   
                                )
                                
                            })}                                              
                        </select>
                    </li>
                    <li class="w-100">
                        <label>Company<sup>*</sup></label>
                        <input onChange={handleChange}  className="alpha-input"  type="text" placeholder="Company Name" id="company" name="company" required />
                    </li>
                    <li class="w-100">                        
                        <textarea onChange={handleChange} name="message" id="message" rows="5" placeholder="Comments" required=""></textarea>
                    </li>
                    <li class="w-100 d-flex justify-content-end btn-wrapper">                        
                        <div class="links">
                            <button type="submit" class="common-btn" disabled={isLoading}>Submit</button>
                        </div>
                       
                        
                    </li>
                </ul>
                <p className="errorMsg">{errormessage}</p>
            </form>
        </>
    )
}

export default DigiContactUsForm