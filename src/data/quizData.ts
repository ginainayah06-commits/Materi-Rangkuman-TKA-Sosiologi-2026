export interface QuizQuestion {
  id: number;
  chapter: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    chapter: 'Bab 1: Sosiologi Sebagai Ilmu',
    question: 'Sosiologi menjelaskan gejala sosial di masyarakat tanpa menilai apakah suatu perbuatan itu bermoral baik atau buruk secara subjektif. Sifat ilmu sosiologi ini disebut...',
    options: ['Empiris', 'Teoritis', 'Kumulatif', 'Nonetis'],
    correctIndex: 3,
    explanation: 'Sifat Nonetis berarti sosiologi bertugas mengkaji dan membedah fakta sosial secara objektif apa adanya, bukan menghakimi secara moral baik atau buruknya tindakan tersebut.',
  },
  {
    id: 2,
    chapter: 'Bab 1: Pemikiran Tokoh',
    question: 'Siapakah sosiolog yang membedakan tipe keterikatan masyarakat menjadi "Solidaritas Mekanik" (desa/homogen) dan "Solidaritas Organik" (kota/heterogen)?',
    options: ['Auguste Comte', 'Emile Durkheim', 'Max Weber', 'Karl Marx'],
    correctIndex: 1,
    explanation: 'Emile Durkheim membagi solidaritas masyarakat menjadi Solidaritas Mekanik (diikat oleh kesamaan nilai dan kebersamaan kuat) serta Solidaritas Organik (diikat oleh spesialisasi pembagian kerja yang saling melengkapi).',
  },
  {
    id: 3,
    chapter: 'Bab 3: Interaksi Sosial',
    question: 'Menurut teori Dramaturgi Erving Goffman, ruang di mana seseorang menunjukkan performa santun dan pencitraan diri sesuai harapan orang lain disebut...',
    options: ['Back Stage (Panggung Belakang)', 'Front Stage (Panggung Depan)', 'Auditorium Role', 'Primary Distance'],
    correctIndex: 1,
    explanation: 'Front Stage (Panggung Depan) adalah arena tempat individu mengelola kesan (impression management) agar dinilai patuh dan ideal oleh penonton sosialnya.',
  },
  {
    id: 4,
    chapter: 'Bab 3: Proses Sosial',
    question: 'Peleburan dua kebudayaan yang berbeda sehingga menghasilkan kebudayaan baru dengan memudarnya ciri khas budaya asli dinamakan...',
    options: ['Akulturasi (A + B = AB)', 'Asimilasi (A + B = C)', 'Kontravensi', 'Akomodasi'],
    correctIndex: 1,
    explanation: 'Asimilasi (A + B = C) adalah percampuran dua kebudayaan atau lebih yang melebur melahirkan budaya baru, sedangkan akulturasi masih mempertahankan identitas unsur budaya aslinya.',
  },
  {
    id: 5,
    chapter: 'Bab 4: Lembaga Sosial',
    question: 'Lembaga sosial yang sengaja dibentuk dan dirancang oleh masyarakat untuk memenuhi target peradaban tertentu (seperti sekolah dan bank) tergolong sebagai...',
    options: ['Crescive Institutions', 'Enacted Institutions', 'Subsidiary Institutions', 'Unsanctioned Institutions'],
    correctIndex: 1,
    explanation: 'Enacted institutions adalah lembaga yang sengaja dibentuk melalui perencanaan sadar untuk mencapai tujuan khusus (misal: sistem pendidikan dan perbankan).',
  },
  {
    id: 6,
    chapter: 'Bab 5: Sosialisasi',
    question: 'Tahap sosialisasi menurut George H. Mead ketika anak telah mampu memahami peran rekan-rekannya dan mematuhi aturan main bersama dalam suatu kelompok disebut...',
    options: ['Preparatory Stage', 'Play Stage', 'Game Stage', 'Generalized Other'],
    correctIndex: 2,
    explanation: 'Pada Game Stage (Tahap Siap Bertindak), anak tidak hanya meniru peran melainkan sudah mengerti posisinya dalam tim dan sadar aturan bersama yang harus ditaati.',
  },
  {
    id: 7,
    chapter: 'Bab 7: Penelitian Sosial',
    question: 'Teknik pengambilan sampel di mana peneliti memilih informan pertama yang kemudian merekomendasikan informan berikutnya secara berantai layaknya bola salju disebut...',
    options: ['Cluster Sampling', 'Purposive Sampling', 'Snowball Sampling', 'Stratified Random Sampling'],
    correctIndex: 2,
    explanation: 'Snowball sampling adalah teknik non-probability sampling yang diawali dengan sedikit informan lalu berkembang kian besar melalui jaringan referensi antarinforman.',
  },
  {
    id: 8,
    chapter: 'Bab 8: Kelompok Sosial',
    question: 'Ferdinand Tönnies membedakan ikatan kelompok atas dasar cinta, ketulusan hati, dan hubungan darah yang kekal alami sebagai...',
    options: ['Gesellschaft (Patembayan)', 'Gemeinschaft (Paguyuban)', 'Out-Group', 'Secondary Association'],
    correctIndex: 1,
    explanation: 'Gemeinschaft (Paguyuban) adalah bentuk kehidupan bersama di mana anggota-anggotanya diikat oleh hubungan batin yang murni, alamiah, dan kekal (contoh: keluarga dan paguyuban trah).',
  },
  {
    id: 9,
    chapter: 'Bab 11: Konflik Sosial',
    question: 'Sosiolog yang berpendapat bahwa konflik sosial tidak selalu destruktif, melainkan dapat memperkuat solidaritas in-group dan berfungsi sebagai katup penyelamat (safety valve) adalah...',
    options: ['Karl Marx', 'Lewis A. Coser', 'Ralf Dahrendorf', 'Pitirim Sorokin'],
    correctIndex: 1,
    explanation: 'Lewis A. Coser mencetuskan teori fungsi positif konflik sosial, di mana gesekan dengan pihak luar justru mengonsolidasikan kohesi kelompok dalam dan meredakan ketegangan laten.',
  },
  {
    id: 10,
    chapter: 'Bab 13: Globalisasi',
    question: 'Dalam Teori Sistem Dunia Immanuel Wallerstein, negara yang menguasai teknologi canggih, modal industri raksasa, dan upah tinggi dikategorikan sebagai negara...',
    options: ['Core (Pusat)', 'Semi-Periphery (Semi-Pinggiran)', 'Periphery (Pinggiran)', 'Third-World Neutral'],
    correctIndex: 0,
    explanation: 'Core Countries (Negara Pusat) memegang kendali modal kapital global dan teknologi industri maju, mengekstraksi keuntungan dari kawasan semi-periferi dan periferi.',
  },
];
