import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {}

const Container: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { className } = props;
  return <motion.div className={cn(className)}>{children}</motion.div>;
});

export default Container;
