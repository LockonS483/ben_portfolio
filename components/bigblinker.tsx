import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.7, 0.7, 1]
    }
  }
};

export const CmdBlinker = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[4px] bg-slate-100"
    />
  );
}