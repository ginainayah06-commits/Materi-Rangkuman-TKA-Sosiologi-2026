import React from 'react';
import { BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenFlashcards: () => void;
  onOpenMindMap: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenFlashcards,
  onOpenMindMap,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#faf9f4]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-[#1d5c21] whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <BookOpen className="w-5 h-5 text-[#297a2e]" />
          <span>Rangkuman Sosiologi</span>
        </a>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#bab1"
            className="hover:text-[#1d5c21] transition-colors whitespace-nowrap shrink-0"
          >
            Materi Bab
          </a>
          <button
            type="button"
            onClick={onOpenFlashcards}
            className="hover:text-[#1d5c21] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Kamus Konsep
          </button>
          <button
            type="button"
            onClick={onOpenMindMap}
            className="hover:text-[#1d5c21] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Peta Konsep
          </button>
          <a
            href="#footer-info"
            className="hover:text-[#1d5c21] transition-colors whitespace-nowrap shrink-0"
          >
            Tentang Materi
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenQuiz}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#297a2e] hover:bg-[#1d5c21] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Kuis TKA Sosiologi
          </button>
        </div>
      </div>
    </header>
  );
};
