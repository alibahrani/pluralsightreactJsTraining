import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

function Layout({ startingTheme, children }) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

function LayoutNoThemeProvider({ startingTheme, children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "container-fluidlight " : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
