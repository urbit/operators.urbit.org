import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { configure, GlobalHotKeys } from "react-hotkeys";
import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/prism.css";

function MyApp({ Component, pageProps }) {
  

  return (
    <>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
