import React, { useEffect, useState } from "react";
// Import react scroll
import { injected } from "@wagmi/connectors";
import { connect } from "@wagmi/core";
import { Link as LinkScroll } from "react-scroll";
import LogoVPN from "../../public/assets/logo-full.svg";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import { mainnet } from "@wagmi/core/chains";
import ButtonPrimary from "../misc/ButtonPrimary";
import { config } from "./../../config";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

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

  const headerLink = [
    {
      name: "Introduction",
      url: "about",
    },
    {
      name: "Features",
      url: "roadmap",
    },
    {
      name: "Roadmap",
      url: "gpu",
    },
    {
      name: "Docs",
      url: "stake",
    },
  ];

  return (
    <>
      <header
        className={
          "w-full absolute top-0 h-[78px]  z-50 bg-[#03001414] transition-all "
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-2 mx-auto flex justify-between py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex gap-6 col-start-4 px-5 col-end-8 text-white-300 bg-[#0000003D] rounded-full items-center">
            {headerLink.map((el, index) => (
              <LinkScroll
                key={index}
                activeClass="active"
                to={el.url}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(el.url);
                }}
                className={
                  " py-2  cursor-pointer animation-hover inline-block relative" +
                  (activeLink === el.url
                    ? " text-primary "
                    : " text-white hover:text-white a")
                }
              >
                {el.name}
              </LinkScroll>
            ))}
          </ul>
          <div>
            <ButtonPrimary addClass={""} onClick={login}>
              <div className="flex justify-center items-center gap-2">
                Get Started <ArowRight />
              </div>
            </ButtonPrimary>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
