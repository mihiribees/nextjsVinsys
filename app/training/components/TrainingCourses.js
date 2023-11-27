"use client"

import CommonBtn, { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"
import { useState } from "react"

const TrainingCourses = ()=>{
    const [datatag, setdatatag] = useState("Project-Management")
    return(
        <section className="training-courses common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="TOP IT Training Courses" subHeading="Lorem Ipsum is simply dummy"/>
                <div className="inner-content mt-60 d-flex">
                    <div className="left-section">
                        <div className={`inner ${datatag=="Project-Management" ? 'active' : 'non-active' }`}  data-tag="Project-Management">
                            <div className="content">
                                <CommonHeading mainHeading="Project Management"/>
                                <div className="description">
                                    <p>Maximize Your Success and Profitability with Our Cutting-Edge IT Services, Globally-Acclaimed Training Programs, and Expert Consulting Solutions!</p>
                                </div>  
                                <div className="links">
                                    <CommonBtn link="" text="Read More"/>
                                </div>                          
                            </div>
        
                            <div className="img-wrapper">
                                <img src={`/images/certification/projectManagement.svg`} alt="Project Management" />
                            </div>
                        </div>
                        <div className={`inner ${datatag=="IT-Governance" ? 'active' : 'non-active' }`} data-tag="Project-Management">
                            <div className="content">
                                <CommonHeading mainHeading="IT Service Management"/>
                                <div className="description">
                                    <p>Maximize Your Success and Profitability with Our Cutting-Edge IT Services, Globally-Acclaimed Training Programs, and Expert Consulting Solutions!</p>
                                </div>  
                                <div className="links">
                                    <CommonBtn link="" text="Read More"/>
                                </div>                          
                            </div>
        
                            <div className="img-wrapper">
                                <img src={`/images/certification/projectManagement.svg`} alt="Project Management" />
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div onClick={()=>{setdatatag("Project-Management")}} className={`item ${datatag=="Project-Management" ? 'active' : 'non-active' }`}  data-tag="Project-Management">Project Management</div>
                        <div onClick={()=>{setdatatag("IT-Governance")}} className={`item ${datatag=="IT-Governance" ? 'active' : 'non-active' }`} data-tag="IT-Governance">IT Governance</div>
                        <div className="item">IT Service Management</div>
                        <div className="item">IT Hardware &amp; Networking</div>
                        <div className="item">ISO Training</div>
                        <div className="item">Cyber Security</div>
                        <div className="item">Soft Skills Training</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TrainingCourses