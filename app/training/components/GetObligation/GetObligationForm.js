const GetObligationForm = () => {
    return (
        <div class="courseDetailRwapper content-box mt-30">
            <form class="formWrapper">
                <ul class="common-from">
                    <li class="d-flex form-row">
                        <div class="col">
                            <label>First Name<sup>*</sup></label>
                            <input type="text" placeholder="First Name" id="fname" name="fname" required=""/>
                        </div>
                        <div class="col">
                            <label>Last Name<sup>*</sup></label>
                            <input type="text" placeholder="Last Name" id="lname" name="lname" required=""/>
                        </div>
                    </li>
                    <li class="d-flex form-row">
                        <div class="col">
                            <label>Email<sup>*</sup></label>
                            <input type="email" placeholder="Your Email" id="uemail" name="email" required=""/>
                        </div>
                        <div class="col">
                            <label>Company<sup>*</sup></label>
                            <input type="text" placeholder="Company" id="company" name="company" required=""/>
                        </div>
                    </li>
                    <li class="d-flex form-row">
                        <div class="col">
                            <label>Phone Number<sup>*</sup></label>
                            <input type="tel" placeholder="Your Number" id="Number" name="phone_number" required=""/>
                        </div>
                        <div class="col">
                            <label>Designation<sup>*</sup></label>
                            <input type="text" placeholder="Designation" id="designation" name="designation" required=""/>
                        </div>

                    </li>

                    <li class="d-flex form-row">
                        <div class="col">
                            <label>Country<sup>*</sup></label>
                            <select name="country" required="">
                                <option value="">Select Country</option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andorra</option>
                                <option value="6">Angola</option>
                            </select>
                        </div>
                        <div class="col">
                            <label>State<sup>*</sup></label>
                            <select name="state" id="state" required="">
                                <option value="">Select State</option>
                                <option value="Select State">Select State</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Additional Message<sup>*</sup></label>
                        <textarea name="message" id="message" rows="8" placeholder="Your Message" required=""></textarea>
                    </li>
                    <li>
                        <div class="w-100 btn-wrapper">
                            <button type="submit" class="common-btn">Submit</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default GetObligationForm