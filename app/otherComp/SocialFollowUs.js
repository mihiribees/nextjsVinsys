
const SocialFollowUs = ()=>{
    
    return(
        <section className="follow-us-sec common-spacing-top-bottom">
            {/* <div className="inner-container">
                <div className="inner-content d-flex align-items-center">
                    <div className="img-wrapper">
                        <img src={`${process.env.PUBLIC_URL}/images/event/followus.png`} alt="" />
                    </div>
                    <div className="content-box">
                        <CommonHeading class="small-heading bottom-line" mainHeading="Follow Us On"/>       
                        <ul className="social-icons d-flex">
                            <li className={socialLinks.facebook==null ? 'no-require' : 'require'}>
                               <SocialIcon link={socialLinks.facebook} icon={FacebookIcon} text="Facebook"/>
                            </li>
                            <li className={socialLinks.twitter==null ? 'no-require' : 'require'}>
                               <SocialIcon link={socialLinks.twitter} icon={TwitterIcon} text="Twitter"/>
                            </li>
                            <li className={socialLinks.instagram==null ? 'no-require' : 'require'}>
                               <SocialIcon link={socialLinks.instagram} icon={InstagramIcon} text="Instagram"/>
                            </li>
                            <li className={socialLinks.linkdin==null ? 'no-require' : 'require'}>
                               <SocialIcon link={socialLinks.linkdin} icon={LinkdinIcon} text="Linkedin"/>
                            </li>
                            <li className={socialLinks.pinterest==null ? 'no-require' : 'require'}>
                               <SocialIcon link={socialLinks.pinterest} icon={PrintestIcon} text="Pinterest"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

const SocialIcon = (props)=>{
    return(
        <a href={props.links} target="_blank">
            <img src={props.icon} alt="" />
            {props.text}
        </a>
    )
}

export default SocialFollowUs
export {SocialIcon}