"use client";

const Pricing = () => {
  return (
    <div className=" mx-auto">
      <div className="flex items-center justify-center flex-col text-neutral-950 p-4 w-fit mx-auto">
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
      </div>
    </div>
  );
};

export default Pricing;
