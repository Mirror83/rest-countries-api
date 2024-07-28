"use client";

import Link from "next/link";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ThemeContext } from "@/app/ThemeConetxt";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  return (
    <div
      className={cn(
        className,
        "flex flex-row flex-wrap justify-between items-center bg-container dark:bg-container-dark shadow p-8"
      )}
    >
      <Link href="/">
        <h1 className="font-bold text-xl md:text-2xl">Where in the World?</h1>
      </Link>
      <ThemeToggler />
    </div>
  );
}

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      <div className="flex gap-2 items-center">
        {theme === "dark" ? <MoonIcon height={30} /> : <SunIcon height={30} />}
        <span>{`${theme === "dark" ? "Dark" : "Light"} Mode`}</span>
      </div>
    </button>
  );
}

export default Navbar;
