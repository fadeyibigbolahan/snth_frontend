import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Laptop from "../assets/laptop.jpg";
import Whatsapp from "../assets/whatsapp.png";
import Circle from "../assets/circle.jpg";

const Analytics = () => {
  return (
    <>
      <div
        id="about"
        className="w-full bg-white md:p-16 p-4 flex gap-8 flex-col"
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <a href="https://wa.me/2348032139983" target="_blank">
            <img
              className="md:w-[200px] w-1/2 mx-auto my-4 cursor-pointer"
              src={Whatsapp}
              alt="/"
            />
          </a>
          <div className="flex flex-col justify-center md:items-start items-center">
            <p className="gap-1 flex flex-col text-center md:text-start leading-8 md:text-lg">
              Founded with the passion to empower individuals through financial
              growth while promoting food security and provide an opportunity
              for people to earn sustainable income, access essential food
              items, and build a thriving community. <br /> <br /> We are fully
              registered in Nigeria under the corporate affairs commission – RC
              8336410.
            </p>

            <ScrollLink to="packages" smooth={true} duration={500}>
              <button className="bg-black text-[#00df9a] w-[230px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Our afforable packages.
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start flex-col md:flex-row">
        <div className="flex justify-center items-center flex-col md:w-1/2  md:p-16 p-4 bg-[#F8CA05]">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white text-center md:text-start">
            Vision
          </h1>
          <p className="gap-1 flex flex-col text-white text-center leading-8">
            To be the leading network marketing platform that empowers
            individuals financially while ensuring food security for communities
            worldwide
          </p>
        </div>
        <div className="flex flex-col justify-start items-center md:w-1/2 md:p-16 p-4 bg-[#0A192F]">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white text-center md:text-start">
            Mission
          </h1>
          <p className="gap-1 flex flex-col text-white text-center leading-8">
            To enhance food accessibility by rewarding members with essential
            food items with financial reward.
          </p>
        </div>
      </div>
    </>
  );
};

export default Analytics;
