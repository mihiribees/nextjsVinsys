"use client"
import CommonBtn, { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";
import { useState } from "react";

const DeliveryModeOptions = ()=>{
    const [courseMode, SetcourseMode] = useState("course-mode1")
    return(
        <section className="delivery-options-sec common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading ="Delivery Mode Options"/>
                <div className="inner-content mt-60">
                    <ul className="items d-flex">
                        <li className={courseMode=='course-mode1' ? 'active' : ''} onClick={()=>{SetcourseMode("course-mode1")}}>
                            <img src="/images/delivery/virtual-icon.svg" alt="" />
                            <span>Virtual classNameroom Live</span>
                        </li>
                        <li className={courseMode=='course-mode2' ? 'active' : ''} onClick={()=>{SetcourseMode("course-mode2")}}>
                            <img src="/images/delivery/virtual-icon.svg" alt="" />
                            <span>classNameroom Live</span>
                        </li>
                        <li className={courseMode=='course-mode3' ? 'active' : ''} onClick={()=>{SetcourseMode("course-mode3")}}>
                            <img src="images/delivery/virtual-icon.svg" alt="" />
                            <span>On-Demand</span>
                        </li>
                        <li className={courseMode=='course-mode4' ? 'active' : ''} onClick={()=>{SetcourseMode("course-mode4")}}>
                            <img src="/images/delivery/virtual-icon.svg" alt="" />
                            <span>Private Group Training</span>
                        </li>
                    </ul>
                    <div className="content mt-60">                        
                        <div className={`full ${courseMode=='course-mode1' ? 'active' : ''}`}>
                            <div className="common-heading text-center">Virtual classNameroom Live</div>
                            <div className="inner-section d-flex align-items-center">
                                <div className="left-section">
                                    <img src="images/delivery/virtualClassRoom.png" alt="" />
                                </div>
                                <div className="right-section">
                                    <div className="content-heading">Train in a live, interactive environment from the location of your choice</div>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`&apos;`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                    <div className="btn-wrapper d-flex">
                                        <CommonBtn link="" text="Explore at GTR Classes "/>
                                        <CommonBtn link="" text="Virtual Classroom Preview "/>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="common-heading text-center mt-60">Benefits of the delivery format</div>
                            <ul className="benefit-items d-flex">
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/virtual-BenefitIcon.svg" alt=""/>
                                    </div>
                                    <span>Live Virtual Training</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/classroom.svg" alt="" />
                                    </div>
                                    <span>Remote classNameroom Training</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/courses.svg" alt="" />
                                    </div>
                                    <span>Online Courses</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/virtualCourse.svg" alt="" />
                                    </div>
                                    <span>Virtual Courses</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/demandtraining.svg" alt="" />
                                    </div>
                                    <span>On Demand Training</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/grouptraining.svg" alt="" />
                                    </div>
                                    <span>Group Training</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="images/delivery/instructor.svg" alt="" />
                                    </div>
                                    <span>Instructor Led Training</span>
                                </li>
                                <li>
                                    <div className="icon-box">
                                        <img src="/images/delivery/self.svg" alt="" />
                                    </div>
                                    <span>Self Paced</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`full ${courseMode=='course-mode2' ? 'active' : ''}`}>
                            <div className="common-heading text-center">Class Name Room Live</div>
                            <div className="inner-section d-flex align-items-center">
                                <div className="left-section">
                                    <img src="/images/delivery/virtualClassRoom.png" alt="" />
                                </div>
                                <div className="right-section">
                                    <div className="content-heading">Train in a live, interactive environment from the location of your choice</div>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`&apos;`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                    <div className="btn-wrapper d-flex">
                                        <CommonBtn link="" text="Explore at GTR Classes "/>
                                        <CommonBtn link="" text="Virtual Classroom Preview "/>                                    
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DeliveryModeOptions;