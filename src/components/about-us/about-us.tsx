import React from "react";
import PropTypes from "prop-types";
import { aboutUsData } from "./about-us.data";
import { IAboutUs } from "./type";
import Image from "next/image";
import heroExportImg from "@/public/about-ill.svg";

function AboutUs() {
  return (
    <div className="container px-6 py-4 md:py-8 mx-auto">
      <div className="flex gap-16 justify-center flex-wrap lg:flex-nowrap">
        {aboutUsData.map((data: IAboutUs) => (
          <div
            className="flex flex-col justify-center items-center"
            key={data.title}
          >
            <Image
              src={data.icon}
              alt="TomatoImage.svg"
              height={50}
              width={50}
            />
            <h2 className="text-2xl text-center font-medium text-gray-800 mt-4">
              {data.title}
            </h2>
            <p className="text-center mt-4 font-normal text-gray-600">
              {data.subtitle}
            </p>
          </div>
        ))}
      </div>

      <div className="items-center lg:flex mt-16 gap-16">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full h-full lg:max-w-3xl"
            src={heroExportImg}
            alt="Catalogue-pana.svg"
            height={50}
            width={50}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <h2 className="text-4xl text-center font-medium text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-center mt-4 font-normal text-gray-600 ">
            Our vision is to supply our customers with the fruits and vegetables
            which are nutritious and safe. For us our consumer’s health and
            safety is the priority. Hence we focus on the quality and standards
            of the fruits and vegetables we supply.
          </p>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
