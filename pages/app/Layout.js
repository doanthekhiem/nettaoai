import React from "react";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import LiveCpu from "../../public/assets/Icon/liveCPU.svg";
import LiveCPUAtive from "../../public/assets/Icon/liveCPUAtive.svg";
import Staking from "../../public/assets/Icon/staking.svg";
import LogoVPN from "../../public/assets/logo-full.svg";
// Import react scroll
import { injected } from "@wagmi/connectors";
import { connect, disconnect, getAccount } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import { config } from "./../../config";

const Layout = ({ children }) => {
  const asideLink = [
    {
      name: "Live GPU",
      url: "about",
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
      url: "stake",
      icon: Staking,
      iscom: true,
    },
  ];
  const account = getAccount(config);
  console.log(account);
  const login = async () => {
    try {
      const result = await connect(config, {
        chainId: mainnet.id,
        connector: injected(),
      });
    } catch (error) {
      console.log("loi");
    }
  };

  const logout = async () => {
    try {
      await disconnect(config);
    } catch (error) {
      console.log("loi");
    }
  };

  function shortenAddress(address) {
    return `${address?.slice(0, 6)}…${address?.slice(-4)}`;
  }
  return (
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <nav class="sm:bg-[#0b0c1400] bg-[#0B0C14] px-4 py-4 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div class="flex  flex-wrap justify-between items-center">
          <LogoVPN className="h-10 w-auto" />
          {account.isConnected ? (
            <button
              onClick={() => {
                logout();
              }}
              className={
                "font-medium flex items-center gap-2 text-[14px] tracking-wide py-[8px] px-4 sm:px-8 border border-seconday text-white-300  outline-none rounded-l-full rounded-r-full capitalize  hover:text-white-500 transition-all hover:shadow-seconday "
              }
            >
              {shortenAddress(account?.address)} <ArowRight />
            </button>
          ) : (
            <div class="flex items-center justify-end lg:order-2">
              <ButtonPrimary onClick={login}>
                <div className="flex justify-center items-center gap-2">
                  Connect Wallet <ArowRight />
                </div>
              </ButtonPrimary>
            </div>
          )}
        </div>
      </nav>

      <aside
        class="fixed top-0 bg-[#6A53FF29] left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
        style={{
          boxShadow: "0px 8px 28px 0px #0105114D",
        }}
      >
        <div class="overflow-y-auto py-5 px-4 h-full bg-white dark:bg-gray-800">
          <ul class="space-y-2">
            {asideLink?.map((el, index) => (
              <li key={index}>
                <a
                  href="#"
                  class={`flex border border-[#6A53FF66] h-11 rounded-lg items-center p-2 px-4 text-white-300 font-normal bg-[#0B0C14] text-[14px]  dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group ${
                    index == 0 && "bg-[#2D285E] text-primary"
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
            ))}
          </ul>
        </div>
      </aside>
      <main class="p-4 md:ml-64 h-auto pt-20">{children}</main>
    </div>
  );
};

export default Layout;
