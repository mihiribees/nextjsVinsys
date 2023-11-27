import { getRequest } from "@/lib/apicall";
import Link from "next/link";
import Pagination from "../otherComp/Pagination";
import BlogListComp from "./components/BlogListComp";
import HomeHeader from "../components/header/HomeHeader";


export async function generateMetadata({ params, searchParams }, parent) {
  const metadata = await getRequest("get_blog_list_page");

  const previousImages = (await parent).openGraph?.images || [];


  let title = metadata.title;
  let description = metadata?.seo?.meta_description ? metadata.seo.meta_description : metadata.title;
  let ogImage = metadata?.seo?.og_image ? metadata.seo.og_image : "https://www.vinsys.com/images/logo.png";

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
  };
}



const BlogPage = async () => {
  const data = await getRequest(`get_blog_list_page`)

  return (
    <>
     <HomeHeader/>
      <BlogListComp serviceId="" blogdetailsdata={data} />
    </>

  )
}

export default BlogPage