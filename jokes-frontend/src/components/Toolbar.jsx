import { IoSparkles } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Toolbar({ type, setType, onNew, onCopy, onShare }) {
  return (
    <header className="flex flex-col gap-4 mb-6">
      {/* Brand row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 shadow-lg shadow-purple-500/30" 
            aria-hidden="true"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Joke Generator
            </h1>
            <p className="text-sm text-[var(--muted)] mt-0.5">
              React + Spring Boot 
            </p>
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Category selector */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <label htmlFor="category" className="text-sm text-[var(--muted)] font-medium min-w-[72px]">
            Category
          </label>
          <select
            id="category"
            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all cursor-pointer hover:border-purple-500/50"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="programming">Programming</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          <button
            onClick={onNew}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/40 transition-all hover:scale-105 active:scale-100 flex items-center gap-2"
          >
            <IoSparkles className="text-base" />
            New Joke
          </button>
          <button
            onClick={onCopy}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40 transition-all hover:scale-105 active:scale-100 flex items-center gap-2"
          >
            <IoCopyOutline className="text-base" />
            Copy
          </button>
          <button
            onClick={onShare}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/30 hover:shadow-lg hover:shadow-amber-500/40 transition-all hover:scale-105 active:scale-100 flex items-center gap-2"
          >
            <IoShareSocialOutline className="text-base" />
            Share
          </button>
        </div>
      </div>
    </header>
  );
}
