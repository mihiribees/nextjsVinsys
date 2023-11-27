"use client";
import { useGetApi, usePostApi } from "@/lib/apicallHooks";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from 'next/navigation'


const FooterForm = ({ enqdata }) => {
  const recaptchaRef = React.createRef();
  const router = useRouter()

  const { doPost, isLoading: formPostLoading, success } = usePostApi("/post-lets-talk");




  const [letstalkData, SetletstalkData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    page_url: window !== undefined && window.location.href,
  });



  const { data, isLoading, error } = useGetApi("get_all_counrty");

  const handleOnClick = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    if (token) {
      doPost(letstalkData)
    }

  };


  const HandlesChange = (event) => {
    SetletstalkData({
      ...letstalkData,
      [event.target.name]: event.target.value,
    });
    if (event.target.value.trim() === "") {
      event.target.value = "";
    }
  };

  if (success) {
    router.push('/thank-you', { scroll: false });
    SetletstalkData({
      name: "",
      email: "",
      country: "",
      message: "",
      page_url: window !== undefined && window.location.href,
    })

  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;
  return (
    <>
      <form onSubmit={handleOnClick}>
        <ul className="d-flex justify-content-between">
          <li>
            <input
              type="text"
              onChange={HandlesChange}
              placeholder="Your Name"
              id="name"
              name="name"
              required
            />
            <input
              type="email"
              onChange={HandlesChange}
              placeholder="Your Email"
              id="uemail"
              name="email"
              required
            />
          </li>
          <li>
            <select onChange={HandlesChange} name="country" required>
              <option value="">Select Country</option>
              {data.map((val) => {
                return (
                  <option value={val.id} key={val.id}>
                    {val.name}
                  </option>
                );
              })}
            </select>
            <textarea
              name="message"
              onChange={HandlesChange}
              id="message"
              rows="2"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="checkbox" name="fax" style={{ display: "none" }} />
          </li>
          <li className="w-100">
            <div className="links">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
                size="invisible"
              />
              <button type="submit" className="common-btn" disabled={isLoading}>
                Submit Now <i className="icon">&nbsp;</i>
              </button>
            </div>
          </li>
        </ul>
      </form>
    </>
  );
};

export default FooterForm;
