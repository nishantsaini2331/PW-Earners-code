import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8DF] pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-[#111] tracking-tight">
            Saved Collections
          </h1>
          <p className="text-sm text-stone-600">
            Bookmarked conclaves, summits, and performances to revisit anytime.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-xs font-medium px-3 py-1.5 border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-stone-500 hover:text-rose-600"
        >
          Clear All
        </button>
      </div>

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
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-[#E65100] text-xs"
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
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-[#E65100] text-xs"
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
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-[#E65100] text-xs"
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
      </div>
    </div>
  );
}
