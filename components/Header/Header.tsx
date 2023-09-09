import React from "react";
import SwitchTheme from "./SwitchTheme";
import Search from "./Search";
import Link from "next/link";


type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="navbar  md:px-40 h-10 justify-end  lg:pl-0 ">
      <div className="lg:flex-1 lg:mt-3 lg:block md:block hidden  ">
        <div className="logo" style={{textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #3F3B6C, 0 0 0.5em , 0 0 0.1em #3F3B6C, 0 10px 3px #000"}}>
        <Link href='/'><b>
            F<span className="animate-blink-2">&</span>
            <span className="animate-blink-3">Red</span>Dit
          </b>
          </Link>
        </div>
      </div>
      <Search />
      <SwitchTheme />
    </div>
  );
};
export default Header;
