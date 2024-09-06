import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirdrop = async () => {
    if (wallet.connected) {
      await connection.requestAirdrop(wallet.publicKey!, 1000000000);
      alert("Airdrop sent!");
    } else {
      alert("Connect your wallet first!");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Enter Amount"
        className="px-4 py-2 text-black outline-none rounded-l-sm"
      />
      <button
        className="bg-violet-900 hover:bg-violet-800 px-4 py-2 rounded-r-sm"
        onClick={sendAirdrop}
      >
        Confirm Airdrop
      </button>
    </div>
  );
};

export default Airdrop;
