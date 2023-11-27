import { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton"
import Link from "next/link"

const TrainingBlog = () => {
    return (
        <section className="expertPrespective-section common-spacing-top-bottom">
            <div className="inner-container">
                <CommonHeading class="text-center" mainHeading="Expert Perspectives" subHeading="Blog"/>
                <div className="items mt-60 d-flex">
                    <div className="item d-flex align-items-center">
                        <div className="img-wrapper">
                            <img src={`/images/courses/training/blog-1.jpg`} alt="Blog Name" />
                                <div className="date">3 Mar</div>
                        </div>

                        <div className="content">
                            <div className="minute">5 Min Read</div>
                            <div className="title">8 Best Cybersecurity Certification Courses
                                to Accelerate Career in 2023</div>
                            <p>Cybersecurity ensures the security of digital information. It comprises practices and processes that aim at protecting networks, systems, programs...</p>
                            <Link className="read-more" href="">Know More</Link>
                        </div>
                    </div>
                    <div className="item d-flex align-items-center">
                        <div className="img-wrapper">
                            <img src={`/images/courses/training/blog-2.jpg`} alt="Blog Name" />
                                <div className="date">3 Mar</div>
                        </div>

                        <div className="content">
                            <div className="minute">5 Min Read</div>
                            <div className="title">8 Best Cybersecurity Certification Courses
                                to Accelerate Career in 2023</div>
                            <p>Cybersecurity ensures the security of digital information. It comprises practices and processes that aim at protecting networks, systems, programs...</p>
                            <Link href="/" className="read-more" to="">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TrainingBlog