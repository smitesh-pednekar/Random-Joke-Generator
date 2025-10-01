import { useEffect, useState, useCallback } from "react";
import { fetchRandom } from "./lib/api.js";
import Toolbar from "./components/Toolbar.jsx";
import JokeCard from "./components/JokeCard.jsx";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

export default function App() {
  const [type, setType] = useState("any");
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, isSuccess = true) => {
    setToast({ msg, isSuccess });
    setTimeout(() => setToast(null), 1800);
  };

  const getJoke = useCallback(async () => {
    setLoading(true);
    setRevealed(false);
    try {
      const data = await fetchRandom(type);
      setJoke(data);
    } catch {
      setJoke({
        id: 0,
        type: type === "any" ? "programming" : type,
        setup: "Why do programmers prefer dark mode?",
        punchline: "Because light attracts bugs.",
      });
      showToast("Using offline joke", false);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    getJoke();
  }, [getJoke]);

  useEffect(() => {
    const h = (e) => {
      const k = e.key.toLowerCase();
      if (k === "n") getJoke();
      if (k === "r") setRevealed(true);
      if (k === "c") copyJoke();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [getJoke, joke, revealed]);

  const copyJoke = async () => {
    if (!joke) return;
    const text = `${joke.setup} — ${revealed ? joke.punchline : "(reveal to view)"}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard", true);
    } catch {
      showToast("Copy failed", false);
    }
  };

  const shareJoke = async () => {
    if (!joke) return;
    const text = `${joke.setup}\n${revealed ? joke.punchline : ""}`.trim();
    if (navigator.share) {
      try {
        await navigator.share({ title: "Random Joke", text });
      } catch {}
    } else {
      await copyJoke();
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        <Toolbar
          type={type}
          setType={setType}
          onNew={getJoke}
          onCopy={copyJoke}
          onShare={shareJoke}
        />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Main joke card */}
          <div className="lg:col-span-2">
            <JokeCard
              joke={joke}
              loading={loading}
              revealed={revealed}
              onReveal={() => setRevealed(true)}
            />
          </div>

          {/* About sidebar */}
          <aside className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl shadow-2xl shadow-purple-900/20 p-5 sm:p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              This app fetches jokes from a Spring Boot backend that proxies the Official Joke API.
            </p>
            <div className="text-xs text-[var(--muted)] space-y-1.5">
              <p>✓ Normalized JSON responses</p>
              <p>✓ Category filtering</p>
              <p>✓ Keyboard shortcuts</p>
              <p>✓ Offline fallback</p>
            </div>
          </aside>
        </main>

        {/* Toast notification with icons */}
        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--panel)] border border-[var(--border)] rounded-2xl px-5 py-3 text-sm font-medium shadow-2xl shadow-purple-900/50 backdrop-blur-md animate-[fadeSlideIn_0.3s_ease-out] z-50 flex items-center gap-2">
            {toast.isSuccess ? (
              <IoCheckmarkCircle className="text-emerald-400 text-lg" />
            ) : (
              <IoCloseCircle className="text-red-400 text-lg" />
            )}
            <span>{toast.msg}</span>
          </div>
        )}
      </div>
    </div>
  );
}
