import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cookieToInitialState } from "wagmi";
import Web3ModalProvider from "../../components/wallet/Web3ModalProvider";
import Discord from "../../public/assets/Icon/discord.svg";
import LiveCpu from "../../public/assets/Icon/liveCPU.svg";
import LiveCPUAtive from "../../public/assets/Icon/liveCPUAtive.svg";
import Staking from "../../public/assets/Icon/staking.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";
import Twitter from "../../public/assets/Icon/tweet.svg";
import SeoHead from "../../components/SeoHead";

import { config } from "../../config";
const HeaderApp = dynamic(() => import("../../components/Layout/HeaderApp"), {
  ssr: false,
});

export const asideLink = [
  {
    name: "Live GPU",
    url: "/app",
    icon: LiveCpu,
    iscom: false,
  },
  {
    name: "Leaderboard",
    url: "",
    icon: LiveCPUAtive,
    iscom: true,
  },
  {
    name: "Staking",
    url: "/app/staking",
    icon: Staking,
  },
];

const Layout = ({ children, initialState }) => {
  const router = useRouter();
  return (
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <SeoHead title="NetTao DApp" />
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
            <Link href={"https://twitter.com/NetTaoAI"} target="_blank">
              <Twitter />
            </Link>
            <Link href={"https://t.me/nettaoai"} target="_blank">
              <Telegram />
            </Link>
            <Link href={"https://docs.nettao.ai"} target="_blank">
              <Discord />
            </Link>
          </div>
        </div>
      </aside>
      <main class="p-4 md:ml-64 h-auto py-20">
        <div className="text-white-300 block pb-10 sm:hidden">
          <div className="flex h-4 gap-3 cursor-pointer">
            <Link href={"https://twitter.com/NetTaoAI"} target="_blank">
              <Twitter />
            </Link>
            <Link href={"https://t.me/nettaoai"} target="_blank">
              <Telegram />
            </Link>
            <Link href={"https://docs.nettao.ai"} target="_blank">
              <Discord />
            </Link>
          </div>
        </div>
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </main>
    </div>
  );
};

export default Layout;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie;

  const initialState = cookieToInitialState(config, cookies);

  return {
    props: {
      initialState,
    },
  };
}
