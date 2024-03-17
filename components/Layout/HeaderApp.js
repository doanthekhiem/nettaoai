import React from "react";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import LogoVPN from "../../public/assets/logo-full.svg";
// Import react scroll
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { asideLink } from "../../pages/app/Layout";

const HeaderApp = () => {
  const { open } = useWeb3Modal();

  const account = useAccount();
  const router = useRouter();

  function shortenAddress(address) {
    return `${address?.slice(0, 6)}…${address?.slice(-4)}`;
  }
  return (
    <nav class="px-4 py-4 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex  flex-wrap justify-between items-center">
        <Link href={"/"}>
          <LogoVPN className="h-10 w-auto cursor-pointer" />
        </Link>
        <ButtonPrimary onClick={() => open()}>
          {account.address
            ? shortenAddress(account?.address)
            : "Connect Wallet"}
        </ButtonPrimary>
      </div>
      <div className="sm:hidden fixed bottom-0 w-[calc(100%_-_32px)]">
        <ul class="flex w-full">
          {asideLink?.map((el, index) => {
            const isActive = el.url == router.pathname;
            return (
              <li key={index} className="flex-1">
                <div
                  onClick={() => {
                    if (!el?.iscom) {
                      router.push(el.url);
                    }
                  }}
                  class={`flex cursor-pointer border border-[#6A53FF66] h-11 rounded-lg items-center p-2 px-4 text-white-300 font-normal bg-[#0B0C14] text-[14px]  dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group ${
                    isActive && "!bg-gradient-bt text-primary"
                  }`}
                  style={{
                    background: isActive
                      ? "radial-gradient(167.31% 100% at 50.43% 23.61%, #6037FF 0%, #B27AFF 100%)"
                      : "",
                  }}
                >
                  <el.icon />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default HeaderApp;
