import React from "react";
import type { NextPage } from "next";
import cn from "classnames";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Project } from "src/types/common";

interface Props {
  project: Project;
  reverse?: boolean;
  delay?: number
}

const variants = {
  initial: { opacity: 0, x: 100 },
  hover: { opacity: 1, x: 0 },
};
const HomeProjectCard: React.FC<Props> = ({ delay, reverse, project }) => {
  const { image, name, details, slug } = project;
  // animation
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <motion.article
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
      className={cn({
        "h-[600px] md:h-96 lg:h-[600px] flex md:px-[2rem] group flex-col md:flex-row": true,
        "lg:flex-row-reverse": reverse,
      })}
    >
      <div className="relative h-full w-full lg:w-[65%]">
        <Image
          src={image.url}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:grayscale-0 md:grayscale"
        />
      </div>
      <div className="h-full w-full items-end justify-center py-4 md:hidden lg:w-[50%]">
        <motion.div
          className={cn({
            "lg:pr-[6rem] flex flex-col justify-end ": true,
            "lg:pl-[77px] ": !reverse,
          })}
        >
          <motion.h1 className="font-bold uppercase lg:text-[2rem]">
            {name}
          </motion.h1>
          <div className="py-[1rem]">
            <span className="font-bold text-primary lg:text-[30px]">
              Environment Go green
            </span>
          </div>
          <p className="lg:text-[24px]">{details}</p>
          <div className="flex items-center justify-end py-4 text-[24px] font-normal lg:pt-[3rem]">
            <Link href={`projects/${slug}`}>
              <span className="flex cursor-pointer items-center space-x-1.5 capitalize text-primary">
                <span>learn more</span>
                <span>
                  <FaChevronRight size={25} />
                </span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        animate={controls}
        className="hidden h-full w-full items-end justify-center py-4 md:flex lg:w-[50%]"
      >
        <motion.div
          className={cn({
            "md:pl-4 lg:pr-[6rem] flex flex-col justify-end ": true,
            "md:pl-4 lg:pl-[77px]": !reverse,
          })}
        >
          <motion.h1 className="font-bold uppercase lg:text-[2rem]">
            {name}
          </motion.h1>
          <div className="py-[1rem]">
            <span className="font-bold text-primary lg:text-[30px]">
              Environment Go green
            </span>
          </div>
          <p className="lg:text-[24px]">{details}</p>
          <div className="flex items-center justify-end py-4 text-[24px] font-normal lg:pt-[3rem]">
            <Link href={`projects/${slug}`}>
              <span className="flex cursor-pointer items-center space-x-1.5 capitalize text-primary">
                <span>learn more</span>
                <span>
                  <FaChevronRight size={25} />
                </span>
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default HomeProjectCard;
