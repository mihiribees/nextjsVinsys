import { useState } from "react"
import { Link, Element } from 'react-scroll';
import CommonBtn from "../../other/Headingtext-Btn";
const CourseDetailOverView = () => {
    const [tabid, settabid] = useState('individual')
    return (
        <>
            <section className="courseDetailRwapper common-spacing-top-bottom light-bg">
                <div className="inner-container">
                    <div className="links">
                        <Link smooth={true} to="overview" className="link">Overview</Link>
                        <Link smooth={true} to="learning-objectives" className="link">Learning Objectives</Link>
                        <Link smooth={true} to="schedules" className="link">Schedules</Link>
                        <Link smooth={true} to="who-should-attend" className="link">Who Should Attend</Link>
                        <Link smooth={true} to="prerequisite" className="link">Prerequisite</Link>
                        <Link smooth={true} to="course-outline" className="link">Outline</Link>
                        <Link smooth={true} to="certification" className="link">Certification</Link>
                    </div>

                    <div className="top-wrapper d-flex">
                        <div className="left-section">
                            <Element name="overview">
                                <div className="overviewSection border-box" >
                                    <div className="heading">
                                        Overview
                                    </div>
                                    <p>
                                        Oracle Security+ Certification is an excellent entry point for a career in information
                                        security. CompTIA Security plus SY0-601 exam expands coverage of cybersecurity threats,
                                        risk management, and IoT threats.
                                    </p>

                                    <ul className="pointers">
                                        <li>Explain and facilitate the Scrum roles: team member, Product Owner, ScrumMaster</li>
                                        <li>Communicate the importance of organizational agreement on software readiness</li>
                                        <li>Appreciate that the ScrumMaster role can be the most satisfying as well as the most
                                        </li>
                                        <li>Communicate the importance of organizational agreement on software readiness</li>
                                    </ul>
                                    <CommonBtn to="" text="Download Course Details"/>                                    
                                </div>
                            </Element>
                            <Element name="learning-objectives">
                                <div className="learningSection border-box mt-20">
                                    <div className="heading">
                                        Learning Objectives
                                    </div>

                                    <ul className="pointers">
                                        <li>Detect various types of compromise and have an understanding of penetration testing
                                            and vulnerability scanning concepts</li>
                                        <li>Implement secure network architecture concepts and systems design</li>
                                        <li>Install, configure, and deploy network components while assessing and
                                            troubleshooting issues to support organizational security</li>
                                        <li>Install and configure identity and access services, as well as management controls
                                        </li>
                                        <li>Implement and summarize risk management best practices and the business impact</li>
                                    </ul>
                                </div>
                            </Element>
                        </div>

                        <div className="right-section">
                            <ul className="tabbing">
                                <li onClick={()=>{settabid('individual')}}  className={`link ${tabid=='individual' ? 'active' : 'non-active'}`}>Individual</li>
                                <li onClick={()=>{settabid('business')}} className={`link ${tabid=='business' ? 'active' : 'non-active'}`}>Business</li>
                            </ul>
                            <div className={`formWrapper ${tabid=='individual' ? 'active' : 'non-active'}`}>
                                <form>
                                    <ul className="common-from">
                                        <li className="d-flex form-row">
                                            <div className="col">
                                                <label>First Name<sup>*</sup></label>
                                                <input type="text" placeholder="First Name" id="fname" name="fname" required=""/>
                                            </div>
                                            <div className="col">
                                                <label>Last Name<sup>*</sup></label>
                                                <input type="text" placeholder="Last Name" id="lname" name="lname" required=""/>
                                            </div>
                                        </li>
                                        <li className="d-flex form-row">
                                            <div className="col">
                                                <label>Email<sup>*</sup></label>
                                                <input type="email" placeholder="Your Email" id="uemail" name="email" required=""/>
                                            </div>
                                            <div className="col">
                                                <label>Company<sup>*</sup></label>
                                                <input type="text" placeholder="Company" id="company" name="company" required=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Phone Number<sup>*</sup></label>
                                            <input type="tel" placeholder="Your Number" id="Number" name="phone_number" required=""/>
                                        </li>

                                        <li className="d-flex form-row">
                                            <div className="col">
                                                <label>Designation<sup>*</sup></label>
                                                <input type="text" placeholder="Designation" id="designation" name="designation" required=""/>
                                            </div>
                                            <div className="col">
                                                <label>Country<sup>*</sup></label>
                                                <select name="country" required="">
                                                    <option value="">Select Country</option>
                                                    <option value="1">Afghanistan</option>
                                                    <option value="2">Albania</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">American Samoa</option>
                                                    <option value="5">Andorra</option>
                                                    <option value="6">Angola</option>
                                                </select>   
                                            </div>
                                        </li>

                                        <li>
                                            <label>State<sup>*</sup></label>
                                            <select name="state" id="state" required="">
                                                <option value="">Select State</option>
                                                <option value="Select State">Select State</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label>Additional Message<sup>*</sup></label>
                                            <textarea name="message" id="message" rows="8" placeholder="Your Message" required=""></textarea>
                                        </li>
                                        <li>
                                            <div className="w-100 btn-wrapper">
                                                <button type="submit" className="common-btn">Submit</button>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className={`formWrapper ${tabid=='business' ? 'active' : 'non-active'}`}>
                                <form>
                                    <ul className="common-from">                                       
                                        <li className="d-flex form-row">
                                            <div className="col">
                                                <label>Email<sup>*</sup></label>
                                                <input type="email" placeholder="Your Email" id="uemail" name="email" required=""/>
                                            </div>
                                            <div className="col">
                                                <label>Company<sup>*</sup></label>
                                                <input type="text" placeholder="Company" id="company" name="company" required=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Phone Number<sup>*</sup></label>
                                            <input type="tel" placeholder="Your Number" id="Number" name="phone_number" required=""/>
                                        </li>

                                        <li className="d-flex form-row">
                                            <div className="col">
                                                <label>Designation<sup>*</sup></label>
                                                <input type="text" placeholder="Designation" id="designation" name="designation" required=""/>
                                            </div>
                                            <div className="col">
                                                <label>Country<sup>*</sup></label>
                                                <select name="country" required="">
                                                    <option value="">Select Country</option>
                                                    <option value="1">Afghanistan</option>
                                                    <option value="2">Albania</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">American Samoa</option>
                                                    <option value="5">Andorra</option>
                                                    <option value="6">Angola</option>
                                                </select>   
                                            </div>
                                        </li>

                                        <li>
                                            <label>State<sup>*</sup></label>
                                            <select name="state" id="state" required="">
                                                <option value="">Select State</option>
                                                <option value="Select State">Select State</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label>Additional Message<sup>*</sup></label>
                                            <textarea name="message" id="message" rows="8" placeholder="Your Message" required=""></textarea>
                                        </li>
                                        <li>
                                            <div className="w-100 btn-wrapper">
                                                <button type="submit" className="common-btn">Submit</button>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-wrapper mt-60">
                        <Element name="schedules">
                            <div className="overviewSection border-box">
                                <div className="heading">
                                    Schedules
                                </div>

                                <div className="scheduleItems d-flex">
                                    <div className="item">
                                        <div className="top">
                                            <div className="date">Jun 26 - Jun 30 , 2023</div>
                                            <div className="time">9:00 AM - 5:00 PM</div>
                                            <div className="class">Online Class</div>
                                        </div>
                                        <div className="btn-wrapper">
                                            <CommonBtn to="" text="Add To Cart"/>                                             
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="top">
                                            <div className="date">Jun 26 - Jun 30 , 2023</div>
                                            <div className="time">9:00 AM - 5:00 PM</div>
                                            <div className="class">Online Class</div>
                                        </div>
                                        <div className="btn-wrapper">
                                            <CommonBtn to="" text="Add To Cart"/> 
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="top">
                                            <div className="date">Jun 26 - Jun 30 , 2023</div>
                                            <div className="time">9:00 AM - 5:00 PM</div>
                                            <div className="class">Online Class</div>
                                        </div>
                                        <div className="btn-wrapper">
                                            <CommonBtn to="" text="Add To Cart"/>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Element>
                        <Element name="who-should-attend">
                            <div className="scheduleSection border-box mt-20">
                                <div className="heading">
                                    Who Should Attend
                                </div>
                                <ul className="pointers">
                                    <li>Detect various types of compromise and have an understanding of penetration testing and vulnerability scanning concepts</li>
                                    <li>Implement secure network architecture concepts and systems design</li>
                                    <li>Install, configure, and deploy network components while assessing and troubleshooting issues to support organizational security</li>
                                    <li>Install and configure identity and access services, as well as management controls</li>
                                    <li>Implement and summarize risk management best practices and the business impact</li>
                                    <li>Install and configure wireless security settings and implement public key infrastructure</li>
                                </ul>
                            </div>
                        </Element>
                        <Element name="prerequisites">
                            <div className="prerequisiteSection border-box mt-20">
                                <div className="heading">
                                    Prerequisites
                                </div>
                                <ul className="pointers">
                                    <li>Detect various types of compromise and have an understanding of penetration testing and vulnerability scanning concepts</li>
                                    <li>Implement secure network architecture concepts and systems design</li>
                                    <li>Install, configure, and deploy network components while assessing and troubleshooting issues to support organizational security</li>
                                    <li>Install and configure identity and access services, as well as management controls</li>
                                    <li>Implement and summarize risk management best practices and the business impact</li>
                                    <li>Install and configure wireless security settings and implement public key infrastructure</li>
                                </ul>
                            </div>
                        </Element>
                        <Element name="course-outline">
                            <div className="onlineCourseSection border-box mt-20">
                                <div className="heading">
                                    Course Outline
                                </div>

                                <div className="subHeading">1- Threats, Attacks and Vulnerabilities</div>
                                <ul className="pointers">
                                    <li>Compare and contrast different types of social engineering techniques</li>
                                    <li>Analyze potential indicators to determine the type of attack</li>
                                    <li>Analyze potential indicators associated with application attacks</li>
                                    <li>Analyze potential indicators associated with network attacks</li>
                                    <li>Explain different threat actors, vectors, and intelligence sources</li>

                                </ul>

                                <div className="subHeading">2- Architecture and Design</div>
                                <ul className="pointers">
                                    <li>Explain the importance of security concepts in an enterprise environment</li>
                                    <li>Summarize virtualization and cloud computing concepts</li>
                                    <li>Summarize secure application development, deployment, and automation concepts</li>
                                    <li>Summarize authentication and authorization design concepts</li>
                                    <li>Explain the security implications of embedded and specialized systems</li>
                                </ul>

                                <div className="subHeading">3- Implementation</div>
                                <ul className="pointers">
                                    <li>Implement host or application security solutions</li>
                                    <li>Implement secure network designs</li>
                                    <li>Install and configure wireless security settings</li>
                                    <li>Implement secure mobile solutions</li>
                                    <li>Apply cybersecurity solutions to the cloudGiven a scenario, implement identity and account management controls</li>
                                </ul>
                            </div>
                        </Element>
                        <Element name="certification">
                            <div className="certificationSection border-box mt-20">
                                <div className="heading">Certification</div>
                                <div className="subHeading">ICAgile Certified Professional in Agile Team Facilitation (ICP-ATF)</div>
                                <ul className="pointers">

                                    <li>The ICAgile Agile Team Facilitiation Certified Pro (ICP-ATF) certification focuses primarily on the mindset and role of an agile team facilitator, while also providing group facilitation tools and techniques for effectively designing meetings and workshops that both engage the entire audience and drive towards agreed-upon outcomes.</li>
                                    <li>The path to this certification develops an appreciation for the art of facilitation as key to fostering collaboration and enabling self-organizing teams. Certification holders will have an updated facilitator toolkit and practical experience leveraging these tools to facilitate specific agile practices towards successful team outcomes.</li>
                                    <li>This Agile certification is perfect for Agile team leaders or aspiring leads with a desire to learn and practice Agile facilitation and Agile team coaching. Relevant roles include, but are not limited to Project Managers, Scrum Masters, Agile Coaches, Product Owners and Product Managers.</li>
                                </ul>
                            </div>
                        </Element>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CourseDetailOverView