import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const isFloat = (value: string) => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && parsed.toString() === value;
};

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const sendAirdrop = async () => {
    if (wallet.connected) {
      if (!amount) {
        setError("Please enter an amount to send an airdrop");
        return;
      }
      if (parseFloat(amount) <= 0 || !isFloat(amount)) {
        setError("Please enter a valid amount to send an airdrop");
        return;
      }
      console.log(
        "Sending airdrop of",
        parseFloat(amount) * 1000000000,
        "SOL to",
        wallet.publicKey
      );
      // await connection.requestAirdrop(wallet.publicKey!, amount * 1000000000);
      alert("Airdrop sent!");
    } else {
      setError("Please connect your wallet to send an airdrop");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-2 text-black outline-none rounded-l-sm"
        />
        <button
          className="bg-violet-900 hover:bg-violet-800 px-4 py-2 rounded-r-sm"
          onClick={sendAirdrop}
        >
          Confirm Airdrop
        </button>
      </div>
      {error && <p className="text-red-300 font-semibold">{error}</p>}
    </>
  );
};

export default Airdrop;
