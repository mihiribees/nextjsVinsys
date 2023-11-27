import React from 'react';
import { useLocation } from 'react-router';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';


const ShareBlog = () => {

    let location = useLocation();

    let currentUrl = "https://staging.vinsys.com" + location.pathname;


    // const ShareBlog = ({ shareUrl,title}) => {
    const shareUrl = 'https://staging.vinsys.com/blog/best-25-ai-artificial-intelligence-tools/';
    // const shareUrl = 'https://blog.interactivebees.com/don%E2%80%99t-sell-product-sell-story';
    const title = 'Check out this awesome content!';

    return (
        <>
            <div>
                {/* Your content goes here */}

                {/* Share buttons */}
                <FacebookShareButton url={encodeURI(currentUrl)} quote="Vinsys is a great platform" hashtag="#vinysij">
                    Facebook
                </FacebookShareButton>

                <TwitterShareButton url={encodeURI(shareUrl)} title={title}>
                    Twitter
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    LinkedIn
                </LinkedinShareButton>
            </div>

        </>
    )
}

export default ShareBlog