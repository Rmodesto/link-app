import { Questrial } from "@next/font/google";
import "../styles/globals.css";

const myFont = Questrial({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
