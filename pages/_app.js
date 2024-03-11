import "../styles/tailwind.css";
import "../styles/slick.css";
import { WagmiProvider } from "wagmi";
import { config } from "./../config";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
