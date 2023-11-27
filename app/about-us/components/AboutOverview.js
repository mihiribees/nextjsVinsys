import RatingAndStar from "@/app/components/RatingAndStar";


const AboutOverview = ({ style, image, children, fullContentRequire, fullContent, star, rating }) => {
    
    return (
        <section className={`about-us-sec common-spacing-top-bottom ${style}`}>
            <div className="inner-container">
                <div className="inner-content d-flex align-items-center ">
                    <div className="img-wrapper left-section">
                        <div className="d-flex justify-content-center">
                            <div >
                                <img src={image} alt="" />
                                {
                                    star !== undefined && rating !== undefined && star !== null && rating !== null && star !== 0 && rating !== 0 && !Number.isNaN(star) && !Number.isNaN(rating) && <>
                                        <RatingAndStar star={star} rating={rating} />
                                    </>
                                }

                            </div>


                        </div>

                    </div>
                    <div className="right-section">
                        {children}
                    </div>
                </div>
                <div className={`w-100 full-content ${fullContentRequire}`}>
                    {fullContent}
                </div>
            </div>
        </section>
    )
}
export default AboutOverview;