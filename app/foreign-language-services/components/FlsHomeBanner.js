import CommonBtn from "@/app/components/headingtextbutton/HeadingButton"



const FlsHomeBanner = ({ heading, subheading, btnText, btnLink, media, mediaAlt }) => {
    return (
        <section className="home-banner flsHomeBanner">
            <div className="container">
                <div className="inner-content d-flex align-items-center">
                    <div className="content-wrapper item">
                        <div className="heading">{heading}</div>
                        <p>{subheading}</p>
                       
                                <div className={btnLink === null ? 'btn-wrapper mt-30 d-flex no-require' : 'btn-wrapper mt-30 d-flex'} >
                                    <CommonBtn link={btnLink} text={btnText} />
                                </div>
                            

                    </div>
                    <div className="img-wrapper item">
                        <img src={media} alt={mediaAlt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlsHomeBanner