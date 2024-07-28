"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/app/ThemeConetxt";

let globalTheme = "dark";

if (typeof window !== "undefined") {
  const theme = getCurrentTheme();

  // Makes sure that the theme that is found
  // will be the preferred theme afterwards, regardless
  // of OS preference.
  localStorage.setItem("theme", theme);

  globalTheme = theme;
}

/**
 * Checks whether there is a theme saved in localStorage and returns that,
 * otherwise returns theme based on OS preference.
 * @returns "dark" | "light"
 */
function getCurrentTheme() {
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

type ThemedMainProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ThemedMain({ className, children }: ThemedMainProps) {
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const [theme, setTheme] = useState(globalTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <main
        className={cn(className, "flex flex-col", theme === "dark" && "dark")}
      >
        <Navbar />
        {children}
      </main>
    </ThemeContext.Provider>
  );
}
