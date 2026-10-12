import React from 'react';
import { Search, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  completedCount: number;
  totalChapters: number;
  onOpenFlashcards: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  completedCount,
  totalChapters,
  onOpenFlashcards,
  onOpenQuiz,
}) => {
  const percentComplete = Math.round((completedCount / totalChapters) * 100);

  const categories = [
    'Semua Bab',
    'Dasar Sosiologi',
    'Interaksi & Struktur',
    'Struktur & Lembaga',
    'Dinamika & Konflik',
    'Perubahan & Modernitas',
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
      {/* Visual Hero Banner Card */}
      <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm bg-stone-900 min-h-[340px] md:min-h-[400px] flex items-end">
        <img
          src="/src/assets/images/sociology_hero_learning_1791772606094.jpg"
          alt="Siswa belajar interaksi sosial di masyarakat"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Scrim gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 w-full text-white">
          {/* Unboxed clean metadata (zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 mb-2">
            <span>Rangkuman Materi TKA 2026</span>
            <span aria-hidden="true">·</span>
            <span>SMA IT Insan Sejahtera</span>
            <span aria-hidden="true">·</span>
            <span>13 Bab Lengkap</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 max-w-3xl" style={{ textWrap: 'balance' }}>
            Sosiologi: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">Membaca Masyarakat</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200/95 max-w-2xl mb-6 leading-relaxed">
            Panduan lengkap, santai, dan mendalam untuk persiapan TKA Sosiologi. Mulai dari pemikiran Auguste Comte hingga dinamika era globalisasi dan Teori Sistem Dunia.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onOpenQuiz}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-emerald-300 hover:bg-emerald-200 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>Coba Kuis Uji Pemahaman</span>
            </button>
            <button
              type="button"
              onClick={onOpenFlashcards}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-white" />
              <span>Kamus Konsep Kilat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Strip */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white border border-stone-200/80 rounded-xl p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1d5c21] flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Kurikulum TKA</div>
            <div className="text-base font-bold text-stone-900 tabular-nums">13 Bab Pokok Sosiologi</div>
          </div>
        </div>

        <div className="bg-white border border-stone-200/80 rounded-xl p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-1">
              <span>Progres Belajar</span>
              <span className="font-semibold text-stone-800 tabular-nums">{completedCount}/{totalChapters} Bab ({percentComplete}%)</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#297a2e] h-full transition-all duration-300"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-stone-200/80 rounded-xl p-4 flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Metode Belajar</div>
            <div className="text-base font-bold text-stone-900">Audio, Kuis & Interaktif</div>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari materi, konsep, tokoh (misal: Durkheim, Marx, asimilasi)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#297a2e]/30 focus:border-[#297a2e] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1d5c21] text-white shadow-xs'
                    : 'bg-white border border-stone-200/80 text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
