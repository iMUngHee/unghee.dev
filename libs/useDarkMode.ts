import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const currentColor = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currentColor);
    root.classList.add(theme);
  }, [theme, currentColor]);

  return [currentColor, setTheme];
}
