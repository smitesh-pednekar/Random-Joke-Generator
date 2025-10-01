import { IoEyeOutline } from "react-icons/io5";

export default function JokeCard({ joke, loading, revealed, onReveal }) {
  const pill = joke?.type ? joke.type.charAt(0).toUpperCase() + joke.type.slice(1) : "Random";

  return (
    <section className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl shadow-2xl shadow-purple-900/20 p-5 sm:p-6 md:p-7 backdrop-blur-sm">
      {/* Header pill */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="uppercase tracking-wider text-[11px] font-semibold text-[var(--muted)]">
          Now Playing
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-purple-100 bg-purple-900/40 border border-purple-700/50">
          {pill}
        </span>
      </div>

      {/* Setup text or loading skeleton */}
      {loading ? (
        <div className="h-8 rounded-lg bg-white/5 overflow-hidden relative mb-4">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      ) : (
        <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-4 text-[var(--text)] animate-[fadeSlideIn_0.4s_ease-out]">
          {joke?.setup}
        </p>
      )}

      {/* Punchline with smooth reveal */}
      <div
        className={`text-base sm:text-lg text-pink-100 border-l-4 border-pink-400 bg-gradient-to-r from-pink-500/10 to-transparent rounded-r-lg px-4 py-3 transition-all duration-500 ease-in-out ${
          revealed ? "max-h-52 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden mb-0"
        }`}
      >
        {joke?.punchline}
      </div>

      {/* Reveal button (shown if not revealed and not loading) */}
      {!revealed && !loading && (
        <button
          onClick={onReveal}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/40 transition-all hover:scale-105 active:scale-100 mb-4 flex items-center justify-center gap-2"
        >
          <IoEyeOutline className="text-base" />
          Reveal Punchline
        </button>
      )}

      {/* Keyboard hints */}
      <p className="text-xs text-[var(--muted)] flex flex-wrap items-center gap-2">
        <span>Shortcuts:</span>
        <kbd className="px-2 py-1 border border-[var(--border)] rounded-md bg-[var(--surface)] font-mono text-[11px]">N</kbd>
        <span className="text-[10px]">new</span>
        <kbd className="px-2 py-1 border border-[var(--border)] rounded-md bg-[var(--surface)] font-mono text-[11px]">R</kbd>
        <span className="text-[10px]">reveal</span>
        <kbd className="px-2 py-1 border border-[var(--border)] rounded-md bg-[var(--surface)] font-mono text-[11px]">C</kbd>
        <span className="text-[10px]">copy</span>
      </p>
    </section>
  );
}
