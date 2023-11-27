const VisionMission = ({missionImage,missionImageAlt,missionTitle,missionIntro,visionImage,visionImageAlt,visionTitle,visionIntro}) =>{
    return(
        <section className="mission-vission-sec common-spacing-top-bottom">
            <div className="inner-container">                
                <div className="inner-content d-flex justify-content-between">
                    <div className="item">
                        <div className="img-wrapper">
                            <img src={missionImage} alt={missionImageAlt} />
                        </div>
                        <div className="mv-heading">{missionTitle}</div>
                        <p>{missionIntro}</p>
                    </div>                    
                    <div className="item">
                        <div className="img-wrapper">
                            <img src={visionImage} alt={visionImageAlt} />
                        </div>
                        <div className="mv-heading">{visionTitle}</div>
                        <p>{visionIntro}</p>
                    </div> 
                </div>
            </div>           
        </section>
    )
}

export default VisionMission;