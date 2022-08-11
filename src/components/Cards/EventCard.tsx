/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cn from "classnames";
import { FaChevronRight, FaRegCalendarAlt } from "react-icons/fa";
import { BaseProps } from "src/types/components";
import { Event } from "src/types/graphql";
import Link from "next/link";
import moment from "moment";

interface Props
  extends BaseProps,
    Pick<
      Event,
      | "title"
      | "category"
      | "image"
      | "description"
      | "startDate"
      | "endDate"
      | "details"
      | "slug"
    > {
  type: "small" | "medium" | "big";
}

export const SmallEventCard: React.FC<Props> = React.memo(({ ...props }) => {
  const {
    title,
    details,
    category,
    image,
    className,
    type,
    startDate,
    endDate,
    slug,
  } = props;
  return (
    <Link href={`/events/${slug}`}>
      <motion.div
        className={cn(
          {
            "relative group flex py-[4px] cursor-pointer": true,
          },
          className
        )}
      >
        {image && (
          <div
            className={cn({
              "absolute left-0 top-0 bottom-0 w-[150px] h-full  overflow-hidden":
                true,
            })}
          >
            <Image
              src={image.url}
              alt={`image for the title ${title}`}
              width="138px"
              height="152px"
              objectFit="cover"
              layout="fill"
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div
          className={cn({
            "ml-[150px] flex flex-col pl-[26px]": true,
          })}
        >
          <h1 className="cursor-pointer text-left text-[24px] font-bold transition-all duration-500 group-hover:text-primary">
            {title}
          </h1>
          <p className="text-[16px] font-light">
            {details.split(" ", 20).join(" ")}
          </p>
          {/* <div
          className={cn({
            "flex flex-wrap mt-[0.6rem] mb-[0.3rem] py-[16px] bg-[#EEFFF6] px-4":
              true,
          })}
        >
          <span className="flex items-center">
            <span className="mr-[0.5rem] text-primary">
              <FaRegCalendarAlt size={25} />
            </span>
            <span className="text-[17px] font-medium">
              {moment(startDate).format("DD.MMM YYYY")}
            </span>
          </span>
          <span className="px-[16px]">
            <span className="text-[17px] font-medium text-gray-400">
              Category:
            </span>
            <span className="text-[17px] font-medium"> {category}</span>
          </span>
        </div> */}
        </div>
      </motion.div>
    </Link>
  );
});

export const BigEventCard: React.FC<Props> = React.memo(({ ...props }) => {
  const {
    title,
    details,
    category,
    image,
    className,
    type,
    startDate,
    endDate,
    slug,
  } = props;
  return (
    <motion.div
      className={cn(
        {
          "group flex flex-col lg:flex-row w-full items-start py-[4px] max-w-[1035px]":
            true,
        },
        className
      )}
    >
      {image && (
        <div className={cn("w-full relative")}>
          <Image
            src={image.url}
            alt={`image for the title ${title}`}
            width="600px"
            height="638px"
            objectFit="cover"
            layout="responsive"
          />
        </div>
      )}
      <div
        className={cn({
          "flex flex-col items-end w-full md:pl-[26px]": true,
          "md:px-[44px]": image,
        })}
      >
        <h1 className="w-full cursor-pointer text-left text-[40px] font-bold transition-all duration-500 hover:text-primary">
          {title}
        </h1>
        <div
          className={cn({
            "w-full flex flex-wrap mt-[0.6rem] mb-[0.3rem] py-[16px] bg-[#EEFFF6] px-4":
              true,
          })}
        >
          <span className="flex items-center">
            <span className="mr-[0.5rem] text-primary">
              <FaRegCalendarAlt size={25} />
            </span>
            <span className="text-[17px] font-medium">
              {moment(startDate).format("DD.MMM YYYY")}
            </span>
          </span>
          <span className="px-[16px]">
            <span className="text-[17px] font-medium text-gray-400">
              Category:
            </span>
            <span className="text-[17px] font-medium"> {category}</span>
          </span>
        </div>
        <p className="text-[22px] font-light">{details}</p>
        <div className="mt-[40px] flex justify-end text-[24px]">
          <Link href={`/events/${slug}`}>
            <span className="spacing-x-[10px] flex cursor-pointer items-center">
              <span className="duration-1000 group-hover:translate-x-1 group-hover:text-primary">
                <FaChevronRight />
              </span>
              <span className="underline group-hover:text-primary">
                Learn more
              </span>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

export const MediumEventCard: React.FC = React.memo(() => {
  return <div>EventCard</div>;
});

export const EventCard: React.FC<Props> = React.memo(({ ...props }) => {
  const {
    title,
    details,
    category,
    image,
    className,
    type,
    startDate,
    endDate,
  } = props;
  const mini = type === "small";
  return (
    <motion.div
      className={cn(
        {
          "group flex items-start py-[4px]": true,
          "border-l-[1px] border-l-[rgba(112,112,112,0.44)]": !image,
        },
        className
      )}
    >
      {image && (
        <div
          className={cn({
            "relative ": true,
          })}
        >
          <Image
            src={image.url}
            alt={`image for the title ${title}`}
            width={398}
            height={438}
            objectFit="cover"
          />
        </div>
      )}
      <div
        className={cn({
          "flex flex-col w-full pl-[26px]": true,
          "pl-[40px]": image,
          "pl-[20px]": mini,
        })}
      >
        <div
          className={cn({
            "flex flex-wrap mt-[0.6rem] mb-[0.3rem] py-[16px]": true,
            "order-2": image && !mini,
            "order-last": mini,
          })}
        >
          <span className="flex items-center">
            <span className="mr-[0.5rem] text-primary">
              <FaRegCalendarAlt size={25} />
            </span>
            <span className="text-[17px] font-medium">
              {moment(startDate).format("DD.MMM YYYY")}
            </span>
          </span>
          <span className="px-[16px]">
            <span className="text-[17px] font-medium text-gray-400">
              Category:
            </span>
            <span className="text-[17px] font-medium"> {category}</span>
          </span>
        </div>
        <h1 className="cursor-pointer text-left text-[30px] font-bold transition-all duration-500 hover:text-primary">
          {title}
        </h1>
        <p className="text-[17px] font-light">{details}</p>
        <div className="mt-4 flex justify-end">
          <Link href="#">
            <span className="spacing-x-[10px] flex cursor-pointer items-center">
              <span className="duration-1000 group-hover:translate-x-1 group-hover:text-primary">
                <FaChevronRight />
              </span>
              <span className="underline">Learn more</span>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
});
