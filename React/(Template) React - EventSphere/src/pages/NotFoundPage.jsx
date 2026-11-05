import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-[#EBE8DF] p-8 text-center space-y-5 shadow-subtle">
        <div className="text-6xl font-black text-stone-300 font-mono">404</div>
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-stone-900">Experience Not Found</h2>
          <p className="text-xs text-stone-500">
            The page you're searching for might have concluded or moved to a new route.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 bg-[#F2F1EC] hover:bg-[#E7E5DC] text-[#222] border border-[#DDD9CE]"
          >
            <span>🏠</span> Home
          </Link>
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm"
          >
            <span>🧭</span> Browse Gatherings
          </Link>
        </div>
      </div>
    </div>
  );
}
