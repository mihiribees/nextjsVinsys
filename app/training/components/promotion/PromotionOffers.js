import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";


const PromotionOffers = ()=>{    
    
    return(
        <section className="promo-offer-sec common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center grey-color" mainHeading ="Promotions & Offers"/>
                <ul className="items mt-60">
                    <li className="item">
                        <div className="inner-section d-flex align-items-center">
                            <div className="img-wrapper">
                                <img src={`/images/offers/offers-1.png`} alt=""/>
                            </div>
                            <div className="content-box">
                                <div className="offer-heading">Microsoft Security Skilling Program</div>
                                <p>Enroll your teams now in courses from top Cybersecurity vendors like CompTIA, EC-Council, Microsoft, AWS, and more and empower your teams with in-demand cybersecurity skills. Get great discounts on cybersecurity courses and FREE consultation on the learning plans.</p>
                                <div className="btn-wrapper d-flex">
                                    <a href="#" className="common-btn">Save More <i className="icon">&nbsp;</i></a>
                                    <div className="percentage">
                                        20 % OFF
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="inner-section d-flex align-items-center">
                            <div className="img-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/images/offers/offers-1.png`} alt=""/>
                            </div>
                            <div className="content-box">
                                <div className="offer-heading">Microsoft Security Skilling Program</div>
                                <p>Enroll your teams now in courses from top Cybersecurity vendors like CompTIA, EC-Council, Microsoft, AWS, and more and empower your teams with in-demand cybersecurity skills. Get great discounts on cybersecurity courses and FREE consultation on the learning plans.</p>
                                <div className="btn-wrapper d-flex">
                                    <a href="#" className="common-btn">Save More <i className="icon">&nbsp;</i></a>
                                    <div className="percentage">
                                        20 % OFF
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default PromotionOffers;