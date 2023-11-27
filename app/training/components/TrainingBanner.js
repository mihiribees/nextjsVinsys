const TrainingBanner = ({children, heading}) => {
    return (
        <section className="home-banner">
            <img src={`/images/training-home-banner-min.jpg`} alt="" className="w-100" />
            <div className="banner-text">
                <div className="container">
                    <div className="heading">
                        <div>
                            <span>{heading}</span>
                        </div>
                    </div>                    
                    <div className="description">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TrainingBanner