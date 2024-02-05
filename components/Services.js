import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { COMPANY_NAME } from "../env";


const SERVICES = [

  {
    image: '/assets/6.png',
    name: 'Japanese Food',
    list: [
      'Makisushi',
      'Katsudon',
      'Teriyaki',
      'Ramen',
    ],
  },
  {
    image: '/assets/8.png',
    name: 'Korean Food',
    list: [
      'Gimbap',
      'Tteokbokki',
      'Kimchi Noodles',
    ],
  },
  {
    image: '/assets/7.png',
    name: 'Fast Food',
    list: [
      'Momo',
      'Chowmein',
      'Pizza',
      'Fried Chicken',
      'Stick Foods'
    ],
  }

]
const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              What We Offer
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              We provide different varieties of food you will definitely love.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className={`grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-${SERVICES.length} gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6`}>
            {SERVICES.map(item => {
              return <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src={item.image}
                      width={165}
                      height={165}
                      alt={item.name}
                    />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    {item.name}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    {item.list.map(a => <li className="relative check custom-list my-2">
                      {a}
                    </li>)}
                    <li className="relative check custom-list my-2">
                      and many more
                    </li>
                  </ul>
                  {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      and many more
                    </p>
                    <ButtonOutline>Select</ButtonOutline>
                  </div> */}
                </motion.div>
              </ScrollAnimationWrapper>
            })}

          </div>
        </div>

        {/* <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper> 

        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
