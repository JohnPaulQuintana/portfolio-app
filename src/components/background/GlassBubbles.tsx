export default function GlassBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Bubble 1 - deep slow */}
      <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full
        bg-soft/50 backdrop-blur-3xl border border-white/20
        animate-floatSlow" />

      {/* Bubble 2 - mid layer */}
      <div className="absolute top-[55%] left-[60%] w-[320px] h-[320px] rounded-full
        bg-primary-soft/20 backdrop-blur-2xl border border-white/20
        animate-floatSlow" />

      {/* Bubble 3 - foreground glow */}
      <div className="absolute top-[20%] left-[75%] w-[260px] h-[260px] rounded-full
        bg-white/30 backdrop-blur-xl border border-white/40
        animate-floatSlow" />

      {/* Small floating bubble */}
      <div className="absolute top-[65%] left-[15%] w-[120px] h-[120px] rounded-full
        bg-primary/10 backdrop-blur-xl border border-white/20
        animate-floatTiny" />

    </div>
  );
}