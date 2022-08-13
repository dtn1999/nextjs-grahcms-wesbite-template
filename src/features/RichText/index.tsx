import React from "react";
import cn from "classnames";
import { RichText as GraphCmsRichTextRenderer } from "@graphcms/rich-text-react-renderer";

interface Props {
  value: any;
}
const RichText: React.FC<Props> = React.memo(({ value }) => {
  return <GraphCmsRichTextRenderer content={value} />;
});
export default RichText;
