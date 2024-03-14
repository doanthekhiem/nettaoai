import React from "react";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import LogoVPN from "../../public/assets/logo-full.svg";
// Import react scroll
import { injected } from "@wagmi/connectors";
import { connect, disconnect } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import { useAccount } from "wagmi";
import { config } from "./../../config";
import Link from "next/link";

const HeaderApp = () => {
  const account = useAccount();
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
    <nav class="px-4 py-4 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex  flex-wrap justify-between items-center">
        <Link href={"/"}>
          <LogoVPN className="h-10 w-auto cursor-pointer" />
        </Link>
        {account.address ? (
          <button
            onClick={logout}
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
  );
};
export default HeaderApp;
