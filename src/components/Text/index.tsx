import React from "react";
import cn from "classnames";
import { Text } from "src/types/graphql";
import { BaseProps } from "src/types/components";
import { parseStyle } from "src/utils/parse";

interface Props extends BaseProps, Text {}
const TextComponent: React.FC<Props> = React.memo(({ ...props }) => {
  const { value, style } = props;
  return <p className={cn(style && parseStyle(style))}>{value}</p>;
});

export default TextComponent;
