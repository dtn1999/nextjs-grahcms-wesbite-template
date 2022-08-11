/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
interface Props {
  links: { label: string; href: string }[];
  type: "desktop" | "mobile";
}
const NavLinks: React.FC<Props> = React.memo(function navLinks({
  links,
  type,
}) {
  console.log(links);
  // use router to style the active navigation link
  const router = useRouter();
  const temp = router.asPath.replace("/", "");
  const pathname = temp === "" ? "start" : temp;
  if (type === "mobile") {
    return (
      <nav className="flex min-h-[250px] flex-col items-center justify-between">
        {links.map((link, index: number) => (
          <Link href={`/${link.href}`} key={`navigationLink-${link.href}`}>
            <a
              className="my-8 border-b border-gray-400 text-[14px] uppercase"
            >
              <span className="block">{link.label}</span>
            </a>
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="DESKTOP-MENU flex space-x-6">
      {links.map((link, index: number) => {
        const isActiveLink = link.href.toLowerCase() === pathname.toLowerCase();
        return (
          <Link href={`/${link.href}`} key={`navigationLink-${link.href}`}>
            <a
              className="group text-[14px] uppercase text-[#262626] hover:text-primary"
              key={`link-${index}`}
            >
              <span className="block">{link.label}</span>
              {/* line bottom */}
              <div
                className={cn({
                  "w-full border-[1px] border-primary": isActiveLink,
                  "border-[1px] group-hover:border-primary w-0 border-transparent transition-all duration-[500ms] group-hover:w-full":
                    !isActiveLink,
                })}
              ></div>
            </a>
          </Link>
        );
      })}
    </nav>
  );
});

export default NavLinks;
