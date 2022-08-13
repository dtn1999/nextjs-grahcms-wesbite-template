/* eslint-disable tailwindcss/no-contradicting-classname */
import React from "react";
import cn from "classnames";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
interface Props {}
const LanguageSwitch: React.FC<Props> = React.memo(({}) => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [lang, setLang] = React.useState<"DE" | "EN">("DE");

  return (
    <div
      className="relative flex h-[46px] w-[100px] -rotate-90 cursor-pointer items-center overflow-hidden rounded-full border-2 border-white bg-[#E8E8E8] p-1 text-[#353535] shadow-lg"
      onClick={() => {
        setLang((prev) => (prev === "DE" ? "EN" : "DE"));
        setToggle(!toggle);
      }}
    >
      <div className="flex h-full w-full items-center justify-between px-1 text-lg">
        <span>🇩🇪</span>
        <span>🇬🇧</span>
      </div>
      <div
        className={cn({
          "flex justify-center items-center left-0 top-0 bottom-0 w-[53px] absolute rounded-full transform duration-300 text-sm font-bold ease-in-out bg-primary text-white":
            true,
          "transform translate-x-[43px]": toggle,
        })}
      >
        <span>{lang}</span>
      </div>
    </div>
  );
});
export default LanguageSwitch;
