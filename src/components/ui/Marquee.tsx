"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "DESIGN • BUILD • SHIP • REPEAT ✦ ";
  
  return (
    <div className="relative w-full overflow-hidden bg-primary/5 py-6 border-y border-border/50">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-4 items-center text-2xl md:text-4xl font-black tracking-widest text-primary/30 uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <span>{text.repeat(10)}</span>
        </motion.div>
      </div>
    </div>
  );
}
