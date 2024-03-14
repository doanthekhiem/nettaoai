import { motion } from "framer-motion";
import React, { useMemo } from "react";
import DecenIcon from "../public/assets/Icon/decen.svg";
import AboutIcon from "../public/assets/Icon/features-icon.svg";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const abouts = [
  {
    icon: <DecenIcon />,
    button: "Phase 1",
    content: (
      <ul className="list-disc">
        <li>Fairlaunch on Uniswap</li>
        <li>Marketing with reputable influencer</li>
        <li>Launch NetTAO Website & dApp</li>
        <li>Stake to Earn Rewards</li>
        <li>Referral Program</li>
      </ul>
    ),
  },
  {
    icon: <DecenIcon />,
    button: "Phase 2",
    content: (
      <ul className="list-disc">
        <li>Adding decentralization features to dApp</li>
        <li>Support payment using $NTAO Token on NetTAO services</li>
        <li>Expand GPU Servers Phase 01</li>
        <li>Rent AI Nodes</li>
        <li>Exploration of new services in Rent Services</li>
        <li>Developing native AI Chat Bot</li>
      </ul>
    ),
  },
  {
    icon: <DecenIcon />,
    button: "Phase 3",
    content: (
      <ul className="list-disc">
        <li>Expand GPU Servers Phase 02</li>
        <li>Node AI Marketplace</li>
        <li>Mobile App for Monitoring</li>
        <li>CEX listing</li>
        <li>Another part of phase 3 will be added soon</li>
      </ul>
    ),
  },
];

const RoadMap = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-lg py-20 px-5 mx-auto" id="roadmap">
      <div className="gap-8 flex flex-col justify-center items-center">
        <ScrollAnimationWrapper className="flex max-w-screen-sm w-full justify-end">
          <motion.div
            className="h-full flex flex-col items-center text-center w-full p-4 gap-6"
            variants={scrollAnimation}
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#9583FF] leading-normal">
              Roadmap
            </h1>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="max-w-screen-xl flex justify-center w-full relative">
            <div className="absolute border border-primary h-3 z-[1] w-full bg-[#00000066] top-5 rounded-full"></div>
            <div className="grid sm:grid-cols-3 z-[2] justify-between gap-4 w-full">
              {abouts.map((feature, index) => (
                <motion.div
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.01,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div
                      className={`py-3 px-5 mx-auto text-2xl border border-primary  rounded-full font-medium ${
                        index
                          ? "text-primary bg-[#0b0c14]"
                          : "bg-primary text-white-300"
                      }`}
                    >
                      {feature.button}
                    </div>
                    <div
                      style={{
                        boxShadow: index ? "none" : "0px 0px 12px 0px #6A53FF",
                      }}
                      className="rounded-[24px] col-span-1 p-6 border bg-[#00000070] border-[#5E45FF66] flex flex-col gap-4"
                    >
                      <div className="text-[#9DA5AF] pl-4 font-normal">
                        {feature.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default RoadMap;
