"use client";

import logo_acme from "../public/assest/logo-acme.png";
import logo_apex from "../public/assest/logo-apex.png";
import logo_celestial from "../public/assest/logo-celestial.png";
import logo_echo from "../public/assest/logo-echo.png";
import logo_pulse from "../public/assest/logo-pulse.png";
import logo_quantum from "../public/assest/logo-quantum.png";

const slides = [
  {
    icon: logo_acme,
  },
  {
    icon: logo_apex,
  },
  {
    icon: logo_celestial,
  },
  {
    icon: logo_echo,
  },
  {
    icon: logo_pulse,
  },
  {
    icon: logo_quantum,
  },
];

import Image from "next/image";
import { motion } from "motion/react";

const BrandSlide = () => {
  const duplicateSlides = [...slides, ...slides];
  return (
    <div className="w-full mx-auto py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <motion.div
        className="flex gap-10"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }
        }}
      >
        {duplicateSlides.map((slide, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <Image src={slide.icon} alt="logo" className="w-fit object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSlide;
