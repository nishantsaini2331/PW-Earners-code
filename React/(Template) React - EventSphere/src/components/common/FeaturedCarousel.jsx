import { Link } from 'react-router-dom';

export default function FeaturedCarousel() {
  return (
    <div className="relative group">
      {/* Viewport */}
      <div className="overflow-hidden rounded-3xl">
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0 relative aspect-video md:aspect-21/9 lg:aspect-24/9 max-h-125">
            {/* Background Image with warm rich gradient overlay */}
            <div className="absolute inset-0 bg-[#161513]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
                alt="Next-Gen React & Server Components Summit"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter brightness-95"
              />
              {/* Subtle editorial warm gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-[#141312]/80 to-transparent" />
            </div>

            {/* Content Overlay */}
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
                  <Link
                    to="/events/next-gen-react-summit"
                    className="hover:underline underline-offset-4 decoration-[#E65100]"
                  >
                    Next-Gen React & Server Components Summit
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-stone-300 line-clamp-2 max-w-2xl font-normal leading-relaxed">
                  Join India's leading frontend architects, core library authors, and designers for deep-dive technical explorations on compiler performance, concurrent patterns, and modern server component architecture.
                </p>

                <div className="flex items-center gap-5 pt-2 text-xs sm:text-sm text-stone-300 font-medium flex-wrap">
                  <span className="flex items-center gap-1.5 text-orange-300 font-semibold">
                    <span>📅</span>
                    Sat, Nov 15, 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <span>📍</span>
                    Bangalore International Centre, Bengaluru
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
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer backdrop-blur-sm text-lg"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer backdrop-blur-sm text-lg"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2 z-20">
        <span className="w-6 h-2 rounded-full bg-[#E65100]" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
      </div>
    </div>
  );
}
