import CommonBtn from "@/app/components/headingtextbutton/HeadingButton";
import InnerBannerGradiant from "@/app/otherComp/InnerBannerGradiant";

const BannerSec = ()=>{
    return(
        <InnerBannerGradiant style="courseDetailBanner">
            <div className="inner-content d-flex">
                    <div className="left-section">
                        <img src={`/images/courses/oracleLogo.svg`} alt="oracle logo" className="logo" />
                        <div className="heading">Oracle: EC-Council: CERTIFIED ETHICAL HACKER (CEH)</div>
                        <p>Oracle Security+ Certification is an excellent entry point for a career in information
                            security. CompTIA Security plus SY0-601 exam expands coverage of cybersecurity threats, risk
                            management, and IoT threats.........</p>

                        <div className="items d-flex">
                            <div className="item">
                                <img src={`/images/courses/icon-duration.svg`} alt="Duration" /> Duration : 7 Days
                            </div>
                            <div className="item">
                                <span className="stars">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </span>
                                2245
                            </div>
                            <div className="item">
                                <img src={`/images/courses/icon-user.svg`} alt="user" /> 899 Partipants
                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="top d-flex align-items-center justify-content-between">
                                <div className="price">
                                    <span>Pricing</span>$3999
                                </div>
                                <CommonBtn link="" text="Add To Cart"/>                                
                            </div>
                            <div className="bottom d-flex align-items-center justify-content-between">
                                <div className="percent"><img src={`/images/courses/icon-percent.svg`} alt="percent" />20 % Off
                                    For New Users
                                </div>
                                {/* <div className="coupon">New Course</div> */}
                            </div>

                            <div className="training">
                                <div className="text">
                                    <span className="icon">
                                        <img src={`/images/courses/icon-cap.svg`} alt="certified" />
                                    </span>
                                    Looking for Corporate Training
                                </div>
                                <a href="#">Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <img src={`/images/courses/courseRightImg.png`} alt="Right Img" />
                    </div>
                </div>
            </InnerBannerGradiant>
    )
}
export default BannerSec;