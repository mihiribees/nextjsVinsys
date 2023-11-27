"use client";

import { useGetApi } from "@/lib/apicallHooks";
import PartnerSec from "./Partners";

const Partners = ({ style }) => {
  const {
    data: partnersdata,
    isLoading,
    error,
    doFetch,
  } = useGetApi("get_home_page_details");

  const data = partnersdata?.our_partner_section;

  return (
    <>
      {data && (
        <>
          <PartnerSec
            style={style}
            heading={data.heading}
            subHeading={data.subheading}
          >
            {data.partners.map((val) => {
              return (
                <div className="item" key={val.id}>
                  <img src={val.media} alt={val.alt} />
                </div>
              );
            })}
          </PartnerSec>
        </>
      )}
    </>
  );
};
const PartnersOtherModule = ({ style, heading, subheading, children }) => {
  return (
    <PartnerSec style={style} heading={heading} subHeading={subheading}>
      {children}
    </PartnerSec>
  );
};
const Clients = ({ style }) => {
  const {
    data: homdata,
    isLoading,
    error,
    doFetch,
  } = useGetApi("get_home_page_details");

  // const ClientsDatas = useContext(HomeContext)
  const data = homdata?.our_clients_section;
  return (

    <>
    {
        data && <>
        <PartnerSec
      style={`clients ${style}`}
      heading={data.heading}
      subHeading={data.subheading}
    >
      {data.clients.map((val) => {
        return (
          <div className="item" key={val.id}>
            <img src={val.media} alt={val.alt} />
          </div>
        );
      })}
    </PartnerSec>
        </>
    }
    </>
    
  );
};
export default Partners;
export { Clients, PartnersOtherModule };
