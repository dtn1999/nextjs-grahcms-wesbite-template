import React from "react";
import cn from "classnames";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { BaseProps } from "@app/types";
import SectionImage from "../SectionImg";
import { slideLeftRight } from "src/animations";

interface Props extends Omit<BaseProps, "className"> {
  url: string;
  imagePosition?: "left" | "right";
}

const Section: React.FC<Props> = React.memo(
  ({ url, imagePosition, children }) => {
    return (
      <motion.section className="py-16 pb-11">
        <div
          className={cn({
            "flex w-full justify-between overflow-hidden items-start": true,
          })}
        >
          <motion.div
            variants={slideLeftRight}
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
            variants={slideLeftRight}
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
