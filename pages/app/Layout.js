import React from "react";
import ButtonPrimary from "../../components/misc/ButtonPrimary";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import LogoVPN from "../../public/assets/logo-full.svg";

const Layout = ({ children }) => {
  const asideLink = [
    {
      name: "Live GPU",
      url: "about",
    },
    {
      name: "Leaderboard",
      url: "roadmap",
    },
    {
      name: "Roadmap",
      url: "gpu",
    },
    {
      name: "Staking",
      url: "stake",
    },
  ];
  return (
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <nav class="bg-white  px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div class="flex flex-wrap justify-between items-center">
          <LogoVPN className="h-10 w-auto" />
          <div class="flex items-center justify-end lg:order-2">
            <ButtonPrimary addClass={""}>
              <div className="flex justify-center items-center gap-2">
                Connect Wallet <ArowRight />
              </div>
            </ButtonPrimary>
          </div>
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
        <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul class="space-y-1">
            {asideLink?.map((el, index) => (
              <li key={index}>
                <a
                  href="#"
                  class="flex border border-[#6A53FF66] h-10 rounded-lg items-center p-2 text-white-300 font-normal bg-[#0B0C14] text-[14px]  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">{el?.name} </span>
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
