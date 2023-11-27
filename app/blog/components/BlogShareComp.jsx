"use client"

import Image from "next/image";
import Link from "next/link";
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
} from 'react-share';

const BlogShareComp = () => {
    let postUrl

    if (typeof window !== "undefined") {
         postUrl = window?.location?.href;
    }




    return (
        <>
            {
                postUrl && <>
                    <ul className="d-flex align-items-center">
                        <li>
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank">
                                <Image src={`/images/social-icons/icon-facebook.svg`} alt="Facebook" height={24} width={24} />
                            </Link>
                        </li>
                        <li>
                            <Link href={`https://twitter.com/share?url=${encodeURIComponent(postUrl)}`} target="_blank">
                                <Image src={`/images/social-icons/icon-twitter.svg`} alt="Twitter" height={24} width={24} />
                            </Link>
                        </li>
                        <li>
                            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`} target="_blank">
                                <Image src={`/images/social-icons/icon-linkedin.svg`} alt="Linkedin" height={24} width={24} />
                            </Link>
                        </li>
                        {/* <li>
                <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle + " " + postUrl)}`} target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/images/social-icons/icon-whatsapp.svg`} alt="Whatsapp" />
                </Link>
            </li> */}
                    </ul>
                </>

            }

        </>
    )
}

export default BlogShareComp