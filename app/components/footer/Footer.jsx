import { getRequest } from '@/lib/apicall';
import Link from 'next/link';
import React from 'react'
import CountryData, { CityData } from './components/FooterCountry';
import FooterForm from './components/FooterForm';

const Footer = async () => {

  const data = await getRequest("footer_menu");
  const Generladata = await getRequest("get-general-settings");


  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="top d-flex justify-content-between align-items-center">
            <div className="form">
              <div className="title">Let’s Talk</div>
              {/* <form onSubmit={handleOnClick}>
                            <ul className="d-flex justify-content-between">
                                <li>
                                    <input type="text" onChange={HandlesChange} placeholder="Your Name" id="name" name="name" required />
                                    <input type="email" onChange={HandlesChange} placeholder="Your Email" id="uemail" name="email" required />
                                </li>
                                <li>
                                    <select onChange={HandlesChange} name="country" required>
                                        <option value="">Select Country</option>
                                        {enqdata.map((val) => {
                                            return (
                                                <option value={val.id} key={val.id}>{val.name}</option>
                                            )
                                        })}
                                    </select>
                                    <textarea name="message" onChange={HandlesChange} id="message" rows="2" placeholder="Your Message" required></textarea>
                                    <input type="checkbox" name="fax" style={{ display: 'none' }} />
                                </li>
                                <li className="w-100">
                                    <div className="links">
                                        <button type="submit" className="common-btn" disabled={isLoading}>Submit Now <i className="icon">&nbsp;</i></button>
                                    </div>

                                    <p className="errorMsg">{errormessage}</p>

                                </li>
                            </ul>
                        </form> */}
              <FooterForm />
            </div>
            <div className="image">
              <img className="w-100" src={`/images/footer-image.png`} alt="" />
            </div>
          </div>
          <div className="bottom  d-flex justify-content-between">
            {data.contact_locaiton.map((val) => {
              const countryCode = (`+${val.country.country_code}`);
              return (

                <CountryData iconImage={val.country.flag} country={val.country.name} key={val.country.id}>
                  {val.location.map((val) => {
                    return (
                      <CityData
                        key={val.id}
                        cityname={val.title}
                        phone={`${countryCode} ${val.phone_number}`}
                        emailText={val.email}
                        addText={`${val.address}  ${val.postal_code !== null ? "-" + val.postal_code : ''}`}
                      />
                    )
                  })}
                </CountryData>
              )
            })}
          </div>
          <div className="bottom-footer d-flex justify-content-between align-items-center">
            <div className="left">
              {Generladata.copyright_text}
            </div>
            <div className="social-icons d-flex justify-content-center align-items-center">
              <p>Follow Us: </p>
              <a href={Generladata.facebook_url != null ? Generladata.facebook_url : 'https://www.facebook.com/vinsys'} target="_blank"><img src={Generladata.facebook_icon != null ? Generladata.facebook_icon : `/images/social-fb.png`} alt="" /></a>

              <a href={Generladata.twitter_url != null ? Generladata.twitter_url : 'https://twitter.com/VinsysOfficial'} target="_blank"><img src={Generladata.twitter_icon != null ? Generladata.twitter_icon : `/images/social-twitter.png`} alt="" /></a>

              <a href={Generladata.linkedin_url != null ? Generladata.linkedin_url : 'https://www.linkedin.com/company/vinsys/'} target="_blank"><img src={Generladata.linkedin_icon != null ? Generladata.linkedin_icon : `/images/social-linkdin.png`} alt="" /></a>

              <a href={Generladata.youtube_url != null ? Generladata.youtube_url : 'https://www.youtube.com/channel/UCRVoaxoz_NeN6_2EJqm5a3Q'} target="_blank"><img src={Generladata.youtube_icon != null ? Generladata.youtube_icon : `/images/social-youtube.png`} alt="" /></a>
            </div>
            <div className="right">
              <ul className="d-flex">
                {data.menu_data.map((val) => {
                  return (
                    <li key={val.id}><Link href={val.url}>{val.title}</Link></li>
                  )
                })}

              </ul>
            </div>
          </div>
        </div>
      </footer>
    
      
    </>

  )
}

export default Footer