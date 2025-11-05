"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">VaccineGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tentang-vaksin" className="text-gray-600 hover:text-gray-900 transition-colors">Tentang Vaksin</a>
              <a href="#keunggulan" className="text-gray-600 hover:text-gray-900 transition-colors">Keunggulan</a>
              <a href="#proses" className="text-gray-600 hover:text-gray-900 transition-colors">Proses</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#kontak" className="text-gray-600 hover:text-gray-900 transition-colors">Kontak</a>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Masuk</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Lindungi Diri dan Keluarga dengan Inovasi Vaksin Terpercaya
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Vaksin inovatif kami menggunakan teknologi terkini untuk memberikan perlindungan maksimal terhadap berbagai penyakit. Dengan sertifikasi internasional dan proses pengembangan yang ketat, kami memastikan keamanan dan efektivitas vaksin untuk seluruh keluarga Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Daftar Sekarang
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mengapa Memilih VaccineGuard?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Teknologi Inovatif</h4>
                        <p className="text-gray-600">Menggunakan teknologi mRNA terdepan untuk perlindungan maksimal terhadap berbagai penyakit.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sertifikasi Internasional</h4>
                        <p className="text-gray-600">Telah mendapatkan sertifikasi dari WHO dan BPOM dengan standar keamanan tertinggi.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Efek Samping Minimal</h4>
                        <p className="text-gray-600">Dirancang untuk meminimalkan efek samping dengan formula yang telah teruji secara klinis.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center">
                      <div className="text-6xl">💉</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Vaksin Section */}
      <section id="tentang-vaksin" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Vaksin Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vaksin inovatif kami dirancang untuk memberikan perlindungan optimal dengan teknologi terkini dan standar keamanan tertinggi.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cara Kerja Vaksin</h3>
              <p className="text-gray-600">
                Vaksin kami menggunakan teknologi mRNA untuk mengajarkan sistem kekebalan tubuh mengenali dan melawan antigen penyakit. Proses ini aman dan efektif tanpa risiko infeksi.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manfaat Utama</h3>
              <p className="text-gray-600">
                Memberikan perlindungan jangka panjang terhadap berbagai penyakit, mengurangi risiko komplikasi, dan berkontribusi pada kekebalan kelompok untuk masyarakat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Keamanan Terjamin</h3>
              <p className="text-gray-600">
                Melalui uji klinis bertahap dan sertifikasi internasional, vaksin kami telah terbukti aman untuk semua kelompok usia dengan efek samping minimal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keunggulan Produk Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Teknologi inovatif dan standar keamanan tertinggi yang membedakan vaksin kami dari yang lain.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Teknologi mRNA</h3>
              <p className="text-gray-600">Teknologi terkini untuk respons imun yang lebih efektif dan spesifik.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sertifikasi WHO</h3>
              <p className="text-gray-600">Telah mendapatkan persetujuan dan sertifikasi dari Organisasi Kesehatan Dunia.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efek Samping Minimal</h3>
              <p className="text-gray-600">Dirancang untuk meminimalkan ketidaknyamanan dengan formula yang telah dioptimalkan.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Uji Klinis Ketat</h3>
              <p className="text-gray-600">Melalui fase uji klinis yang komprehensif dengan ribuan partisipan untuk memastikan efektivitas.</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Proses & Keamanan Section */}
      <section id="proses" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proses & Keamanan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap vaksin kami melalui proses pengembangan yang ketat dan sertifikasi internasional untuk memastikan keamanan dan efektivitas maksimal.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tahapan Pengembangan Vaksin</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Penelitian & Pengembangan</h4>
                    <p className="text-gray-600">Tim ahli melakukan penelitian mendalam untuk mengidentifikasi antigen yang efektif.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Uji Klinis Fase 1-3</h4>
                    <p className="text-gray-600">Melalui tiga fase uji klinis dengan ribuan partisipan untuk memastikan keamanan dan efektivitas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sertifikasi & Produksi</h4>
                    <p className="text-gray-600">Mendapatkan sertifikasi dari WHO dan BPOM sebelum diproduksi secara massal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Distribusi & Monitoring</h4>
                    <p className="text-gray-600">Sistem distribusi dingin terjaga dan terus dipantau efek sampingnya.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Fakta vs Mitos Vaksin</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Fakta: Vaksin aman dan telah teruji</p>
                      <p className="text-gray-600 text-sm">Setiap vaksin melalui uji klinis ketat sebelum digunakan.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Mitos: Vaksin menyebabkan autisme</p>
                      <p className="text-gray-600 text-sm">Studi ilmiah telah membantah klaim ini secara meyakinkan.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Fakta: Vaksin menyelamatkan jutaan nyawa</p>
                      <p className="text-gray-600 text-sm">Program vaksinasi telah mengurangi penyakit menular secara drastis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600">
              Jawaban atas pertanyaan-pertanyaan yang sering diajukan tentang vaksin kami.
            </p>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apakah vaksin ini aman untuk anak-anak?</h3>
              <p className="text-gray-600">Ya, vaksin kami telah melalui uji klinis pada semua kelompok usia termasuk anak-anak, dan terbukti aman dengan efek samping minimal yang bersifat sementara.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Berapa lama efek perlindungan vaksin bertahan?</h3>
              <p className="text-gray-600">Efek perlindungan vaksin kami dapat bertahan hingga 2-3 tahun tergantung jenis penyakitnya. Kami merekomendasikan booster sesuai jadwal yang ditentukan.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Apa saja efek samping yang mungkin terjadi?</h3>
              <p className="text-gray-600">Efek samping umum seperti demam ringan, pegal-pegal, atau kemerahan di tempat suntikan. Efek ini bersifat sementara dan akan hilang dalam 1-2 hari.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bagaimana cara penyimpanan vaksin?</h3>
              <p className="text-gray-600">Vaksin kami menggunakan teknologi stabil yang memungkinkan penyimpanan pada suhu kamar normal, sehingga lebih mudah didistribusikan ke berbagai daerah.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Berapa dosis vaksin yang diperlukan?</h3>
              <p className="text-gray-600">Untuk perlindungan optimal, diperlukan 2 dosis vaksin dengan jarak waktu 3-4 minggu. Dosis booster direkomendasikan setiap 2-3 tahun.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Daftar Vaksinasi Sekarang</h2>
            <p className="text-xl text-blue-100 mb-8">
              Bergabunglah dengan ribuan keluarga yang telah mempercayai vaksin kami untuk melindungi kesehatan mereka.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="alamat@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Pilih lokasi vaksinasi</option>
                    <option>Jakarta Pusat</option>
                    <option>Jakarta Utara</option>
                    <option>Jakarta Selatan</option>
                    <option>Jakarta Barat</option>
                    <option>Jakarta Timur</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Tambahan (Opsional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Informasi tambahan atau pertanyaan..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="ml-2 text-xl font-bold">VaccineGuard</span>
              </div>
              <p className="text-gray-400 mb-4">
                Melindungi keluarga di seluruh dunia dengan solusi manajemen vaksinasi cerdas dan pelacakan kesehatan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tentang-vaksin" className="hover:text-white transition-colors">Tentang Vaksin</a></li>
                <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a></li>
                <li><a href="#proses" className="hover:text-white transition-colors">Proses & Keamanan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotline: 021-1234567</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 VaccineGuard. Seluruh hak cipta dilindungi.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kebijakan Privasi</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Syarat & Ketentuan</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kebijakan Cookie</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
