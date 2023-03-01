import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex justify-center min-h-screen dark:bg-slate-800">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
