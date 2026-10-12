import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { X, CheckCircle2, XCircle, RotateCcw, Trophy, ArrowRight } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const total = QUIZ_QUESTIONS.length;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }));
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers({});
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div>
            <div className="text-xs font-semibold text-[#1d5c21] tracking-wide uppercase">
              Simulasi Uji Pemahaman
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Kuis TKA Sosiologi 2026
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

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {!isFinished ? (
            <div>
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-2">
                <span>Soal {currentIndex + 1} dari {total}</span>
                <span className="text-emerald-700 font-semibold tabular-nums">Skor: {score} Benar</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5 mb-5 overflow-hidden">
                <div
                  className="bg-[#297a2e] h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
              </div>

              {/* Chapter Tag */}
              <div className="text-xs font-semibold text-stone-500 mb-2">
                {currentQuestion.chapter}
              </div>

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-5 leading-snug">
                {currentQuestion.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {currentQuestion.options.map((option, idx) => {
                  let optionClass =
                    'border-stone-200 bg-white hover:bg-stone-50 text-stone-800';

                  if (isAnswered) {
                    if (idx === currentQuestion.correctIndex) {
                      optionClass =
                        'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                    } else if (selectedOption === idx) {
                      optionClass =
                        'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                    } else {
                      optionClass = 'border-stone-200 opacity-60 bg-stone-50 text-stone-600';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optionClass}`}
                    >
                      <span className="flex-1">{option}</span>
                      {isAnswered && idx === currentQuestion.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && selectedOption === idx && idx !== currentQuestion.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 animate-fadeIn mb-4">
                  <div className="font-bold text-[#1d5c21] mb-1">
                    {selectedOption === currentQuestion.correctIndex ? 'Bagus Sekali! Jawaban Tepat.' : 'Jawaban Kurang Tepat!'}
                  </div>
                  <p className="text-stone-700 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          ) : (
            /* Finished Score Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#1d5c21] mx-auto flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-1">
                Kuis Selesai!
              </h4>
              <p className="text-sm text-stone-600 mb-6">
                Kamu telah menyelesaikan 10 soal latihan TKA Sosiologi.
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 max-w-xs mx-auto mb-6">
                <div className="text-xs text-stone-500 font-medium mb-1">Skor Akhir</div>
                <div className="text-4xl font-extrabold text-[#1d5c21] tabular-nums">
                  {score * 10}
                  <span className="text-base text-stone-400 font-normal"> / 100</span>
                </div>
                <div className="text-xs text-stone-600 mt-2 font-medium">
                  {score >= 8 ? 'Luar biasa! Pemahamanmu sangat matang.' : score >= 5 ? 'Cukup baik, ulang materi bab yang keliru agar makin mantap.' : 'Pelajari kembali rangkuman dan coba lagi!'}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-4 py-2.5 rounded-lg border border-stone-300 text-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Coba Lagi</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg bg-[#297a2e] text-white font-semibold text-xs sm:text-sm hover:bg-[#1d5c21] transition-colors cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls when in progress */}
        {!isFinished && isAnswered && (
          <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-[#297a2e] hover:bg-[#1d5c21] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>{currentIndex < total - 1 ? 'Lanjut Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
