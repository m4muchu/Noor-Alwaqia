import React from "react";
import ProductCard from "../product-card";
import { title } from "process";
import { freshFruits, frozenItems, otherItems } from "./products-data";

export default function Products() {
  return (
    <div className="container px-6 py-4 md:py-8 mx-auto">
      {/* <div className="flex overflow-hidden bg-white rounded w-min-max shadow-md justify-center"> */}
      <div className="rounded-lg shadow-xl p-2 px-4 mb-8 rounded-full w-fit">
        <h2 className="text-4xl font-medium text-gray-800">
          <span className="text-green-600">Fresh </span>
          <span className="text-4xl">fruits</span>
        </h2>
      </div>

      <div className="flex gap-16 justify-center flex-wrap">
        {freshFruits.map((data) => (
          <ProductCard
            title={data?.title}
            description={data?.description}
            imageURL={data?.imageURL}
            key={title}
          />
        ))}
      </div>

      <div className="rounded-lg shadow-xl p-2 px-4 my-8 rounded-full w-fit">
        <h2 className="text-4xl font-medium text-gray-800">
          <span className="text-blue-500">Frozen </span>
          <span className="text-4xl">items</span>
        </h2>
      </div>

      <div className="flex gap-16 justify-center flex-wrap">
        {frozenItems.map((data) => (
          <ProductCard
            title={data?.title}
            description={data?.description}
            imageURL={data?.imageURL}
            key={title}
          />
        ))}
      </div>

      <div className="rounded-lg shadow-xl p-2 px-4 my-8 rounded-full w-fit">
        <h2 className="text-4xl font-medium text-gray-800">
          <span className="text-blue-500">Other </span>
          <span className="text-4xl">items</span>
        </h2>
      </div>

      <div className="flex gap-16 justify-center flex-wrap">
        {otherItems.map((data) => (
          <ProductCard
            title={data?.title}
            description={data?.description}
            imageURL={data?.imageURL}
            key={title}
          />
        ))}
      </div>
    </div>
  );
}
