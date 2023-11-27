"use client"
import React from 'react'
import { useState, useEffect } from "react";
import BlogItem from './BlogItem';
import InnerBanner from '@/app/otherComp/InnerBanner';
import { CommonHeading } from '@/app/components/headingtextbutton/HeadingButton';
import Link from 'next/link';
import BreadCrumbs from '@/app/components/breadcrumb/BreadCrumbs';

const BlogListComp = ({ serviceId, blogdetailsdata }) => {



    const [filterVal, SetfilterVal] = useState({
        month: '',
        service: '',
        keyword: ''
    })
    const handleChange = (event) => {
        SetfilterVal({ ...filterVal, [event.target.name]: event.target.value });
        SetCurNumber(1)
        SetlastNumberItems(0)
    };
    const [curNumber, SetCurNumber] = useState(1)
    const [lastNumberItems, SetlastNumberItems] = useState(0)
    const [curNumberItems, SetCurNumberItems] = useState(5)
    const [blogdata, setBlogData] = useState(null);
    const [blogmonthdata, setBlogMonthData] = useState(null);
    const [loading, setLoading] = useState(true);

    const servId = serviceId == '' || serviceId == undefined ? '' : '&service_id=' + serviceId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Blog Page Data
                const blogpagedata = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blogs-with-paginate?page=${curNumber}${servId}&publish_date=${filterVal.month}&query_string=${filterVal.keyword}`, {

                });
                const currentblogpagedata = await blogpagedata.json();
                setBlogData(currentblogpagedata);

                //Blog Page Month Data
                const blogpagemonthdata = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get_blog_list_page`, {


                });
                const currentblogpagemonthdata = await blogpagemonthdata.json();
                setBlogMonthData(currentblogpagemonthdata);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [filterVal, curNumber]);

    if (loading) {
        return (
            <section className="loder-sec d-flex justify-content-center align-items-center">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </section>
        );
    }

    if (!blogdata, !blogmonthdata) {
        return <div className='text-center'>No data available.</div>;
    }
    const itemsCount = []
    let totalBlogCount = Math.ceil(blogdata.total_count / 9)
    for (let i = 1; i <= totalBlogCount; i++) {
        itemsCount.push([i])
    }
    const handleItemClick = (event) => {
        const value = event.target.textContent;
        SetCurNumber(value)
    };
    const NavItemsChangeReverse = () => {
        if (curNumberItems > 5) {
            SetlastNumberItems(lastNumberItems - 5)
            SetCurNumberItems(curNumberItems - 5)
        }
    }
    const NavItemsChange = () => {
        if (curNumberItems < totalBlogCount) {
            SetlastNumberItems(lastNumberItems + 5)
            SetCurNumberItems(curNumberItems + 5)
        }
    }

    const schemaBlog = `
    {
        "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
    "@id": "https://www.vinsys.com/blog/"
},
    "headline": "Vinsys Blog Posts & Updates",
    "image": "",
    "author": {
        "@type": "Organization",
    "name": "Vinsys",
    "url": "https://www.vinsys.com/about-us"
},
    "publisher": {
        "@type": "Organization",
    "name": "Vinsys Experts",
    "logo": {
        "@type": "ImageObject",
    "url": "https://www.vinsys.com/images/logo.png"
}
},
    "datePublished": "2019-01-01",
    "dateModified": "2023-08-14"
}
    `
    const schemaHomes = `
{
    "@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Vinsys",
"image": "https://www.vinsys.com/images/logo.png",
"@id": "https://www.vinsys.com/",
"url": "https://www.vinsys.com/",
"telephone": "+91-20-67444700",
"address": {
    "@type": "PostalAddress",
"streetAddress": "Shivaji Niketan, Tejas Society, Behind Kothrud Bus Stand, Near Mantri Park, Kothrud,",
"addressLocality": "Pune",
"postalCode": "411038",
"addressCountry": "IN" 
},
"geo": {
    "@type": "GeoCoordinates",
"latitude": 18.50014081530139,
"longitude": 73.81028299458153 
},
"openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
],
"opens": "00:00",
"closes": "23:59" 
} 
}
`
    return (
        <>

            <InnerBanner image={blogdetailsdata.banner.media} />
            <BreadCrumbs/>
            <section className="blogListing-sec common-spacing-top-bottom" id="blog-count">
                <div className="inner-container">
                    <form className="form">
                        <ul className="common-from d-flex" >
                            <li>
                                <select value={filterVal.month} onChange={handleChange} name="month" id="month" form="">
                                    <option value="">View All</option>
                                    {blogdata.published_month_year.map((val) => {
                                        return (
                                            <>
                                                <option value={val.published_date} key={val.published_date}>{val.published_date}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </li>

                            <li className="search-box d-flex">
                                <input type="text" onChange={handleChange} value={filterVal.keyword} name="keyword" placeholder="Search" />

                            </li>
                        </ul>
                    </form>
                    <BlogItem>
                        {blogdata.blogs.map((val) => {
                            return (
                                <>
                                    <li className="item wow zoomIn" data-wow-delay="100ms" key={val.id}>
                                        <Link href={`/blog/${val.slug}`} className="inner-content">
                                            <div className="img-box">
                                                <img src={val.thumb_image} alt="Blog" />

                                            </div>
                                            <div className="content-box">

                                                <div className="blog-name">
                                                    {`${val.title.slice(0, 60)}....`}
                                                </div>
                                                <div className="name-wrapper d-flex align-items-center">
                                                    <div className="user-img">
                                                        {val.author != null ? <img src={val.author.image} alt={val.author.alt != null ? val.author.alt : val.author.name} /> : <img src={`/images/blog-author-default.png`} alt="Vinsys" />}
                                                    </div>
                                                    <div className="name">
                                                        {val.author != null ? val.author.name : "Vinsys"} <span>{val.published_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>

                                </>
                            )
                        })}
                    </BlogItem>
                    {/* Pagination */}
                    <ul className='pagination d-flex align-items-center justify-content-center '>
                        <li onClick={NavItemsChangeReverse} className="arrow prev"><img src={`/images/paginationArrow.svg`} alt="" /></li>
                        {itemsCount.slice(lastNumberItems, curNumberItems).map((val) => {
                            return (
                                <li onClick={handleItemClick} className={curNumber == val ? 'active' : 'non-active'} key={val} id={val}><a href="#blog-count">{val}</a></li>
                            )
                        })}
                        <li onClick={NavItemsChange} className="arrow next"><img src={`/images/paginationArrow.svg`} alt="" /></li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default BlogListComp