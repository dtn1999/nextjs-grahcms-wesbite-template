import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

interface Props extends BaseProps {}

const NavigationControls: React.FC<Props> = React.memo(({}) => {
  const swiper = useSwiper();

  const handleSlidePrev = React.useCallback(() => {
    swiper.slidePrev();
  }, [swiper]);
  const handleSlideNext = React.useCallback(() => {
    swiper.slideNext();
  }, [swiper]);

  return (
    <div className="absolute bottom-7 right-5 z-50 mt-5 flex flex-row justify-between text-xl font-medium text-white">
      <button
        aria-label="navigation previous slide"
        className="mx-1 cursor-pointer hover:text-primary-dark"
        onClick={handleSlidePrev}
      >
        <BsChevronLeft />
      </button>
      <button
        aria-label="navigation next slide"
        onClick={handleSlideNext}
        className="mx-1 cursor-pointer hover:text-primary-dark"
      >
        <BsChevronRight />
      </button>
    </div>
  );
});
export default NavigationControls;
