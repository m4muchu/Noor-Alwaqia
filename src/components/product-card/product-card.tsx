import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ProductCard(props: {
  title: string;
  description: string;
  imageURL: StaticImageData;
}) {
  const { title, description, imageURL } = props;
  return (
    <div className="w-full max-w-sm lg:w-1/4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="relative w-full h-56">
        <Image
          className="object-cover"
          src={imageURL}
          alt="Catalogue-pana.svg"
          // height={500}
          // width={500}
          fill
        />
      </div>

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          {description}
        </div>
      </div>
    </div>
  );
}
