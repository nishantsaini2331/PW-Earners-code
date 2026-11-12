import { Link } from 'react-router-dom';

export default function EventDetailsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Back button */}
      <div className="flex items-center justify-between">
        <Link
          to="/explore"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
        >
          <span>‹</span>
          <span>Back to Explore</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#DDD9CE] bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 transition-all cursor-pointer"
          >
            <span>🔗</span>
            <span>Share</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer bg-white border-[#DDD9CE] hover:bg-stone-50 text-stone-700"
          >
            <span>🔖</span>
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className="relative rounded-3xl overflow-hidden aspect-16/8 max-h-[460px] shadow-subtle border border-[#EBE8DF]">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
          alt="Next-Gen React & Server Components Summit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs px-2.5 py-1 rounded-full font-medium">
              Technology & AI
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap bg-[#EBF3ED] text-[#245436] border border-[#CFE2D4] text-xs px-2.5 py-1 rounded-full font-medium">
              In-Person Gathering
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap bg-[#FFF3E0] text-[#B73E00] border border-[#FFE0B2] text-xs px-2.5 py-1 rounded-full font-medium">
              <span>✨</span> Featured Pick
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Next-Gen React & Server Components Summit
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-200 pt-1 flex-wrap font-medium">
            <span className="flex items-center gap-1 text-orange-300 font-semibold">
              <span>📅</span> Sat, Nov 15, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>🕒</span> 09:30 AM – 06:00 PM IST
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>📍</span> Bangalore International Centre, Domlur, Bengaluru
            </span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Details on Left, Booking Ticket Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Column: Dossier */}
        <div className="lg:col-span-2 space-y-10">
          {/* About Event */}
          <section className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-8 shadow-subtle space-y-4">
            <h2 className="text-xl font-bold text-stone-900">About the Gathering</h2>
            <div className="text-sm text-stone-700 leading-relaxed space-y-4 whitespace-pre-line font-normal">
              Join India's leading frontend architects, core open-source library authors, and product engineers for a full-day summit on React Server Components, Compiler performance, and real-time streaming architectures.

              Key highlights include in-depth technical sessions, teardowns of large-scale production migrations, live coding demos on concurrent rendering pipelines, and an exclusive networking mixer.
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-[#F2EFE8] flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-stone-500">Focus Areas:</span>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">#react</span>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">#server-components</span>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">#performance</span>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">#architecture</span>
            </div>
          </section>

          {/* Venue & Location details */}
          <section className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-8 shadow-subtle space-y-4">
            <h3 className="text-lg font-bold text-stone-900">Venue & Access</h3>
            <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#EAE7DC] flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#C2410C] flex items-center justify-center shrink-0 text-lg">
                📍
              </div>
              <div>
                <p className="font-bold text-sm text-stone-900">Bangalore International Centre, Domlur</p>
                <p className="text-xs text-stone-600 mt-0.5">Bengaluru, India</p>
              </div>
            </div>
          </section>

          {/* Organizer Dossier */}
          <section className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-8 shadow-subtle space-y-4">
            <h3 className="text-lg font-bold text-stone-900">Curated & Hosted by</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Rohit Verma"
                className="w-14 h-14 rounded-2xl object-cover border border-[#DDD9CE]"
              />
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to="/profile"
                      className="font-bold text-base text-stone-900 hover:text-[#E65100] transition-colors"
                    >
                      Rohit Verma
                    </Link>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                      Organizer
                    </span>
                  </div>

                  <Link to="/profile">
                    <button type="button" className="inline-flex items-center justify-center font-medium border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222] rounded-lg text-xs h-8 px-3">
                      View Profile
                    </button>
                  </Link>
                </div>
                <p className="text-xs font-medium text-[#C2410C]">
                  React India Guild
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  Community organizer and software architect fostering collaborative open-source tech initiatives across South Asia.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews section */}
          <section className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-8 shadow-subtle space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F2EFE8]">
              <div>
                <h3 className="text-xl font-bold text-[#111]">Attendee Reviews & Experiences</h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Real feedback from community members who joined this event
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#E65100]">
                  <span className="text-amber-500 text-lg">⭐</span>
                  <span className="text-lg font-black text-stone-900">
                    4.9
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-medium">
                  (3 reviews)
                </span>
              </div>
            </div>

            {/* Review Submission Form */}
            <form className="bg-[#FAF9F5] rounded-2xl p-4 sm:p-5 border border-[#EAE7DC] space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-stone-800">Rate your experience:</span>
                <div className="flex items-center gap-1 text-base text-amber-500 cursor-pointer">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  <span className="text-xs font-bold text-stone-700 ml-1.5">
                    5 / 5
                  </span>
                </div>
              </div>

              <textarea
                rows={3}
                name="comment"
                placeholder="Share how the venue, speakers, curation, or atmosphere resonated with you..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-[#DDD9CE] focus:border-[#E65100] outline-none text-stone-800"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs font-medium px-3 py-1.5 bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm"
                >
                  <span>✉️</span>
                  <span>Post Review</span>
                </button>
              </div>
            </form>

            {/* Reviews List */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Pooja Sharma"
                      className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-900 leading-none">Pooja Sharma</p>
                      <p className="text-[10px] text-stone-400 mt-0.5">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs text-amber-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed pl-9">
                  Exceptional architectural discussions on React Server Components! The live demos brought rare clarity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="Aditya Menon"
                      className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-900 leading-none">Aditya Menon</p>
                      <p className="text-[10px] text-stone-400 mt-0.5">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs text-amber-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed pl-9">
                  The venue at BIC Domlur was immaculate, sound engineering was spot on, and connecting with peers was invaluable.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Ticket Card */}
        <div className="sticky top-24 space-y-4">
          <div className="bg-white rounded-3xl border border-[#EBE8DF] p-6 sm:p-7 shadow-elevated space-y-6">
            <div className="flex items-baseline justify-between pb-4 border-b border-[#F2EFE8]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                  Admission Pass
                </span>
                <div className="text-3xl font-extrabold text-stone-900 mt-0.5">
                  ₹1,499
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-700 rounded-lg">
                  11 days left
                </span>
              </div>
            </div>

            {/* Capacity status */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <span>👥</span> Capacity
                </span>
                <span className="font-bold text-stone-900">
                  85 of 100 seats filled
                </span>
              </div>
              <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E65100] rounded-full transition-all w-[80%]"
                />
              </div>
              <p className="text-[11px] text-stone-400 text-right">
                15 seats remaining
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium bg-[#E65100] text-white hover:bg-[#D84315] w-full py-3.5 text-base shadow-elevated"
              >
                Reserve Passes
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222] w-full"
              >
                <span>📅</span> Add to My Schedule
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 border-t border-[#F2EFE8] space-y-2 text-[11px] text-stone-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">🛡️</span>
                <span>Verified organizer & authentic attendee review policy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400">✓</span>
                <span>Digital ticket QR sent to your email instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
