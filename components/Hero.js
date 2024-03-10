import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonSecondaryShadow from "./misc/ButtonSecondaryShadow";
import ButtonOutline from "./misc/ButtonOutline.";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/near.png",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/nasen.png",
    },
    {
      name: "avalanche",
      number: "50",
      icon: "/assets/avalanche.png",
    },
    {
      name: "Server",
      number: "502",
      icon: "/assets/matic.png",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-head">
      <div
        className="max-w-screen-md pt-10 sm:pt-[80px] px-8 xl:px-16 mx-auto"
        id="about"
      >
        <ScrollAnimationWrapper>
          <motion.div className="py-6 sm:pt-[300px] sm:py-16" variants={scrollAnimation}>
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
                <ButtonSecondaryShadow>NetCloudBot</ButtonSecondaryShadow>
                <ButtonOutline>Buy $TAO</ButtonOutline>
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
                <div className="h-7">
                  <img
                    src={listUsers.icon}
                    height={28}
                    className="h-4 sm:h-7 w-auto"
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
