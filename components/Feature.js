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
      "Our AI Infrastructure, a key product, bolsters both the Machine Learning and Blockchain fields, featuring offerings such as VPS and cloud-based GPU computing for AI applications. NetTAO is dedicated to enhancing this leading product to stand out in the competitive AI Infrastructure sector.",
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
      "A privacy-centric service offered by NetTAO, purchasable with $NTAO tokens, ensuring secure and private internet access for users. Plans are in place to expand this offering, further solidifying NetTAO's commitment to online privacy.",
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
      "Utilizes a decentralized network of GPU resources, democratizing access to computational power necessary for AI and ML computations. This innovative model challenges the traditional centralized systems of computational resource allocation.",
  },
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-5 lg:px-16 bg-feature py-20 mx-auto">
      <div className="gap-8 flex flex-col justify-center items-center">
        <ScrollAnimationWrapper className="flex max-w-[800px] w-full justify-end">
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
            <div className="text-white-300 mt-4 mb-6">
              NetTAO specializes in AI Infrastructure services, focusing on
              accessibility and enhanced features within our dApp, which stand
              out in the blockchain and decentralized sector as our premium
              offerings.
            </div>
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
