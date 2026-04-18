"use client";

import { useTheme } from "next-themes";
import MoonIcon from "@/components/icons/moon";
import SunIcon from "@/components/icons/sun";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed right-6 top-6 z-50">
      <button
        onClick={toggleMode}
        className="relative flex h-9 w-9 items-center justify-center rounded-full text-black/40 transition-colors duration-200 hover:text-black/70 dark:text-white/40 dark:hover:text-white/70"
      >
        <SunIcon className="h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0 md:h-[22px] md:w-[22px]" />
        <MoonIcon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 md:h-[22px] md:w-[22px]" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}

export default ThemeToggle;
