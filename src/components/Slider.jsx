import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Slider = ({ imgs, shouldWrap, shop }) => {
  const handleArrowClick = (e) => {
    e.stopPropagation();
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className={`w-full  object-cover object-top ${shop ? "h-100" : ""}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <ConditionalWrapper
          condition={shouldWrap}
          wrapper={(children) => (
            <div onClick={handleArrowClick}>{children}</div>
          )}
        >
          <CarouselPrevious className="hidden md:inline-flex left-4 border-0 bg-transparent hover:bg-transparent" />
        </ConditionalWrapper>

        <ConditionalWrapper
          condition={shouldWrap}
          wrapper={(children) => (
            <div onClick={handleArrowClick}>{children}</div>
          )}
        >
          <CarouselNext className="hidden md:inline-flex right-4 border-0 bg-transparent hover:bg-transparent" />
        </ConditionalWrapper>
      </Carousel>
      <div className="flex justify-center gap-2 mt-5">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();

              api?.scrollTo(index);
            }}
            className={`cursor-pointer  rounded-full transition-colors ${
              index === current
                ? "bg-primary"
                : "bg-primary/30 hover:bg-primary/50"
            } ${shop ? "h-1 w-1" : "h-2 w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
