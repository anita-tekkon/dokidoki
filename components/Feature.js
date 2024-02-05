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
        className="max-w-screen-xl mt-8 sm:mt-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="feature"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 position-relative">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <Image
                src="/assets/img1.png"
                alt="VPN Illustrasi"
                layout="responsive"
                quality={100}
                height={500}
                width={328}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="relative">
            <ScrollAnimationWrapper>

              <div className="align-center">
                <motion.div className="flex flex-col items-left justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                  <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-white-500">
                    Welcome to Dokidoki!
                  </h3>
                  <p className="my-4 text-white-500">
                    Dokidoki is your culinary oasis nestled in the heart of Basantapur, Kathmandu!
                  </p>
                  <ul className="text-white-500 self-start list-inside ml-8">
                    {features.map((feature, index) => (
                      <motion.li
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
                      </motion.li>
                    )
                    )}
                  </ul>
                </motion.div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
