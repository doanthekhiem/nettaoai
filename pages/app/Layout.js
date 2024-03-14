import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Discord from "../../public/assets/Icon/discord.svg";
import Facebook from "../../public/assets/Icon/instar.svg";
import LiveCpu from "../../public/assets/Icon/liveCPU.svg";
import LiveCPUAtive from "../../public/assets/Icon/liveCPUAtive.svg";
import Staking from "../../public/assets/Icon/staking.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";
import Twitter from "../../public/assets/Icon/tweet.svg";
const HeaderApp = dynamic(() => import("../../components/Layout/HeaderApp"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const router = useRouter();
  const asideLink = [
    {
      name: "Live GPU",
      url: "/app",
      icon: LiveCpu,
      iscom: false,
    },
    {
      name: "Leaderboard",
      url: "roadmap",
      icon: LiveCPUAtive,
      iscom: true,
    },
    {
      name: "Staking",
      url: "/app/staking",
      icon: Staking,
    },
  ];
  return (
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <HeaderApp />
      <aside
        class="fixed top-0 bg-[#6A53FF29] left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
        style={{
          boxShadow: "0px 8px 28px 0px #0105114D",
        }}
      >
        <div class="overflow-y-auto flex flex-col justify-between py-5 px-4 h-full bg-white dark:bg-gray-800">
          <ul class="space-y-2">
            {asideLink?.map((el, index) => {
              const isActive = el.url == router.pathname;
              return (
                <li key={index}>
                  <a
                    href={el.url}
                    class={`flex border border-[#6A53FF66] h-11 rounded-lg items-center p-2 px-4 text-white-300 font-normal bg-[#0B0C14] text-[14px]  dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group ${
                      isActive && "bg-[#2D285E] text-primary"
                    }`}
                  >
                    <el.icon />
                    <div class="ml-3 flex gap-2 items-center">
                      {el?.name}{" "}
                      {el.iscom && (
                        <span className="text-[10px] font-thin text-primary">
                          (comming)
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex h-4 gap-3 cursor-pointer">
            <Facebook />
            <Link href={"https://twitter.com/NetTaoAI"}>
              <Twitter />
            </Link>
            <Discord />
            <Link href={"https://t.me/nettaoai"}>
              <Telegram />
            </Link>
          </div>
        </div>
      </aside>
      <main class="p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
};

export default Layout;
