export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3.5 bg-navy-950 text-white">
      <div className="flex flex-col items-center leading-none">
        <div className="flex items-center gap-1.5 font-display text-xl sm:text-2xl font-black tracking-tight">
          <span>JAGDAMBA</span>
          <span className="text-[#F59E0B]">PROFILE</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDE68A] mt-1">
          Steel Processing &middot; Vadodara
        </span>
      </div>

      <div className="h-[2px] w-36 overflow-hidden rounded-full bg-white/10 mt-2">
        <div className="h-full w-1/3 animate-[loadingBar_1.1s_ease-in-out_infinite] rounded-full bg-[#F59E0B]" />
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
