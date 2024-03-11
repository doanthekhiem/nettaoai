import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "../../utils/getScrollAnimation";
import Wmap from "./../../public/assets/Icon/WM.png";
import Cloud from "./../../public/assets/Icon/Cloud.svg";

import Cpuitem from "./../../public/assets/Icon/cpuitem.png";
import Layout from "./Layout";
import ButtonPrimary from "../../components/misc/ButtonPrimary";

export default function Home() {
  const listGB = [
    "All",
    "8 GB",
    "12 GB",
    "16 GB",
    "24 GB",
    "32 GB",
    "48 GB",
    "64 GB",
    "80 GB",
  ];
  const GBItems = [
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "5x NVIDIA GeForce RTX 3090",
      gpu: "8 GB / 24 GB",
      cpu: "314 GB / 366 GB",
      init: 277,
      full: 1018,
      price: 1.19,
      process: "w-1/4",
    },
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "3x NVIDIA GeForce RTX 4090",
      gpu: "0 GB / 24 GB",
      cpu: "343 GB / 366 GB",
      init: 3359,
      full: 73,
      price: 1.29,
      process: "w-1/5",
    },
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "3x NVIDIA GeForce RTX 4090",
      gpu: "0 GB / 24 GB",
      cpu: "262 GB / 366 GB",
      init: 716,
      full: 157,
      price: 1.0,
      process: "w-1/2",
    },
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "6x NVIDIA GeForce RTX 3090",
      gpu: "0 GB / 24 GB",
      cpu: "350 GB / 366 GB",
      init: 29,
      full: 66,
      price: 1.44,
      process: "w-2/3",
    },
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "8x NVIDIA GeForce RTX 3090",
      gpu: "0 GB / 24 GB",
      cpu: "279 GB / 366 GB",
      init: 294,
      full: 172,
      price: 1.92,
      process: "w-1/3",
    },
    {
      name: "Xeon Gold 6226R 16-Core Processor Intel",
      title: "5x NVIDIA GeForce RTX 3090",
      gpu: "0 GB / 24 GB",
      cpu: "328 GB / 366 GB",
      init: 1348,
      full: 1705,
      price: 1.2,
      process: "w-0",
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <Layout>
        <div className="max-w-screen-lg mx-auto">
          <h1 className="font-semibold text-4xl text-primary">
            Live GPU NetTAO
          </h1>
          <div className="mx-auto w-full my-6 p-6 border rounded-[32px] bg-[#00000085] border-[#5e45ff59]">
            <img src={Wmap.src} className="mx-auto overflow-auto" />
          </div>
          <div className="flex text-[14px] text-white-300 font-medium justify-between">
            <div className="flex flex-wrap gap-1">
              {listGB.map((el, index) => (
                <div
                  key={el}
                  className={`py-3 px-5 cursor-pointer hover:bg-primary rounded-full border border-primary ${
                    index ? "" : "bg-primary"
                  }`}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-9">
            <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-between gap-5 w-full">
              {GBItems.map((feature, index) => (
                <motion.div
                  className="rounded-[32px] text-white-300 w-full col-span-1 p-4 border bg-[#00000070] border-[#5E45FF66] flex flex-col gap-5"
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
                    src={Cpuitem.src}
                    className="mx-auto"
                    width={80}
                    height={80}
                  />
                  <div className="text-[#9DA5AF] text-center mx-auto w-3/4">
                    {feature.name}
                  </div>
                  <div className="text-primary font-bold text-xl">
                    {feature.title}
                  </div>
                  <div className="text-[#9DA5AF] text-center">
                    {feature.content}
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium text-white-300">GPU:</div>
                    <div className="text-[#9DA5AF]">{feature?.gpu} </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium text-white-300">CPU:</div>
                    <div className="text-[#9DA5AF] font-normal">
                      {feature?.cpu}{" "}
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium text-white-300 flex gap-1">
                      <Cloud />
                      {feature.init} Mbps
                    </div>
                    <div className="font-medium text-white-300 flex gap-1">
                      <Cloud />
                      {feature.full} Mbps
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="flex-1 h-2 rounded-full bg-[#27215C] relative">
                      <div
                        className={`flex-1 absolute h-2 rounded-full ${feature.process}`}
                        style={{
                          background:
                            "radial-gradient(167.31% 100% at 50.43% 23.61%, #6037FF 0%, #B27AFF 100%)",
                        }}
                      ></div>
                    </div>
                    <div>0% Used</div>
                  </div>
                  <div className="flex gap-2 items-center justify-between pl-3">
                    <div>{`$${feature.price} per Hour`} </div>
                    <ButtonPrimary addClass={""}>
                      <div className="flex justify-center items-center gap-2">
                        Rent now
                      </div>
                    </ButtonPrimary>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
