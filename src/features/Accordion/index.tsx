/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
import cn from "classnames";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface Props {}

const data = [
  {
    title: "Actually deep mixtape master cleanse",
    content:
      "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
  },
  {
    title: "Cornhole vegan locavore retro",
    content:
      "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
  },
  {
    title: "little dummy text for your mockup",
    content:
      "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
  },
  {
    title: "organic copper mug brunch single",
    content:
      "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
  },
  {
    title: "Good projects are made by people",
    content:
      "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
  },
  {
    title: "What is your refund policy?",
    content:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
];
const Accordion: React.FC<Props> = React.memo(({}) => {
  return (
    <React.Fragment>
      {data.map((item) => (
        <Disclosure key={item.title}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={cn({
                  "flex w-full justify-between py-3 text-lg font-bold text-black  focus:outline-none":
                    true,
                  "text-primary": open,
                })}
              >
                <span className="lowercase first-letter:uppercase">
                  {item.title}
                </span>
                <span className="text-primary">
                  {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="pb-5 text-sm font-light lowercase first-letter:uppercase">
                {item.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </React.Fragment>
  );
});
export default Accordion;
