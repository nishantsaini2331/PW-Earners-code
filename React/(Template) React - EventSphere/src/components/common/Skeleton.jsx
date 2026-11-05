export default function Skeleton() {
  return (
    <div className="bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col shadow-subtle">
      <div className="animate-pulse rounded-lg bg-[#EAE8DF]/80 w-full aspect-16/10" />
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="animate-pulse rounded-md bg-[#EAE8DF]/80 h-4 w-1/3" />
          <div className="animate-pulse rounded-md bg-[#EAE8DF]/80 h-5 w-4/5" />
        </div>
        <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between">
          <div className="animate-pulse rounded-md bg-[#EAE8DF]/80 h-4 w-16" />
          <div className="animate-pulse rounded-md bg-[#EAE8DF]/80 h-4 w-12" />
        </div>
      </div>
    </div>
  );
}
