/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "src/components/Button";
import { Slide } from "src/types/common";

const variants = {
  enter: (direction: number) => {
    return {
      scale: 1,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    scale: 1.1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      scale: 1,
      opacity: 0,
    };
  },
};

const variantsText = {
  enter: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.1,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

interface Props {
  slides: Slide[];
}

export const HomeCarousel: React.FC<Props> = React.memo(({ slides }) => {
  const [slideIndex, setSlideIndex] = React.useState<number>(0);

  const paginate = React.useCallback(
    (step: number) => {
      setSlideIndex((slideIndex + step) % slides.length);
    },
    [slideIndex, slides, setSlideIndex]
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence initial={false} custom={slideIndex}>
        <motion.img
          className="absolute top-0 left-0 h-full w-full object-cover"
          key={slides[slideIndex].id}
          src={slides[slideIndex].image.url}
          custom={slideIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        />

        <motion.div
          key={`caption_${slides[slideIndex].id}`}
          transition={{ staggerChildren: 1 }}
          className="absolute inset-0 z-50 flex items-center justify-center py-[2rem] px-4 md:px-44 xl:px-[25rem]"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full flex-col items-center space-y-[1rem]  text-center xl:max-w-[870px] xl:p-[3rem]"
          >
            <motion.h2
              variants={variantsText}
              initial="enter"
              animate="animate"
              exit="exit"
              className="text-3xl font-bold text-white md:text-4xl xl:text-[3rem]"
            >
              {slides[slideIndex].title}
            </motion.h2>
            <motion.p
              variants={variantsText}
              initial="enter"
              animate="animate"
              exit="exit"
              className="tracking-wide text-[#c5c1c1] md:text-2xl lg:text-[22px] "
            >
              {slides[slideIndex].description}
            </motion.p>
            <motion.div
              variants={variantsText}
              initial="enter"
              animate="animate"
              exit="exit"
              className="mt-[1rem] flex items-center justify-center"
            >
              <Button
                mode="outlined"
                className="rounded border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                {slides[slideIndex].ctas.label}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* black overlay with 0.8 opacity */}
        <div
          key="overlay"
          className="absolute left-0 top-0 z-40 h-full w-full bg-[rgba(0,0,0,0.70)]"
        />
      </AnimatePresence>
      <div className="absolute inset-y-0 left-0 z-[60] hidden items-center py-[2rem] md:flex">
        <div className="flex flex-1 items-center justify-start space-x-[2rem]">
          <span
            onClick={() => paginate(-1)}
            className="group cursor-pointer bg-[rgba(0,0,0,0.3)] py-[3rem] px-[1rem] capitalize text-white"
          >
            <FaChevronLeft
              size={25}
              className="duration-700 group-hover:-translate-x-2"
            />
          </span>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 z-[60] hidden items-center py-[2rem] md:flex">
        <div className="flex flex-1 items-center justify-end space-x-[2rem]">
          <span
            onClick={() => paginate(1)}
            className="group cursor-pointer bg-[rgba(0,0,0,0.3)] py-[3rem] px-[1rem] capitalize text-white"
          >
            <FaChevronRight
              size={25}
              className="duration-700 group-hover:translate-x-2"
            />
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[60] flex items-center justify-center space-x-6 py-4 md:hidden lg:hidden">
        <span
          onClick={() => paginate(-1)}
          className="group cursor-pointer bg-[rgba(0,0,0,0.3)] py-2 px-[1rem] capitalize text-white"
        >
          <FaChevronLeft
            size={25}
            className="duration-700 group-hover:-translate-x-2"
          />
        </span>
        <span
          onClick={() => paginate(1)}
          className="group cursor-pointer bg-[rgba(0,0,0,0.3)] py-2 px-[1rem] capitalize text-white"
        >
          <FaChevronRight
            size={25}
            className="duration-700 group-hover:translate-x-2"
          />
        </span>
      </div>
    </div>
  );
});
