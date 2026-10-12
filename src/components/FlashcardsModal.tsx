import React, { useState } from 'react';
import { FLASHCARDS } from '../data/flashcardsData';
import { X, ChevronLeft, ChevronRight, Shuffle, RotateCw } from 'lucide-react';

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [cards, setCards] = useState(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isOpen) return null;

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full flex flex-col shadow-xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div>
            <div className="text-xs font-semibold text-[#1d5c21] tracking-wide uppercase">
              Kamus Kilat Istilah
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Kartu Konsep Sosiologi
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Arena */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-xs text-stone-500 font-medium mb-3">
            <span>
              Kartu {currentIndex + 1} dari {cards.length}
            </span>
            <button
              type="button"
              onClick={handleShuffle}
              className="flex items-center gap-1 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Acak</span>
            </button>
          </div>

          {/* Flip Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[260px] p-6 rounded-2xl border border-stone-200 bg-stone-50/60 hover:bg-stone-50 transition-all cursor-pointer flex flex-col justify-between shadow-xs select-none relative group"
          >
            {/* Top Tag */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                {currentCard.category}
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1 group-hover:text-stone-600">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Klik untuk balik</span>
              </span>
            </div>

            {/* Front or Back View */}
            <div className="my-auto py-4 text-center">
              {!isFlipped ? (
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest font-semibold mb-2">
                    Istilah / Konsep
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900">
                    {currentCard.term}
                  </h4>
                </div>
              ) : (
                <div className="text-left space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-[#1d5c21] uppercase tracking-wider mb-1">
                      Definisi:
                    </div>
                    <p className="text-sm text-stone-800 leading-relaxed font-medium">
                      {currentCard.definition}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-stone-200/80">
                    <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-0.5">
                      Contoh Kasus / Nyata:
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 italic">
                      {currentCard.example}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-xs text-stone-400">
              {!isFlipped ? 'Sentuh untuk melihat arti & contoh' : 'Sentuh untuk kembali ke istilah'}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition-colors cursor-pointer shadow-xs"
              title="Kartu Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2.5 rounded-xl bg-[#297a2e] hover:bg-[#1d5c21] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
            >
              Balik Kartu
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition-colors cursor-pointer shadow-xs"
              title="Kartu Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
