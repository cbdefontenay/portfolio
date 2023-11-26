import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // Wrap localStorage usage in a check to ensure it's defined
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  const [theme, setTheme] = useState<Theme>(
    storedTheme === "dark" ? "dark" : "light"
  );

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
