/* eslint-disable react-hooks/rules-of-hooks */
import { Menu, Transition } from "@headlessui/react";
import { FaGlobe, FaCaretDown } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import cn from "classnames";

import React from "react";
import { Locale } from "src/types/common";
import { BaseProps } from "src/types/components";

interface Props extends BaseProps {
  locale: string;
  locales: Locale[];
  onClick: (locale: string) => void;
}

const LanguageMenu: React.FC<Props> = React.memo(function menu({
  children,
  ...props
}) {
  const { locale, locales, onClick: handleClick } = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center space-x-[8px] rounded  bg-opacity-20 px-[15px] py-[11px]  text-[18px] font-bold capitalize text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {/* <FaGlobe size={25} /> */}
          <span>{locale}</span>
          <BsChevronDown size={16} className="font-bold" strokeWidth={2} />
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute inset-x-0 mt-2 origin-top-right divide-y divide-gray-100 rounded border-2 border-white bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="p-1 ">
            {locales.map((locale) => (
              <Menu.Item key={locale.label}>
                {({ active }) => (
                  <button
                    onClick={() => handleClick(locale.value)}
                    className={cn({
                      "group flex w-full items-center p-2 text-sm font-bold":
                        true,
                      "bg-primary text-white": active,
                      "text-white": !active,
                    })}
                  >
                    {locale.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
});

export default LanguageMenu;
