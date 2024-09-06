import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./components/Airdrop";
import Heading from "./components/Heading";

function App() {
  const { connected } = useWallet();
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <main className="w-full h-screen flex flex-col gap-7 justify-center items-center bg-gradient-to-bl from-[#0FC397] via-[#4A8CC4] to-[#8D4EF7] text-white">
              <Heading />
              <div className="flex gap-4">
                <WalletMultiButton />
                {connected && <WalletDisconnectButton />}
              </div>
              <Airdrop />
            </main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
