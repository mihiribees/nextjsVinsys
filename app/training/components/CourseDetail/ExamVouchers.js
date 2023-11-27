import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";
import Link from "next/link";

const ExamVouchers = ()=>{
    return(
        <section className="voucherSection common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Exam Vouchers"/>                
                <div className="inner-content d-flex mt-60">
                    <div className="item d-flex">
                        <div className="left-section d-flex">
                            <div className="icon-box">
                                <img src={`/images/courses/oracleLogo.svg`} alt="logo" />
                            </div>
                            <div className="content-box">
                                <div className="course-name">Oracle Certified Associate- Virtualization - 1Y0-204 Exam Voucher</div>
                                <p>The CCA-V 1Y0-204&nbsp;certification exam&nbsp;requires the completion of 65 multiple-choice questions written in English within 90 minutes. The passing score is 62%. The 1Y0-204&nbsp;Citrix exam is mostly intended for the proficient IT experts with years of experience insta...</p>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="label">
                                40% Off
                            </div>
                            <div className="price">Price : $299<span>$349</span></div>
                            <div className="btn-wrapper">
                                <Link href="#" className="common-btn light-bg ">Enroll Now</Link>
                                <Link href="#" className="common-btn">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="left-section d-flex">
                            <div className="icon-box">
                                <img src={`${process.env.PUBLIC_URL}/images/courses/oracleLogo.svg`} alt="logo" />
                            </div>
                            <div className="content-box">
                                <div className="course-name">Oracle Certified Associate- Virtualization - 1Y0-204 Exam Voucher</div>
                                <p>The CCA-V 1Y0-204&nbsp;certification exam&nbsp;requires the completion of 65 multiple-choice questions written in English within 90 minutes. The passing score is 62%. The 1Y0-204&nbsp;Citrix exam is mostly intended for the proficient IT experts with years of experience insta...</p>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="label">
                                40% Off
                            </div>
                            <div className="price">Price : $299<span>$349</span></div>
                            <div className="btn-wrapper">
                                <Link href="#" className="common-btn light-bg ">Enroll Now</Link>
                                <Link href="#" className="common-btn">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExamVouchers;
