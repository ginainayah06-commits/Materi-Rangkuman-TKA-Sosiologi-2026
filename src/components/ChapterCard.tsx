import React, { useState } from 'react';
import { Chapter } from '../data/chaptersData';
import {
  ChevronDown,
  Volume2,
  VolumeX,
  CheckCircle,
  Bookmark,
  Share2,
  Copy,
  Check,
} from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  searchQuery?: string;
  defaultOpenAll?: boolean;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  isCompleted,
  onToggleComplete,
  isBookmarked,
  onToggleBookmark,
  searchQuery = '',
  defaultOpenAll = false,
}) => {
  // Track open accordion items; default first item open or all if search/defaultOpenAll
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    chapter.sections.forEach((s, idx) => {
      initial[s.id] = defaultOpenAll || idx === 0 || !!searchQuery;
    });
    return initial;
  });

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync open state when defaultOpenAll or searchQuery changes
  React.useEffect(() => {
    if (defaultOpenAll || searchQuery) {
      const all: Record<string, boolean> = {};
      chapter.sections.forEach((s) => {
        all[s.id] = true;
      });
      setOpenItems(all);
    }
  }, [defaultOpenAll, searchQuery, chapter.sections]);

  const toggleSection = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Text-To-Speech Reader
  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Prepare text to read
    const textToRead = `${chapter.title}. ${chapter.subtitle}. Ringkasan: ${chapter.summary}. ${chapter.sections
      .map((s) => `${s.title}. ${s.content.intro || ''}`)
      .join('. ')}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleCopySummary = async () => {
    const text = `${chapter.num}. ${chapter.title}\n${chapter.subtitle}\n\n${chapter.summary}\n\nRangkuman TKA Sosiologi - SMA IT Insan Sejahtera`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Highlight helper
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-amber-200 text-stone-950 px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <article
      id={chapter.id}
      className={`scroll-mt-24 rounded-2xl overflow-hidden border transition-all duration-200 bg-white mb-8 shadow-xs ${
        isCompleted
          ? 'border-emerald-300/80 ring-1 ring-emerald-200/50'
          : 'border-stone-200'
      }`}
    >
      {/* Chapter Banner */}
      <div className="relative h-44 sm:h-52 overflow-hidden bg-stone-900">
        <img
          src={chapter.image}
          alt={`Ilustrasi ${chapter.title}`}
          className="w-full h-full object-cover object-center brightness-90 hover:scale-102 transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />

        {/* Floating chapter header text */}
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
          <div className="flex items-center justify-between gap-4 mb-1">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
              BAB {chapter.num} · {chapter.category}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10">
              <button
                type="button"
                onClick={handleSpeak}
                title={isSpeaking ? 'Hentikan Suara' : 'Dengarkan Ringkasan'}
                className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  isSpeaking ? 'bg-emerald-500 text-white' : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => onToggleBookmark(chapter.id)}
                title={isBookmarked ? 'Hapus Simpanan' : 'Simpan Bab'}
                className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  isBookmarked ? 'bg-amber-500 text-white' : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleCopySummary}
                title="Salin Ringkasan"
                className="p-1.5 rounded-md text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
            {highlightText(chapter.title)}
          </h2>
          <p className="text-xs sm:text-sm text-stone-200/90 italic">
            "{chapter.subtitle}"
          </p>
        </div>
      </div>

      {/* Chapter Overview & Thinkers */}
      <div className="p-5 sm:p-6 border-b border-stone-100 bg-[#faf9f4]/60">
        <p className="text-sm text-stone-700 leading-relaxed mb-3">
          {highlightText(chapter.summary)}
        </p>

        {chapter.thinkers && chapter.thinkers.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-stone-500 flex-wrap">
            <span className="font-semibold text-stone-700">Tokoh Kunci:</span>
            {chapter.thinkers.map((t, idx) => (
              <React.Fragment key={t}>
                <span className="text-stone-800 font-medium">{t}</span>
                {idx < (chapter.thinkers?.length ?? 0) - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Accordion Sections */}
      <div className="divide-y divide-stone-100 p-2 sm:p-4">
        {chapter.sections.map((section) => {
          const isOpen = !!openItems[section.id];
          return (
            <div key={section.id} className="rounded-xl overflow-hidden my-1 transition-colors">
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between gap-4 p-3.5 sm:p-4 text-left font-semibold text-stone-900 hover:bg-stone-50 rounded-xl transition-colors cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-semibold group-hover:text-[#1d5c21] transition-colors">
                  {highlightText(section.title)}
                </span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                  isOpen ? 'bg-[#297a2e] text-white rotate-180' : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 pt-1 space-y-3.5 text-stone-700 text-sm leading-relaxed animate-fadeIn">
                  {section.content.intro && (
                    <p className="text-stone-800 font-medium">{highlightText(section.content.intro)}</p>
                  )}

                  {section.content.subLabel && (
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-800 pt-1">
                      {section.content.subLabel}
                    </div>
                  )}

                  {section.content.items && section.content.items.length > 0 && (
                    <ul className="space-y-2 pl-1">
                      {section.content.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#297a2e] mt-2 shrink-0" />
                          <span className="text-stone-700">{highlightText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.content.callouts &&
                    section.content.callouts.map((callout, ci) => (
                      <div
                        key={ci}
                        className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 text-xs sm:text-sm leading-relaxed"
                      >
                        {callout.title && (
                          <div className="font-bold text-[#1d5c21] mb-1">
                            {callout.title}
                          </div>
                        )}
                        <p className="whitespace-pre-line text-stone-700">{highlightText(callout.text)}</p>
                      </div>
                    ))}

                  {section.content.notes &&
                    section.content.notes.map((note, ni) => (
                      <p key={ni} className="text-xs text-stone-600 italic bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/50">
                        {highlightText(note)}
                      </p>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion footer button */}
      <div className="p-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onToggleComplete(chapter.id)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
            isCompleted
              ? 'bg-emerald-100 text-[#1d5c21] hover:bg-emerald-200'
              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-[#1d5c21]' : 'text-stone-400'}`} />
          <span>{isCompleted ? 'Sudah Dipelajari' : 'Tandai Selesai'}</span>
        </button>

        <span className="text-xs text-stone-400">
          Bab {chapter.num} dari 13
        </span>
      </div>
    </article>
  );
};
