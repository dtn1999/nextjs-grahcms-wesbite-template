import React from "react";
import { BaseProps } from "../../types/components";
import Image from "next/image";
import { Hero } from "src/types/common";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -100, transition: { duration: 1 } },
};

interface Props extends BaseProps, Hero {}
const PageHero: React.FC<Props> = React.memo(function Pagehero({ ...props }) {
  const { title, description, image } = props;
  return (
    <motion.section className="relative h-full w-full overflow-hidden">
      <Image src={image.url} layout="fill" objectFit="cover" alt={title} />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-white">
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center"
          >
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mb-3 text-4xl font-black capitalize md:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-2 max-w-2xl text-[20px] font-normal md:text-3xl lg:mt-4"
            >
              <p className="whitespace-pre-line text-center">{description}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
});

export default PageHero;
