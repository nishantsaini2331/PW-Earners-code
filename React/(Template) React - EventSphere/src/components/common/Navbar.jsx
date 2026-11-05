import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EBE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E65100] to-[#FF8A65] flex items-center justify-center text-white shadow-sm text-lg">
              ✨
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#111] leading-tight">
                EventSphere
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-500">
                Curated Conclaves
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/explore"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-[#111] bg-black/5 font-semibold"
            >
              <span>🧭</span>
              <span>Explore</span>
            </Link>

            <Link
              to="/schedule"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/[0.03]"
            >
              <span>📅</span>
              <span>Schedule</span>
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 text-[11px] font-bold flex items-center justify-center">
                2
              </span>
            </Link>

            <Link
              to="/favorites"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/[0.03]"
            >
              <span>🔖</span>
              <span>Saved</span>
              <span className="w-5 h-5 rounded-full bg-orange-100 text-[#E65100] text-[11px] font-bold flex items-center justify-center">
                3
              </span>
            </Link>

            <Link
              to="/profile"
              className="px-3.5 py-2 text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-black/[0.03]"
            >
              <span>👤</span>
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex items-center gap-3 flex-1 max-w-sm mx-6 relative">
          <form className="relative w-full">
            <span className="text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
              🔍
            </span>
            <input
              type="text"
              name="search"
              placeholder="Search categories, events, venues..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-[#DDD9CE] focus:border-[#E65100] focus:ring-2 focus:ring-[#E65100]/20 text-[#222] placeholder-stone-400 outline-none transition-all shadow-xs"
            />
          </form>
        </div>

        {/* User actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/create-event"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs rounded-lg font-medium border border-dashed border-[#CCC8BA] hover:border-[#E65100] hover:text-[#E65100] text-[#222]"
          >
            <span>➕</span>
            <span>Host Event</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2.5 p-1.5 rounded-2xl hover:bg-black/5 transition-colors cursor-pointer select-none"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Rohit Verma"
                className="w-8 h-8 rounded-full object-cover border border-[#DDD9CE]"
              />
              <div className="text-left hidden xl:block">
                <p className="text-xs font-semibold text-[#111] leading-none">Rohit</p>
                <p className="text-[10px] text-stone-500 capitalize">Organizer</p>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden gap-2">
          <Link to="/explore" className="p-2 rounded-xl text-stone-700 hover:bg-black/5">
            <span>🔍</span>
          </Link>
          <button
            type="button"
            className="p-2 rounded-xl text-stone-700 hover:bg-black/5"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}
