import React from "react";
import cn from "classnames";
import Button from "../Button";
interface Props {}

const links = ["home", "about", "services", "events", "projects", "contact"];

const NavBar: React.FC<Props> = React.memo(({}) => {
  return (
    <header className={cn("w-full px-16 bg-white shadow-sm")}>
      <div className="flex items-center justify-between">
        <div className="px-4 py-3 text-2xl font-black uppercase text-black">
          NavBar
        </div>
        <div className="flex items-center px-4 py-3">
          <nav className="mr-11">
            <ul className="flex">
              {links.map((link, index) => (
                <li
                  key={link}
                  className={cn({
                    "relative py-7 px-3": true,
                    "after:h-3 after:bottom-7 after:text-transparent after:w-full after:absolute after:content-[''] after:table after:bg-primary":
                      index === 0,
                  })}
                >
                  <a
                    href="#"
                    key={link}
                    className={cn({
                      "relative text-sm font-normal uppercase hover:text-primary":
                        true,
                    })}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="Outline" className="text-sm">Become member</Button>
        </div>
      </div>
    </header>
  );
});
export default NavBar;
