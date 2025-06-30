"use client";

import { FaArrowRight } from "react-icons/fa";
import Helix from "../public/assest/helix2 1.png";
import EmojiStar from "../public/assest/emojistar 1.png";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";

const AboveFooter = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <div
      ref={ref}
      className="bg-gradient-to-b max-h-full from-neutral-100 to-[#bec9e8] overflow-hidden pb-6 pt-30"
    >
      <div className="flex items-center justify-center flex-col text-neutral-950 relative p-4 w-fit mx-auto">
        <div className="flex items-center justify-center gap-10 absolute top-[-30%] left-[-33%]">
          <motion.img src={EmojiStar.src} alt="emoji star" className="object-cover xl:block hidden w-xs"
          style={{
            translateY: translateY
          }}
          />
        </div>
        <div className="flex items-center justify-center gap-10 absolute top-0 right-[-34%]">
          <motion.img src={Helix.src} alt="helix"  className="object-cover xl:block hidden"
          style={{
            translateY: translateY
          }}
          />
        </div>
        <div className="w-[80%]">
          <h2 className="bg-gradient-to-b from-black to-[#0338e3]  text-3xl md:text-5xl lg:text-6xl py-6 tracking-tighter text-center bg-clip-text text-transparent font-semibold">
            Sign up for free today
          </h2>
        </div>
        <p className="text-center text-lg md:text-xl py-4 max-w-3xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex items-center justify-center gap-10 py-8">
          <button
            className="rounded-md bg-neutral-800 py-2
          px-4 text-neutral-100 cursor-pointer"
          >
            Get for Free
          </button>
          <span className="font-bold hover:underline cursor-pointer">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
