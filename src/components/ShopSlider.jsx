import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShopSlider = ({ imgs }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full h-100">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className=" w-full h-100 object-cover object-top"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex left-4 border-0 bg-transparent hover:bg-transparent" />
        <CarouselNext className="hidden md:inline-flex right-4 border-0 bg-transparent hover:bg-transparent" />{" "}
      </Carousel>

      {/* Pagination Dots - Same Size, Different Color */}
      <div className="flex justify-center gap-2 mt-4">
        {imgs.map((_, index) => (
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
  );
};

export default ShopSlider;
