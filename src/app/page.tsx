export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#3a0ca3] to-[#720937]">
        <div className="absolute inset-0 bg-[#4a148c] opacity-50 clip-path-kahoot-style"></div>
        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kahoot!</h2>
          <input
            type="number"
            placeholder="Game PIN"
            className="w-full px-4 py-3 border-[2px] rounded-md mb-4 text-center text-gray-500 font-bold text-2xl border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button className="w-full bg-black text-white py-4 rounded-md font-semibold opacity-75 hover:translate-y-1 transition-transform">
            <span>Enter</span>
          </button>
        </div>
      </div>
    </>
  );
}
