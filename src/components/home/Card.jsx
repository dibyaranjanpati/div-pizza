import { CartContext } from "@/utils/ContextReducer";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Card = ({ foodData }) => {
  const { state, dispatch } = useContext(CartContext);
  const priceOptions = Object.keys(foodData.price);
  // const priceOptions = ["small", "medium", "large", "extra large"];
  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState(1);

  // console.log(typeof size);
  // console.log(foodData.price[size]);

  const handleAddToCart = async () => {
    const updateItem = await state.find(
      (item) => item.tempId === foodData["_id"] + size
    );
    if (!updateItem) {
      dispatch({
        type: "ADD",
        id: foodData["_id"],
        tempId: foodData["_id"] + size,
        qty: qty,
        price: finalPrice,
        name: foodData.name,
        img: foodData.img,
        priceOptions: size,
      });
    }
    if (updateItem) {
      dispatch({
        type: "UPDATE",
        tempId: foodData["_id"] + size,
        qty: qty,
        price: finalPrice,
      });
    }
  };

  // console.log(state.tempId);
  let finalPrice = qty * parseInt(foodData.price[size]);

  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <Link
          href={{ pathname: "/Item/[item]" }}
          as={`Item/${foodData["_id"]}`}
        >
          <div className="relative w-full h-80">
            <Image
              src={foodData.img}
              // layout="fill"
              fill
              // objectFit="cover"
              style={{ objectFit: "cover" }}
              alt="pizza"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <div className="font-bold mb-2 text-xl uppercase">
              {foodData.name}
            </div>
            <p className=" short_description text-gray-700 dark:text-gray-400 text-base">
              {foodData.description}
            </p>
          </div>
        </Link>
        <div className="flex px-4 justify-between">
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded uppercase"
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((options, i) => {
              // console.log(i, options);

              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className=" flex p-4 font-bold justify-between">
          <button
            onClick={handleAddToCart}
            className="border dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 "
          >
            Add to Cart
          </button>
          <p className="p-2 text-xl">₹{finalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
