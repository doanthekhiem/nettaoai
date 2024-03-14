import React, { useEffect, useState } from "react";
// Import react scroll
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import ArowRight from "../../public/assets/Icon/ArowRight.svg";
import LogoVPN from "../../public/assets/logo-full.svg";
import ButtonPrimary from "../misc/ButtonPrimary";

export const headerLink = [
  {
    name: "Introduction",
    url: "about",
  },
  {
    name: "Features",
    url: "aboutfeature",
  },
  {
    name: "Roadmap",
    url: "roadmap",
  },
  {
    name: "Docs",
    outSite: true,
    url: "https://docs.nettao.ai/",
  },
];

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 h-[78px]  z-50 bg-[#03001414] transition-all ${
          scrollActive ? "shadow-sm bg-[#0300144b]" : ""
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-2 mx-auto flex justify-between py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-10 w-auto" />
          </div>
          <ul className="hidden lg:flex gap-6 col-start-4 px-5 col-end-8 text-white-300 bg-[#0000003D] rounded-full items-center">
            {headerLink.map((el, index) => {
              if (el.outSite) {
                return (
                  <Link
                    key={index}
                    href={el.url}
                    className={
                      " py-2  cursor-pointer animation-hover inline-block relative" +
                      (activeLink === el.url
                        ? " font-semibold "
                        : " text-white hover:text-white a")
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
                    onSetActive={() => {
                      setActiveLink(el.url);
                    }}
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
          <div>
            <Link href={"/app"}>
              <ButtonPrimary>
                <div className="flex justify-center items-center gap-2">
                  Launch dApp <ArowRight />
                </div>
              </ButtonPrimary>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
