"use client";
import React from "react";
import { motion } from "motion/react";
import { GeistPixelSquare } from "geist/font/pixel";
import { clients } from "@/constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ClientsSection() {
  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl px-2 w-full mt-16 mb-24">
      <motion.div className="flex flex-col gap-6" {...fadeUp(0)}>
        <div className={GeistPixelSquare.className}>
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl text-primary">
            Supported Clients
          </h2>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Play anywhere on any device (coming soon)
          </p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <motion.div {...fadeUp(0.15)}>
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-black/[0.06] bg-black/[0.02] p-12 text-center backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.03] transition-colors">
            <h3 className="font-doto text-2xl font-semibold text-foreground">
              [ Coming Soon ]
            </h3>
            <p className="font-space-mono text-sm leading-relaxed text-muted-foreground max-w-lg mx-auto">
              The Culturae platform is not fully online yet. We are actively building the open-source architecture and the first official web and mobile clients. Stay tuned for updates!
            </p>
            <div className="mt-4 rounded-full border border-black/[0.06] bg-black/[0.04] dark:border-white/[0.06] dark:bg-white/[0.05] px-4 py-1.5 font-space-mono text-xs text-foreground">
              Status: Under Development
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
