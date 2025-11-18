import { Layers } from "lucide-react";

const Header = ()=> {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 bg-[length:300%_300%] animate-gradientMove opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">

        <div className="p-2.5 rounded-xl bg-white/30 backdrop-blur-lg shadow-md border border-white/40">
          <Layers size={22} strokeWidth={2} className="text-white drop-shadow" />
        </div>

        <div className="relative">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent drop-shadow">
            Companies Directory
          </h1>

        </div>

        <span className="ml-auto text-xs md:text-sm bg-white/25 text-white backdrop-blur-md px-3 py-1.5 rounded-full font-medium border border-white/40 shadow-sm">
          Frontlines EduTech
        </span>

      </div>
    </header>
  );
}

export default Header;
