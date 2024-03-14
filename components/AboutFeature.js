import { motion } from "framer-motion";
import React, { useMemo } from "react";
import DecenIcon from "../public/assets/Icon/decen.svg";
import AboutIcon from "../public/assets/Icon/features-icon.svg";
import Rent from "../public/assets/Icon/rent.svg";
import Revenue from "../public/assets/Icon/revenue.svg";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const abouts = [
  { img: "/assets/1-01.png" },
  {
    icon: <DecenIcon />,
    button: "Decentralized:",
    content:
      "A decentralized ecosystem of AI nodes allows broad participation and the opportunity to earn $NTAO tokens, promoting a more inclusive digital economy.",
  },
  {
    icon: <Revenue />,
    button: "Revenue Sharing:",
    content:
      "Holders can stake $NTAO tokens to earn a portion of the revenue generated within the NetTAO ecosystem, fostering a community-driven growth model.",
  },
  { img: "/assets/2-01.png" },
  { img: "/assets/3.png" },
  {
    icon: <Rent />,
    button: "Rental and Lending of AI Nodes:",
    content:
      "Enables users to rent AI servers for their specific use cases or lend their inactive GPUs, creating a dynamic market for computational resources, all while earning $NTAO tokens.",
  },
];

const AboutFeature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-lg py-20 px-5 mx-auto" id="aboutfeature">
      <div className="gap-8 flex flex-col justify-center items-center">
        <ScrollAnimationWrapper className="flex max-w-screen-sm w-full justify-end">
          <motion.div
            className="h-full flex flex-col items-center text-center w-full p-4 gap-6"
            variants={scrollAnimation}
          >
            <div className="text-[#BDFFE8] gap-2 flex text-[12px] font-medium bg-[#BDFFE826] border border-[#BDFFE8] rounded-full px-[14px] py-[7px]">
              Features <AboutIcon className="h-4 w-4 text-[#BDFFE8]" />
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#BDFFE8] leading-normal">
              Our Features
            </h1>
            <p className="text-white-300 mt-4 mb-6">
              Nettensor is an AI Infrastructure service provider that emphasizes
              ease of access and other additional features such as Privacy
              Service and App Chain which are our best products in blockchain
              and decentralized industry.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="max-w-screen-lg flex justify-center w-full">
            <div className="grid sm:grid-cols-2 justify-between gap-[50px] w-full rounded-[60px] p-[48px] border bg-[#00000070] border-[#5E45FF66]">
              {abouts.map((feature, index) => {
                if (feature?.img) {
                  return (
                    <motion.div
                      className="col-span-1 hidden lg:block"
                      custom={{ duration: 2 + index }}
                      variants={scrollAnimation}
                      key={index}
                      whileHover={{
                        scale: 1.01,
                        transition: {
                          duration: 0.1,
                        },
                      }}
                    >
                      <img
                        src={feature?.img}
                        className="w-auto h-auto max-w-[350px]"
                        alt=""
                      />
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      className="col-span-1 flex flex-col gap-6"
                      custom={{ duration: 2 + index }}
                      variants={scrollAnimation}
                      key={index}
                      whileHover={{
                        scale: 1.01,
                        transition: {
                          duration: 0.1,
                        },
                      }}
                    >
                      {feature?.icon}
                      <div className=" gradient-text  text-2xl">
                        {feature?.button}
                      </div>
                      <div className="text-[#9DA5AF] font-normal">
                        {feature?.content}
                      </div>
                    </motion.div>
                  );
                }
              })}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default AboutFeature;
