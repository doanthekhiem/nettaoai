import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline.";
import ArrowBack from "../public/assets/Icon/Down-icon.svg";
import AboutIcon from "../public/assets/Icon/about-icon.svg";

const abouts = [
  {
    icon: "/assets/about-1.png",
    button: "Trusted Third Party",
    title: (
      <>
        <span className="text-primary">AI</span> Infrastructure
      </>
    ),
    content:
      "AI Infrastructure is one of our flagship products to support the Machine Learning industry and the Blockchain industry and the products we offer including ...",
  },
  {
    icon: "/assets/about-2.png",
    button: "Trusted Third Party",
    title: (
      <>
        <span className="text-primary">Privacy</span> Service
      </>
    ),
    content:
      "Privacy is paramount on the internet and Nettensor is also committed to providing our flagship privacy product NetVPN which can be purchased using $NAO tokens ...",
  },
  {
    icon: "/assets/about-3.png",
    button: "Trusted Third Party",
    title: (
      <>
        <span className="text-primary">GPU</span> Nodes
      </>
    ),
    content:
      "The blockchain network is a major milestone in the blockchain industry so we have done a long research on the App Chain network which is useful for providing services to blockchain users...",
  },
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-lg px-5 py-20 mx-auto" id="roadmap">
      <div className="gap-8 flex flex-col justify-center items-center">
        <ScrollAnimationWrapper className="flex max-w-screen-sm w-full justify-end">
          <motion.div
            className="h-full flex flex-col items-center text-center w-full p-4 gap-6"
            variants={scrollAnimation}
          >
            <div className="text-primary gap-2 flex text-[12px] font-medium bg-[#6A53FF26] border border-[#382999] rounded-full px-[14px] py-[7px]">
              About us <AboutIcon className="h-4 w-4 " />
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-primary leading-normal">
              About NetTAO
            </h1>
            <p className="text-white-300 mt-4 mb-6">
              NetTAO is an AI Infrastructure service provider that emphasizes
              ease of access and other additional features such as Privacy
              Service and App Chain which are our best products in blockchain
              and decentralized industry.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex justify-center w-full"
            variants={scrollAnimation}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-4 w-full">
              {abouts.map((feature, index) => (
                <motion.div
                  className="rounded-[32px] col-span-1 p-6 border bg-[#00000070] border-[#5E45FF66] items-center flex flex-col gap-6"
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
                  <img
                    src={feature.icon}
                    height={204}
                    width={204}
                    className="h-auto w-[204px]"
                  />
                  <div className="text-primary text-[12px] font-medium bg-[#6A53FF26] border border-[#382999] rounded-full px-[14px] py-[7px]">
                    {feature.button}
                  </div>
                  <div className="text-white-300 text-2xl">{feature.title}</div>
                  <div className="text-[#9DA5AF] text-center">
                    {feature.content}
                  </div>
                  <div className="text-[#9DA5AF] flex gap-2">
                    Read more <ArrowBack className="h-6 w-6 " />
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

export default Feature;
