import Image from "next/image";
import React from "react";
import heroExportImg from "@/public/hero-export.svg";

export default function HeroSection() {
  return (
    <div className="container px-6 py-4 md:py-8 mx-auto mt-24">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Connecting worlds <br />
              Empowering <span className="text-blue-500 ">Nations</span>
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Welcome to [Company Name], your premier partner in global trade
              solutions. With a steadfast commitment to excellence, we
              specialize in facilitating the seamless exchange of goods across
              international borders. Leveraging our extensive network, industry
              expertise, and innovative logistics, we empower businesses to
              expand their reach and maximize growth opportunities in the global
              marketplace.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image
            className="w-full h-full lg:max-w-3xl"
            src={heroExportImg}
            alt="Catalogue-pana.svg"
            height={50}
            width={50}
          />
        </div>
      </div>
    </div>
  );
}
