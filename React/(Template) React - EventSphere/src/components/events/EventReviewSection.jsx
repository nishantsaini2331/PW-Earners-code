export default function EventReviewSection() {
  return (
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
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-base cursor-pointer">⭐</span>
            <span className="text-amber-500 text-base cursor-pointer">⭐</span>
            <span className="text-amber-500 text-base cursor-pointer">⭐</span>
            <span className="text-amber-500 text-base cursor-pointer">⭐</span>
            <span className="text-amber-500 text-base cursor-pointer">⭐</span>
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
        {/* Review 1 */}
        <div className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Pooja Sharma"
                className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
              />
              <div>
                <p className="text-xs font-bold text-stone-900 leading-none">
                  Pooja Sharma
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  2 days ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-xs">
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
            </div>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed pl-9">
            Exceptional architectural discussions on React Server Components! The live demos and roundtable questions brought rare clarity to compiler optimizations.
          </p>
        </div>

        {/* Review 2 */}
        <div className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Aditya Menon"
                className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
              />
              <div>
                <p className="text-xs font-bold text-stone-900 leading-none">
                  Aditya Menon
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  5 days ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-xs">
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
            </div>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed pl-9">
            The venue at BIC Domlur was immaculate, sound engineering was spot on, and connecting with other senior engineers was invaluable.
          </p>
        </div>

        {/* Review 3 */}
        <div className="p-4 rounded-2xl bg-white border border-[#F0ECE2] space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt="Sneha Kapoor"
                className="w-7 h-7 rounded-full object-cover border border-[#DDD9CE]"
              />
              <div>
                <p className="text-xs font-bold text-stone-900 leading-none">
                  Sneha Kapoor
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  1 week ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-xs">
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-amber-400">★</span>
              <span className="text-stone-200">★</span>
            </div>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed pl-9">
            Great speakers and actionable case studies. Looking forward to the next conclave in Bengaluru!
          </p>
        </div>
      </div>
    </section>
  );
}
