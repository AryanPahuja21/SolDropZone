import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./components/Airdrop";

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <main className="w-full h-screen flex flex-col gap-5 justify-center items-center bg-gray-900 text-white">
              <Airdrop />
              <div className="flex gap-4">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
            </main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
