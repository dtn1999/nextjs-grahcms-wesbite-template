import React from "react";
import cn from "classnames";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdText } from "src/types/graphql";
import { BaseProps } from "src/types/components";
import { parseStyle } from "src/utils/parse";
interface Props extends BaseProps, Pick<MdText, "value" | "style"> {}

const MdTextComponent: React.FC<Props> = React.memo(({ ...props }) => {
  const { style, value } = props;
  const [mdSource, setMdSource] = React.useState<MDXRemoteSerializeResult>();
  React.useEffect(() => {
    (async function () {
      const res = await serialize(value);
      setMdSource(res);
    })();
  }, [value]);
  return (
    <div className={cn(style && parseStyle(style), "prose lg:prose-xl")}>
      {mdSource && <MDXRemote {...mdSource} />}
    </div>
  );
});

export default MdTextComponent;
