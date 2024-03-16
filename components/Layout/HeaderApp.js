import React from "react";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import LogoVPN from "../../public/assets/logo-full.svg";
// Import react scroll
import { injected } from "@wagmi/connectors";
import { connect, disconnect } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { asideLink } from "../../pages/app/Layout";
import { config } from "./../../config";

const HeaderApp = () => {
  const account = useAccount();
  const router = useRouter();
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
    <nav class="px-4 py-4 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex  flex-wrap justify-between items-center">
        <Link href={"/"}>
          <LogoVPN className="h-10 w-auto cursor-pointer" />
        </Link>
        {account.address ? (
          <button
            onClick={logout}
            className={
              "font-medium bg-black-600 flex items-center gap-2 text-[14px] tracking-wide py-[8px] px-4 sm:px-8 border border-seconday text-white-300  outline-none rounded-l-full rounded-r-full capitalize  hover:text-white-500 transition-all hover:shadow-seconday "
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
      <div className="sm:hidden fixed bottom-0 w-[calc(100%_-_32px)]">
        <ul class="flex w-full">
          {asideLink?.map((el, index) => {
            const isActive = el.url == router.pathname;
            return (
              <li key={index} className="flex-1">
                <a
                  href={el.url}
                  class={`flex border border-[#6A53FF66] h-11 rounded-lg items-center p-2 px-4 text-white-300 font-normal bg-[#0B0C14] text-[14px]  dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group ${
                    isActive && "!bg-gradient-bt text-primary"
                  }`}
                  style={{
                    background: isActive
                      ? "radial-gradient(167.31% 100% at 50.43% 23.61%, #6037FF 0%, #B27AFF 100%)"
                      : "",
                  }}
                >
                  <el.icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default HeaderApp;
