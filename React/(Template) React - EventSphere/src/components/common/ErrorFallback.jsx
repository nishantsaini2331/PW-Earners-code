import { Link } from 'react-router-dom';

export default function ErrorFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-[#EBE8DF] p-8 text-center shadow-subtle space-y-5">
        <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-100 text-2xl">
          ⚠️
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#1a1a1a]">Something took an unexpected turn</h2>
          <p className="text-sm text-stone-600">
            An error occurred while loading this view.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 bg-[#F2F1EC] hover:bg-[#E7E5DC] text-[#222] border border-[#DDD9CE]">
            <span>🔄</span> Try Again
          </button>
          <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm">
            <span>🏠</span> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
