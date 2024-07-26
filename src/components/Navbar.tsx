"use client";

import Link from "next/link";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Navbar() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center bg-container dark:bg-container-dark shadow p-8">
      <Link href="/">
        <h1 className="font-bold">Where in the World?</h1>
      </Link>
      <ThemeToggler />
    </div>
  );
}

function ThemeToggler() {
  function getCurrentTheme(): "dark" | "light" {
    const osPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (savedTheme === null && osPrefersDark)) {
      return "dark";
    } else {
      return "light";
    }
  }

  function toggleTheme() {
    setState((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const [theme, setState] = useState(getCurrentTheme());

  useEffect(() => {
    const osPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (theme === "dark" || (theme === null && osPrefersDark)) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

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
