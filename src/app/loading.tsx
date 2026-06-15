export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#020202] z-[9999] flex flex-col items-center justify-center space-y-6">
      <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
      <h2 className="text-white text-xs font-black uppercase tracking-[0.8em] animate-pulse">Loading</h2>
    </div>
  );
}
