import React from "react";
import { IconType } from "react-icons/lib";
import { motion } from "framer-motion";
import ReactIconsLoader from "../common/Icons/ReactIconsLoader";
import { Service } from "src/types/common";

interface Props {
  title: string;
  description: string;
  icon:
    | "FaHome"
    | "FaUsers"
    | "MdWork"
    | "MdSchool"
    | "GiTeacher"
    | "RiParentFill";
}

const ServiceCard: React.FC<Service> = React.memo(({ ...props }) => {
  const { title, description, icon } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group flex cursor-pointer flex-col items-start rounded border-[2px] border-primary py-[36px] px-[61px] transition-transform duration-700 hover:-translate-y-2 hover:bg-primary"
    >
      <motion.div className="mb-[28px] flex items-center justify-center rounded-full bg-primary p-[16px] group-hover:bg-white">
        <motion.span className="block text-white group-hover:text-primary">
          <ReactIconsLoader icon={icon} size={25} />
        </motion.span>
      </motion.div>
      <motion.h1 className="text-[28px] font-bold group-hover:text-white">
        {title}
      </motion.h1>
      <motion.p className="text-[22px] text-[#707070] group-hover:text-white">
        {description}
      </motion.p>
    </motion.div>
  );
});

export default ServiceCard;
