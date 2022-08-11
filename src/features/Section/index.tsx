import React from "react";
import cn from "classnames";
import SectionImage from "./SectionImage";
import Headline from "@app/components/Headline";
import Text from "@app/components/Text";

interface Props {
  url: string;
}
const Section: React.FC<Props> = React.memo(({ url }) => {
  return (
    <div className="w-full bg-yellow-700">
        hello
      {/* <div className="relative bg-red-300">
        <SectionImage url={url} />
      </div> */}
      {/* <div className="mx-auto max-w-xl bg-primary">
        <div className="max-w-xl">
          <Headline underline underlineAlign="left" className="mt-4">
            <Text value="We Are Novo" />
            <Text value="Creative Studio." color="primary" />
          </Headline>
        </div>
        <div className="mt-4">
          <Text value="The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion." />
        </div>
      </div> */}
    </div>
  );
});
export default Section;
