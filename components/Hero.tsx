"use client";
import { FaArrowRight } from "react-icons/fa";
import CylinderImage from "../public/assest/cylinder.png";
import HeroImage from "../public/assest/Visual.png";
import HalfTorous from "../public/assest/half-torus.png";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-[#001E80] via-[#e4eaff] font-medium grid grid-cols-1 xl:grid-cols-2 w-full px-8 max-h-full mx-auto ">
      <div className="lg:pl-[110px] lg:h-[720px] py-[130px] md:w-[630px]">
        <span className="border-2 rounded-full border-gray-400/80 py-2 px-2 font-mono text-neutral-900 lg:text-lg -tracking-widest">
          Version 2.0 is here
        </span>

        <h1 className="bg-gradient-to-b from-black to-[#002499] tracking-tighter py-2 bg-clip-text text-transparent text-5xl font-black my-8 md:text-7xl">
          Pathway to productivity
        </h1>
        <p className="text-neutral-900 tracking-wide opacity-55 text-xl lg:text-2xl">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex gap-4 items-center mt-6">
          <button
            className="rounded-md bg-neutral-800 py-2
          px-4 text-neutral-100 cursor-pointer"
          >
            Get for Free
          </button>
          <span className="flex items-center justify-center gap-1 text-neutral-900 hover:underline cursor-pointer">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </span>
        </div>
      </div>
      <div className="w-full h-screen  py-10 flex flex-col items-center relative">
        <motion.img
          src={CylinderImage.src}
          alt="cylinder"
          className="xl:block hidden absolute left-4 top-16"
        />

        <motion.img
          src={HeroImage.src}
          alt="Hero image"
          className="items-center"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            duration: 3,
            repeatType: "mirror",
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.img
          src={HalfTorous.src}
          alt="half torus"
          className="xl:block hidden transform lg:translate-x-60 xl:-translate-y-50"
        />
      </div>
    </section>
  );
};

export default Hero;
