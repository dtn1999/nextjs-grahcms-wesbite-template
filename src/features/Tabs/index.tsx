import React from "react";
import cn from "classnames";
import { Tab } from "@headlessui/react";
interface Props {}

const TabComponent: React.FC<Props> = React.memo(({}) => {
  return (
    <Tab.Group>
      <Tab.List className="mb-4 mt-8 flex space-x-11">
        <Tab
          className={({ selected }) =>
            cn({
              "py-1 font-bold uppercase border-b border-transparent  focus:outline-none":
                true,
              "text-[#929292]": !selected,
              "border-[#929292] text-primary": selected,
            })
          }
        >
          mission
        </Tab>
        <Tab
          className={({ selected }) =>
            cn({
              "py-1 font-bold uppercase border-b border-transparent  focus:outline-none":
                true,
              "text-[#929292]": !selected,
              "border-[#929292] text-primary": selected,
            })
          }
        >
          vision
        </Tab>
        <Tab
          className={({ selected }) =>
            cn({
              "py-1 font-bold uppercase border-b border-transparent  focus:outline-none":
                true,
              "text-[#929292]": !selected,
              "border-[#929292] text-primary": selected,
            })
          }
        >
          people
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-4 font-light lowercase leading-8 first-letter:uppercase">
          My style is a combination between photojournalism and fine-art
          photography with a touch of fashion and creative lighting. My photos
          are inspired by light, color, techniques from black & white
          processing, vintage photos, creative perspective, and of course, most
          importantly, the personalities of the people I photograph!
        </Tab.Panel>
        <Tab.Panel className="mt-4 font-light lowercase leading-8 first-letter:uppercase">
          The world without photography will be meaningless to us if there is no
          light and color, which opens up our minds and expresses passion. My
          photos are inspired by light, color, techniques from black & white
          processing, vintage photos, creative perspective, and of course, most
          importantly, the personalities of the people I photograph!
        </Tab.Panel>
        <Tab.Panel className="mt-4 font-light lowercase leading-8 first-letter:uppercase">
          My photos are inspired by light, color, techniques from black & white
          processing, vintage photos, creative perspective, and of course, most
          importantly, the personalities of the people I photograph! My style is
          a combination between photojournalism and fine-art photography with a
          touch of fashion and creative lighting.
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
});
export default TabComponent;
