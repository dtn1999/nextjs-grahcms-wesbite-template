import React from "react";
import { motion } from "framer-motion";
import BlurringImage from "@app/components/BgImage/BlurringImage";
import Button from "@app/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import { PaginationOptions } from "swiper/types";

import Headline, { TText } from "@app/components/Headline";

interface Props {
  slides: TCarouselSlide[];
}

interface Title {
  id: string;
  underline?: boolean;
  underlineAlign?: "left" | "center";
  value: TText[];
}

import { carouselSlides, TCarouselSlide } from "./dummy";

const Carousel: React.FC<Props> = React.memo(({slides = []}) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = React.useRef<any>();
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (idx, className) {
      const index = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
      console.log(className);
      return `<span class=${className}>${index}</span>`;
    },
    bulletClass: "bullet",
    bulletActiveClass: "bg-primary",
    horizontalClass: "pagination",
  };
  return (
    <div className="relative h-full w-full ">
      <Swiper
        //@ts-ignore
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative h-full w-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={item.url} className="relative h-full w-full">
            {({ isActive }) => (
              <div className="relative h-full w-full">
                <BlurringImage
                  url={item.url}
                  objectPosition="center"
                  objectFit="cover"
                  layout="fill"
                />
                <div className="absolute inset-0  flex items-center justify-center bg-[rgba(0,0,0,0.5)]" />
                <div className="absolute top-0 left-0 z-50 h-full w-full">
                  <motion.div
                    className="flex h-full w-full flex-col justify-end pb-28 pt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      key={Math.random()}
                      transition={{
                        staggerChildren: 2,
                      }}
                      className="mx-auto w-full max-w-[1140px] text-white"
                    >
                      <motion.div
                        key={item.title.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="my-5 max-w-4xl text-4xl font-bold leading-11"
                      >
                        <Headline
                          key={item.title.id}
                          value={item.title.value}
                          underline={item.title.underline}
                          underlineAlign={item.title.underlineAlign}
                        />
                      </motion.div>
                      <motion.p
                        key={item.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="my-5 pr-[55%] text-base font-light leading-6"
                      >
                        {item.description}
                      </motion.p>
                      <motion.div
                        key={Math.random()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        className="mt-9 flex justify-start"
                      >
                        <Button variant="Outline">
                          <a
                            href="#"
                            className="flex items-center space-x-1 text-xs font-medium uppercase text-white hover:text-black"
                          >
                            <span>read more</span>
                            <BsChevronRight />
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* black overlay */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-y-0 left-0 z-50 w-17">
        <div className="flex h-full w-full items-center">
          <div
            className="flex w-full items-center justify-center text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            {[
              { Icon: FaFacebookF, label: "facebook" },
              { Icon: FaTwitter, label: "twitter" },
              { Icon: FaInstagram, label: "instagram" },
              { Icon: FaTiktok, label: "ticktock" },
            ].map((item, index) => (
              <div key={index} className=" flex items-center">
                <span className="my-4 flex items-center justify-center">
                  <span className="flex rotate-180">{item.label}</span>
                  <span className="mt-2 -rotate-90">
                    <item.Icon className="" />
                  </span>
                </span>
                {index !== 3 && (
                  <span className="h-1 w-1 rounded-full bg-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 z-50 mt-5 flex flex-row justify-between text-xl font-medium text-white">
        <button
          aria-label="navigation previous slide"
          ref={navigationPrevRef}
          className="mx-1 cursor-pointer hover:text-primary-dark"
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
          className="mx-1 cursor-pointer hover:text-primary-dark"
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
});
export default Carousel;
