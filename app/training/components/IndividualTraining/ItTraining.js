import CommonBtn from "@/app/components/headingtextbutton/HeadingButton"
import Link from "next/link"
import { useState } from "react"


const ItTraining = () => {
    const [tabid, settabid] = useState('brand')    
    return (
        <section className="delivery-options-sec browseBySection common-spacing-top-bottom it_tranning">
            <div className="inner-container">
                <div className="common-heading text-center">IT Training<span>Browse By</span></div>
                <div className="traing-brand-section mt-60">
                    <ul class="items d-flex">
                        <li onClick={()=>{settabid('domain')}} className={tabid==='domain' ? 'active' : ''}>
                            <img src={`/images/certification/icon-www.svg`} alt=""/>
                            <span>Course by Domain</span>
                        </li>
                        <li onClick={()=>{settabid('brand')}} className={tabid==='brand' ? 'active' : ''}>
                            <img src={`/images/certification/icon-brand.svg`} alt=""/>
                            <span>Courses by Brand&nbsp;</span>
                        </li>
                    </ul>
                    <div className={`mt-60 ${tabid==='domain' ? 'active' : 'no-require'}`}>                   
                        <ul className="brandList d-flex">
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-cisco.svg`} alt="Cisco" />
                                    </div>
                                    <p>Cisco</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-dell.svg`} alt="Dell" />
                                    </div>
                                    <p>Dell</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="btn-wrapper mt-30 d-flex justify-content-center">
                            <CommonBtn class="light-bg sm-btn" link="" text="View All"/>                            
                        </div>
                    </div>
                    <div className={`mt-60 ${tabid==='brand' ? 'active' : 'no-require'}`}>  
                        <ul className={`brandList d-flex`}>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-cisco.svg`} alt="Cisco" />
                                    </div>
                                    <p>Cisco</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-dell.svg`} alt="Dell" />
                                    </div>
                                    <p>Dell</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-citrix.svg`} alt="Citrix" />
                                    </div>
                                    <p>Citrix</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-adobe.svg`} alt="Adobe" />
                                    </div>
                                    <p>Adobe</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-googleCloud.svg`} alt="Google Cloud" />
                                    </div>
                                    <p>Google Cloud</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-comptia.svg`} alt="CompTIA" />
                                    </div>
                                    <p>CompTIA</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-aws.svg`} alt="AWS" />
                                    </div>
                                    <p>AWS</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-ibm.svg`} alt="IBM" />
                                    </div>
                                    <p>IBM</p>
                                </Link>
                            </li>
                            <li className="item d-flex">
                                <Link href="#" className="item-content">
                                    <div className="img-wrapper">
                                        <img src={`/images/certification/icon-office.svg`} alt="Microsoft Office" />
                                    </div>
                                    <p>Microsoft Office</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="btn-wrapper mt-30 d-flex justify-content-center">
                            <CommonBtn class="light-bg sm-btn" link="" text="View All"/>
                        </div>
                    </div>
                </div>
            </div>       
        </section >
    )
}
export default ItTraining