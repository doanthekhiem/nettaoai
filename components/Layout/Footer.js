import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/instar.svg";
import Twitter from "../../public/assets/Icon/tweet.svg";
import Discord from "../../public/assets/Icon/discord.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";

const Footer = () => {
  return (
    <div className="pt-44 px-8 pb-6 flex sm:flex-row flex-col items-end justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex h-6 gap-6">
          <Facebook />
          <Twitter />
          <Discord />
          <Telegram />
        </div>
        <div className="text-white-300 font-normal text-[14px]">
          Copyright © 2024 Net Tensor, Inc.. All rights reserved.
        </div>
      </div>
      <div className="flex text-[#B0B4B9] font-normal text-[14px] gap-4">
        <div>Help Center</div>
        <div>Blog</div>
        <div>T&C</div>
        <div>Privacy Notice</div>
        <div>Cookies Preference</div>
      </div>
    </div>
  );
};

export default Footer;
