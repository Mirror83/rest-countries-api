"use client";

import Link from "next/link";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type NavbarProps = {
  theme: string;
  toggleTheme: VoidFunction;
};

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap justify-between items-center bg-container dark:bg-container-dark shadow p-8"
      )}
    >
      <Link href="/">
        <h1 className="font-bold">Where in the World?</h1>
      </Link>
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

type ThemeTogglerProps = {
  theme: string;
  toggleTheme: VoidFunction;
};

function ThemeToggler({ theme, toggleTheme }: ThemeTogglerProps) {
  return (
    <div className="flex gap-2 items-center">
      <button onClick={toggleTheme}>
        {theme === "dark" ? <MoonIcon height={30} /> : <SunIcon height={30} />}
      </button>
      <p>{`${theme === "dark" ? "Dark" : "Light"} Mode`}</p>
    </div>
  );
}

export default Navbar;
