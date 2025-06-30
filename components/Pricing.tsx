"use client";

import { useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import { motion } from "motion/react";
import { ul } from "framer-motion/client";

const Pricing = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <div ref={ref} className=" mx-auto">
      <motion.div
        className="flex items-center justify-center flex-col text-neutral-950 p-4 w-fit mx-auto"
        style={{
          translateY: translateY,
        }}
      >
        <h1
          className="border-2 border-neutral-300 text-sm rounded-full py-1
             px-2 w-fit mx-auto text-neutral-950 -tracking-wider"
        >
          Boost your productivity
        </h1>
        <div className="w-[80%]">
          <h2 className="bg-gradient-to-b from-black to-[#002499]  text-xl md:text-2xl lg:text-5xl py-6 tracking-tighter text-center bg-clip-text text-transparent font-semibold">
            A more effective way to track progress
          </h2>
        </div>
        <p className="text-center text-lg md:text-xl py-4 max-w-3xl mx-auto tracking-widest">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 text-neutral-950 p-4">
          {/* Free section card */}
          <div className="flex flex-col gap-4 border-0 h-fit my-auto rounded-md p-10 w-fit mx-auto shadow-[-8px_14px_42px_0px_rgba(50,_50,_93,_0.25)]">
            <h1 className="text-slate-500/100">{free.pricing}</h1>
            <h2 className="font-bold ">
              <span className="text-4xl">{free.price.slice(0, 2)}</span>
              {free.price.slice(2)}
            </h2>
            <div className="space-y-8 pt-4 text-center">
              <button className="bg-gray-950 w-full text-slate-100 px-8 py-1 rounded-2xl">
                {free.button}
              </button>
              <ul className="space-y-4">
                {free.content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>{item.icon}</span>
                    {item.describe}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro section card */}
          <div className="flex flex-col gap-4 border rounded-md p-10 w-fit mx-auto bg-gray-800 text-slate-200/80 shadow-[-8px_14px_42px_0px_rgba(50,_50,_93,_0.25)] h-auto my-auto">
            <div className="flex items-center justify-between">
              <div className="text-slate-500/100">{Pro.pricing}</div>
              <div>
                <button className="border-0 border-slate-500 rounded-full text-xs p-1 bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text">
                  {Pro.popular}
                </button>
              </div>
            </div>
            <h2 className="font-bold ">
              <span className="text-4xl">{Pro.price.slice(0, 3)}</span>
              {Pro.price.slice(3)}
            </h2>
            <div className="space-y-8 text-center pt-4">
              <button className="bg-gray-100/80 w-full text-slate-900 px-8 py-1 rounded-md">
                {Pro.button}
              </button>
              <ul className="space-y-4">
                {Pro.content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>{item.icon}</span>
                    {item.describe}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* business section card */}
          <div className="flex flex-col gap-4 border-0 p-10 w-fit mx-auto rounded-md shadow-[-8px_14px_42px_0px_rgba(50,_50,_93,_0.25)] h-auto my-auto">
            <h1 className="text-slate-500/100">{business.pricing}</h1>
            <h2 className="font-bold ">
              <span className="text-4xl">{business.price.slice(0, 3)}</span>
              {business.price.slice(3)}
            </h2>
            <div className="space-y-8 pt-4 text-center">
              <button className="bg-gray-950 w-full text-slate-100 px-8 py-1 rounded-md">
                {business.button}
              </button>
              <ul className="space-y-4">
                {business.content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>{item.icon}</span>
                    {item.describe}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

interface Content {
  icon: ReactNode;
  describe: string;
}

interface PricingProps {
  pricing: string;
  popular?: string;
  price: string;
  button: string;
  content: Content[];
}

const free: PricingProps = {
  pricing: "Free",
  price: "$0/month",
  button: "Get started for free",
  content: [
    {
      icon: <IoCheckmark />,
      describe: "Up to 5 project members",
    },
    {
      icon: <IoCheckmark />,
      describe: "Unlimited tasks and projects",
    },
    {
      icon: <IoCheckmark />,
      describe: "2GB storage",
    },
    {
      icon: <IoCheckmark />,
      describe: "Integrations",
    },
    {
      icon: <IoCheckmark />,
      describe: "Basic support",
    },
  ],
};

const business: PricingProps = {
  pricing: "Business",
  price: "$19/month",
  button: "Sign up now",
  content: [
    {
      icon: <IoCheckmark />,
      describe: "Up to 50 project members",
    },
    {
      icon: <IoCheckmark />,
      describe: "Unlimited tasks and projects",
    },
    {
      icon: <IoCheckmark />,
      describe: "500GB storage",
    },
    {
      icon: <IoCheckmark />,
      describe: "Integrations",
    },
    {
      icon: <IoCheckmark />,
      describe: "Priority support",
    },
    {
      icon: <IoCheckmark />,
      describe: "Advanced support",
    },
    {
      icon: <IoCheckmark />,
      describe: "Expert support",
    },
    {
      icon: <IoCheckmark />,
      describe: "Advanced security features",
    },
  ],
};

const Pro: PricingProps = {
  pricing: "Pro",
  popular: "Most popular",
  price: "$9/month",
  button: "Sign up now",
  content: [
    {
      icon: <IoCheckmark />,
      describe: "Up to 50 project members",
    },
    {
      icon: <IoCheckmark />,
      describe: "Unlimited tasks and projects",
    },
    {
      icon: <IoCheckmark />,
      describe: "50GB storage",
    },
    {
      icon: <IoCheckmark />,
      describe: "Integrations",
    },
    {
      icon: <IoCheckmark />,
      describe: "Priority support",
    },
    {
      icon: <IoCheckmark />,
      describe: "Advanced support",
    },
    {
      icon: <IoCheckmark />,
      describe: "Expert support",
    },
  ],
};
