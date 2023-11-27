import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"


const SkillGap = () => {
    return (
        <section className="skill-gap common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Skill Gap" subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"/>
                <div className="image_container mt-60">
                    <img className="w-100 h-60px" src={`/images/training/skill gap_new.jpg`} alt="" />
                        <div className="image">

                        </div>
                        <div className="detail">
                            <div className="small-heading">How to conduct a skills gap analysis ?</div>
                            <p>Enroll your teams now in courses from top Cybersecurity vendors like CompTIA, EC-Council, Microsoft, AWS, and more and empower your teams with in-demand cybersecurity skills. Get great discounts on cybersecurity courses and FREE consultation on the learning plansMicrosoft, AWS, and </p>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default SkillGap