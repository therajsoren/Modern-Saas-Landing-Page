"use client";

import { ReactNode, useRef } from "react";
import Helix from "../public/assest/cube-helix 1.png";
import Cube from "../public/assest/cube-helix.png";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";

const ProductCard = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <div ref={ref} className="py-10 mx-auto">
      <div className="flex items-center justify-center flex-col text-neutral-950 p-4 w-fit mx-auto">
        <h1
          className="border-2 border-neutral-300 text-sm rounded-full py-1
             px-2 w-fit mx-auto text-neutral-950 -tracking-wider"
        >
          Everything you need
        </h1>
        <div className="w-[80%]">
          <h2 className="bg-gradient-to-b from-black to-[#002499]  text-xl md:text-2xl lg:text-5xl py-6 tracking-tighter text-center bg-clip-text text-transparent font-semibold">
            Streamlined for easy management
          </h2>
        </div>
        <p className="text-center text-lg md:text-xl py-4 max-w-3xl mx-auto tracking-widest">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto p-10"
        style={{
          translateY: translateY,
        }}
      >
        <Card />
      </motion.div>
    </div>
  );
};

export default ProductCard;

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const cardDetails: CardProps[] = [
  {
    icon: (
      <Image
        src={Helix}
        alt="helix"
        className="h-full lg:w-80 w-40 object-cover"
      />
    ),
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    icon: (
      <Image
        src={Cube}
        alt="cube"
        className="h-full lg:w-80 w-40 object-cover"
      />
    ),
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
];

const Card = () => {
  return (
    <>
      {cardDetails.map((cardDetail, index) => (
        <div
          key={index}
          className="text-neutral-800 p-4 border-2 rounded-lg border-neutral-300/30 flex flex-col items-center justify-center shadow-[inset_-2px_-18px_6px_0px_rgba(100,_100,_111,_0.2)] w-fit mx-auto"
        >
          <div className="pb-4">{cardDetail.icon}</div>
          <h1 className="text-neutral-950 font-bold md:text-xl text-lg text-center">
            {cardDetail.title}
          </h1>
          <p className="py-4 text-center tracking-widest">
            {cardDetail.description}
          </p>
        </div>
      ))}
    </>
  );
};
