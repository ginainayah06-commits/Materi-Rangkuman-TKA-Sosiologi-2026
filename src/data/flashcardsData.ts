export interface Flashcard {
  id: number;
  term: string;
  category: string;
  definition: string;
  example: string;
}

export const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    term: 'Fakta Sosial (Social Fact)',
    category: 'Konsep Tokoh',
    definition: 'Cara bertindak, berpikir, dan merasa yang berada di luar individu dan memiliki kekuatan memaksa (Emile Durkheim).',
    example: 'Kewajiban mengenakan helm, hukum pidana, tata krama menyapa guru.',
  },
  {
    id: 2,
    term: 'Tindakan Sosial (Social Action)',
    category: 'Konsep Tokoh',
    definition: 'Tindakan individu yang memiliki makna subjektif dan diarahkan atau dipengaruhi oleh keberadaan orang lain (Max Weber).',
    example: 'Belajar giat agar lulus PTN, memberikan tempat duduk ke ibu hamil di kereta.',
  },
  {
    id: 3,
    term: 'Dramaturgi (Front & Back Stage)',
    category: 'Interaksi Sosial',
    definition: 'Teori Erving Goffman yang mengibaratkan kehidupan manusia seperti sandiwara panggung depan (pencitraan publik) dan panggung belakang (ruang privat).',
    example: 'Seorang customer service selalu tersenyum manis di counter, lalu mengeluh kelelahan saat sendirian di ruang istirahat.',
  },
  {
    id: 4,
    term: 'Looking Glass Self',
    category: 'Sosialisasi',
    definition: 'Konsep Charles H. Cooley bahwa citra diri seseorang terbentuk melalui bagaimana ia membayangkan persepsi dan penilaian orang lain terhadap dirinya.',
    example: 'Merasa percaya diri setelah mendapat apresiasi teman atau merasa malu setelah mendapat teguran.',
  },
  {
    id: 5,
    term: 'Gemeinschaft vs Gesellschaft',
    category: 'Kelompok Sosial',
    definition: 'Tipe paguyuban (ikatan batin alami kekal, misal keluarga) vs patembayan (ikatan kontraktual jangka pendek berdasarkan kepentingan, misal rekan kantor) oleh Ferdinand Tönnies.',
    example: 'Arisan keluarga besar (Gemeinschaft) vs Perjanjian kerja sama vendor pabrik (Gesellschaft).',
  },
  {
    id: 6,
    term: 'Asimilasi vs Akulturasi',
    category: 'Proses Sosial',
    definition: 'Akulturasi: perpaduan budaya tanpa menghilangkan identitas asli (A+B=AB). Asimilasi: peleburan total menghasilkan kebudayaan baru (A+B=C).',
    example: 'Masjid Menara Kudus bergaya Hindu (Akulturasi) vs Musik Dangdut nusantara (Asimilasi).',
  },
  {
    id: 7,
    term: 'Etnosentrisme',
    category: 'Sikap Sosial',
    definition: 'Sikap menganggap nilai dan norma kebudayaan suku/golongan sendiri sebagai yang paling unggul dibandingkan kebudayaan kelompok lain.',
    example: 'Meremehkan adat pernikahan atau selera makanan tradisional daerah lain.',
  },
  {
    id: 8,
    term: 'Primordialisme',
    category: 'Sikap Sosial',
    definition: 'Pandangan atau perasaan loyalitas berlebihan yang dibawa sejak lahir terhadap suku, agama, ras, atau klan asalnya.',
    example: 'Hanya mau berteman atau memilih pemimpin dari satu suku garis keturunan yang sama.',
  },
  {
    id: 9,
    term: 'Crescive vs Enacted Institutions',
    category: 'Lembaga Sosial',
    definition: 'Crescive: lembaga tumbuh alamiah dari kebiasaan adat (perkawinan, barter). Enacted: sengaja dibentuk terencana untuk target peradaban (sekolah, bank).',
    example: 'Lembaga adat desa (Crescive) vs Koperasi Unit Desa berbadan hukum (Enacted).',
  },
  {
    id: 10,
    term: 'Cultural Lag (Ogburn)',
    category: 'Perubahan Sosial',
    definition: 'Ketertinggalan laju perkembangan unsur kebudayaan nonmaterial (etika, hukum, moral) di tengah laju pesat kebudayaan material (teknologi canggih).',
    example: 'Kemudahan transaksi pinjaman online cepat tidak diimbangi literasi keuangan warga sehingga marak penipuan.',
  },
  {
    id: 11,
    term: 'Safety Valve (Katup Penyelamat)',
    category: 'Konflik Sosial',
    definition: 'Konsep Lewis A. Coser bahwa institusi atau mekanisme konflik teratur dapat mencegah ledakan pertikaian yang merusak tatanan pokok masyarakat.',
    example: 'Debat resmi parlemen atau saluran mediasi sengketa ketenagakerjaan serikat buruh.',
  },
  {
    id: 12,
    term: 'Generalized Other',
    category: 'Sosialisasi',
    definition: 'Tahap akhir sosialisasi George H. Mead ketika seseorang memahami dan menginternalisasi nilai-norma masyarakat luas secara dewasa dan bertanggung jawab.',
    example: 'Membuang sampah pada tempatnya di fasilitas umum meski tidak ada kamera CCTV atau petugas yang mengawasi.',
  },
];
