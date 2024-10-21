import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Carousel1 from "@/assets/images/Carousel1.png";
import Carousel2 from "@/assets/images/Carousel2.png";
import Carousel3 from "@/assets/images/Carousel3.png";

import React from 'react'

const CarouselDemo: React.FC = () => {
  return (
    <Carousel className="px-10 py-10 align-center">
    <CarouselContent>
        <CarouselItem>
        <div>
            <img
                src={Carousel1}
                alt=""
                className="h-auto w-full object-cover rounded-[10px]"
            />
        </div>
        </CarouselItem>
        <CarouselItem>
        <div>
            <img
                src={Carousel2}
                alt=""
              className="h-auto w-full object-cover rounded-[10px]"
            />
        </div>
        </CarouselItem>
        <CarouselItem>
        <div>
            <img
                src={Carousel3}
                alt=""
              className="h-auto w-full object-cover rounded-[10px]"
            />
        </div>
        </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo
