"use client";
import React from "react";
import { motion } from "motion/react";
import { GeistPixelSquare } from "geist/font/pixel";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function PlatformSection() {
  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl px-2 w-full mt-16 mb-24">
      <motion.div className="flex flex-col gap-6" {...fadeUp(0)}>
        <div className={GeistPixelSquare.className}>
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl text-primary">
            Platform Preview
          </h2>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Sneak peek at the ecosystem
          </p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <motion.div {...fadeUp(0.15)}>
          <div className="rounded-2xl border border-black/[0.06] bg-black/[0.02] p-2 backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.03] transition-colors flex justify-center w-full">
            <div className="relative w-full overflow-hidden rounded-xl bg-black/[0.02] dark:bg-white/[0.02] shadow-[inset_0_1px_3px_0_rgb(0_0_0_/_0.1)]">
              <Image 
                src="/platform.png" 
                alt="Culturae Platform Preview" 
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
