import React from "react";
import cn from "classnames";
interface Props {}

const links = ["home", "about", "services", "events", "projects", "contact"];

const NavBar: React.FC<Props> = React.memo(({}) => {
  return (
    <header className={cn("w-full flex justify-between")}>
      <div className="text-6xl uppercase text-black">logo</div>
      <div className="">
        {links.map((link, index) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </header>
  );
});
export default NavBar;
