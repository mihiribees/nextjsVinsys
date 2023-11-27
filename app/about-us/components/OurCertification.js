const OurCertification = ({children,title,image})=>{
    return(
        <section className="certificates-sec common-spacing-top-bottom">
            <div className="inner-container">
                <div className="inner-content d-flex align-items-center">
                    <div className="left-section">
                        <div className="certificate-heading">{title}</div>
                        <ul className="items">
                            {children}                            
                        </ul>
                    </div>
                    <div className="right-section img-wrapper d-flex justify-content-center">
                        <img src={image} alt="Certifications" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCertification;