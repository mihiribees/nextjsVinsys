import BreadCrumbs from '@/app/components/breadcrumb/BreadCrumbs';
import HomeHeader from '@/app/components/header/HomeHeader';
import { CommonHeading } from '@/app/components/headingtextbutton/HeadingButton';
import InnerBannerGradiant from '@/app/otherComp/InnerBannerGradiant';
import { getRequest } from '@/lib/apicall'
import Link from 'next/link';
import BlogShareComp from '../components/BlogShareComp';

export async function generateMetadata({ params, searchParams }, parent) {

    const metadata = await getRequest(`get_blog_by_slug/${params.slug}`);


    const previousImages = (await parent).openGraph?.images || [];

    let title = metadata.title;
    let description = metadata?.meta_description ? metadata.meta_description : metadata.title;
    let ogImage = metadata?.og_image ? metadata.og_image : metadata?.thumb_image;


    return {
        description,
        title,
        openGraph: {
            images: [`${ogImage}`, ...previousImages],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator: '@vinsys',
            images: [`${ogImage}`, ...previousImages],
        },

        // title: metadata.meta_title != null ? metadata.meta_title : metadata.title,
        // description: metadata.meta_description != null ? metadata.meta_description : metadata.title,
        // openGraph: {
        //     images: [`${metadata?.og_image}`, ...previousImages],
        // },

    }
}


const BlogPageDetails = async ({ params }) => {

    const data = await getRequest(`get_blog_by_slug/${params.slug}`)
    return (
        <>
            <HomeHeader />
            <InnerBannerGradiant>
                <CommonHeading class="text-center" mainHeading="Our Blogs" />
            </InnerBannerGradiant>
            <BreadCrumbs />

            <section className="blogDetail-sec common-spacing-top-bottom">
                <div className="inner-container">
                    <div className="img-box">
                        <img className="w-100" src={data.banner} alt="Blog" />
                        {/* <div className="label">{data.our_service.title}</div> */}
                    </div>
                    <div className="content-box">
                        <div className="blog-title">
                            {data.tags.map((val) => {
                                return (
                                    <span key={val.title}>{val.title}</span>
                                )
                            })}
                        </div>
                        <CommonHeading mainHeading={data.title} />
                        <div className="shareLinks d-flex align-items-center justify-content-between">
                            <div className="share-sec d-flex align-items-center">
                                <div className="label">Share Now</div>
                                <BlogShareComp/>
                                {/* <ul className="d-flex align-items-center">
                                    <li>
                                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank">
                                            <img src={`/images/social-icons/icon-facebook.svg`} alt="Facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`https://twitter.com/share?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`} target="_blank"><img src={`${process.env.PUBLIC_URL}/images/social-icons/icon-twitter.svg`} alt="Twitter" /></Link>
                                    </li>
                                    <li>
                                        <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`} target="_blank">
                                            <img src={`/images/social-icons/icon-linkedin.svg`} alt="Linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle + " " + postUrl)}`} target="_blank">
                                            <img src={`${process.env.PUBLIC_URL}/images/social-icons/icon-whatsapp.svg`} alt="Whatsapp" />
                                        </Link>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="last-modified-date">{data.modify_date != null ? `Last Modified:${data.modify_date}` : ''} </div>
                        </div>
                    </div>
                    <div className="detail-wrapper" dangerouslySetInnerHTML={{ __html: data.content }}>

                    </div>
                    <div className="name-wrapper d-flex">
                        <div className="user-img">
                            {data.author != null ? <img src={data.author.image} alt={data.author.alt != null ? data.author.alt : data.author.name} /> : <img src={`/images/blog-author-default.png`} alt="Vinsys" />}
                        </div>
                        <div className="name">
                            {data.author != null ? data.author.name : "Vinsys"}
                            {data.author !== null && data.author.linkedin !== null && data.author.linkedin !== " " && <span><a href={data.author.linkedin} target="_blank">LinkedIn</a></span>}

                            <span>{data.published_date}</span>

                            {/* {data.author != null ? data.author.name : "Vinsys"} {data.author != null && data.linkedin != null && <span><a href={data.author.linkedin} target="_blank">LinkedIn</a></span>} <span>{data.published_date}</span> */}
                            <div className="description" dangerouslySetInnerHTML={{ __html: data.author != null ? data.author.about : '' }} />
                        </div>
                    </div>

                </div>
            </section>



            {/* <h1>Blog details Start</h1>
      {
        JSON.stringify(data)
      }
      <h1>Blog details End</h1> */}

        </>

    )
}

export default BlogPageDetails
