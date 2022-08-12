import React from "react";
import { motion } from "framer-motion";
import BlurringImage from "@app/components/BgImage/BlurringImage";
import Button from "@app/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsChevronRight } from "react-icons/bs";
import { PaginationOptions } from "swiper/types";
import NavigationControls from "./NavigationControls";
import Headline from "@app/components/Headline";

import SocialsHandles from "../Socials";
import { SocialHandle, TCarouselSlide } from "@app/types";

interface Props {
  slides: TCarouselSlide[];
  socials: SocialHandle[];
}


const Carousel: React.FC<Props> = React.memo(
  ({ slides = [], socials = [] }) => {
    // get the swiper instance
    const swiperRef = React.useRef<any>();

    // avoid re-rendering the Carousel component because of object ref difference
    const pagination = React.useMemo<PaginationOptions>(
      () => ({
        clickable: true,
        renderBullet: function (idx, className) {
          const index = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
          console.log(className);
          return `<span class=${className}>${index}</span>`;
        },
        bulletClass: "bullet",
        bulletActiveClass: "bg-primary",
        horizontalClass: "pagination",
      }),
      []
    );

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
            <SwiperSlide
              key={item.url + index}
              className="relative h-full w-full"
            >
              {({ isActive }) => (
                <div className="relative h-full w-full">
                  <BlurringImage
                    url={item.url}
                    objectPosition="center"
                    objectFit="cover"
                    layout="fill"
                  />
                  <div className="absolute top-0 left-0 z-50 h-full w-full bg-black/60">
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
                          className="my-5 pr-[45%] text-xl font-light leading-6 tracking-widest"
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
                              <span>{item.cta.label}</span>
                              <BsChevronRight />
                            </a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <NavigationControls />
        </Swiper>
        <div className="absolute inset-y-0 left-0 z-50 w-17">
          <div className="flex h-full w-full items-center">
            <SocialsHandles socials={socials} orientation="vertical" />
          </div>
        </div>
      </div>
    );
  }
);

export default Carousel;
