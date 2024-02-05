import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Explore the true flavors of Japan, Korea, and Nepal.",
  "Indulge in expertly crafted, authentic dishes.",
  "Savor every bite of our unique dishes crafted with care.",
  "An unforgettable culinary journey awaits you!"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className=" feature-container">
      <div
        className="max-w-screen-xl mt-8 sm:mt-14 px-6 sm:py-8 lg:py-16 sm:px-8 lg:px-16 mx-auto"
        id="feature"
      >
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-1 sm:grid-cols-2 gap-8"
            variants={scrollAnimation}>
            <div className="flex w-full feature-img bg-no-repeat">

            </div>

            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <div className="">
                <div className="flex flex-col items-left justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                  <h3 className="text-3xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white-500">
                    Welcome to Dokidoki!
                  </h3>
                  <p className="my-2 text-white-500">
                    Dokidoki is your culinary oasis nestled in the heart of Basantapur, Kathmandu!
                  </p>
                  <ul className="text-white-500 self-start list-inside ml-8">
                    {features.map((feature, index) => (
                      <li
                        className="relative circle-check custom-list mb-2"
                        custom={{ duration: 2 + index }}
                        variants={scrollAnimation}
                        key={feature}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: .2
                          }
                        }}>
                        {feature}
                      </li>
                    )
                    )}
                  </ul>
                </div>
              </div>

            </div>
            <div className="flex w-full banner-img bg-no-repeat">

            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
