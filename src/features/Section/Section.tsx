import React from "react";
import cn from "classnames";
import SectionImage from "./SectionImage";
import Headline from "@app/components/Headline";
import Text from "@app/components/Text";
import CountUp from "react-countup";
import { BsChevronRight } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { BaseProps } from "@app/types";

interface Props extends Omit<BaseProps, "className"> {
  url: string;
  imagePosition?: "left" | "right";
}

const variants = {
  imageHidden: (imagePosition: "left" | "right") => ({
    opacity: 0,
    x: !imagePosition || imagePosition === "left" ? "-100%" : "100%",
  }),
  panelHidden: (imagePosition: "left" | "right") => ({
    opacity: 0,
    x: !imagePosition || imagePosition === "left" ? "100%" : "-100%",
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: "tween",
    },
  },
};

const Section: React.FC<Props> = React.memo(
  ({ url, imagePosition, children }) => {
    return (
      <motion.section className="pt-8 pb-9">
        <div
          className={cn({
            "flex w-full justify-between overflow-hidden items-start": true,
          })}
        >
          <motion.div
            variants={variants}
            initial="imageHidden"
            whileInView="animate"
            viewport={{ once: false }}
            custom={imagePosition}
            className={cn({
              "flex flex-col": true,
              "order-first": !imagePosition || imagePosition === "left",
              "order-last justify-end": imagePosition === "right",
            })}
          >
            <SectionImage url={url} />
          </motion.div>
          <motion.div
            variants={variants}
            initial="panelHidden"
            whileInView="animate"
            viewport={{ once: false }}
            custom={imagePosition}
            className={cn({
              "flex flex-col justify-start max-w-xl w-full": true,
            })}
          >
            {children}
            <div className="mt-9 flex justify-start">
              <a
                href="#"
                className="flex items-center space-x-1 text-xs font-medium uppercase text-primary hover:text-black"
              >
                <span>read more</span>
                <BsChevronRight />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
);
export default Section;
