"use client"


import { getRequest } from "@/lib/apicall";
import Link from "next/link";
import "./header.scss"
import { useState } from "react";



const HomeHeader = () => {

    const [mobilemenuToggle, setmobilemenuToggle] = useState(false);
    const [enquiryButtonToggle, setenquiryButton] = useState(false);





    return (
        <>
            <aside className="enq d-flex" onClick={() => setenquiryButton(true)}><button className="common-btn enq">Enquire Now <i className="icon">&nbsp;</i></button></aside>
            <div className={enquiryButtonToggle ? "enquiry-form-sec  active" : "enquiry-form-sec"}>
                <div className="close-btn " onClick={() => setenquiryButton(false)}>X</div>
                <div className="heading">ENQUIRE NOW</div>
                <ul>
                    <li><input type="text" placeholder="Your Name" id="name" name="name" /></li>
                    <li><input type="tel" placeholder="Your Number" id="Number" name="Number" /></li>
                    <li><input type="email" placeholder="Your Email" id="uemail" name="uemail" /></li>
                    <li><select name="exp" id="exp" form="">
                        <option value="">Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Haryana">Haryana</option>
                    </select></li>
                    <li><select name="exp" id="exp" form="">
                        <option value="">Select City</option>
                        <option value="Delhi">Delhi</option>
                    </select></li>
                    <li><textarea name="umessage" id="message" rows="5" placeholder="Your Message"></textarea></li>
                    <li>
                        <div className="w-100"><button type="submit" className="common-btn">Submit</button></div>
                    </li>
                </ul>
            </div>
            <header className="header small">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo"><a href="/"><img src="/images/logo.png" alt="" /></a></div>
                    <div className="toggle-icon" onClick={() => setmobilemenuToggle(true)}><img src="/images/icon-toggle.png" alt="toggle" /></div>
                    <div className={mobilemenuToggle ? "nav-sec active" : "nav-sec"}>
                        <div className="close-icon" onClick={() => setmobilemenuToggle(false)}><img src="/images/icon-close.png" alt="close" /></div>
                        <div className="top">
                            <ul className="d-flex justify-content-end">
                                <li><a href="/">Blog</a></li>
                                <li><a href="/career">Career</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <ul className="d-flex justify-content-end">
                                <li><a href="/">IT Services</a></li>
                                <li><a href="/">Training</a></li>
                                <li><a href="/">Digital Learning</a></li>
                                <li><a href="/">Foreign Language Services</a></li>
                                <li><a href="/">Resourcing &amp; Recruitment</a></li>
                                <li><a href="/">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HomeHeader