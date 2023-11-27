import CommonBtn from "@/app/components/headingtextbutton/HeadingButton"

const CourseFilter = ({formreq, resultsearch}) => {
    return (
        <section className="cousesFilter common-spacing-top-bottom dark-bg">
            <div className="inner-container">
                <form action="#" className={formreq}>
                    <ul className="common-from d-flex w-80">
                        <li>
                            <label>Brand:</label>
                            <select name="brand" id="brand" form="">
                                <option value="all">All</option>
                                <option value="Microsoft">Microsoft</option>
                            </select>
                        </li>
                        <li className="form-item checkboxs-btn d-flex">
                            <label for="">Delivery Format:</label>
                            <div className="checkbox-wrapper d-flex">
                                <div className="checkbox d-flex align-items-center">
                                    <input type="checkbox" id="online" name="online" value="online"/>
                                    <label for="online"><img src={`/images/guarantee/online.svg`} alt="" /> Online</label>
                                </div>
                                <div className="checkbox d-flex align-items-center">
                                    <input type="checkbox" id="classroom" name="classroom" value="classroom" />
                                    <label for="classroom"><img src={`/images/guarantee/classroom.svg`} alt=""/> Classroom</label>
                                </div>
                            </div>
                        </li>
                        <li className="form-item">
                            <label>Location:</label>
                            <select name="location" id="location" form="">
                                <option value="all">All</option>
                                <option value="india">India</option>
                            </select>
                        </li>
                    </ul>
                </form>

                <div className={`items ${resultsearch}`} >
                    <div className="searchfilter d-flex align-items-center">
                        <div className="search-result">1987 Courses Found</div>
                    </div>
                    <div className="item d-flex justify-content-between">
                        <div className="left-section d-flex align-items-start">
                            <div className="icon-wrapper">
                                <img src={`/images/guarantee/course-icon.svg`} alt="" />
                            </div>
                            <div className="content-box">
                                <div className="detail">
                                    <div className="course-name">Administering a SQL Database (55316)</div>
                                    <p>CompTIA Security+ course equips teams with the knowledge and skills required to assess the security posture of an enterprise environment, recommend and implement appropriate security solutions; monitor and secure hybrid environments, including </p>
                                    <div className="duration">Delivery Format : <span>Virtual Classroom Live</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="btn-wrapper">
                                <CommonBtn link="" text="Enroll Now"/>                                
                                <CommonBtn  class="light-bg text-center display-block" link="" text="View Details"/>                               
                            </div>
                        </div>
                    </div>
                    <div className="item d-flex justify-content-between">
                        <div className="left-section d-flex align-items-start">
                            <div className="icon-wrapper">
                                <img src={`/images/guarantee/course-icon.svg`} alt="" />
                            </div>
                            <div className="content-box">
                                <div className="detail">
                                    <div className="course-name">Administering a SQL Database (55316)</div>
                                    <p>CompTIA Security+ course equips teams with the knowledge and skills required to assess the security posture of an enterprise environment, recommend and implement appropriate security solutions; monitor and secure hybrid environments, including </p>
                                    <div className="duration">Delivery Format : <span>Virtual Classroom Live</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="btn-wrapper">
                                <CommonBtn link="" text="Enroll Now"/>                                
                                <CommonBtn  class="light-bg text-center display-block" link="" text="View Details"/>                               
                            </div>
                        </div>
                    </div>
                    <div className="item d-flex justify-content-between">
                        <div className="left-section d-flex align-items-start">
                            <div className="icon-wrapper">
                                <img src={`/images/guarantee/course-icon.svg`} alt="" />
                            </div>
                            <div className="content-box">
                                <div className="detail">
                                    <div className="course-name">Administering a SQL Database (55316)</div>
                                    <p>CompTIA Security+ course equips teams with the knowledge and skills required to assess the security posture of an enterprise environment, recommend and implement appropriate security solutions; monitor and secure hybrid environments, including </p>
                                    <div className="duration">Delivery Format : <span>Virtual Classroom Live</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="btn-wrapper">
                                <CommonBtn link="" text="Enroll Now"/>                                
                                <CommonBtn  class="light-bg text-center display-block" link="" text="View Details"/>                               
                            </div>
                        </div>
                    </div>
                    <div className="item d-flex justify-content-between">
                        <div className="left-section d-flex align-items-start">
                            <div className="icon-wrapper">
                                <img src={`/images/guarantee/course-icon.svg`} alt="" />
                            </div>
                            <div className="content-box">
                                <div className="detail">
                                    <div className="course-name">Administering a SQL Database (55316)</div>
                                    <p>CompTIA Security+ course equips teams with the knowledge and skills required to assess the security posture of an enterprise environment, recommend and implement appropriate security solutions; monitor and secure hybrid environments, including </p>
                                    <div className="duration">Delivery Format : <span>Virtual Classroom Live</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="btn-wrapper">
                                <CommonBtn link="" text="Enroll Now"/>                                
                                <CommonBtn  class="light-bg text-center display-block" link="" text="View Details"/>                               
                            </div>
                        </div>
                    </div>
                    <div className="item d-flex justify-content-between">
                        <div className="left-section d-flex align-items-start">
                            <div className="icon-wrapper">
                                <img src={`/images/guarantee/course-icon.svg`} alt="" />
                            </div>
                            <div className="content-box">
                                <div className="detail">
                                    <div className="course-name">Administering a SQL Database (55316)</div>
                                    <p>CompTIA Security+ course equips teams with the knowledge and skills required to assess the security posture of an enterprise environment, recommend and implement appropriate security solutions; monitor and secure hybrid environments, including </p>
                                    <div className="duration">Delivery Format : <span>Virtual Classroom Live</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="btn-wrapper">
                                <CommonBtn link="" text="Enroll Now"/>                                
                                <CommonBtn  class="light-bg text-center display-block" link="" text="View Details"/>                               
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}
export default CourseFilter