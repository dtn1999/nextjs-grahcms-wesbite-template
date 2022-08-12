import React, { RefAttributes } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import BlurringImage from "@app/components/BgImage/BlurringImage";
interface Props {}
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NavigationOptions, PaginationOptions } from "swiper/types";

const arr = [
  "https://images.pexels.com/photos/977539/pexels-photo-977539.jpeg",

  "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg",

  "https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg",

  "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg",

  "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg",
];

const Carousel: React.FC<Props> = React.memo(({}) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = React.useRef<any>();
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (idx, className) {
      const index = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
      return `<span class="mr-5 font-medium text-lg bg-green-200">${index}</span>`;
    },
    bulletActiveClass: "bg-yellow-500",
  };
  return (
    <div className="relative h-full w-full ">
      <Swiper
        //@ts-ignore
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative h-full w-full"
        navigation={{
          prevEl: navigationPrevRef.current
            ? navigationPrevRef.current
            : undefined,
          nextEl: navigationNextRef.current
            ? navigationNextRef.current
            : undefined,
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
      >
        {arr.map((item, index) => (
          <SwiperSlide
            key={item}
            className="relative h-full w-full bg-yellow-300"
          >
            <BlurringImage
              url={item}
              objectPosition="center"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 right-5 z-50 mt-5 flex flex-row justify-between text-lg font-medium">
        <button
          aria-label="navigation previous slide"
          ref={navigationPrevRef}
          className="mx-1 cursor-pointer"
          onClick={() => {
            if (swiperRef.current) {
              console.log(swiperRef.current.swiper.slidePrev());
            }
          }}
        >
          <BsChevronLeft />
        </button>
        <button
          aria-label="navigation next slide"
          ref={navigationNextRef}
          onClick={() => {
            if (swiperRef.current) {
              console.log(swiperRef.current.swiper.slideNext());
            }
          }}
          className="mx-1 cursor-pointer"
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
});
export default Carousel;
