export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#0A222D] text-white">
      {/* Background technical grid and subtle brand orange ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#FD6200]/15 blur-3xl" />

      {/* Brand Name Typography */}
      <div className="relative z-10 flex flex-col items-center leading-none">
        <div className="flex items-center gap-2 font-display text-2xl sm:text-3xl font-black tracking-tight">
          <span className="text-white">JAGDAMBA</span>
          <span className="text-[#FD6200]">PROFILE</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#FD6200] mt-2">
          Steel Processing &middot; Vadodara
        </span>
      </div>

      {/* Engineering Laser Progress Track in Brand Orange Theme */}
      <div className="relative z-10 h-1.5 w-44 sm:w-52 overflow-hidden rounded-full bg-white/10 border border-white/10 mt-2">
        <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-transparent via-[#FD6200] to-orange-300 shadow-[0_0_14px_#FD6200] animate-[laserLoading_1.4s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
      </div>

      {/* Telemetry Status Line */}
      <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono tracking-wider text-slate-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD6200] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD6200]" />
        </span>
        <span>Loading facility data...</span>
      </div>

      <style>{`
        @keyframes laserLoading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(280%); }
        }
      `}</style>
    </div>
  );
}
