import CommonBtn from "../../other/Headingtext-Btn"
const CartAdded = () => {
    return (
        <section className="guarantee-runclass-sec common-spacing-top-bottom cartPg">
            <div className="inner-container">
                <div className="inner-content d-flex cartSummaryPg">
                    <div className="items">
                        <div className="searchfilter d-flex align-items-center">
                            <div className="search-result">Courses</div>
                        </div>
                        <div className="item d-flex justify-content-between">
                            <div className="left-section d-flex align-items-start">
                                <div className="content-box">
                                    <div className="top-wrapper d-flex">
                                        <div className="detail">
                                            <div className="course-name">Administering a SQL Database (55316)<span><strong>Delivery format :</strong> Virtual Classroom Live</span></div>
                                            <div className="date-time-wraper d-flex align-items-center">
                                                <div className="date">
                                                    <span>Date</span>June 08 - 12 , 2023
                                                </div>
                                                <div className="time">
                                                    <span>Time</span>10:00 AM - 4:00 PM EDT
                                                </div>
                                            </div>
                                            <div className="duration-detail-wrapper d-flex align-items-center justify-content-between">
                                                <div className="duration">Duration : <span>1 Month</span></div>
                                                <a href="#" className="common-btn light-bg short">View Details</a>
                                            </div>
                                        </div>
                                        <div className="qty-price">
                                            <form action="">
                                                <div className="qty-box">
                                                    <select name="lang" id="language" form="">
                                                        <option value="1">Qty: 1</option>
                                                        <option value="2">Qty: 2</option>
                                                    </select>
                                                </div>
                                                <div className="price">Price : <span>$399</span></div>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="orderSummary">
                        <div className="content-wrapper dark-bg">
                            <div className="heading">
                                Order Summary
                            </div>

                            <ul className="oderDetail">
                                <li><span>Quantity</span>4 Cources</li>
                                <li><span>Sub Total</span>$1000</li>
                                <li><span>TAX</span>$120</li>

                            </ul>

                            <div className="total"><span>Total (USD)</span>$1120</div>

                            <div className="btn-wrapper">
                                <CommonBtn class="" link="" text="Checkout" />
                                <CommonBtn class="light-bg" link="" text="Add New Courses" />                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CartAdded