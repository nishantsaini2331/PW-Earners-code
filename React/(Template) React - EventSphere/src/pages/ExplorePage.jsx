import { Link } from 'react-router-dom';

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight">
          Explore Curated Gatherings
        </h1>
        <p className="text-sm text-stone-600">
          Discover summits, masterclasses, acoustic shows, and retreats across India
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Top Search & Primary Filters Row */}
        <div className="bg-white rounded-2xl border border-[#EBE8DF] p-3 shadow-subtle flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <span className="text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 text-xs">
              🔍
            </span>
            <form>
              <input
                type="text"
                name="search"
                placeholder="Search by topic, category, artist, city, or venue..."
                className="w-full pl-9 pr-9 py-2 text-sm rounded-xl bg-[#FAF9F5] border border-[#DDD9CE] focus:bg-white focus:border-[#E65100] focus:ring-2 focus:ring-[#E65100]/20 text-[#111] placeholder-stone-400 outline-none transition-all"
              />
            </form>
          </div>

          <div className="relative min-w-37.5">
            <span className="text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
              📍
            </span>
            <select
              name="city"
              className="w-full pl-8 pr-7 py-2 text-xs font-medium rounded-xl bg-[#FAF9F5] border border-[#DDD9CE] focus:border-[#E65100] outline-none text-stone-800 appearance-none cursor-pointer"
            >
              <option value="All">All Locations</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Jaipur">Jaipur</option>
            </select>
            <span className="text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
              ▼
            </span>
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-xl border transition-all cursor-pointer select-none bg-[#FAF9F5] border-[#DDD9CE] text-stone-700 hover:bg-stone-100"
            >
              <span>📅</span>
              <span>Filter by Date</span>
              <span className="text-stone-400 text-xs">▼</span>
            </button>
          </div>

          <div className="relative min-w-35">
            <select
              name="sort"
              className="w-full px-3 py-2 text-xs font-medium rounded-xl bg-[#FAF9F5] border border-[#DDD9CE] focus:border-[#E65100] outline-none text-stone-800 appearance-none cursor-pointer"
            >
              <option value="startDate_asc">Earliest First</option>
              <option value="startDate_desc">Latest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="title_asc">Title: A – Z</option>
            </select>
            <span className="text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
              ▼
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            <span>🔄</span>
            <span>Reset</span>
          </button>
        </div>

        {/* Categories horizontal pill bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-[#1a1a1a] text-white shadow-sm"
          >
            <span>All Disciplines</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-white/20 text-white">
              42
            </span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-600 border border-[#E2DFD4]"
          >
            <span>Technology & AI</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">
              14
            </span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-600 border border-[#E2DFD4]"
          >
            <span>Live Music & Concerts</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">
              9
            </span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-600 border border-[#E2DFD4]"
          >
            <span>Startups & Venture Capital</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">
              8
            </span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-600 border border-[#E2DFD4]"
          >
            <span>Fitness & Marathons</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">
              5
            </span>
          </button>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-600 border border-[#E2DFD4]"
          >
            <span>Arts & Culture</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500">
              4
            </span>
          </button>
        </div>

        {/* Format & Pricing Pills */}
        <div className="flex items-center justify-between text-xs text-stone-500 flex-wrap gap-2 pt-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-stone-700">Format:</span>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium capitalize transition-all cursor-pointer bg-stone-800 text-white border-stone-800"
            >
              All Formats
            </button>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium capitalize transition-all cursor-pointer bg-white border-[#DDD9CE] text-stone-600 hover:bg-stone-50"
            >
              In-Person
            </button>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium capitalize transition-all cursor-pointer bg-white border-[#DDD9CE] text-stone-600 hover:bg-stone-50"
            >
              Online
            </button>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium capitalize transition-all cursor-pointer bg-white border-[#DDD9CE] text-stone-600 hover:bg-stone-50"
            >
              Hybrid
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">Admission:</span>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer bg-stone-800 text-white border-stone-800"
            >
              All
            </button>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer bg-white border-[#DDD9CE] text-stone-600 hover:bg-stone-50"
            >
              Free
            </button>
            <button
              type="button"
              className="px-2.5 py-1 rounded-lg border text-xs font-medium transition-all cursor-pointer bg-white border-[#DDD9CE] text-stone-600 hover:bg-stone-50"
            >
              Paid
            </button>
          </div>
        </div>
      </div>

      {/* Results Header with Active Filter Tags */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500 pt-2 border-b border-[#EBE8DF] pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span>
            Showing <strong className="text-stone-800">4</strong> events of 42
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#C2410C] border border-orange-200">
            <span>📍</span>
            <span>City: Bengaluru</span>
            <button
              type="button"
              className="hover:text-rose-700 ml-0.5 cursor-pointer"
              aria-label="Remove city filter"
            >
              ✕
            </button>
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
            <span className="text-[#E65100]">🏷️</span>
            <span>Category: Technology & AI</span>
            <button
              type="button"
              className="hover:text-rose-700 ml-0.5 cursor-pointer"
              aria-label="Remove category filter"
            >
              ✕
            </button>
          </span>
        </div>
      </div>

      {/* Events Grid */}
      <div className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Link
            to="/events/next-gen-react-summit"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                  alt="Next-Gen React & Server Components Summit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Technology & AI
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sat, Nov 15, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Bengaluru</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Next-Gen React & Server Components Summit
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹1,499</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/events/acoustic-sunset-indie-showcase"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                  alt="Acoustic Sunset Indie Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Live Music
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Fri, Nov 22, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Mumbai</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Acoustic Sunset Indie Showcase
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹799</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/events/founders-angel-pitch-conclave"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
                  alt="Founders & Angel Pitch Conclave"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Startups & VC
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sat, Dec 05, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Delhi NCR</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Founders & Angel Pitch Conclave
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">Hybrid</span>
              <span className="text-sm font-bold text-stone-900">Free</span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/events/pottery-ceramic-studio-retreat"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                  alt="Pottery & Ceramic Studio Retreat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Arts & Culture
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sun, Dec 13, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Jaipur</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Pottery & Ceramic Studio Retreat
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹2,200</span>
            </div>
          </Link>
        </div>

        {/* Bottom indicator */}
        <div className="py-6 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <span>Showing all 4 results for this filter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
