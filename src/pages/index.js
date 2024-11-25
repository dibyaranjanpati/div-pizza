import Image from "next/image";
import { Inter } from "next/font/google";
import CarouselComp from "@/components/home/CarouselComp";
import Card from "@/components/home/Card";
// import cardData from "@/store/cardData.json";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/baseUrl";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log(props.data);

  let categories = new Set();
  const [typeFilter, setTypeFilter] = useState(false);

  const foodData = [];

  const handdleData = () => {
    data?.map((data) => {
      return foodData.push(data), categories.add(data.category);
    });
  };
  handdleData();
  const categoryArr = [...categories];
  // console.log(foodData[0].category);

  return (
    <>
      <Head>
        <title>DivPizza</title>
      </Head>
      <CarouselComp />
      <div className="my-6 ml-5 space-x-5">
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
            !typeFilter && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => setTypeFilter(false)}
        >
          All
        </button>
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
            typeFilter === "Veg" && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => {
            setTypeFilter("Veg");
          }}
        >
          <span
            className={
              "lowercase font-thin bg-white border-green-500 border mr-2 px-1 text-green-500"
            }
          >
            ●
          </span>
          Veg
        </button>
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
            typeFilter === "Non-Veg" && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => {
            setTypeFilter("Non-Veg");
          }}
        >
          <span
            className={
              "lowercase font-thin bg-white border-red-500 border mr-2 px-1 text-red-500"
            }
          >
            ●
          </span>
          Non Veg
        </button>
      </div>
      {categoryArr.map((category, i) => {
        // console.log(i, category);

        return (
          <>
            <div
              key={category}
              className="text-4xl mt-10 mb-3 uppercase font-bold"
            >
              {category}
            </div>
            <hr />
            <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              {foodData
                //filter categories
                ?.filter((foodItem) => foodItem.category === category)
                //filter veg and non veg categories
                ?.filter((foodItem) =>
                  typeFilter ? typeFilter === foodItem.foodType : foodItem
                )
                .map((data) => (
                  <Card key={data.id} foodData={data} />
                ))}
            </div>
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  let data;
  try {
    const pizzaData = await fetch(baseUrl + "api/foodData", { method: "GET" })
      .then((response) => response.json())
      .catch((error) => error.message());
    data = JSON.parse(JSON.stringify(pizzaData));
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      data: data.data || null,
    },
  };
}
