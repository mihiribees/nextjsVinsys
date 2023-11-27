const GenerateQuotaForm = ()=>{
    return(
        <section className="generate-quota-form common-spacing-top-bottom">
            <div className="inner-container">
                <ul className="common-from d-flex">
                    <li>
                        <label>First Name<sup>*</sup></label>
                        <input type="text" placeholder="First Name" id="f-name" name="f-name"/>
                    </li>
                    <li>
                        <label>Last Name<sup>*</sup></label>
                        <input type="text" placeholder="Last Email" id="l-name" name="l-name"/></li>
                    <li>
                        <label>Email<sup>*</sup></label>
                        <input type="email" placeholder="Your Email" id="email" name="email"/>
                    </li>
                    <li>
                        <label>Company<sup>*</sup></label>
                        <input type="text" placeholder="Company Name" id="company" name="company"/></li>
                    <li>
                        <label>Phone Number<sup>*</sup></label>
                        <input type="tel" placeholder="Your Number" id="Number" name="Number"/></li>
                    <li>
                        <label>State<sup>*</sup></label>
                        <input type="text" placeholder="Street" id="street" name="street"/></li>
                    <li>
                        <label>Country<sup>*</sup></label>
                        <select name="country" id="country" form="">
                            <option value="India">India</option>
                            <option value="Business Development Professional">Business Development Professional</option>
                            <option value="Business Development Professional">Business Development Professional</option>
                            <option value="Assistant Manager - Chartered Accountant">Assistant Manager - Chartered Accountant</option>
                            <option value="Business Analyst">Business Analyst</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                        </select>
                    </li>
                    <li>
                        <label>State<sup>*</sup></label>
                        <select name="state" id="state" form="">
                            <option value="Delhi">Delhi</option>
                            <option value="Bengal">Bengal</option>
                        </select>
                    </li>
                    <li>
                        <label>City<sup>*</sup></label>
                        <select name="city" id="city" form="">
                            <option value="Delhi">Delhi</option>
                            <option value="Bengal">Bengal</option>
                        </select>
                    </li>
                    <li>
                        <label>Postal / Zip Code<sup>*</sup></label>
                        <input type="text" placeholder="Your Postal / Zip Code" id="pincode" name="pincode" />
                    </li>
                    <li className="w-100 d-flex checkbox-wrapper">
                        <div className="checkbox d-flex align-items-center">
                            <input type="checkbox" id="eligibility" name="eligibility" value="eligibility" />
                            <label for="eligibility">Determine eligibility for an account level discount</label>
                        </div>
                        <div className="checkbox d-flex align-items-center">
                            <input type="checkbox" id="pricing" name="pricing" value="pricing" />
                            <label for="pricing">Eligible for General Services Administration (GSA) pricing</label>
                        </div>
                        <div className="checkbox d-flex align-items-center">
                            <input type="checkbox" id="student" name="student" value="student" />
                            <label for="student">Are you also the student?</label>
                        </div>
                    </li>
                    <li className="subtotal-box w-100">
                        <div className="total d-flex justify-content-between">Sub Total <span>$299</span></div>
                        <div className="total d-flex justify-content-between">Tax <span>$51</span></div>
                        <div className="total d-flex justify-content-between">Total (USD) <span>$250</span></div>
                    </li>
                    <li className="w-100 d-flex justify-content-end btn-wrapper">
                        <div className="links"><button type="submit" className="common-btn light-bg">Add New Course</button></div>
                        <div className="links"><button type="submit" className="common-btn">Generate Quote <i className="icon">&nbsp;</i></button></div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default GenerateQuotaForm;