"use client";
import { ReactNode, useRef } from "react";
import ProductImage from "../public/assest/Product Image.png";
import Pyramid from "../public/assest/pyramid.png";
import TubeImage from "../public/assest/tube.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { GoBell, GoGoal } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";
const ProductShowCase = () => {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])

  return (
    <div ref={ref} className="mt-20 bg-gradient-to-t from-[#acbae8] to-white mx-auto pb-4">
      <div className="flex items-center justify-center flex-col text-neutral-950 p-4 w-fit mx-auto lg:w-[80%]">
        <h3
          className="border-2 border-neutral-300 text-sm rounded-full py-1
             px-2 w-fit mx-auto text-neutral-950 -tracking-wider"
        >
          Boost your productivity
        </h3>
        <h1 className="bg-gradient-to-b from-black to-[#002499]  text-3xl md:text-4xl lg:text-7xl py-6 tracking-tighter text-center bg-clip-text text-transparent font-black">
          A more effective way to track progress
        </h1>
        <div className="text-center text-lg md:text-xl py-4 max-w-3xl mx-auto tracking-widest">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </div>
      </div>

      <div className="mx-auto w-full relative">
        <div className="flex items-center justify-center">
          <Image src={ProductImage} alt="product image" />
        </div>
        <motion.div className="absolute top-[-70] right-[20] z-10 xl:block hidden"
        style={{
          translateY: translateY
        }}
        >
          <Image src={Pyramid} alt="pyramid" className="object-cover w-80" />
        </motion.div>
        <motion.div className="absolute top-[250] left-[12] z-10 xl:block hidden"
        style={{
          translateY: translateY
        }}
        >
          <Image src={TubeImage} alt="tube" className="h-full w-80 object-cover" />
        </motion.div>
      </div>



      <motion.div className="max-w-7xl mx-auto p-4"
        style={{
          translateY: translateY
        }}
      >
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-10 mx-auto">
          {productDetails.map((productDetail, index) => (
            <div
              key={index}
              className="text-neutral-800 p-4 border-2 rounded-lg border-neutral-300/30 hover:scale-110 transition-all"
            >
              <div className="pb-4">{productDetail.icon}</div>
              <h1 className="text-neutral-950 font-bold md:text-xl text-lg">
                {productDetail.title}
              </h1>
              <p className="py-2">{productDetail.description}</p>
              <div className="flex flex-row items-center gap-2 mt-4 w-fit hover:underline">
                <span>{productDetail.link}</span>
                <span>{productDetail.linkIcon}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductShowCase;

interface ProductDetails {
  icon?: ReactNode;
  title: string;
  description: string;
  link: string;
  linkIcon?: ReactNode;
}

const productDetails: ProductDetails[] = [
  {
    icon: <LuLeaf />,
    title: "Integration ecosystem",
    description: "Track your progress and motivate your efforts everyday.",
    link: "Learn More",
    linkIcon: <FaArrowRight className="inline h-3 w-3" />,
  },
  {
    icon: <GoGoal />,
    title: "Goal setting and tracking",
    description: "Set and track goals with manageable task breakdowns.",
    link: "Learn more",
    linkIcon: <FaArrowRight className="inline h-3 w-3" />,
  },
  {
    icon: <MdLockOutline />,
    title: "Secure data encryption",
    description: "Ensure data safety with top-tier encryption.",
    link: "Learn more",
    linkIcon: <FaArrowRight className="inline h-3 w-3" />,
  },
  {
    icon: <GoBell />,
    title: "Customizable notifications",
    description: "Get alerts on tasks and deadlines that matter most.",
    link: "Learn more",
    linkIcon: <FaArrowRight className="inline h-3 w-3" />,
  },
];
