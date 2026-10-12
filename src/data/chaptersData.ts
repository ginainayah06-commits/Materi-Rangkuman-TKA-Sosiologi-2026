export interface SectionItem {
  id: string;
  title: string;
  content: {
    intro?: string;
    subLabel?: string;
    items?: string[];
    callouts?: { title?: string; text: string }[];
    notes?: string[];
  };
}

export interface Chapter {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: 'Dasar Sosiologi' | 'Interaksi & Struktur' | 'Struktur & Lembaga' | 'Dinamika & Konflik' | 'Perubahan & Modernitas';
  image: string;
  fallbackGradient: string;
  summary: string;
  thinkers?: string[];
  sections: SectionItem[];
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'bab1',
    num: '01',
    title: 'SOSIOLOGI SEBAGAI ILMU',
    subtitle: 'Ilmu yang Mengajak Kita Membaca Masyarakat',
    category: 'Dasar Sosiologi',
    image: '/src/assets/images/sociology_figures_theory_1791772617785.jpg',
    fallbackGradient: 'from-emerald-900 via-teal-900 to-slate-900',
    summary: 'Lahirnya sosiologi di era Revolusi Prancis & Industri, pemikiran Comte, Durkheim, Weber, Marx, serta 4 ciri utama sosiologi (Empiris, Teoritis, Kumulatif, Nonetis).',
    thinkers: ['Auguste Comte', 'Emile Durkheim', 'Max Weber', 'Karl Marx', 'Herbert Spencer'],
    sections: [
      {
        id: 'bab1-1',
        title: '1. Kenapa Sosiologi Bisa Lahir? (Sejarah)',
        content: {
          intro: 'Sosiologi itu sebenarnya ilmu yang "telat lahir" di abad ke-19, jauh lebih muda dibanding ilmu alam seperti matematika atau biologi. Tapi kelahirannya bukan tanpa alasan—saat itu dunia dilanda kekacauan sosial besar.',
          subLabel: 'Pemicu Utama:',
          items: [
            'Revolusi Perancis: Rakyat menggulingkan monarki, sistem politik berubah drastis menjadi demokrasi dan penuh pergolakan kekuasaan.',
            'Revolusi Industri di Inggris: Pabrik-pabrik kapitalisme menjamur, urbanisasi besar-besaran dari desa ke kota, pengaruh bangsawan dan tradisi memudar.',
            'Dampaknya (Chaos!): Kemiskinan di kawasan industri merajalela, kriminalitas meningkat tajam, dan tatanan masyarakat kehilangan arah pedoman.',
            'Solusinya: Auguste Comte pada tahun 1838 mengenalkan istilah Sociology dalam karyanya Cours de Philosophie Positive.',
          ],
          callouts: [
            {
              title: 'Etimologi Kata',
              text: 'Berasal dari kata Socious (Latin) = kawan/teman, dan Logos (Yunani) = ilmu pengetahuan. Intinya: Sosiologi adalah ilmu yang mempelajari bagaimana manusia berteman, berinteraksi, dan hidup bersama di masyarakat.',
            },
            {
              title: 'Catatan Laeyendecker',
              text: 'Sosiologi lahir karena Eropa Barat mengalami transformasi masif: masuknya kapitalisme, reformasi agama (Martin Luther), gelombang individualisme, dan revolusi politik.',
            },
          ],
        },
      },
      {
        id: 'bab1-2',
        title: '2. Para Tokoh Kunci Sosiologi (The Pioneers)',
        content: {
          intro: 'Untuk memahami sosiologi, kamu wajib mengenal 5 tokoh perintis utama dan warisan teorinya:',
          callouts: [
            {
              title: 'Auguste Comte (Bapak Sosiologi)',
              text: 'Mencetuskan Hukum 3 Tahap Pemikiran Manusia: (1) Teologis: meyakini kekuatan gaib dan dewa; (2) Metafisik: pemikiran abstrak filosofis tentang hukum alam; (3) Positif: penalaran ilmiah rasional berdasarkan observasi terukur.',
            },
            {
              title: 'Emile Durkheim (Fakta Sosial & Solidaritas)',
              text: 'Fokus pada Fakta Sosial (cara bertindak, berpikir, dan merasa yang berada di luar individu namun memaksa). Membedakan Solidaritas Mekanik (masyarakat tradisional/desa yang homogen) dan Solidaritas Organik (masyarakat modern/kota yang heterogen dengan pembagian kerja saling melengkapi).',
            },
            {
              title: 'Max Weber (Tindakan Sosial & Verstehen)',
              text: 'Meneliti Tindakan Sosial yang diarahkan pada orang lain. Membagi 4 tipe tindakan: (1) Rasional Instrumental: cara dan tujuan terukur; (2) Berorientasi Nilai: didasarkan keyakinan etis/moral; (3) Tradisional: karena adat kebiasaan; (4) Afektif: dorongan spontan emosional.',
            },
            {
              title: 'Karl Marx (Konflik Kelas & Materialisme Historis)',
              text: 'Melihat motor penggerak sejarah adalah pertentangan kelas ekonomi: Borjuis (pemilik modal dan alat produksi) melawan Proletar (kaum buruh yang menjual tenaga kerjanya).',
            },
            {
              title: 'Herbert Spencer (Evolusi Sosial)',
              text: 'Menganalogikan masyarakat seperti organisme biologis yang berevolusi dari bentuk sederhana ke bentuk kompleks: Individu → Keluarga → Kelompok → Desa → Kota → Negara.',
            },
          ],
        },
      },
      {
        id: 'bab1-3',
        title: '3. Ciri Khas Sosiologi (Karakteristik Mutlak)',
        content: {
          intro: 'Menurut Soerjono Soekanto (2006), sosiologi memiliki 4 karakteristik utama yang membedakannya:',
          items: [
            'Empiris: Didasarkan pada observasi kenyataan dan akal sehat di lapangan, bukan dugaan spekulatif atau mitos.',
            'Teoritis: Selalu berusaha menyusun abstraksi dari hasil observasi untuk menjelaskan hubungan sebab-akibat fenomena.',
            'Kumulatif: Teori-teori sosiologi dibangun dan diperluas atas dasar teori yang telah ada sebelumnya, menyempurnakan dan memperdalam analisis.',
            'Nonetis: Tugas sosiolog adalah mengkaji dan menjelaskan fakta secara objektif, bukan menilai apakah suatu tindakan secara moral itu baik atau buruk.',
          ],
        },
      },
      {
        id: 'bab1-4',
        title: '4. Sifat & Hakikat Ilmu Sosiologi',
        content: {
          items: [
            'Ilmu Sosial: Mempelajari gejala kemasyarakatan dan relasi antarmanusia.',
            'Ilmu Murni sekaligus Terapan: Mengembangkan teori keilmuan (pure science) serta dapat diterapkan langsung untuk perumusan kebijakan publik (applied science).',
            'Abstrak, Bukan Konkret: Mengkaji bentuk dan pola interaksi sosial, bukan wujud fisik materi manusia.',
            'Kategoris, Bukan Normatif: Menelaah apa yang sedang terjadi di dunia nyata (das Sein), bukan menetapkan apa yang seharusnya terjadi (das Sollen).',
            'Mengkaji Gejala Umum: Mempelajari prinsip-prinsip umum interaksi sosial masyarakat secara komprehensif.',
          ],
        },
      },
      {
        id: 'bab1-5',
        title: '5. Profesi & Peran Lulusan Sosiologi',
        content: {
          items: [
            'Ahli Riset: Mengumpulkan data primer, membedah masalah publik, dan menguji fenomena sosial teraktual.',
            'Konsultan Kebijakan: Memberikan rekomendasi berdasar data lapangan agar kebijakan pemerintah atau korporasi tepat sasaran.',
            'Sosiolog Klinis / Praktisi: Terjun langsung membantu resolusi konflik komunal, pemberdayaan masyarakat, dan rehabilitasi komunitas.',
            'Pendidik & Akademisi: Mentransfer pengetahuan di institusi sekolah dan perguruan tinggi.',
            'Aktivis Lembaga Swadaya Masyarakat (NGO): Membela hak warga rentan dan mendorong keadilan distributif.',
          ],
        },
      },
      {
        id: 'bab1-6',
        title: '6. Objek Kajian Sosiologi',
        content: {
          intro: 'Objek material sosiologi adalah kehidupan sosial masyarakat, interaksi antarmanusia, dan proses sosial yang melingkupinya.',
          callouts: [
            {
              title: 'Sudut Pandang Tokoh',
              text: 'Auguste Comte meninjau Statika Sosial (struktur yang mapan) & Dinamika Sosial (proses perubahan); Peter L. Berger menegaskan sosiologi melahirkan cara pandang kritis membongkar lapisan kenyataan semu di balik rutinitas sehari-hari.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab2',
    num: '02',
    title: 'GEJALA SOSIAL',
    subtitle: 'Dinamika dan Ragam Peristiwa dalam Kehidupan Bermasyarakat',
    category: 'Dasar Sosiologi',
    image: '/src/assets/images/sociology_hero_learning_1791772606094.jpg',
    fallbackGradient: 'from-amber-900 via-stone-900 to-slate-900',
    summary: 'Konsep gejala sosial menurut Pitirim Sorokin, faktor kultural & struktural, heterogenitas vertikal-horizontal, serta dampaknya bagi ketertiban dan kemajuan masyarakat.',
    thinkers: ['Pitirim A. Sorokin'],
    sections: [
      {
        id: 'bab2-1',
        title: '1. Apa Sih Gejala Sosial Itu? (Pengertian)',
        content: {
          intro: 'Gejala sosial merupakan hasil samping atau perwujudan dari interaksi sosial manusia sehari-hari. Bisa berjalan selaras harapan masyarakat, atau justru melenceng menciptakan keresahan publik.',
          callouts: [
            {
              title: 'Pendapat Pitirim A. Sorokin',
              text: 'Gejala sosial adalah hubungan timbal balik antara beragam gejala sosial (seperti ekonomi, agama, moral, hukum) serta timbal balik antara gejala sosial dengan kondisi nonsosial (seperti iklim, letak geografis, dan kondisi hayati).',
            },
          ],
        },
      },
      {
        id: 'bab2-2',
        title: '2. Faktor Penyebab Lahirnya Gejala Sosial',
        content: {
          items: [
            'Heterogenitas Horizontal: Kemajemukan suku, ras, agama, dan profesi yang setara namun rawan gesekan jika toleransi menipis.',
            'Heterogenitas Vertikal: Stratifikasi kelas ekonomi, kekayaan, dan status kekuasaan (si kaya vs si miskin).',
            'Penyimpangan Sosial: Pelanggaran terhadap norma hukum dan kesusilaan (tawuran, kejahatan siber, narkoba).',
            'Perubahan Sosial Cepat: Modernisasi memicu Culture Shock (kaget budaya) dan Culture Lag (kesenjangan antara kemajuan gawai dengan kesiapan mental/etika).',
            'Faktor Kultural: Nilai budaya yang mengakar kuat, baik tradisi gotong royong maupun mentalitas apatis yang memicu kemiskinan turun-temurun.',
            'Faktor Struktural: Pola relasi kelembagaan antara pengambil kebijakan dengan masyarakat akar rumput.',
          ],
        },
      },
      {
        id: 'bab2-3',
        title: '3. Dampak Gejala Sosial: Dua Sisi Koin',
        content: {
          callouts: [
            {
              title: 'Dampak Negatif (Disorganisasi)',
              text: 'Ketidakteraturan sosial, maraknya kriminalitas, kerusakan lingkungan akibat keserakahan, kepadatan pemukiman kumuh, dan dekadensi moral.',
            },
            {
              title: 'Dampak Positif (Pembaruan)',
              text: 'Akselerasi mutu pendidikan, kemajuan teknologi informasi, peningkatan keterbukaan pemikiran, kesetaraan gender, dan kesadaran hak asasi manusia.',
            },
          ],
          notes: [
            'Contoh nyata gawai pintar: Sisi terang memudahkan belajar daring dan silaturahmi jarak jauh; sisi gelap memicu fenomena phubbing (mengabaikan kawan bicara demi menatap layar ponsel) dan kecemasan sosial.',
          ],
        },
      },
      {
        id: 'bab2-4',
        title: '4. Klasifikasi Wilayah Gejala Sosial',
        content: {
          items: [
            'Gejala Ekonomi: Daya beli, pengangguran terbuka, inflasi, kemiskinan absolut.',
            'Gejala Budaya: Masuknya budaya pop global, pergeseran tradisi lokal, komodifikasi seni.',
            'Gejala Lingkungan Hidup: Bencana hidrometeorologi akibat deforestasi dan tata kelola sampah buruk.',
            'Gejala Psikologis: Stres komunal, depresi perkotaan, dan alienasi individu akibat kompetisi hidup yang ketat.',
          ],
        },
      },
    ],
  },
  {
    id: 'bab3',
    num: '03',
    title: 'HUBUNGAN & INTERAKSI SOSIAL',
    subtitle: 'Seni Berkomunikasi, Dramaturgi, dan Pola Asosiatif-Disosiatif',
    category: 'Interaksi & Struktur',
    image: '/src/assets/images/sociology_multicultural_society_1791772630884.jpg',
    fallbackGradient: 'from-teal-900 via-sky-950 to-slate-900',
    summary: 'Syarat kontak dan komunikasi, teori Dramaturgi Erving Goffman (Front vs Back Stage), faktor pendorong interaksi (imitasi hingga sugesti), serta proses asosiatif & disosiatif.',
    thinkers: ['Erving Goffman', 'George Herbert Mead', 'William I. Thomas'],
    sections: [
      {
        id: 'bab3-1',
        title: '1. Hakikat Interaksi Sosial & Syarat Sahnya',
        content: {
          intro: 'Interaksi sosial adalah hubungan timbal balik yang dinamis antara individu dengan individu, individu dengan kelompok, maupun antarkelompok manusia. Interaksi hanya sah jika memenuhi dua syarat mutlak:',
          subLabel: 'A. Kontak Sosial',
          items: [
            'Kontak Primer: Terjadi tatap muka secara langsung fisik (face-to-face).',
            'Kontak Sekunder Langsung: Berkomunikasi via perantara teknologi secara seketika (telepon, panggilan video, chatting).',
            'Kontak Sekunder Tidak Langsung: Melalui pihak ketiga (menitipkan pesan melalui perantara).',
          ],
          callouts: [
            {
              title: 'B. Komunikasi Efektif',
              text: 'Harus ada unsur Komunikator (pengirim pesan), Pesan (informasi/simbol), Saluran/Media, Komunikan (penerima pesan), dan Umpan Balik (feedback). Pesan bisa berbentuk verbal (bahasa kata) maupun nonverbal (bahasa tubuh, gestur, ekspresi muka).',
            },
          ],
        },
      },
      {
        id: 'bab3-2',
        title: '2. Teori Interaksi Sosial Para Ahli',
        content: {
          callouts: [
            {
              title: 'Dramaturgi (Erving Goffman) - Panggung Kehidupan',
              text: 'Manusia diibaratkan aktor teater: Front Stage (Panggung Depan) adalah ruang presentasi diri di mana seseorang mengelola kesan (impression management) agar tampil sopan dan profesional; Back Stage (Panggung Belakang) adalah ruang privat tempat individu melepaskan topeng sosialnya dan menjadi diri sendiri tanpa penghakiman audiens.',
            },
            {
              title: 'Interaksionisme Simbolik (George H. Mead)',
              text: 'Interaksi dibangun atas interpretasi makna simbolis bersama. Sikap manusia dipandu oleh makna yang disematkan pada simbol gerak, kata, dan ekspresi.',
            },
            {
              title: 'Definisi Situasi (William I. Thomas)',
              text: 'If men define situations as real, they are real in their consequences. Jika seseorang meyakini sebuah situasi nyata, maka konsekuensi dari keyakinan tersebut akan terwujud dalam perilaku nyata.',
            },
          ],
        },
      },
      {
        id: 'bab3-3',
        title: '3. Faktor Pendorong Interaksi Sosial',
        content: {
          items: [
            'Imitasi: Meniru penampilan fisik, gaya bicara, atau perilaku luar orang lain.',
            'Identifikasi: Tingkat lanjut imitasi; dorongan mendalam ingin menjadi persis sama secara utuh dengan idolanya.',
            'Simpati: Perasaan tertarik dan peduli pada situasi orang lain.',
            'Empati: Simpati yang diwujudkan dalam tindakan nyata untuk menolong penderitaan sesama.',
            'Sugesti: Menerima pandangan atau arahan orang lain secara langsung tanpa pemikiran kritis, sering kali karena wibawa pihak pemberi pengaruh.',
            'Motivasi: Dorongan rasional atau emosional untuk menggapai sasaran tertentu.',
          ],
        },
      },
      {
        id: 'bab3-4',
        title: '4. Bentuk Proses Asosiatif vs Disosiatif',
        content: {
          callouts: [
            {
              title: 'Proses Asosiatif (Menuju Integrasi)',
              text: 'Kerja Sama (gotong royong, tawar-menawar), Akomodasi (mediasi, kompromi, konsiliasi, ajudikasi di pengadilan), Akulturasi (A + B = AB, budaya berpadu tanpa menghilangkan kepribadian asli), Asimilasi (A + B = C, peleburan menciptakan budaya baru), dan Amalgamasi (peleburan lewat pernikahan campuran).',
            },
            {
              title: 'Proses Disosiatif (Menuju Friksi)',
              text: 'Persaingan / Kompetisi (adu prestasi sesuai aturan tanpa kontak fisik), Kontravensi (perang dingin, rasa tidak suka tersembunyi, sabotase, bisik-bisik gosip), dan Pertentangan / Konflik Terbuka (upaya menundukkan pihak lawan dengan ancaman fisik atau kekerasan).',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab4',
    num: '04',
    title: 'LEMBAGA SOSIAL',
    subtitle: 'Sistem Norma dan Aturan Pengatur Kebutuhan Hidup Masyarakat',
    category: 'Struktur & Lembaga',
    image: '/src/assets/images/sociology_figures_theory_1791772617785.jpg',
    fallbackGradient: 'from-emerald-950 via-teal-950 to-stone-900',
    summary: 'Hakikat lembaga sebagai sistem norma (bukan sekadar gedung fisik), fungsi manifes dan laten, tipologi lembaga, serta "The Big Five" lembaga sosial pokok.',
    sections: [
      {
        id: 'bab4-1',
        title: '1. Miskonsepsi Lembaga Sosial (Konsep & Ciri)',
        content: {
          intro: 'Lembaga sosial bukan sekadar gedung fisik atau yayasan formal. Dalam sosiologi, lembaga sosial adalah himpunan norma yang berkisar pada pemenuhan kebutuhan pokok masyarakat manusia.',
          items: [
            'Memiliki Simbol/Lambang: Merepresentasikan identitas nilai (misal: cincin kawin untuk keluarga, timbangan untuk peradilan).',
            'Memiliki Tujuan yang Jelas: Dirancang untuk melayani fungsi kehidupan tertentu.',
            'Memiliki Perlengkapan: Sarana prasarana penunjang (misal: ruang sidang, kitab undang-undang, buku kurikulum).',
            'Tradisi Tertulis & Lisan: Memuat tata tertib norma kesusilaan dan prosedur formal.',
            'Kekekalan: Aturan lembaga memiliki daya tahan lama dan diwariskan antargenerasi melampaui usia individu pembuatnya.',
          ],
        },
      },
      {
        id: 'bab4-2',
        title: '2. Klasifikasi Tipologi Lembaga Sosial',
        content: {
          items: [
            'Berdasarkan Perkembangan: Crescive (tumbuh spontan dari adat masyarakat, seperti barter dan perkawinan) vs Enacted (sengaja dibentuk dengan rancangan sistematis, seperti sekolah dan perbankan).',
            'Berdasarkan Kepentingan: Basic Institutions (sangat fundamental: keluarga dan agama) vs Subsidiary (pelengkap rekreatif: hiburan dan rekreasi).',
            'Berdasarkan Penerimaan: Sanctioned (diakui sah oleh masyarakat: KUA, kepolisian) vs Unsanctioned (ditolak dan ilegal: sindikat kejahatan, kelompok premanisme).',
            'Berdasarkan Penyebaran: General (berlaku universal dunia: agama, perkawinan) vs Restricted (hanya berlaku pada komunitas khusus).',
            'Berdasarkan Fungsinya: Operative (menghimpun tata cara aktivitas: koperasi) vs Regulative (mengawasi ketaatan norma: lembaga kejaksaan dan pengadilan).',
          ],
        },
      },
      {
        id: 'bab4-3',
        title: '3. "The Big Five" Lembaga Sosial Pokok',
        content: {
          callouts: [
            {
              title: 'Keluarga (Fondasi Pertama)',
              text: 'Fungsi Manifes: reproduksi, sosialisasi pertama, proteksi fisik dan afeksi kasih sayang, penentuan status nasab. Fungsi Laten: menjaga prestise klan dan transmisi kepemilikan warisan.',
            },
            {
              title: 'Pendidikan (Pengembang Potensi)',
              text: 'Fungsi Manifes: transfer ilmu, pembekalan keterampilan kerja, pewarisan kebudayaan luhur. Fungsi Laten: memperpanjang masa ketergantungan remaja, ajang pencarian pasangan sebaya, sarana pembangkangan kritis.',
            },
            {
              title: 'Ekonomi (Pemenuhan Sandang Pangan)',
              text: 'Fungsi Manifes: produksi, distribusi, konsumsi barang dan jasa demi kemakmuran bersama. Fungsi Laten: degradasi lingkungan alam dan pergeseran pola pemukiman warga.',
            },
            {
              title: 'Agama (Kompas Spiritual & Moral)',
              text: 'Fungsi Manifes: pedoman etika transendental, kedamaian batin, perekat silaturahmi. Fungsi Laten: fanatisme kelompok eksklusif jika tidak dibarengi kedewasaan beragama.',
            },
            {
              title: 'Politik (Tata Kelola Kekuasaan)',
              text: 'Fungsi Manifes: menjaga keutuhan kedaulatan, menegakkan hukum, menyelenggarakan pelayanan umum. Fungsi Laten: konsolidasi dinasti politik dan penguatan oligarki kekuasaan.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab5',
    num: '05',
    title: 'SOSIALISASI & PEMBENTUKAN KEPRIBADIAN',
    subtitle: 'Proses Pembelajaran Nilai, Peran Sosial, dan Tahapan Kedewasaan',
    category: 'Struktur & Lembaga',
    image: '/src/assets/images/sociology_hero_learning_1791772606094.jpg',
    fallbackGradient: 'from-lime-950 via-emerald-950 to-slate-900',
    summary: 'Tahapan sosialisasi George Herbert Mead, teori Looking Glass Self Cooley, 5 agen sosialisasi utama, pola represif vs partisipatif, serta internalisasi nilai.',
    thinkers: ['George H. Mead', 'Charles Horton Cooley'],
    sections: [
      {
        id: 'bab5-1',
        title: '1. Konsep Sosialisasi & Tahapan George H. Mead',
        content: {
          intro: 'Sosialisasi adalah proses sepanjang hayat ketika individu mempelajari nilai, norma, dan peran sosial agar mampu bertindak secara terampil sebagai anggota masyarakat yang berbudaya.',
          callouts: [
            {
              title: 'Tahap 1: Preparatory Stage (Persiapan)',
              text: 'Masa balita ketika anak baru meniru tindakan orang dewasa tanpa memahami makna utuh di balik tindakan tersebut.',
            },
            {
              title: 'Tahap 2: Play Stage (Bermain Peran)',
              text: 'Anak mulai mampu memainkan peran figur orang dewasa di sekitarnya (misal: bermain dokter-pasien, masak-masakan, meniru figur orang tua).',
            },
            {
              title: 'Tahap 3: Game Stage (Siap Bertindak Sesuai Aturan)',
              text: 'Anak memahami posisinya dalam tim serta mengerti peran dan hak rekan-rekannya sesuai peraturan permainan bersama.',
            },
            {
              title: 'Tahap 4: Generalized Other (Penerimaan Norma Kolektif)',
              text: 'Tahap kedewasaan penuh di mana individu mematuhi tata norma masyarakat luas tanpa perlu pengawasan langsung dari orang tua.',
            },
          ],
        },
      },
      {
        id: 'bab5-2',
        title: '2. Looking Glass Self (Charles Horton Cooley)',
        content: {
          intro: 'Konsep cermin diri Cooley menyatakan kepribadian dan citra diri manusia terbentuk melalui 3 tahapan cermin evaluasi sosial:',
          items: [
            'Kita membayangkan bagaimana penampilan dan perilaku kita di mata orang lain.',
            'Kita membayangkan bagaimana orang lain menilai kepribadian atau perilaku kita.',
            'Kita merasakan respon emosional diri (bangga, malu, rendah diri, percaya diri) berdasarkan penafsiran atas penilaian tersebut.',
          ],
        },
      },
      {
        id: 'bab5-3',
        title: '3. Lima Agen Sosialisasi & Pola Asuh',
        content: {
          items: [
            'Keluarga: Agen primer pertama peletak fondasi moral, kasih sayang, dan pembiasaan dasar.',
            'Teman Sebaya (Peer Group): Memberikan ruang belajar kesetaraan interaksi dan negosiasi antarsahabat.',
            'Sekolah: Agen formal pembentuk kepatuhan terstruktur, kompetensi akademis, dan nilai meritokrasi.',
            'Lingkungan Kerja: Membentuk kedisiplinan profesionalitas, ketahanan target, dan koordinasi birokrasi.',
            'Media Massa: Kanal informasi massal penyebar nilai modernitas, kesadaran isu global, dan gaya hidup.',
          ],
          callouts: [
            {
              title: 'Pola Asuh Represif vs Partisipatif',
              text: 'Pola Represif mengedepankan hukuman fisik/verbal, komunikasi satu arah instruktif dari atas ke bawah. Pola Partisipatif mengutamakan dialog dua arah, pemberian reward penguatan positif, dan pemahaman rasional atas aturan.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab6',
    num: '06',
    title: 'KETERATURAN SOSIAL',
    subtitle: 'Seni Menjaga Harmoni Masyarakat Tetap Tertib dan Anti-Chaos',
    category: 'Struktur & Lembaga',
    image: '/src/assets/images/sociology_multicultural_society_1791772630884.jpg',
    fallbackGradient: 'from-emerald-900 via-teal-900 to-zinc-900',
    summary: 'Empat tingkatan terwujudnya keteraturan sosial (Tertib, Order, Keajegan, Pola), syarat mutlak ketertiban hukum, serta dinamika faktor pendukung dan penghambat.',
    sections: [
      {
        id: 'bab6-1',
        title: '1. Hakikat & Empat Tingkatan Keteraturan Sosial',
        content: {
          intro: 'Keteraturan sosial adalah kondisi keselarasan dinamis di mana warga masyarakat mematuhi nilai dan norma yang disepakati secara konsisten.',
          callouts: [
            {
              title: 'Level 1: Tertib Sosial (Basic Compliance)',
              text: 'Suasana di mana individu mematuhi aturan nyata karena memahami kewajiban dasarnya (misal: pengendara menggunakan helm dan mematuhi rambu lalu lintas).',
            },
            {
              title: 'Level 2: Order / Tatanan (Sistem Norma Diakui)',
              text: 'Kondisi ketertiban yang telah terorganisasi menjadi sistem tatanan norma bersama yang dipatuhi komunitas (misal: jam tenang belajar di asrama).',
            },
            {
              title: 'Level 3: Keajegan (Kepatuhan Berkelanjutan)',
              text: 'Kepatuhan yang dilakukan secara berkesinambungan tanpa henti hingga membentuk ritme hidup harian yang stabil.',
            },
            {
              title: 'Level 4: Pola (Bentuk Hubungan Baku)',
              text: 'Corak interaksi yang telah mendarah daging menjadi template baku penyelesaian masalah (misal: mekanisme musyawarah desa untuk mufakat).',
            },
          ],
        },
      },
      {
        id: 'bab6-2',
        title: '2. Tiga Syarat Mutlak Keteraturan Sosial',
        content: {
          items: [
            'Kesadaran Warga Negara: Partisipasi sukarela yang timbul dari pemahaman bahwa ketertiban menguntungkan semua pihak.',
            'Norma yang Kontekstual & Relevan: Peraturan yang dibuat harus masuk akal, adil, dan menyesuaikan perkembangan zaman.',
            'Aparat Penegak yang Konsisten: Ketegasan hukum tanpa diskriminasi atau tebang pilih.',
          ],
        },
      },
    ],
  },
  {
    id: 'bab7',
    num: '07',
    title: 'PENELITIAN SOSIAL',
    subtitle: 'Metodologi Ilmiah Membedah Fenomena Masyarakat Secara Faktual',
    category: 'Dasar Sosiologi',
    image: '/src/assets/images/sociology_figures_theory_1791772617785.jpg',
    fallbackGradient: 'from-cyan-950 via-slate-900 to-teal-950',
    summary: 'Sikap ilmiah peneliti, pendekatan Kuantitatif vs Kualitatif, teknik sampling (Probability vs Non-Probability), variabel X & Y, serta struktur laporan penelitian ilmiah.',
    sections: [
      {
        id: 'bab7-1',
        title: '1. Mindset Peneliti Sosial: No Halu, No Hoaks!',
        content: {
          intro: 'Penelitian sosial adalah kegiatan ilmiah terencana untuk menyingkap rahasia fakta sosial menggunakan penalaran logis dan metodologi valid.',
          items: [
            'Objektif: Menilai data berdasarkan fakta empiris, membuang prasangka pribadi.',
            'Skeptis: Tidak mudah percaya pada klaim sensasional sebelum memeriksa validitas sumber.',
            'Analitis & Kritis: Membedah relasi kausalitas antarvariabel dan bertanya alasan di balik fenomena.',
            'Jujur: Menampilkan data apa adanya tanpa rekayasa manipulatif.',
            'Terbuka: Lapang dada menerima tinjauan sejawat (peer review) dan kritik metodologis.',
          ],
        },
      },
      {
        id: 'bab7-2',
        title: '2. Kuantitatif vs Kualitatif: Dua Mazhab Riset',
        content: {
          callouts: [
            {
              title: 'Pendekatan Kuantitatif (Mazhab Angka & Uji Statistik)',
              text: 'Mengukur variabel dengan angka numerik, instrumen angket/kuesioner terstruktur, sampel representatif skala besar, pengujian hipotesis (H0 vs Ha), dan penarikan kesimpulan generalisasi statistik.',
            },
            {
              title: 'Pendekatan Kualitatif (Mazhab Narasi & Makna Mendalam)',
              text: 'Menggali kedalaman pemaknaan informan, teknik wawancara mendalam (in-depth interview), observasi partisipatif, analisis tematik reduksi data, dan laporan dalam bentuk narasi deskriptif tebal (thick description).',
            },
          ],
        },
      },
      {
        id: 'bab7-3',
        title: '3. Teknik Penarikan Sampel (Sampling)',
        content: {
          items: [
            'Probability Sampling (Peluang Acak Sama): Simple random sampling, stratified sampling (berstrata), cluster sampling (berdasar wilayah).',
            'Non-Probability Sampling (Kriteria Khusus): Purposive sampling (sampel ahli bertarget tujuan), Snowball sampling (berkembang bertahap dari satu informan ke informan berikutnya seperti bola salju).',
          ],
        },
      },
    ],
  },
  {
    id: 'bab8',
    num: '08',
    title: 'KELOMPOK SOSIAL',
    subtitle: 'Dinamika Circle, Solidaritas Komunitas, dan Partikularisme',
    category: 'Struktur & Lembaga',
    image: '/src/assets/images/sociology_hero_learning_1791772606094.jpg',
    fallbackGradient: 'from-emerald-950 via-teal-900 to-slate-900',
    summary: 'Klasifikasi kelompok Cooley (Primer-Sekunder), Tönnies (Gemeinschaft-Gesellschaft), Durkheim (Mekanik-Organik), Sumner (In-Out Group), serta bahaya partikularisme sosial.',
    thinkers: ['Charles H. Cooley', 'Ferdinand Tönnies', 'Emile Durkheim', 'William Graham Sumner', 'Robert K. Merton'],
    sections: [
      {
        id: 'bab8-1',
        title: '1. Hakikat Kelompok & Proses Terbentuknya',
        content: {
          intro: 'Kelompok sosial adalah himpunan atau kesatuan manusia yang hidup bersama karena adanya hubungan timbal balik dan kesadaran saling memiliki.',
          items: [
            'Tahapan Bruce Tuckman: Forming (kenalan) → Storming (konflik adaptasi) → Norming (penyusunan aturan) → Performing (kolaborasi produktif) → Adjourning (pembubaran setelah target selesai).',
          ],
        },
      },
      {
        id: 'bab8-2',
        title: '2. Tipologi Kelompok Menurut Para Suhu Sosiologi',
        content: {
          callouts: [
            {
              title: 'Charles H. Cooley: Kelompok Primer vs Sekunder',
              text: 'Primer: hubungan tatap muka intim, erat secara emosional (keluarga, sahabat karib). Sekunder: hubungan formal berorientasi tujuan fungsional (serikat pekerja, organisasi kantor).',
            },
            {
              title: 'Ferdinand Tönnies: Gemeinschaft vs Gesellschaft',
              text: 'Gemeinschaft (Paguyuban): ikatan batin murni, alami, kekal atas dasar rasa cinta dan darah (keluarga, kerabat adat). Gesellschaft (Patembayan): ikatan kontraktual pamrih atas dasar kepentingan jangka pendek (kemitraan bisnis).',
            },
            {
              title: 'William Graham Sumner: In-Group vs Out-Group',
              text: 'In-Group: kelompok "kita" yang dibalut rasa simpati dan loyalitas. Out-Group: kelompok "mereka" di luar lingkaran yang kerap dinilai dengan prasangka permusuhan.',
            },
            {
              title: 'Robert K. Merton: Membership vs Reference Group',
              text: 'Membership Group: kelompok di mana seseorang secara administratif resmi terdaftar. Reference Group: kelompok yang dijadikan acuan tolak ukur gaya hidup atau etika meski dirinya bukan anggota formal kelompok itu.',
            },
          ],
        },
      },
      {
        id: 'bab8-3',
        title: '3. Bahaya Partikularisme & Eksklusivisme',
        content: {
          items: [
            'Etnosentrisme: Sikap mengagungkan kebudayaan sendiri dan merendahkan standar kebudayaan kelompok lain.',
            'Chauvinisme: Patriotisme buta berlebihan yang memandang bangsa sendiri paling unggul.',
            'Nepotisme: Mengutamakan famili atau kawan segolongan untuk jabatan tanpa menimbang kompetensi.',
            'Eksklusivisme: Menutup diri secara ketat dari pergaulan dunia luar.',
          ],
        },
      },
    ],
  },
  {
    id: 'bab9',
    num: '09',
    title: 'KESETARAAN SOSIAL',
    subtitle: 'Seni Menyamakan Derajat: No Privilege, No Diskriminasi Club!',
    category: 'Dinamika & Konflik',
    image: '/src/assets/images/sociology_multicultural_society_1791772630884.jpg',
    fallbackGradient: 'from-teal-950 via-emerald-950 to-neutral-900',
    summary: 'Tiga konsep kesetaraan (Kesempatan, Titik Awal, dan Hasil), implementasi UUD 1945 Pasal 27 di Indonesia, serta pemberantasan diskriminasi hak asasi.',
    sections: [
      {
        id: 'bab9-1',
        title: '1. Tiga Konsep Utama Kesetaraan Sosial',
        content: {
          callouts: [
            {
              title: 'Kesetaraan Kesempatan (Equality of Opportunity)',
              text: 'Semua individu memperoleh hak dan peluang yang sama untuk mengakses posisi strategis masyarakat berdasarkan prestasi dan kecakapan (merit system), tanpa terhalang latar belakang keluarga atau status sosial.',
            },
            {
              title: 'Kesetaraan Titik Awal (Equality of Starting Point)',
              text: 'Kompetisi sosial yang adil mensyaratkan setiap anak bangsa mengawali langkah dari garis start yang berimbang melalui jaminan pendidikan dasar berkualitas dan pemenuhan gizi yang merata.',
            },
            {
              title: 'Kesetaraan Hasil (Equality of Outcome)',
              text: 'Kebijakan distributif yang memastikan tidak ada jurang kemiskinan ekstrem di garis akhir kesejahteraan warga negara.',
            },
          ],
        },
      },
      {
        id: 'bab9-2',
        title: '2. Landasan Konstitusional Indonesia (UUD 1945 Pasal 27)',
        content: {
          items: [
            'Pasal 27 Ayat 1: Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan tanpa diskriminasi.',
            'Pasal 27 Ayat 2: Tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.',
            'Pasal 27 Ayat 3: Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.',
          ],
        },
      },
    ],
  },
  {
    id: 'bab10',
    num: '10',
    title: 'MASYARAKAT MULTIKULTURAL',
    subtitle: 'Seni Hidup Rukun di Tengah Keragaman Tanpa Prasangka',
    category: 'Dinamika & Konflik',
    image: '/src/assets/images/sociology_multicultural_society_1791772630884.jpg',
    fallbackGradient: 'from-amber-950 via-emerald-950 to-slate-900',
    summary: 'Model "Salad Bowl" masyarakat multikultural, faktor pendorong persatuan, racun primordialisme & etnosentrisme, serta 3 langkah resolusi Robert Bales.',
    thinkers: ['Robert Bales'],
    sections: [
      {
        id: 'bab10-1',
        title: '1. Konsep Salad Bowl Masyarakat Multikultural',
        content: {
          intro: 'Multikulturalisme bukan sekadar masyarakat majemuk tempat orang berbeda berkumpul. Ini adalah filosofi hidup berdampingan di mana tiap entitas budaya dihargai orisinalitasnya seperti semangkuk salad—semua bahan bersatu padu lezat tanpa kehilangan cita rasa aslinya.',
          callouts: [
            {
              title: 'The Green Flags (Pendorong Multikulturalisme)',
              text: 'Pemahaman utuh terhadap Hak Asasi Manusia, kesadaran bahwa keragaman adalah modal kekayaan bangsa, kesediaan membangun konsensus bersama, dan sikap terbuka (open-minded).',
            },
          ],
        },
      },
      {
        id: 'bab10-2',
        title: '2. Hambatan: Racun Sosial Pemecah Belah',
        content: {
          items: [
            'Primordialisme: Keterikatan berlebihan pada adat atau identitas kelompok sejak lahir hingga memandang curiga kelompok lain.',
            'Etnosentrisme: Menilai budaya suku lain menggunakan standar budayanya sendiri secara sepihak.',
            'Stereotip: Prasangka generalisasi negatif terhadap suku atau ras tertentu.',
          ],
        },
      },
      {
        id: 'bab10-3',
        title: '3. Tiga Tahapan Pemecahan Masalah ala Robert Bales',
        content: {
          callouts: [
            {
              title: '1. Tahap Orientasi',
              text: 'Pengumpulan informasi secara transparan dan dialog awal untuk meluruskan kesalahpahaman informasi antarpihak.',
            },
            {
              title: '2. Tahap Evaluasi',
              text: 'Mendiskusikan pandangan dan merumuskan berbagai alternatif penyelesaian masalah yang adil.',
            },
            {
              title: '3. Tahap Kontrol',
              text: 'Menetapkan kesepakatan final (konsensus) yang mengikat dan mengeksekusi aksi perdamaian secara berkelanjutan.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab11',
    num: '11',
    title: 'KONFLIK SOSIAL',
    subtitle: 'Dinamika Gesekan Kepentingan dan Instrumen Resolusi Damai',
    category: 'Dinamika & Konflik',
    image: '/src/assets/images/sociology_hero_learning_1791772606094.jpg',
    fallbackGradient: 'from-rose-950 via-slate-900 to-stone-900',
    summary: 'Hakikat konflik menurut Marx, Dahrendorf, dan Coser; tipologi konflik vertikal-horizontal; dampak konstruktif dan destruktif; serta metode akomodasi penyelesaian sengketa.',
    thinkers: ['Karl Marx', 'Ralf Dahrendorf', 'Lewis A. Coser'],
    sections: [
      {
        id: 'bab11-1',
        title: '1. Hakikat Konflik & Teori Para Ahli',
        content: {
          intro: 'Konflik sosial adalah proses pertikaian di mana pihak-pihak yang berselisih berikhtiar mencapai tujuan dengan menentang atau menundukkan pihak lawan.',
          callouts: [
            {
              title: 'Karl Marx',
              text: 'Konflik adalah keniscayaan dialektika pertarungan kelas antarkaum pemilik modal melawan kaum pekerja yang tereksploitasi.',
            },
            {
              title: 'Lewis A. Coser (Fungsi Positif Konflik)',
              text: 'Konflik tidak selalu merusak! Konflik dengan pihak luar (out-group) justru dapat mengukuhkan integrasi dan solidaritas internal in-group, serta berfungsi sebagai katup penyelamat (safety valve) menyalurkan ketegangan yang tertahan.',
            },
            {
              title: 'Ralf Dahrendorf',
              text: 'Konflik berakar dari distribusi wewenang dan kekuasaan yang asimetris di dalam asosiasi terkoordinasi (imperatively coordinated associations).',
            },
          ],
        },
      },
      {
        id: 'bab11-2',
        title: '2. Tipologi Bentuk Konflik',
        content: {
          items: [
            'Konflik Vertikal: Terjadi antarkelas strata yang berbeda derajat kuasanya (buruh vs pengusaha, rakyat vs rezim penguasa).',
            'Konflik Horizontal: Terjadi antarpihak berkedudukan sejajar (bentrok antarkelompok suporter, perselisihan antardesa).',
            'Konflik Diagonal: Sengketa alokasi sumber daya antara pemerintah pusat dengan wilayah daerah terdampak.',
          ],
        },
      },
      {
        id: 'bab11-3',
        title: '3. Instrumen Akomodasi & Resolusi Konflik',
        content: {
          items: [
            'Mediasi: Pihak ketiga bersikap netral sebagai fasilitator perundingan tanpa memiliki hak membuat keputusan mengikat.',
            'Arbitrase: Pihak ketiga berkedudukan sebagai wasit yang keputusannya mutlak mengikat kedua kubu.',
            'Kompromi: Masing-masing kubu bersedia saling mengurangi tuntutan demi tercapainya jalan tengah mufakat.',
            'Konsiliasi: Mempertemukan pimpinan-pimpinan perwakilan untuk mencapai persepakatan damai terorganisir.',
            'Ajudikasi: Penyelesaian sengketa melalui jalur meja hijau pengadilan negara.',
            'Stalemate: Konflik mereda dengan sendirinya karena kekuatan kedua belah pihak seimbang dan buntu.',
          ],
        },
      },
    ],
  },
  {
    id: 'bab12',
    num: '12',
    title: 'PERUBAHAN SOSIAL',
    subtitle: 'Masyarakat Layaknya Piranti Lunak: Selalu Mengalami Pembaharuan',
    category: 'Perubahan & Modernitas',
    image: '/src/assets/images/sociology_figures_theory_1791772617785.jpg',
    fallbackGradient: 'from-sky-950 via-indigo-950 to-slate-900',
    summary: 'Teori Linier vs Teori Siklus, klasifikasi evolusi dan revolusi, konsep Cultural Lag Ogburn, serta difusi, akulturasi, dan asimilasi budaya.',
    thinkers: ['Pitirim Sorokin', 'William F. Ogburn'],
    sections: [
      {
        id: 'bab12-1',
        title: '1. Teori Perubahan: Linier vs Siklus',
        content: {
          callouts: [
            {
              title: 'Teori Linier (Evolusi Maju)',
              text: 'Masyarakat bertransformasi secara bertahap menaiki anak tangga peradaban dari bentuk primitif, tradisional, hingga mencapai fase modern.',
            },
            {
              title: 'Teori Siklus (Roda Berputar)',
              text: 'Perubahan berulang ibarat siklus roda atau mode tren busana: lahir, berkembang, mengalami kejayaan, memudar, runtuh, lalu terulang kembali di masa depan.',
            },
          ],
        },
      },
      {
        id: 'bab12-2',
        title: '2. Bentuk Perubahan & Fenomena Cultural Lag',
        content: {
          items: [
            'Berdasarkan Waktu: Evolusi (perubahan lambat tanpa rencana paksaan) vs Revolusi (perombakan radikal mendasar dalam waktu kilat).',
            'Berdasarkan Skala: Skala Kecil (tren model busana dan potongan rambut) vs Skala Besar (industrialisasi dan mekanisasi pertanian).',
            'Berdasarkan Rencana: Perubahan Direncanakan (agen perubahan/pemerintah) vs Tidak Direncanakan (bencana pandemi).',
          ],
          callouts: [
            {
              title: 'Cultural Lag (Ketertinggalan Budaya ala Ogburn)',
              text: 'Kesenjangan ketika unsur kebudayaan kebendaan (gadget canggih, jalan tol, algoritma) berkembang sangat pesat, tetapi budaya nonmaterial (mentalitas tata tertib, etika digital, regulasi hukum) tertinggal lambat beradaptasi.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'bab13',
    num: '13',
    title: 'GLOBALISASI',
    subtitle: 'Dunia Tanpa Batas: Saat Bumi Terasa Seukuran Layar Ponsel',
    category: 'Perubahan & Modernitas',
    image: '/src/assets/images/sociology_multicultural_society_1791772630884.jpg',
    fallbackGradient: 'from-teal-950 via-slate-900 to-emerald-950',
    summary: 'Hakikat globalisasi, Teori Sistem Dunia Immanuel Wallerstein (Negara Inti, Semi-Periferi, Periferi), tantangan konsumerisme & sekularisme, serta filter cerdas jati diri bangsa.',
    thinkers: ['Immanuel Wallerstein', 'George Ritzer'],
    sections: [
      {
        id: 'bab13-1',
        title: '1. Konsep & Ciri Utama Globalisasi',
        content: {
          intro: 'Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan melintasi batas-batas teritorial kedaulatan negara.',
          items: [
            'Kompresi Ruang & Waktu: Jarak bukan lagi hambatan komunikasi real-time.',
            'Ketergantungan Ekonomi: Perusahaan multinasional dan rantai pasok global mengikat roda ekonomi antarbangsa.',
            'Arus Informasi Budaya Masif: Pertukaran konten digital melalui media sosial dan hiburan 24/7.',
            'Masalah Bersama Mendunia: Isu krisis iklim, kesehatan global, dan instabilitas moneter menuntut kolaborasi kolektif.',
          ],
        },
      },
      {
        id: 'bab13-2',
        title: '2. Teori Sistem Dunia (Immanuel Wallerstein)',
        content: {
          callouts: [
            {
              title: 'Tiga Pembagian Kelas Dunia:',
              text: '1. Core Countries (Negara Pusat): Negara industri maju dengan dominasi modal, teknologi tinggi, dan upah tenaga kerja tinggi (G7, AS, Eropa Barat, Jepang).\n2. Semi-Periphery (Negara Semi-Pinggiran): Negara berpenghasilan menengah yang mengimbangi ketergantungan manufaktur (Indonesia, Brasil, India).\n3. Periphery (Negara Pinggiran): Negara pengekspor bahan mentah dengan tenaga kerja murah berupah rendah.',
            },
          ],
        },
      },
      {
        id: 'bab13-3',
        title: '3. Survival Kit: Berselancar di Era Globalisasi',
        content: {
          intro: 'Menghadapi globalisasi bukan dengan menutup diri secara primitif, melainkan dengan memperkuat filter jati diri Pancasila dan kearifan lokal:',
          items: [
            'Memilah & Memfilter Nilai Asing: Mengadopsi etos kerja tangguh, penguasaan sains, dan inovasi teknologi, sembari menolak konsumerisme buta, hedonisme, dan individualisme egois.',
            'Melestarikan Warisan Luhur Budaya Nasional: Menjadikan kebudayaan nusantara sebagai kebanggaan identitas di panggung internasional.',
            'Menjadi Warga Global Berkarakter: Berwawasan luas menjunjung tinggi persaudaraan dunia tanpa meninggalkan akar kebangsaan Indonesia.',
          ],
        },
      },
    ],
  },
];
