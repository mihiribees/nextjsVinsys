import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";
import Link from "next/link";

const Brands = () => {
    return (
        <section className="traing-brand-section common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Brands" />                
                <ul className="brandList d-flex mt-60">
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
                                <img src={`/images/certification/icon-citrix.svg`} alt="Citrix"/>
                            </div>
                            <p>Citrix</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-adobe.svg`} alt="Adobe"/>
                            </div>
                            <p>Adobe</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-googleCloud.svg`} alt="Google Cloud"/>
                            </div>
                            <p>Google Cloud</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-comptia.svg`} alt="CompTIA"/>
                            </div>
                            <p>CompTIA</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-aws.svg`} alt="AWS"/>
                            </div>
                            <p>AWS</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-ibm.svg`} alt="IBM"/>
                            </div>
                            <p>IBM</p>
                        </Link>
                    </li>
                    <li className="item d-flex">
                        <Link href="#" className="item-content">
                            <div className="img-wrapper">
                                <img src={`/images/certification/icon-office.svg`} alt="Microsoft Office"/>
                            </div>
                            <p>Microsoft Office</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Brands;