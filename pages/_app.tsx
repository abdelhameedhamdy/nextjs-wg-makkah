import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex dark:bg-slate-800 min-h-screen justify-center">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
