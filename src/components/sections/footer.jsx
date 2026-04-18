"use client";

import { GeistPixelSquare } from "geist/font/pixel";

const Footer = () => {
  return (
    <footer className="mx-auto mb-24 w-full max-w-4xl px-6 md:mb-6 md:px-0">
      <div className={`flex flex-col gap-2 ${GeistPixelSquare.className}`}>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Culturae Org. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
