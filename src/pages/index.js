import Image from "next/image";
import { Inter } from "next/font/google";
import CarouselComp from "@/components/home/CarouselComp";
import Card from "@/components/home/Card";
import cardData from "@/store/cardData.json";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let categories = new Set();

  const foodData = [];

  const handdleData = () => {
    cardData.map((data) => {
      return foodData.push(data), categories.add(data.category);
    });
  };
  handdleData();
  const categoryArr = [...categories];
  // console.log(foodData[0].category);

  return (
    <>
      <CarouselComp />
      {categoryArr.map((category, i) => {
        return (
          <>
            <div key={i} className="text-4xl mt-10 mb-3 uppercase font-bold">
              {category}
            </div>
            <hr />
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foodData
                .filter((foodItem) => foodItem.category === category)
                .map((data) => (
                  <Card key={data.name} foodData={data} />
                ))}
            </div>
          </>
        );
      })}
    </>
  );
}
