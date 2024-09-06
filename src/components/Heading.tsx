const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src="/logo.png" alt="SolDropZone" className="w-36" />
      <h1 className="text-5xl font-bold">SolDropZone</h1>
      <p className="text-xl font-semibold text-gray-200 text-center">
        A seamless faucet to airdrop devnet solana
      </p>
    </div>
  );
};

export default Heading;
