import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection } from "@/constants/collection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCart } from "@/context/useCart";
import { addToCartAction } from "@/context/actionCreator";

const Description = () => {
  const { id } = useParams();
  const item = collection.find((item) => item.id === Number(id));
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const { dispatch } = useCart();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <main className="flex justify-center items-center flex-col">
      <div>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {item.sliderImgs.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover object-top"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex left-4 border-0 bg-transparent hover:bg-transparent" />
          <CarouselNext className="hidden md:inline-flex right-4 border-0 bg-transparent hover:bg-transparent" />{" "}
        </Carousel>
        <div className="flex justify-center gap-2 mt-4">
          {item.sliderImgs.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current
                  ? "bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-4xl text-h1">{item.title}</h1>
        <p>{item.price}GEL</p>
        <div className="flex flex-row gap-2">
          {item.sizes.map((size) => (
            <span
              className="rounded-sm flex justify-center items-center bg-gray-300 h-10 aspect-square"
              key={size}
            >
              {size}
            </span>
          ))}
        </div>
        <button
          className="button"
          onClick={() => dispatch(addToCartAction(item))}
        >
          Add to Cart
        </button>
        <p>{item.description}</p>
      </div>
    </main>
  );
};

export default Description;
