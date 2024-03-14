import { motion } from "framer-motion";
import Layout from "../Layout";
import ButtonPrimary from "../../../components/misc/ButtonPrimary";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="max-w-screen-lg mx-auto">
          <h1 className="font-semibold text-4xl text-primary">
            STAKE $NTAO & EARN
          </h1>
          <div className="pt-9">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-between gap-5 w-full">
              <motion.div
                className="rounded-[32px] text-white-300 overflow-hidden w-full col-span-1 border bg-[#00000070] border-[#5E45FF66] flex flex-col"
                custom={{ duration: 2 }}
              >
                <div className="bg-primary py-6 text-[20px] font-bold text-center">
                  STAKE $NTAO & EARN
                </div>
                <div className="p-4 flex text-[#9DA5AF] flex-col gap-3">
                  <div className="w-full flex justify-between">
                    <div className="font-medium ">Total Staked:</div>
                    <div className="text-white-300 font-normal" F>
                      0 GPU{" "}
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium ">Lock period:</div>
                    <div className="text-white-300 font-normal">30 days</div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium ">Early unstake fee:</div>
                    <div className="text-white-300 font-normal">25 %</div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="font-medium ">Max Staked:</div>
                    <div className="text-white-300 font-normal">10000 NTAO</div>
                  </div>
                  <div className="w-full bg-[#1A173A] flex flex-col rounded-2xl p-4 gap-3 justify-between">
                    <div className="w-full flex justify-between">
                      <div className="font-medium ">Balance:</div>
                      <div className="text-white-300 font-normal">0 GPU</div>
                    </div>
                    <div className="w-full flex py-2 px-4 border-[#9c62ff69] border bg-[#00000070] rounded-full items-center justify-between">
                      <input
                        defaultValue={0}
                        className="w-full bg-transparent focus:border-none focus-visible:outline-none focus-visible:border-none active:border-none "
                      />
                      <div className="text-[#6A53FF] text-[14px]">Max</div>
                    </div>
                    <ButtonPrimary isShadow>
                      <div className="flex justify-center items-center gap-2">
                        Approve
                      </div>
                    </ButtonPrimary>
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-col text-[#9DA5AF] gap-5">
                <motion.div
                  className="rounded-[24px] text-white-300 w-full col-span-1 p-4 py-7 border bg-[#00000070] border-[#5E45FF66] flex flex-col gap-4"
                  custom={{ duration: 2 }}
                >
                  <div className="font-medium text-2xl text-white-300 ">
                    0 ETH:
                  </div>
                  <div className="font-normal text-[#9DA5AF]">
                    My ETH Earnings
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-[24px] text-white-300 w-full col-span-1 p-4 py-7 border bg-[#00000070] border-[#5E45FF66] flex flex-col gap-4"
                  custom={{ duration: 2 }}
                >
                  <div className="font-medium text-2xl text-white-300 ">
                    0 ETH:
                  </div>
                  <div className="font-normal text-[#9DA5AF]">
                    Monthly Node Revenue
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-[24px] text-white-300 w-full col-span-1 p-4 py-7 border bg-[#00000070] border-[#5E45FF66] flex flex-col gap-4"
                  custom={{ duration: 2 }}
                >
                  <div className="font-medium text-2xl text-white-300 ">
                    0 ETH:
                  </div>
                  <div className="font-normal text-[#9DA5AF]">
                    Number of Stakers
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
