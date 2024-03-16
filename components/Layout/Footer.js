import Link from "next/link";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Discord from "../../public/assets/Icon/discord.svg";
import Facebook from "../../public/assets/Icon/instar.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";
import Twitter from "../../public/assets/Icon/tweet.svg";
import { headerLink } from "./Header";
const Footer = () => {
  return (
    <div className="pt-44 px-8 pb-6 flex sm:flex-row flex-col items-end justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex h-6 gap-6 cursor-pointer">
          <Link href={"https://twitter.com/NetTaoAI"}>
            <Twitter />
          </Link>
          <Link href={"https://t.me/nettaoai"}>
            <Telegram />
          </Link>
          <Link href={"https://docs.nettao.ai"} target="_blank">
            <Discord />
          </Link>
        </div>
        <div className="text-white-300 font-normal text-[14px]">
          Copyright © 2024 NetTAO, Inc. All rights reserved.
        </div>
      </div>
      <div className="flex text-[#B0B4B9] font-normal text-[14px] gap-4">
        <ul className="hidden lg:flex gap-6 col-start-4 px-5 col-end-8 text-white-300 bg-[#0000003D] rounded-full items-center">
          {headerLink.map((el, index) => {
            if (el.outSite) {
              return (
                <Link
                  key={index}
                  href={el.url}
                  className={
                    " py-2  cursor-pointer animation-hover inline-block relative"
                  }
                >
                  {el.name}
                </Link>
              );
            } else {
              return (
                <LinkScroll
                  key={index}
                  activeClass="active"
                  to={el.url}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className={
                    " py-2  cursor-pointer animation-hover text-white hover:text-white font-normal  inline-block relative"
                  }
                >
                  {el.name}
                </LinkScroll>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
