import CommonBtn, { CommonHeading } from "../../other/Headingtext-Btn"
const LiveWebinars = ({topstyle,commonheadingneed,formsapce, heading,children,viewbtnneed, viewalllink}) => {
    return (
        <section className={`common-spacing-top-bottom ${topstyle}`}>
            <div className="inner-container">
                <CommonHeading class={`text-center ${commonheadingneed}`} mainHeading={heading}/>                
                <form className={`form blogListing-sec ${formsapce}`}>
                    <ul className="common-from d-flex">
                        <li className="search-box d-flex">
                            <input type="text" value="" placeholder="Search" />                                
                        </li>
                        <li>
                            <select name="month" id="month" form="">
                                <option value="month">Month</option>
                                <option value="jan">Jan</option>
                                <option value="feb">Feb</option>
                            </select>
                        </li>
                        <li>
                            <select name="service" id="service" form="">
                                <option value="service-1">Vendor</option>
                                <option value="service-2">Vendor</option>
                            </select>
                        </li>
                        <li>
                            <select name="service" id="service" form="">
                                <option value="service-1">Domain</option>
                                <option value="service-2">Domain</option>
                            </select>
                        </li>
                        <li>
                            <select name="service" id="service" form="">
                                <option value="service-1">Topic</option>
                                <option value="service-2">Topic</option>
                            </select>
                        </li>
                    </ul>
                </form>
                <div className="items d-flex">
                    {children}                    
                </div>
                <div className={`mt-60 d-flex justify-content-center ${viewbtnneed}`}>
                    <CommonBtn class="light-bg sm-btn" link={viewalllink} text="View All"/>                    
                </div>

            </div>
        </section>
    )
}
export default LiveWebinars