import HomeHeader from "@/app/components/header/HomeHeader";
import CommonBtn, { CommonHeading } from "@/app/components/headingtextbutton/HeadingButton";
import InnerBannerGradiant from "@/app/otherComp/InnerBannerGradiant";
import TrainingLocation from "../components/trainingLocation/TrainingLocation";
import DetectLocation from "../components/trainingLocation/DetectLocation";

export default function TrainingLoactionPage() {
    const locationdata = [{ "region": "South Asia", "country": ["India"], "id": 1 }, { "region": "Middle East", "country": ["India", "USA"], "id": 2 }, { "region": "America", "country": ["India"], "id": 3 }];
    return (
        <>
            <HomeHeader />
            <InnerBannerGradiant>
                <CommonHeading class="text-center" mainHeading="Training Location" />
            </InnerBannerGradiant>
            <DetectLocation/>
            {/* <section className="tr-location common-spacing-top-bottom">
                <div className="inner-container">
                    <div className="heading-wrapper">
                        <h4 className='text-center'>We see you're from <span>{userLocation?.country_name}</span></h4>
                        <div className='userlocation text-center'>{userLocation?.city}, {userLocation?.state} - {userLocation?.postal}</div>
                        <div class="btn-wrapper mt-20 d-flex justify-content-center">
                            <CommonBtn text="Enter Website" />
                        </div>
                        <div className="common-heading text-center">Select Your Country & Language</div>
                    </div>

                    <div className="items">
                        {
                            locationdata && locationdata.map((location, i) => (
                                <TrainingLocation key={location.id} region={location.region} country={location.country} />
                            ))
                        }
                    </div>
                </div>
            </section> */}
        </>
    );
}
