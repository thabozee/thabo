import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        noModule
      />
      
      <Component {...pageProps} />
    </>
  );
}
