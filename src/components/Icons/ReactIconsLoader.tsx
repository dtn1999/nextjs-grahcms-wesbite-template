import React from "react";
import { IconBaseProps } from "react-icons";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";

interface Props extends IconBaseProps {
  icon:
    | "FaHome"
    | "FaUsers"
    | "MdWork"
    | "MdSchool"
    | "GiTeacher"
    | "RiParentFill";
}

const ReactIconsLoader: React.FC<Props> = React.memo(({ icon, ...props }) => {
  switch (icon) {
    case "FaHome":
      return <FaHome {...props} />;
    case "FaUsers":
      return <FaUsers {...props} />;
    case "MdWork":
      return <MdWork {...props} />;
    case "MdSchool":
      return <MdSchool {...props} />;
    case "GiTeacher":
      return <GiTeacher {...props} />;
    case "RiParentFill":
      return <RiParentFill {...props} />;
    default:
      return <></>;
  }
});

export default ReactIconsLoader;
