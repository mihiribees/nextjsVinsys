import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"


const BenefitsCorporateTraining = () => {
    return (
        <section className="corporateTrainingSection common-spacing-top-bottom light-bg">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Benefits of corporate training"/>                
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>

                <div className="inner-content d-flex mt-60">
                    <div className="left-section">
                        <img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/benefits-of-corporate.png`} alt="certification"/>
                    </div>
                    <div className="right-section">
                        <ul className="items d-flex">
                            <li className="item">
                                <div className="logo_box">
                                    <img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/>
                                </div>
                                <p>Creates Structured Learning</p>
                            </li>
                            <li className="item">
                                <div className="logo_box"><img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/></div>
                                <p>L&amp;D Program Acceleration</p>
                            </li>
                            <li className="item">
                                <div className="logo_box"><img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/></div>
                                <p>Helps Define &amp; Pursue Career Goals</p>
                            </li>
                            <li className="item">
                                <div className="logo_box"><img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/></div>
                                <p>Enables Self-Paced Learning</p>
                            </li>

                            <li className="item">
                                <div className="logo_box"><img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/></div>
                                <p>Inspires Continuous Learning Environment</p>
                            </li>
                            <li className="item">
                                <div className="logo_box"><img src={`${process.env.PUBLIC_URL}/images/Corporate-Training/Benefits-of-corpor-logo.png`} alt=""/></div>
                                <p>Develops Skills to Match Demands</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BenefitsCorporateTraining