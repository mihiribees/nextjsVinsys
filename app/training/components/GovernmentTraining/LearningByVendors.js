import CommonBtn, { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"
import { useState } from "react"

const LearningByVendors = () => {
    const [tabid, settabid] = useState('vendor')
    return (
        <section className="govtLearning common-spacing-top-bottom light-bg">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Government Learning By Vendors"/>                 
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                </p>
                <ul className="tabs d-flex justify-content-center mt-30 mb-30">
                    <li onClick={()=>{settabid('vendor')}} className={tabid==='vendor' ? 'active' : ''}>Vendor</li>
                    <li onClick={()=>{settabid('domain')}} className={tabid==='domain' ? 'active' : ''}>Domain</li>
                </ul>
                <div className={`items d-flex ${tabid==='vendor' ? 'require' : 'no-require'}`}>
                    <div className="item d-flex">
                        <div className="top-section">
                            <div className="img-wrapper">
                                <img src={`/images/training/logo-cisco.svg`} alt="Cisco" />
                            </div>
                            <div className="title">
                                Comptia: EC-Council: CERTIFIED ETHICAL HACKER (CEH)
                            </div>
                            <p>Build the skills needed to assess the security stance of an enterprise environment and recommend and implement appropriate security solutions.</p>
                        </div>
                        <div className="btn-wrapper">
                            <CommonBtn class="sm-btn" link="" text="Learn More" />  
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="top-section">
                            <div className="img-wrapper">
                                <img src={`/images/training/logo-citrix.svg`} alt="Cisco" />
                            </div>
                            <div className="title">
                                Citrix: EC-Council: CERTIFIED ETHICAL HACKER (CEH)
                            </div>
                            <p>Acquire skills needed to install, operate, configure, and verify a basic IPv4 and IPv6 network. Get foundational knowledge in network programmability, automation, and software-defined networking.</p>
                        </div>
                        <div className="btn-wrapper">
                            <CommonBtn class="sm-btn" link="" text="Learn More" />  
                        </div>
                    </div>
                </div>
                <div className={`items d-flex ${tabid==='domain' ? 'require' : 'no-require'}`}>
                    <div className="item d-flex">
                        <div className="top-section">
                            <div className="img-wrapper">
                                <img src={`/images/training/logo-cisco.svg`} alt="Cisco" />
                            </div>
                            <div className="title">
                                Comptia: EC-Council: CERTIFIED ETHICAL HACKER (CEH)
                            </div>
                            <p>Build the skills needed to assess the security stance of an enterprise environment and recommend and implement appropriate security solutions.</p>
                        </div>

                        <div className="btn-wrapper">
                            <CommonBtn class="sm-btn" link="" text="Learn More" />  
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}
export default LearningByVendors