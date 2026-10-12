import React from 'react';
import { X, ArrowRight, Network } from 'lucide-react';

interface MindMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (id: string) => void;
}

export const MindMapModal: React.FC<MindMapModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
}) => {
  if (!isOpen) return null;

  const clusters = [
    {
      title: '1. Landasan & Metodologi',
      color: 'bg-emerald-50 border-emerald-200 text-[#1d5c21]',
      chapters: [
        { id: 'bab1', num: '01', title: 'Sosiologi Sebagai Ilmu', desc: 'Comte, Durkheim, Weber, Marx & Ciri Nonetis' },
        { id: 'bab2', num: '02', title: 'Gejala Sosial', desc: 'Heterogenitas, Disorganisasi & Pitirim Sorokin' },
        { id: 'bab7', num: '07', title: 'Penelitian Sosial', desc: 'Metode Kualitatif vs Kuantitatif & Sampling' },
      ],
    },
    {
      title: '2. Interaksi & Agen Sosial',
      color: 'bg-teal-50 border-teal-200 text-teal-800',
      chapters: [
        { id: 'bab3', num: '03', title: 'Hubungan & Interaksi Sosial', desc: 'Dramaturgi Goffman, Asosiatif & Disosiatif' },
        { id: 'bab5', num: '05', title: 'Sosialisasi & Kepribadian', desc: 'Tahap Mead, Cermin Diri Cooley & Pola Asuh' },
        { id: 'bab6', num: '06', title: 'Keteraturan Sosial', desc: 'Tertib, Order, Keajegan, dan Pola Kebiasaan' },
      ],
    },
    {
      title: '3. Struktur, Lembaga & Kelompok',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      chapters: [
        { id: 'bab4', num: '04', title: 'Lembaga Sosial', desc: 'Big Five: Keluarga, Agama, Edukasi, Ekonomi, Politik' },
        { id: 'bab8', num: '08', title: 'Kelompok Sosial', desc: 'Gemeinschaft/Gesellschaft & In/Out-Group' },
        { id: 'bab9', num: '09', title: 'Kesetaraan Sosial', desc: 'Meritokrasi, Anti-Diskriminasi & UUD 1945 Psl 27' },
        { id: 'bab10', num: '10', title: 'Masyarakat Multikultural', desc: 'Filosofi Salad Bowl & Resolusi Robert Bales' },
      ],
    },
    {
      title: '4. Dinamika, Konflik & Perubahan Global',
      color: 'bg-sky-50 border-sky-200 text-sky-900',
      chapters: [
        { id: 'bab11', num: '11', title: 'Konflik Sosial', desc: 'Katup Penyelamat Coser & Metode Akomodasi' },
        { id: 'bab12', num: '12', title: 'Perubahan Sosial', desc: 'Teori Linier/Siklus & Cultural Lag Ogburn' },
        { id: 'bab13', num: '13', title: 'Globalisasi', desc: 'Sistem Dunia Wallerstein & Filter Jati Diri' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1d5c21] flex items-center justify-center">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1d5c21] tracking-wide uppercase">
                Peta Hubungan Materi
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                Peta Konsep 13 Bab Sosiologi
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          <p className="text-xs sm:text-sm text-stone-600">
            Klik bab manapun di bawah ini untuk langsung membaca rangkuman lengkapnya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clusters.map((cluster, ci) => (
              <div
                key={ci}
                className="rounded-xl border p-4 bg-white border-stone-200 shadow-xs flex flex-col"
              >
                <div className={`px-2.5 py-1 rounded-md text-xs font-bold inline-block self-start mb-3 border ${cluster.color}`}>
                  {cluster.title}
                </div>

                <div className="space-y-2 flex-1">
                  {cluster.chapters.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => {
                        onSelectChapter(ch.id);
                        onClose();
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-stone-50 border border-stone-100 hover:border-stone-200 transition-all flex items-center justify-between gap-2 group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#1d5c21] transition-colors">
                          Bab {ch.num}: {ch.title}
                        </div>
                        <div className="text-[11px] text-stone-500">
                          {ch.desc}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#1d5c21] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Tutup Peta
          </button>
        </div>
      </div>
    </div>
  );
};
