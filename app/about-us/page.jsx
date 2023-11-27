import { getRequest } from '@/lib/apicall';
import React from 'react';
import InnerBanner from '../components/banner/InnerBanner';
import AboutOverview from './components/AboutOverview';
import { CommonBtnFancyBox, CommonHeading } from '../components/headingtextbutton/HeadingButton';
import VisionMission from './components/VisionMission';
import OurCertification from './components/OurCertification';
import Image from 'next/image'
import KeyFeature from './components/KeyFeature';
import VinsysJourney from './components/VinsysJourney';
import ChooseVinsys from './components/ChooseVinsys';
import ManagementTeam from './components/ManagementTeam';
import AwardsAccolades from './components/AwardsAccolades';
import HomeHeader from '../components/header/HomeHeader';

export async function generateMetadata({ params, searchParams }, parent) {


  const metadata = await getRequest("get-about-page-details");


  const previousImages = (await parent).openGraph?.images || []

  return {
    description: metadata?.seo?.meta_description ? metadata.seo.meta_description : metadata.heading,
    title: metadata?.seo?.meta_title ? metadata.seo.meta_title : metadata.heading,
    openGraph: {
      images: [`${metadata?.seo?.og_image?.media}`, ...previousImages],
    },
  }
}


const AboutUsPage = async () => {



  const data = await getRequest("get-about-page-details");

  const aboutFullOverview = <div className="detail-wrapper" dangerouslySetInnerHTML={{ __html: data.intro_section.content }} />
  return (
    <>
      <HomeHeader />

      <InnerBanner image={data.banner.media} />
      <AboutOverview style="" image={data.intro_section.image.media} fullContentRequire="yes-require" fullContent={aboutFullOverview}>
        <CommonHeading mainHeading={data.intro_section.heading} subHeading={data.intro_section.subheading} />
        <div className="detail-wrapper" dangerouslySetInnerHTML={{ __html: data.intro_section.intro }} />
      </AboutOverview>
      <VisionMission
        missionImage={data.mission_section.image.media}
        missionImageAlt={data.mission_section.image.alt}
        missionTitle={data.mission_section.heading}
        missionIntro={data.mission_section.intro}
        visionImage={data.vision_section.image.media}
        visionImageAlt={data.vision_section.image.alt}
        visionTitle={data.vision_section.heading}
        visionIntro={data.vision_section.intro}
      />

      <OurCertification title={data.cirtification_section.heading} image={data.cirtification_section.image.media}>
        {data.cirtification_section.critifications_list.map((val) => {
          return (
            <li key={val.id}>
              {/* <Image
                src={val.image}
                alt="Picture of the Certificate"
                loading='lazy'
                width={100}
                height={100}
                layout="intrinsic"
                
                objectFit="cover" 
                objectPosition="center center"
               
              />
              {val.title} */}
              <img src={val.image} alt="" /> {val.title}
            </li>
          )
        })}
      </OurCertification>

      <KeyFeature image={data.key_feature_section.image.media} title={data.key_feature_section.heading} subTitle={data.key_feature_section.subheading}>
        {data.key_feature_section.keyfeature_list.map((val) => {
          return (
            <li className="item d-flex" key={val.id}>
              <div className="left-icon">
                <img src={val.image} alt={val.alt} />
              </div>
              <div className="content">
                <div className="feature-heading">
                  {val.title}
                </div>
                <p>{val.details}</p>
              </div>
            </li>
          )
        })}
      </KeyFeature>

      <VinsysJourney title={data.journey_section.heading} subTitle={data.journey_section.subheading}>
        {data.journey_section.journey_list.map((val) => {
          return (
            <li className="wow zoomIn" data-wow-delay={`${val.id}00ms`} key={val.id}>
              <div className="content">
                <div className="year">{val.year}</div>
                <p>{val.details}</p>
              </div>
            </li>
          )
        })}
      </VinsysJourney>

      <ChooseVinsys title={data.reason_section.heading} subTitle={data.reason_section.subheading}>
        {data.reason_section.reason_list.map((val) => {
          return (
            <li key={val.id}>
              <div className="content-box">
                <div className="icon">
                  <img src={val.image} alt={val.alt} />
                </div>
                <span>{val.title}</span>
              </div>
            </li>
          )
        })}
      </ChooseVinsys>
      <ManagementTeam title={data.team_section.heading}>
        {data.team_section.team_list.map((val) => {
          return (
            <div className="item" key={val.id}>
              <div className="top-section">
                <div className="heading-section d-flex align-items-center">
                  <div className="teamImg">
                    <div className='image'>
                      <img src={val.image} alt={val.alt} />
                    </div>
                  </div>
                  <div className="teamName">
                    {val.name} <span>{val.designation}</span>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: `${val.about.slice(0, 300)}....` }} />
              </div>
              <CommonBtnFancyBox class="short" link={`#full-text${val.id}`} text="Read More" />
              <div className='full-text-team-profile' id={`full-text${val.id}`}>
                <div className="teamName">
                  {val.name} <span>{val.designation}</span>
                </div>
                <div className='description' dangerouslySetInnerHTML={{ __html: val.about }} />
              </div>
            </div>
          )
        })}

      </ManagementTeam>
      <AwardsAccolades title={data.award_section.heading}>
        {data.award_section.award_list.map((val) => {
          return (
            <li className="item" key={val.id}>
              <div className="content-box">
                {val.details}
              </div>
            </li>
          )
        })}

      </AwardsAccolades>

    </>
  )
}

export default AboutUsPage