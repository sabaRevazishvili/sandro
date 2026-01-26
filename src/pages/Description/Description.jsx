import React from "react";
import { useParams } from "react-router-dom";
import { collection } from "@/constants/collection";
import { useCart } from "@/context/useCart";
import { addToCartAction } from "@/context/actionCreator";
import Slider from "@/components/Slider";

const Description = () => {
  const { dispatch } = useCart();
  const { id } = useParams();
  const item = collection.find((item) => item.id === Number(id));

  return (
    <main className="flex justify-center items-center flex-col gap-8">
      <Slider imgs={item.sliderImgs} shouldWrap={false} />
      <section className="flex flex-col gap-4 ">
        <h1 className="text-4xl text-h1 font-semibold">{item.title}</h1>
        <p className="text-gray-600 font-semibold">{item.price}GEL</p>
        <div className="flex flex-row gap-2">
          {item.sizes.map((size) => (
            <span
              className=" active:border active:border-black rounded-sm flex justify-center items-center bg-[rgba(248,248,248,1)] h-15 aspect-square font-semibold"
              key={size}
            >
              {size}
            </span>
          ))}
        </div>
        <button
          className="button bg-black text-white  hover:bg-gray-800 mt-4"
          onClick={() => dispatch(addToCartAction(item))}
        >
          Add to Cart
        </button>
        <h2 className="text-h3 font-semibold">Description</h2>
        <p>{item.description}</p>
      </section>
    </main>
  );
};

export default Description;
