import React from "react";
import cn from "classnames";
import Headline from "@app/components/Headline";
import Text from "@app/components/Text";
import CountUp from "react-countup";
import { BaseProps } from "@app/types";
interface Props extends BaseProps {}


const SimpleSectionDescription: React.FC<Props> = React.memo(({children}) => {
  return (
    <React.Fragment>
      <div className="max-w-xl">
        {children}
      </div>
      <div className="mt-4 mb-10">
        <Text value="The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion." />
      </div>
      <div className="grid w-full grid-cols-2 justify-between gap-8">
        <div className="mb-8 flex flex-col justify-start">
          <span className="mb-3 text-base font-bold uppercase">
            Founding year
          </span>
          <span>2014</span>
        </div>
        <div className="mb-8 flex flex-col justify-start">
          <span className="mb-3 text-base font-bold uppercase">
            Orientation
          </span>
          <span>
            Politically, ideologically, religiously and ethnically unaffiliated
          </span>
        </div>
        <div className="mb-8 flex flex-col justify-start">
          <CountUp end={500} className="text-5xl text-primary" />
          <span className="mb-3 mt-4 text-base font-bold uppercase">
            Sympathizers
          </span>
        </div>
        <div className="mb-8 flex flex-col justify-start">
          <CountUp end={130} className="text-5xl text-primary" />
          <span className="mb-3 mt-4 text-base font-bold uppercase">
            Members
          </span>
        </div>
      </div>
    </React.Fragment>
  );
});
export default SimpleSectionDescription;
