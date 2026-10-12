import React, { useState, useEffect } from 'react';
import { CHAPTERS, Chapter } from './data/chaptersData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterCard } from './components/ChapterCard';
import { QuizModal } from './components/QuizModal';
import { FlashcardsModal } from './components/FlashcardsModal';
import { MindMapModal } from './components/MindMapModal';
import {
  ChevronUp,
  Bookmark,
  CheckCircle2,
  Sparkles,
  BookOpen,
  SlidersHorizontal,
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Bab');
  const [filterBookmarkOnly, setFilterBookmarkOnly] = useState(false);
  const [openAll, setOpenAll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterId, setActiveChapterId] = useState('bab1');

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isMindMapOpen, setIsMindMapOpen] = useState(false);

  // LocalStorage state
  const [completedChapters, setCompletedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sosiologi_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedChapters, setBookmarkedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sosiologi_bookmarked');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sosiologi_completed', JSON.stringify(completedChapters));
    } catch {
      // ignore
    }
  }, [completedChapters]);

  useEffect(() => {
    try {
      localStorage.setItem('sosiologi_bookmarked', JSON.stringify(bookmarkedChapters));
    } catch {
      // ignore
    }
  }, [bookmarkedChapters]);

  // Scroll Progress & Active Chapter Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      const progress = sh > 0 ? (st / sh) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Find active chapter
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveChapterId(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleComplete = (id: string) => {
    setCompletedChapters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedChapters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Chapters
  const filteredChapters = CHAPTERS.filter((ch) => {
    // Category filter
    if (selectedCategory !== 'Semua Bab' && ch.category !== selectedCategory) {
      return false;
    }

    // Bookmark filter
    if (filterBookmarkOnly && !bookmarkedChapters.includes(ch.id)) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = ch.title.toLowerCase().includes(q);
      const inSub = ch.subtitle.toLowerCase().includes(q);
      const inSummary = ch.summary.toLowerCase().includes(q);
      const inThinkers = ch.thinkers?.some((t) => t.toLowerCase().includes(q));
      const inSections = ch.sections.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.content.intro?.toLowerCase().includes(q) ||
          s.content.items?.some((it) => it.toLowerCase().includes(q)) ||
          s.content.callouts?.some(
            (c) =>
              c.title?.toLowerCase().includes(q) ||
              c.text.toLowerCase().includes(q)
          )
      );

      return inTitle || inSub || inSummary || inThinkers || inSections;
    }

    return true;
  });

  return (
    <div id="top" className="min-h-screen bg-[#faf9f4] text-stone-900 flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-stone-200">
        <div
          className="h-full bg-gradient-to-r from-[#297a2e] to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navbar */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onOpenMindMap={() => setIsMindMapOpen(true)}
      />

      {/* Hero Header */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        completedCount={completedChapters.length}
        totalChapters={CHAPTERS.length}
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Body Section with Sidebar */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 w-full">
        {/* Controls Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-white border border-stone-200/80 rounded-xl shadow-xs">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-600 font-medium">
            <span>
              Menampilkan <strong className="text-stone-900">{filteredChapters.length}</strong> dari {CHAPTERS.length} Bab
            </span>
            {searchQuery && (
              <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-xs">
                Filter: "{searchQuery}"
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setFilterBookmarkOnly(!filterBookmarkOnly)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterBookmarkOnly
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${filterBookmarkOnly ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>Tersimpan ({bookmarkedChapters.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setOpenAll(!openAll)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              {openAll ? 'Tutup Semua Rincian' : 'Buka Semua Rincian'}
            </button>

            <button
              type="button"
              onClick={() => setIsMindMapOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 border border-emerald-200 text-[#1d5c21] hover:bg-emerald-100 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Peta Bab</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-8">
          {/* Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-6 scrollbar-thin">
            <div className="p-4 bg-white border border-stone-200/90 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Daftar 13 Bab
                </span>
                <span className="text-xs font-semibold text-[#1d5c21] tabular-nums">
                  {completedChapters.length}/13 Selesai
                </span>
              </div>

              <nav className="space-y-1">
                {CHAPTERS.map((ch) => {
                  const isActive = activeChapterId === ch.id;
                  const isDone = completedChapters.includes(ch.id);

                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => scrollToChapter(ch.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer group ${
                        isActive
                          ? 'bg-emerald-50 text-[#1d5c21] font-bold border border-emerald-200'
                          : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isActive ? 'bg-[#1d5c21] text-white' : 'bg-stone-100 text-stone-600'
                        }`}>
                          {ch.num}
                        </span>
                        <span className="truncate">{ch.title}</span>
                      </div>

                      {isDone && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#297a2e] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsQuizOpen(true)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#297a2e] text-white hover:bg-[#1d5c21] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kuis TKA Sosiologi</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsFlashcardsOpen(true)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Kamus Konsep Kilat</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Feed */}
          <div className="flex-1 min-w-0">
            {filteredChapters.length > 0 ? (
              filteredChapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  isCompleted={completedChapters.includes(chapter.id)}
                  onToggleComplete={toggleComplete}
                  isBookmarked={bookmarkedChapters.includes(chapter.id)}
                  onToggleBookmark={toggleBookmark}
                  searchQuery={searchQuery}
                  defaultOpenAll={openAll}
                />
              ))
            ) : (
              <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center shadow-xs">
                <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-900 mb-1">
                  Materi Tidak Ditemukan
                </h3>
                <p className="text-sm text-stone-500 max-w-md mx-auto mb-5">
                  Tidak ada bab atau topik yang cocok dengan pencarian "{searchQuery}". Silakan coba kata kunci lain seperti Marx, Durkheim, interaksi, atau asimilasi.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Semua Bab');
                    setFilterBookmarkOnly(false);
                  }}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#297a2e] text-white hover:bg-[#1d5c21] transition-colors cursor-pointer"
                >
                  Reset Filter & Pencarian
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {scrollProgress > 15 && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#1d5c21] text-white shadow-lg hover:bg-[#297a2e] transition-all cursor-pointer z-40"
          title="Kembali ke atas"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
      />

      <MindMapModal
        isOpen={isMindMapOpen}
        onClose={() => setIsMindMapOpen(false)}
        onSelectChapter={scrollToChapter}
      />

      {/* Footer */}
      <footer id="footer-info" className="border-t border-stone-200 bg-white py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm text-stone-500">
          <p className="font-semibold text-stone-800 mb-1">
            Rangkuman Materi TKA Sosiologi 2026 · SMA Islam Terpadu Insan Sejahtera
          </p>
          <p className="text-stone-500 max-w-xl mx-auto">
            13 Bab ringkas, interaktif, dan mudah dipahami. Dilengkapi dengan kuis latihan, kamus istilah konsep, dan pembacaan teks otomatis.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-stone-400">
            <span>Kurikulum TKA</span>
            <span aria-hidden="true">·</span>
            <span>Edisi Belajar Mandiri</span>
            <span aria-hidden="true">·</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
