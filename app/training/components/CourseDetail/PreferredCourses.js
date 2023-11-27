import { CommonHeading } from "../../other/Headingtext-Btn";

const PreferredCourses = ({heading,subheading,children}) => {
    return (
        <section className="preferedCourseSection gradiant-bg common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading={heading} subHeading={subheading}/>                
                <div className="items d-flex mt-60">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default PreferredCourses;
