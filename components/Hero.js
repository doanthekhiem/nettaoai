import { motion } from "framer-motion";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonSecondaryShadow from "./misc/ButtonSecondaryShadow";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/ether.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/AMD.svg",
    },
    {
      name: "avalanche",
      number: "50",
      icon: "/assets/Icon/nvidia.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-head">
      <div
        className="max-w-screen-md sm:pt-72 pt-10  px-8 xl:px-16 mx-auto"
        id="about"
      >
        <ScrollAnimationWrapper>
          <motion.div className="py-6 sm:py-16" variants={scrollAnimation}>
            <div className=" flex flex-col justify-center text-center items-center row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-300 leading-normal">
                AI Infrastructure Powered By Blockchain
              </h1>
              <p className="text-white-300 mt-4 mb-6">
                AI infrastructure encompasses the hardware, software, and
                networking elements that empower industries to effectively
                develop, deploy, and manage artificial intelligence (AI)
                projects in decentralized way.
              </p>
              <div className="flex gap-6">
                <ButtonSecondaryShadow addClass={"h-12"}>
                  Buy $NTAO
                </ButtonSecondaryShadow>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="relative w-full flex">
          <ScrollAnimationWrapper className="flex w-full justify-between sm:justify-center sm:gap-10 items-center">
            {listUser.map((listUsers, index) => (
              <motion.div
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="h-9">
                  <img
                    src={listUsers.icon}
                    height={28}
                    className="h-5 sm:h-9 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
