import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-screen relative overflow-hidden flex justify-center items-center"
    >
      <h1 className=" font-switzer text-5xl z-10 font-black text-[#292929]">
        Graingran
      </h1>
      <div className="w-72 h-72 rounded-full left-72 animate-blob opacity-60 blur-2xl absolute bg-red-400"></div>
      <div className="w-72 h-72  rounded-full right-72 animation-delay-1 animate-blob opacity-60 blur-2xl absolute bg-blue-400"></div>
      <div className="w-72 h-72 rounded-full opacity-60 animation-delay-2 blur-2xl bottom-40 absolute bg-orange-300 animate-blob"></div>
      <svg className="pointer-events-none cursor-none absolute">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.65" />
        </filter>
      </svg>
    </motion.div>
  );
}
