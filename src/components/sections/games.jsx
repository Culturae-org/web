"use client";
import React from "react";
import { motion } from "motion/react";
import { GeistPixelSquare } from "geist/font/pixel";
import { games } from "@/constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function GamesSection() {
  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl px-2 w-full mt-16">
      <motion.div className="flex flex-col gap-6" {...fadeUp(0)}>
        <div className={GeistPixelSquare.className}>
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl text-primary">
            Game Modes
          </h2>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Compete against your friends or train solo
          </p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <motion.div {...fadeUp(0.15)}>
          <ul className="space-y-6">
            {games.map((game) => (
              <li
                key={game.title}
                className="flex flex-col gap-3 rounded-2xl border border-black/[0.06] bg-black/[0.02] p-6 backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.03] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-doto text-xl font-semibold text-foreground">
                    {game.title}
                  </h3>
                  <span className="w-fit rounded-full bg-black/[0.06] dark:bg-white/[0.06] px-3 py-1 text-xs font-semibold text-foreground">
                    {game.category}
                  </span>
                </div>
                <p className="font-space-mono text-sm leading-relaxed text-muted-foreground">
                  {game.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {game.techstacks.map((stack) => (
                    <span
                      key={stack}
                      className="rounded border border-black/[0.06] bg-black/[0.04] dark:border-white/[0.06] dark:bg-white/[0.05] px-2 py-1 font-space-mono text-[10px] text-muted-foreground"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
