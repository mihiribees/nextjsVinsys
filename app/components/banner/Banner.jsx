"use client"

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import CommonBtn from '../headingtextbutton/HeadingButton';
import LoaderComp from '../LoaderComp/LoaderComp';



const Banner = ({ homeBanerData }) => {

    const [isDesktOP, setIsDesktOP] = useState(null);

    const handleResize = () => {
        setIsDesktOP(window.innerWidth);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])



    return (
        <>
        {
            isDesktOP === null ? <>
            <LoaderComp/>
            </>:<>
            
            <section className={`home-banner ${((isDesktOP > 1023) && homeBanerData.banner[0].media_type == 'vedio') || ((isDesktOP < 1023) && homeBanerData.mobile_banner[0].media_type == 'vedio') ? 'video-banner' : 'image-banner'}`}>
                {
                    ((isDesktOP > 1023) && homeBanerData.banner[0].media_type == 'vedio') || ((isDesktOP < 1023) && homeBanerData.mobile_banner[0].media_type == 'vedio') ?

                        <ReactPlayer
                            url={(isDesktOP > 1023) ? homeBanerData.banner[0].media : homeBanerData.mobile_banner[0].media}
                            className="video-banner"
                            playing={true}
                            playsinline={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                        />
                        :
                        <>
                            <img src={(isDesktOP > 1023) ? homeBanerData.banner[0].media : homeBanerData.mobile_banner[0].media} alt="" className="w-100" />
                        </>
                }

                <div className="banner-text">
                    <div className="container">
                        <div className="heading">
                            <div dangerouslySetInnerHTML={(isDesktOP > 1023) ? { __html: homeBanerData.banner[0].heading } : { __html: homeBanerData.mobile_banner[0].heading }} />
                        </div>
                        <div className="description" dangerouslySetInnerHTML={(isDesktOP > 1023) ? { __html: homeBanerData.banner[0].subheading } : { __html: homeBanerData.mobile_banner[0].subheading }} >

                        </div>
                        <div className="links">
                            <CommonBtn class="" link={(isDesktOP > 1023) ? homeBanerData.banner[0].url : homeBanerData.mobile_banner[0].url} text={(isDesktOP > 1023) ? homeBanerData.banner[0].button_text : homeBanerData.mobile_banner[0].button_text} />
                        </div>
                    </div>
                </div>
            </section>
            </>
        }
           
        </>
    )
}

export default Banner