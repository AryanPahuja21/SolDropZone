const SuccessDialog = () => {
  return (
    <div>
      <div className="inset-0 fixed bg-black bg-opacity-50 z-40" />
      <div>
        <div className="bg-white p-10 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center gap-4">
          <button className="text-black absolute top-1 right-4 font-semibold text-xl">
            x
          </button>
          <img src="/success.gif" className="w-16" />
          <p className="text-2xl font-semibold text-green-400">
            Airdrop was successful!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessDialog;
