import { useState } from "react"
import { CommonHeading } from "../../other/Headingtext-Btn"
import CommonBtn from "../../other/Headingtext-Btn"
const CourseSelect = () => {
    const [tabid, settabid] = useState('domain')
    return (
        <section className="delivery-options-sec browseBySection common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Browse By"/>                
                <div className="inner-content mt-60">
                    <ul className="items d-flex">
                        <li className={tabid=='domain' ? 'active' : 'non-active'} onClick={()=>{settabid('domain')}}>
                            <img src={`${process.env.PUBLIC_URL}/images/certification/icon-www.svg`} alt="" />
                                <span>Course by Domain</span>
                        </li>
                        <li className={tabid=='brand' ? 'active' : 'non-active'} onClick={()=>{settabid('brand')}}>
                            <img src={`${process.env.PUBLIC_URL}/images/certification/icon-brand.svg`} alt=""/>
                                <span>Courses by Brand&nbsp;</span>
                        </li>
                    </ul>
                    <div className="content mt-60">
                        <ul className={`benefit-items d-flex domain ${tabid=='domain' ? 'active' : 'non-active'}`}>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-analyst.svg`} alt=""/>
                                </div>
                                <span>Analytics and Data Management</span>
                                <CommonBtn link=""/>                                
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-application.svg`} alt=""/>
                                </div>
                                <span>Application Development</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-scrum.svg`} alt=""/>
                                </div>
                                <span>Agile and Scurm</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-5g.svg`} alt=""/>
                                </div>
                                <span>5 G</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-blockchain.svg`} alt=""/>
                                </div>
                                <span>Block Chain</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-ai.svg`} alt=""/>
                                </div>
                                <span>Artificial Inteliegence and Machine Learning</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-businessAnalyst.svg`} alt=""/>
                                </div>
                                <span>Business Analysis</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-businessSkills.svg`} alt=""/>
                                </div>
                                <span>Business Skill</span>
                                <CommonBtn link=""/>  
                            </li>

                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-cloud.svg`} alt=""/>
                                </div>
                                <span>Cloud Cpmputing</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-cyber.svg`} alt=""/>
                                </div>
                                <span>Cyber Security</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-datacenter.svg`} alt=""/>
                                </div>
                                <span>Data Center</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-devOps.svg`} alt=""/>
                                </div>
                                <span>DevOps</span>
                                <CommonBtn link=""/>  
                            </li>

                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-enterprice.svg`} alt=""/>
                                </div>
                                <span>Enterprise Architecture</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-python.svg`} alt=""/>
                                </div>
                                <span>Python</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-networking.svg`} alt=""/>
                                </div>
                                <span>Networking and Wireless</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-projectManagement.svg`} alt=""/>
                                </div>
                                <span>Project Management</span>
                                <CommonBtn link=""/>  
                            </li>
                        </ul>
                        <ul className={`benefit-items d-flex brand ${tabid=='brand' ? 'active' : 'non-active'}`}>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-analyst.svg`} alt=""/>
                                </div>
                                <span>Analytics and Data Management</span>
                                <CommonBtn link=""/>  
                            </li>
                            <li>
                                <div className="icon-box">
                                    <img src={`${process.env.PUBLIC_URL}/images/certification/icon-application.svg`} alt=""/>
                                </div>
                                <span>Application Development</span>
                                <CommonBtn link=""/>  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CourseSelect