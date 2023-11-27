
import HomeHeader from "../components/header/HomeHeader";
import TrainingBanner from "./components/TrainingBanner";
import TrainingCourses from "./components/TrainingCourses";
import Partners, { Clients } from "../components/partners/PartnerClient";
import TrainingServices from "./components/TrainingServices";
import WhyVinsys from "./components/WhyVinsys";
import TrainingBlog from "./components/TrainingBlog";



export default function TrainingHomepage() {
  return (
    <>
     

      <HomeHeader />

      <TrainingBanner heading="Unleash Your Potential">
        <p>
          Unlock Limitless Opportunities with Cutting-Edge Training and
          Certification Programs!
        </p>
        <form className="form training-search product-search blogListing-sec">
          <ul className="common-from">
            <li className="search-box d-flex">
              <input
                className="search"
                type="text"
                name="keyword"
                placeholder="Find Your Course"
              />
              <button className="common-btn" type="button">
                <img src={`/images/icon-search.png`} alt="Search" />
              </button>
            </li>
          </ul>
        </form>
      </TrainingBanner>
      <TrainingCourses />
      <Partners style="tarining-page" />
      <TrainingServices />
      <WhyVinsys />
      <TrainingBlog />
      <Clients style="tarining-page" />
    </>
  );
}
