export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_10%,transparent_70%)] dark:opacity-[0.15]" />
      <div className="animate-blob absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-from/30 blur-[100px] dark:bg-brand-from/20" />
      <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-via/25 blur-[110px] dark:bg-brand-via/15" />
      <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-brand-to/25 blur-[100px] dark:bg-brand-to/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
