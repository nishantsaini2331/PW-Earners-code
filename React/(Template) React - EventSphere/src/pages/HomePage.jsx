import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Editorial Hero Header */}
      <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 border-b border-[#EBE8DF]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#C2410C] border border-orange-200">
              <span>✨</span> India's Curated Community Conclaves
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.08]">
              Extraordinary gatherings for curious minds.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Discover verified developer summits, acoustic indie evenings, founder pitch conclaves, and art retreats across Bengaluru, Mumbai, and Delhi NCR.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#E65100] text-white hover:bg-[#D84315] w-full sm:w-auto shadow-elevated"
            >
              <span>🧭</span>
              <span>Explore 40+ Gatherings</span>
            </Link>
            <Link
              to="/create-event"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#F2F1EC] hover:bg-[#E7E5DC] text-[#222] border border-[#DDD9CE] w-full sm:w-auto"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#E65100] text-lg">🔥</span>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">Curated Spotlight</h2>
          </div>
          <Link to="/explore" className="text-xs font-semibold text-[#E65100] hover:underline flex items-center gap-1">
            Browse all <span>›</span>
          </Link>
        </div>

        {/* Spotlight Slide */}
        <div className="relative group overflow-hidden rounded-3xl">
          <div className="relative aspect-video md:aspect-21/9 lg:aspect-24/9 max-h-125">
            <div className="absolute inset-0 bg-[#161513]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
                alt="Next-Gen React & Server Components Summit"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-[#141312]/80 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 lg:p-12 text-white max-w-3xl z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E65100] text-white shadow-sm">
                    <span>✨</span> Featured Spotlight
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-stone-200 border border-white/20 bg-white/10 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full font-medium">
                    Technology & AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap bg-[#EBF3ED] text-[#245436] border border-[#CFE2D4] text-xs px-2.5 py-1 rounded-full font-medium">
                    In-Person
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  <Link to="/events/next-gen-react-summit" className="hover:underline underline-offset-4 decoration-[#E65100]">
                    Next-Gen React & Server Components Summit
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-stone-300 line-clamp-2 max-w-2xl font-normal leading-relaxed">
                  Join India's leading frontend architects, core library authors, and designers for deep-dive technical explorations on compiler performance, concurrent patterns, and modern server component architecture.
                </p>

                <div className="flex items-center gap-5 pt-2 text-xs sm:text-sm text-stone-300 font-medium flex-wrap">
                  <span className="flex items-center gap-1.5 text-orange-300 font-semibold">
                    <span>📅</span> Sat, Nov 15, 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <span>📍</span> Bangalore International Centre, Bengaluru
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                    ₹1,499
                  </span>
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <Link
                    to="/events/next-gen-react-summit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#E65100] text-white hover:bg-[#D84315] shadow-lg"
                  >
                    <span>Explore Experience</span>
                    <span>→</span>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium px-5 py-2.5 text-base rounded-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                  >
                    Quick Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">Browse by Discipline</h2>
          <p className="text-xs text-stone-500">Curated tracks dynamically fetched from our active community listings</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* Category 1 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-orange-50 text-[#E65100] border-orange-200 group-hover:bg-[#E65100] group-hover:text-white text-lg">
              💻
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Technology & AI
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">14 Events</p>
            </div>
          </Link>

          {/* Category 2 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white text-lg">
              🎵
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Live Music & Concerts
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">9 Events</p>
            </div>
          </Link>

          {/* Category 3 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white text-lg">
              💼
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Startups & Venture Capital
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">8 Events</p>
            </div>
          </Link>

          {/* Category 4 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white text-lg">
              🏆
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Fitness & Marathons
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">5 Events</p>
            </div>
          </Link>

          {/* Category 5 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white text-lg">
              🎨
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Arts & Culture
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">4 Events</p>
            </div>
          </Link>

          {/* Category 6 */}
          <Link
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white text-lg">
              🎓
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                Workshops & Masterclasses
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">2 Events</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Upcoming Gatherings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#EBE8DF]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Upcoming Gatherings
            </h2>
            <p className="text-xs text-stone-500">
              Verified community events happening in the coming days
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs rounded-lg font-medium border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222]"
          >
            <span>View All Events</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* City Hubs Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">Explore by Community Hub</h2>
          <p className="text-xs text-stone-500">Vibrant hubs where local conclaves thrive</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/explore"
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
          >
            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80"
              alt="Bengaluru"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                <span>📍</span>
                <span>Bengaluru</span>
              </div>
              <p className="text-xs text-stone-300 font-medium mt-0.5">Tech & Acoustic Nights</p>
            </div>
          </Link>

          <Link
            to="/explore"
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
          >
            <img
              src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80"
              alt="Mumbai"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                <span>📍</span>
                <span>Mumbai</span>
              </div>
              <p className="text-xs text-stone-300 font-medium mt-0.5">Indie Festivals & Art</p>
            </div>
          </Link>

          <Link
            to="/explore"
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
          >
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80"
              alt="Delhi NCR"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                <span>📍</span>
                <span>Delhi NCR</span>
              </div>
              <p className="text-xs text-stone-300 font-medium mt-0.5">Conclaves & Founder Pitch</p>
            </div>
          </Link>

          <Link
            to="/explore"
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
          >
            <img
              src="https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=500&q=80"
              alt="Pune"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                <span>📍</span>
                <span>Pune</span>
              </div>
              <p className="text-xs text-stone-300 font-medium mt-0.5">Heritage & Code Labs</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Organizer Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1B18] text-white rounded-3xl p-8 sm:p-12 border border-[#33312B] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
              Empowering Community Hosts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Host your next summit, workshop or indie showcase on EventSphere.
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Every registered user can organize events. Enjoy seamless ticketing, automatic calendar syncing, verified attendee reviews, and real-time dashboard analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/create-event"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#E65100] text-white hover:bg-[#D84315] w-full sm:w-auto shadow-lg"
            >
              Create Event Now
            </Link>
            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl w-full sm:w-auto bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              Organizer Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
