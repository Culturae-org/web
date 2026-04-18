"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GithubIcon from "@/components/icons/github";
import { ExternalLink, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GeistPixelSquare } from "geist/font/pixel";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { platformFeatures } from "@/constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

const InteractiveTerminalFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-12 w-full max-w-4xl mx-auto rounded-2xl border border-black/[0.06] bg-black/[0.02] p-1 backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.03] transition-colors">
      {/* Left Menu */}
      <div className="md:w-1/3 border-r border-black/[0.06] dark:border-white/[0.06] p-4 font-space-mono text-sm flex flex-col gap-2">
        <div className="text-muted-foreground/50 mb-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-2 text-xs flex items-center gap-2">
          <TerminalSquare className="w-3 h-3" />
          <span>system/features</span>
        </div>
        {platformFeatures.map((feature, idx) => (
          <button
            key={feature.title}
            onClick={() => setActiveIndex(idx)}
            className={`text-left px-3 py-2 cursor-pointer transition-colors ${
              activeIndex === idx
                ? "bg-black/[0.04] dark:bg-white/[0.05] text-foreground font-bold border-l-2 border-foreground"
                : "text-muted-foreground hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-foreground border-l-2 border-transparent"
            }`}
          >
            {activeIndex === idx ? "> " : "  "}
            {feature.title}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="md:w-2/3 p-4 font-space-mono text-sm relative min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full"
          >
            <h3 className="font-doto text-xl font-semibold text-foreground mb-4">
              {platformFeatures[activeIndex].title}
            </h3>
            
            <div className="leading-relaxed text-muted-foreground/90 space-y-4">
              {Array.isArray(platformFeatures[activeIndex].body) ? (
                <p>
                  {platformFeatures[activeIndex].body.map((seg, i) =>
                    seg.bold ? (
                      <strong key={i} className="font-semibold text-foreground">
                        {seg.text}
                      </strong>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>
              ) : (
                <p>{platformFeatures[activeIndex].body}</p>
              )}
            </div>

            {platformFeatures[activeIndex].link && (
              <div className="mt-auto pt-6 flex w-full">
                <CornerBrackets alwaysShow={true}>
                  <Link
                    href={platformFeatures[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="noShadow" size="sm" className="bg-black/[0.04] dark:bg-white/[0.05] text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.1] hover:text-foreground">
                      {platformFeatures[activeIndex].linkLabel} <ExternalLink className="ml-1.5 h-3 w-3" />
                    </Button>
                  </Link>
                </CornerBrackets>
              </div>
            )}
            
            <div className="absolute bottom-4 right-4 animate-pulse opacity-50 text-foreground">
               _
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl px-2">
      <motion.div className="flex flex-col gap-6 pt-8 md:pt-16" {...fadeUp(0)}>
        <div className={GeistPixelSquare.className}>
          <p className="mb-3 font-doto text-xs text-muted-foreground md:text-sm flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            System Online. Welcome to
          </p>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl text-primary">
              CULTURAE
            </h1>
          </div>

          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Self-hostable General Culture & Quiz Platform
          </p>
        </div>

        <motion.div
          className={`flex flex-wrap items-end gap-4 p-1 mt-4 ${GeistPixelSquare.className}`}
          {...fadeUp(0.08)}
        >
          <CornerBrackets>
            <Link href="https://github.com/Culturae-org/culturae" target="_blank">
              <Button size="sm" variant="noShadow">
                <ExternalLink className="mr-1.5 h-3 w-3" /> Quickstart Project
              </Button>
            </Link>
          </CornerBrackets>
          
          <CornerBrackets>
            <Link href="https://github.com/Culturae-org" target="_blank">
              <Button size="sm" variant="noShadow">
                <GithubIcon className="mr-1.5 h-3 w-3" /> GitHub
              </Button>
            </Link>
          </CornerBrackets>
          
          <CornerBrackets>
            <Link href="https://docs.culturae.me" target="_blank">
              <Button size="sm" variant="noShadow">
                <ExternalLink className="mr-1.5 h-3 w-3" /> Docs
              </Button>
            </Link>
          </CornerBrackets>
        </motion.div>
      </motion.div>

      <div className="space-y-8 pb-20">
        <motion.div {...fadeUp(0.15)}>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground border-l-2 border-primary/40 pl-4 py-2 mt-8">
            <strong className="font-semibold text-foreground">Culturae</strong> is an <strong className="font-semibold text-foreground">open-source (MIT)</strong> game platform. It allows anyone to easily spin up a powerful quiz server and connect a multitude of clients (web, mobile, or desktop) to play trivia.
          </p>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground border-l-2 border-primary/40 pl-4 py-2 mt-4">
            We provide an official API, meaning you can write your own game modes, custom bots, or even build a different client and securely connect it to the official servers. We aim to be the easiest to self-host and the most extensive general culture trivia experience.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.25)}>
          <InteractiveTerminalFeatures />
        </motion.div>
      </div>
    </div>
  );
}
