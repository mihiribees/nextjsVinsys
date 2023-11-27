"use client"
import CommonBtn from '@/app/components/headingtextbutton/HeadingButton';
import React, { useEffect } from 'react';
import useSWR from 'swr'
import TrainingLocation from './TrainingLocation';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const DetectLocation = () => {

    const locationdata = [{ "region": "South Asia", "country": ["India"], "id": 1 }, { "region": "Middle East", "country": ["India", "USA"], "id": 2 }, { "region": "America", "country": ["India"], "id": 3 }];
    const { data, error, isLoading } = useSWR('https://geolocation-db.com/json/0daad5e0-82e7-11ee-92e0-f5d620c7dcb4', fetcher)

    // useEffect(() => {
    //     const get_ip = async () => {
         
    //         const response = await fetch("https://geolocation-db.com/json/0daad5e0-82e7-11ee-92e0-f5d620c7dcb4");
    //         const data = await response.json();
    //         
    //         setUserLocation(data)
    //     };
    //     get_ip();
    // }, [])

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


  return (
    <>
     <section className="tr-location common-spacing-top-bottom">
                <div className="inner-container">
                    <div className="heading-wrapper">
                        <h4 className='text-center'>We see you`&apos;`re from <span>{data?.country_name}</span></h4>
                        <div className='userlocation text-center'>{data?.city}, {data?.state} - {data?.postal}</div>
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
            </section>
    
    </>
  )
}

export default DetectLocation