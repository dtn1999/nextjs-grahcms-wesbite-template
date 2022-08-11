/* eslint-disable react-hooks/rules-of-hooks */
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { getLocaleInfo, getLocalesArray } from "../../utils/locales";
import { LocalesEnum, SiteLink } from "src/types/common";
import LanguageMenu from "./LanguageMenu";
import Button from "src/components/Button";
import { useMeasure } from "react-use";

const variants = {
  hidden: (width: number) => ({
    opacity: 0,
    x: "-100%",
  }),
  show: (width: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  }),
  exit: (width: number) => ({
    opacity: 0,
    x: "-100%",
  }),
};

interface Props {
  links: SiteLink[];
  logo: any;
  buttons: any[];
}
const Navigation: React.FC<Props> = React.memo(function nav({
  links,
  logo,
  buttons,
}) {
  //local variables
  const router = useRouter();
  const temp = router.asPath.replace("/", "");
  const pathname = temp === "" ? "home" : temp;
  const currentLocal: LocalesEnum = React.useMemo(
    () => router.locale || "en",
    [router.locale]
  );

  console.log(links);
  const locales = React.useMemo(() => getLocalesArray(), []);

  // component states
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [locale, setLocale] = React.useState<string>(
    getLocaleInfo(currentLocal).label
  );

  // handlers
  const handleClick = React.useCallback(
    (locale: LocalesEnum) => {
      setLocale(getLocaleInfo(locale).label);
      router.push(router.asPath, router.asPath, { locale, scroll: true });
    },
    [router, setLocale]
  );

  const [ref, { width }] = useMeasure<any>();
  return (
    <AnimatePresence>
      <nav
        ref={ref}
        className={cn(
          "absolute left-0 top-0 z-[100] w-full flex bg-transparent items-center justify-between py-[1.563rem] lg:py-[3rem] xl:px-[10rem] lg:px-[4rem] px-[2rem] text-base lg:text-[18px] xl:text-[18px] text-white"
        )}
      >
        {/* logo */}
        <div className={cn("relative")}>
          <h1 className="text-[2.125rem] font-bold">Logo</h1>
        </div>
        {/* MOBILE MENU */}
        <div className="flex w-full justify-end transition-all duration-700 lg:hidden ">
          <button
            onClick={() => {
              console.log("click");
              setIsNavOpen((prev) => !prev);
            }}
          >
            <AiOutlineMenu className="text-5xl" />
          </button>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            key={isNavOpen ? "show" : "hidden"}
            className={cn({
              hidden: !isNavOpen,
              "absolute top-0 left-0 right-0 h-screen bg-primary flex flex-col items-center text-white text-3xl font-bold z-50 ":
                isNavOpen,
            })}
          >
            <div className="flex w-full justify-end  px-[2rem] py-[1.563rem] transition-all duration-700 lg:hidden">
              <button
                onClick={() => {
                  console.log("click");
                  setIsNavOpen((prev) => !prev);
                }}
              >
                <AiOutlineClose className="text-5xl" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { staggerChildren: 1 } }}
              className="flex min-h-[250px] flex-col items-center justify-between md:mt-[5.5rem] "
            >
              {links?.map((link, index: number) => (
                <motion.a
                  key={`navigationLink-${link.href}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  className="my-6 cursor-pointer border-b-2 border-gray-300 text-base uppercase md:my-8 md:text-xl"
                  onClick={() => {
                    router
                      .push(`/${link.href}`, `/${link.href}`, {
                        scroll: true,
                      })
                      .then(() => {
                        setIsNavOpen(false);
                      });
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* DESKTOP-MENU */}
        <div className="ml-[10rem] hidden  flex-row items-center lg:flex">
          <nav className="flex font-bold lg:space-x-[1.5rem] xl:space-x-[2rem]">
            {links?.map((link, index: number) => {
              const isActiveLink =
                link.href.toLowerCase() === pathname.toLowerCase();
              return (
                <Link
                  href={`/${link.href === "home" ? "" : link.href}`}
                  key={`navigationLink-${link.href}`}
                >
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="group cursor-pointer uppercase text-[#262626] hover:text-primary"
                    key={`link-${index}`}
                  >
                    <span className="block capitalize text-white">
                      {link.label}
                    </span>
                  </motion.a>
                </Link>
              );
            })}
          </nav>
        </div>
        {/* buttons */}
        <div className={cn("hidden lg:block")}>
          {buttons && (
            <div className="ml-[1rem] flex items-center space-x-[1rem]">
              <LanguageMenu
                locale={locale}
                locales={locales}
                onClick={handleClick}
              />
              <Button
                mode="filled"
                className="rounded border-primary bg-primary text-white hover:border-white hover:bg-white hover:text-primary"
              >
                {buttons[1]?.label}
              </Button>
            </div>
          )}
        </div>
      </nav>
    </AnimatePresence>
  );
});

export default Navigation;
