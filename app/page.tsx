"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
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
              <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KS</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Panduan Kanker Serviks</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#overview" className="text-gray-600 hover:text-gray-900 transition-colors">Gambaran Umum</a>
              <a href="#risk-factors" className="text-gray-600 hover:text-gray-900 transition-colors">Faktor Risiko</a>
              <a href="#symptoms" className="text-gray-600 hover:text-gray-900 transition-colors">Gejala</a>
              <a href="#screening" className="text-gray-600 hover:text-gray-900 transition-colors">Skrining</a>
              <a href="#treatment" className="text-gray-600 hover:text-gray-900 transition-colors">Pengobatan</a>
              <a href="#prevention" className="text-gray-600 hover:text-gray-900 transition-colors">Pencegahan</a>
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
              Panduan Lengkap Kanker Serviks
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Memahami kanker serviks: dari pencegahan dan deteksi dini hingga pengobatan dan pemulihan. Memberdayakan perempuan dengan pengetahuan untuk hasil kesehatan yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#screening" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Pelajari Tentang Skrining
              </a>
              <a href="#prevention" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Strategi Pencegahan
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Definition & Overview Section */}
      <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Itu Kanker Serviks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kanker serviks adalah jenis kanker yang terjadi pada sel-sel serviks — bagian bawah rahim yang terhubung ke vagina.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Memahami Serviks</h3>
              <p className="text-gray-600 mb-4">
                Serviks adalah struktur silinder sepanjang sekitar 3-4 cm yang berfungsi sebagai pintu gerbang antara rahim dan vagina. Terdiri dari dua bagian utama:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Endoserviks:</strong>
                    <span className="text-gray-600"> Saluran bagian dalam yang dilapisi sel kelenjar penghasil lendir</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Ektoserviks:</strong>
                    <span className="text-gray-600"> Bagian luar yang terlihat saat pemeriksaan panggul, dilapisi sel skuamosa</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bagaimana Kanker Berkembang</h3>
              <p className="text-gray-600 mb-4">
                Kanker serviks biasanya berkembang secara perlahan selama bertahun-tahun melalui proses yang disebut displasia:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Sel Normal</h4>
                  <p className="text-gray-600 text-sm">Sel serviks yang sehat berfungsi normal</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Perubahan Prakanker</h4>
                  <p className="text-gray-600 text-sm">Sel mulai menunjukkan perubahan abnormal (displasia)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Karsinoma in Situ</h4>
                  <p className="text-gray-600 text-sm">Sel abnormal ada tetapi belum menyerang jaringan yang lebih dalam</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Kanker Invasif</h4>
                  <p className="text-gray-600 text-sm">Sel kanker menyerang jaringan serviks yang lebih dalam dan berpotensi menyebar</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fakta Penting Tentang Kanker Serviks</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">99%</div>
                <p className="text-gray-600">kanker serviks disebabkan oleh infeksi HPV (Human Papillomavirus) risiko tinggi</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">Ke-4</div>
                <p className="text-gray-600">kanker paling umum pada wanita di seluruh dunia, dengan lebih dari 600.000 kasus baru setiap tahun</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">93%</div>
                <p className="text-gray-600">tingkat kelangsungan hidup 5 tahun ketika terdeteksi pada stadium awal dan terlokalisasi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section id="risk-factors" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Faktor Risiko Kanker Serviks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memahami faktor risiko dapat membantu Anda membuat keputusan yang tepat tentang pencegahan dan skrining.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infeksi HPV</h3>
              <p className="text-gray-600 mb-3">
                <strong>Faktor Risiko Utama:</strong> Infeksi persisten dengan tipe HPV risiko tinggi (terutama HPV 16 dan 18) bertanggung jawab atas hampir semua kanker serviks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HPV sangat umum - kebanyakan orang yang aktif secara seksual akan terinfeksi</li>
                <li>• Biasanya hilang dengan sendirinya dalam 2 tahun</li>
                <li>• Infeksi persisten dapat menyebabkan kanker</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aktivitas Seksual</h3>
              <p className="text-gray-600 mb-3">
                Perilaku seksual tertentu meningkatkan risiko paparan HPV:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Usia dini saat hubungan seksual pertama (sebelum 18 tahun)</li>
                <li>• Banyak pasangan seksual</li>
                <li>• Pasangan dengan banyak pasangan seksual</li>
                <li>• Riwayat infeksi menular seksual</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Merokok</h3>
              <p className="text-gray-600 mb-3">
                Penggunaan tembakau secara signifikan meningkatkan risiko kanker serviks:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Menggandakan risiko kanker serviks</li>
                <li>• Produk sampingan tembakau merusak DNA sel serviks</li>
                <li>• Melemahkan respons imun terhadap HPV</li>
                <li>• Risiko meningkat dengan durasi dan jumlah rokok</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistem Kekebalan Lemah</h3>
              <p className="text-gray-600 mb-3">
                Kekebalan tubuh yang terganggu mempengaruhi risiko kanker:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infeksi HIV/AIDS</li>
                <li>• Obat imunosupresan</li>
                <li>• Penerima transplantasi organ</li>
                <li>• Stres kronis dan nutrisi buruk</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Penggunaan Kontrasepsi Oral Jangka Panjang</h3>
              <p className="text-gray-600 mb-3">
                Penggunaan pil KB yang diperpanjang menunjukkan hubungan:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Penggunaan selama 5+ tahun sedikit meningkatkan risiko</li>
                <li>• Risiko menurun setelah berhenti</li>
                <li>• Kembali normal setelah 10 tahun</li>
                <li>• Manfaat sering lebih besar daripada risiko</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faktor Risiko Lainnya</h3>
              <p className="text-gray-600 mb-3">
                Faktor tambahan yang dapat meningkatkan risiko:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Banyak kehamilan cukup bulan</li>
                <li>• Kehamilan pertama sebelum usia 17 tahun</li>
                <li>• Status sosial ekonomi rendah</li>
                <li>• Riwayat keluarga kanker serviks</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="stages" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stadium Kanker Serviks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kanker serviks dibagi menjadi stadium 0 hingga IV berdasarkan ukuran tumor, kedalaman invasi, dan penyebaran ke area lain.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-600"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">0</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stadium 0 (Karsinoma in Situ)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Deskripsi:</strong> Sel abnormal hanya ditemukan di lapisan terdalam serviks. Ini juga disebut neoplasia intraepitel serviks tingkat 3 (CIN3).
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Karakteristik:</strong> Sel prakanker belum menyerang jaringan yang lebih dalam. Secara teknis bukan kanker tetapi bisa menjadi kanker jika tidak diobati.
                  </p>
                  <p className="text-gray-700">
                    <strong>Prognosis:</strong> Hampir 100% dapat disembuhkan dengan pengobatan yang tepat. Pengobatan mencegah perkembangan menjadi kanker invasif.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stadium I</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Deskripsi:</strong> Kanker terbatas pada serviks dan belum menyebar ke jaringan terdekat.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stadium IA:</strong> Kanker mikroskopis, hanya terlihat di bawah mikroskop
                      <br />
                      <span className="text-sm">• IA1: Invasi ≤3mm dalam dan ≤7mm lebar</span>
                      <br />
                      <span className="text-sm">• IA2: Invasi 3-5mm dalam dan ≤7mm lebar</span>
                    </p>
                    <p className="text-gray-700">
                      <strong>Stadium IB:</strong> Tumor lebih besar terlihat tanpa mikroskop
                      <br />
                      <span className="text-sm">• IB1: Tumor ≤2cm</span>
                      <br />
                      <span className="text-sm">• IB2: Tumor 2-4cm</span>
                      <br />
                      <span className="text-sm">• IB3: Tumor &gt;4cm</span>
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>Tingkat Kelangsungan Hidup 5 Tahun:</strong> 80-93%
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-600"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">II</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stadium II</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Deskripsi:</strong> Kanker telah menyebar melampaui serviks tetapi tidak ke dinding panggul atau sepertiga bawah vagina.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stadium IIA:</strong> Kanker telah menyebar ke dua pertiga atas vagina tetapi tidak ke jaringan di sekitar rahim
                      <br />
                      <span className="text-sm">• IIA1: Tumor ≤4cm</span>
                      <br />
                      <span className="text-sm">• IIA2: Tumor &gt;4cm</span>
                    </p>
                    <p className="text-gray-700">
                      <strong>Stadium IIB:</strong> Kanker telah menyebar ke jaringan di sekitar rahim (parametrium) tetapi tidak ke dinding panggul
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>Tingkat Kelangsungan Hidup 5 Tahun:</strong> 58-63%
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-600"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">III</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stadium III</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Deskripsi:</strong> Kanker telah menyebar ke sepertiga bawah vagina dan/atau dinding panggul, dan dapat menyebabkan masalah ginjal.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stadium IIIA:</strong> Kanker telah menyebar ke sepertiga bawah vagina tetapi tidak ke dinding panggul
                    </p>
                    <p className="text-gray-700">
                      <strong>Stadium IIIB:</strong> Kanker telah menyebar ke dinding panggul dan/atau menyebabkan penyumbatan ginjal (hidronefrosis)
                    </p>
                    <p className="text-gray-700">
                      <strong>Stadium IIIC:</strong> Kanker telah menyebar ke kelenjar getah bening terdekat
                      <br />
                      <span className="text-sm">• IIIC1: Menyebar ke kelenjar getah bening panggul</span>
                      <br />
                      <span className="text-sm">• IIIC2: Menyebar ke kelenjar getah bening para-aorta</span>
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>Tingkat Kelangsungan Hidup 5 Tahun:</strong> 32-35%
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-600"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">IV</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stadium IV</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Deskripsi:</strong> Stadium paling lanjut - kanker telah menyebar ke organ terdekat atau bagian tubuh yang jauh.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stadium IVA:</strong> Kanker telah menyebar ke kandung kemih atau rektum (organ terdekat)
                    </p>
                    <p className="text-gray-700">
                      <strong>Stadium IVB:</strong> Kanker telah menyebar ke organ jauh seperti paru-paru, hati, tulang, atau kelenjar getah bening jauh (kanker metastatik)
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>Tingkat Kelangsungan Hidup 5 Tahun:</strong> 15-16%
                  </p>
                  <p className="text-gray-600 text-sm mt-2 italic">
                    Catatan: Bahkan pada stadium lanjut, pengobatan dapat membantu mengelola gejala dan meningkatkan kualitas hidup.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 bg-purple-50 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Catatan Penting Tentang Stadium</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Stadium membantu menentukan pendekatan pengobatan yang paling tepat</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Tingkat kelangsungan hidup adalah perkiraan berdasarkan kelompok besar orang dan hasil individu dapat bervariasi</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Deteksi dini melalui skrining rutin secara signifikan meningkatkan hasil</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Kemajuan pengobatan terus meningkatkan tingkat kelangsungan hidup di semua stadium</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Signs & Symptoms Section */}
      <section id="symptoms" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tanda dan Gejala</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kanker serviks stadium awal sering tidak menunjukkan gejala. Seiring kanker berkembang, berbagai tanda dapat muncul.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🩸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perdarahan Vagina Abnormal</h3>
              <p className="text-gray-600 mb-3">Gejala paling umum dari kanker serviks:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Perdarahan di antara periode menstruasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Perdarahan setelah hubungan seksual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Perdarahan setelah menopause</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Periode menstruasi lebih berat atau lebih lama dari biasanya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Perdarahan setelah douching atau pemeriksaan panggul</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Keputihan Tidak Normal</h3>
              <p className="text-gray-600 mb-3">Perubahan karakteristik keputihan:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Jumlah keputihan meningkat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Keputihan berair, pucat, atau bercampur darah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Keputihan berbau busuk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Keputihan mengandung darah atau lendir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Keputihan persisten tidak terkait dengan siklus menstruasi</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nyeri Panggul</h3>
              <p className="text-gray-600 mb-3">Nyeri di daerah panggul:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Nyeri saat hubungan seksual (dispareunia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Nyeri panggul persisten tidak terkait dengan menstruasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Nyeri punggung bawah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Nyeri yang memburuk seiring waktu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Kram atau tekanan di panggul</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gejala Lanjut</h3>
              <p className="text-gray-600 mb-3">Gejala yang mungkin muncul pada stadium lanjut:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kesulitan atau nyeri saat buang air kecil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Darah dalam urin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kesulitan buang air besar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pembengkakan di kaki</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Penurunan berat badan dan kelelahan yang tidak dapat dijelaskan</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Penting: Kapan Harus Menemui Dokter
            </h3>
            <p className="text-gray-700 mb-3">
              Banyak dari gejala ini dapat disebabkan oleh kondisi selain kanker serviks. Namun, Anda harus menemui penyedia layanan kesehatan jika mengalami:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Perdarahan vagina abnormal, terutama setelah menopause</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Keputihan tidak normal yang persisten</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Nyeri panggul yang tidak hilang</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Kombinasi dari gejala-gejala ini</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              Ingat: Kanker serviks stadium awal biasanya tidak menimbulkan gejala, itulah mengapa skrining rutin sangat penting untuk deteksi dini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KS</span>
                </div>
                <span className="ml-2 text-xl font-bold">Panduan Kanker Serviks</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sumber edukasi komprehensif tentang pencegahan, deteksi, dan pengobatan kanker serviks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Gambaran Umum</a></li>
                <li><a href="#risk-factors" className="hover:text-white transition-colors">Faktor Risiko</a></li>
                <li><a href="#symptoms" className="hover:text-white transition-colors">Gejala</a></li>
                <li><a href="#screening" className="hover:text-white transition-colors">Skrining</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sumber Daya</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#treatment" className="hover:text-white transition-colors">Pilihan Pengobatan</a></li>
                <li><a href="#prevention" className="hover:text-white transition-colors">Pencegahan</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Sumber Dukungan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pemberitahuan Penting</h4>
              <p className="text-gray-400 text-sm">
                Informasi ini hanya untuk tujuan edukasi dan tidak boleh menggantikan nasihat medis profesional. Selalu konsultasikan dengan penyedia layanan kesehatan yang berkualifikasi untuk diagnosis dan pengobatan.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2024 Panduan Edukasi Kanker Serviks. Hanya untuk tujuan informasi.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kebijakan Privasi</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Syarat Penggunaan</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Penafian Medis</a>
              </div>
            </div>
          </div>

      {/* Screening Methods Section */}
      <section id="screening" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Metode Skrining</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skrining rutin dapat mendeteksi kanker serviks lebih awal saat paling dapat diobati, atau bahkan mencegahnya dengan menemukan perubahan prakanker.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Pap Smear (Tes Pap)</h3>
              <p className="text-gray-700 mb-4">
                <strong>Apa itu:</strong> Prosedur untuk mengumpulkan sel dari serviks untuk mencari perubahan prakanker atau kanker.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cara kerja:</strong> Selama pemeriksaan panggul, penyedia layanan kesehatan menggunakan sikat kecil atau spatula untuk mengumpulkan sel dari serviks dengan lembut. Sel-sel ini diperiksa di bawah mikroskop.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Frekuensi yang direkomendasikan:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Usia 21-29: Setiap 3 tahun</li>
                <li>• Usia 30-65: Setiap 3 tahun (Pap saja) atau setiap 5 tahun (Pap + tes HPV)</li>
                <li>• Setelah 65: Dapat berhenti jika tes sebelumnya normal</li>
              </ul>
              <p className="text-gray-700">
                <strong>Efektivitas:</strong> Dapat mendeteksi hingga 90% kanker serviks bila dilakukan secara teratur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tes HPV</h3>
              <p className="text-gray-700 mb-4">
                <strong>Apa itu:</strong> Tes yang mendeteksi keberadaan tipe HPV risiko tinggi yang dapat menyebabkan kanker serviks.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cara kerja:</strong> Menggunakan sampel sel yang sama dengan tes Pap untuk memeriksa DNA HPV. Dapat dilakukan sendiri atau bersama dengan tes Pap (co-testing).
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Frekuensi yang direkomendasikan:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Usia 25-29: Tes HPV saja setiap 5 tahun (diutamakan)</li>
                <li>• Usia 30-65: Tes HPV saja setiap 5 tahun atau co-testing setiap 5 tahun</li>
                <li>• Tidak direkomendasikan untuk wanita di bawah 25 tahun</li>
              </ul>
              <p className="text-gray-700">
                <strong>Keuntungan:</strong> Lebih sensitif daripada tes Pap saja dan dapat memprediksi risiko kanker di masa depan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Kolposkopi dengan Biopsi</h3>
              <p className="text-gray-700 mb-4">
                <strong>Apa itu:</strong> Prosedur lanjutan ketika tes Pap atau HPV menunjukkan hasil abnormal.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Cara kerja:</strong> Kolposkop (instrumen pembesar bercahaya) digunakan untuk memeriksa serviks dengan cermat. Jika area abnormal terlihat, sampel jaringan kecil (biopsi) diambil untuk analisis laboratorium.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Kapan digunakan:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Hasil tes Pap abnormal</li>
                <li>• Tes HPV risiko tinggi positif</li>
                <li>• Kelainan yang terlihat pada serviks</li>
                <li>• Perdarahan yang tidak dapat dijelaskan</li>
              </ul>
              <p className="text-gray-700">
                <strong>Tujuan:</strong> Memberikan diagnosis definitif perubahan prakanker atau kanker.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ringkasan Pedoman Skrining</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-green-600">
                    <th className="py-3 px-4 font-semibold text-gray-900">Kelompok Usia</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Tes yang Direkomendasikan</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Frekuensi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">Di bawah 21</td>
                    <td className="py-3 px-4">Tidak perlu skrining</td>
                    <td className="py-3 px-4">-</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">21-29</td>
                    <td className="py-3 px-4">Tes Pap saja</td>
                    <td className="py-3 px-4">Setiap 3 tahun</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">30-65</td>
                    <td className="py-3 px-4">Tes HPV saja (diutamakan) ATAU Pap + HPV co-testing ATAU Tes Pap saja</td>
                    <td className="py-3 px-4">Setiap 5 tahun ATAU Setiap 5 tahun ATAU Setiap 3 tahun</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Di atas 65</td>
                    <td className="py-3 px-4">Dapat berhenti jika skrining sebelumnya memadai</td>
                    <td className="py-3 px-4">Diskusikan dengan dokter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Catatan Penting Skrining</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Skrining lebih sering mungkin diperlukan jika:</strong> Anda memiliki HIV, sistem kekebalan lemah, riwayat kanker serviks atau prakanker, atau paparan DES sebelum lahir</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Anda mungkin tidak perlu skrining jika:</strong> Anda telah menjalani histerektomi total (pengangkatan rahim dan serviks) karena alasan non-kanker dan tidak ada riwayat kanker serviks atau prakanker</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Vaksinasi HPV tidak menggantikan skrining:</strong> Bahkan jika Anda telah divaksinasi terhadap HPV, skrining rutin tetap diperlukan</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Skrining menyelamatkan nyawa:</strong> Skrining rutin telah mengurangi kematian akibat kanker serviks lebih dari 60% di negara-negara dengan program skrining terorganisir</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section id="treatment" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilihan Pengobatan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengobatan tergantung pada stadium kanker, jenis, kesehatan keseluruhan, dan preferensi pribadi. Seringkali, kombinasi pengobatan digunakan.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-2xl">🔪</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pembedahan</h3>
                  <p className="text-gray-700 mb-4">
                    Pilihan pembedahan bervariasi berdasarkan stadium kanker dan apakah pelestarian kesuburan diinginkan:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Konisasi</h4>
                      <p className="text-gray-600 text-sm mb-2">Mengangkat potongan jaringan serviks berbentuk kerucut yang mengandung sel abnormal.</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Kanker stadium sangat awal, mempertahankan kesuburan</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Trakelektomi</h4>
                      <p className="text-gray-600 text-sm mb-2">Mengangkat serviks dan vagina bagian atas tetapi membiarkan rahim tetap utuh.</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Kanker stadium awal pada wanita yang ingin mempertahankan kesuburan</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Histerektomi Sederhana</h4>
                      <p className="text-gray-600 text-sm mb-2">Mengangkat rahim dan serviks.</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Kanker stadium awal yang terbatas pada serviks</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Histerektomi Radikal</h4>
                      <p className="text-gray-600 text-sm mb-2">Mengangkat rahim, serviks, vagina bagian atas, dan jaringan di sekitarnya.</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Kanker stadium IB-IIA</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Eksenterasi Panggul</h4>
                      <p className="text-gray-600 text-sm mb-2">Pembedahan ekstensif mengangkat organ panggul (mungkin termasuk kandung kemih, rektum).</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Kanker berulang atau kasus sangat lanjut</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Pengangkatan Kelenjar Getah Bening</h4>
                      <p className="text-gray-600 text-sm mb-2">Mengangkat kelenjar getah bening panggul dan/atau para-aorta.</p>
                      <p className="text-gray-600 text-sm"><strong>Digunakan untuk:</strong> Stadium dan pengobatan, sering dikombinasikan dengan pembedahan lain</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-2xl">☢️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Terapi Radiasi</h3>
                  <p className="text-gray-700 mb-4">
                    Menggunakan sinar atau partikel berenergi tinggi untuk menghancurkan sel kanker. Dua jenis utama:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Radiasi Sinar Eksternal</h4>
                      <p className="text-gray-600 text-sm mb-2">Radiasi diberikan dari luar tubuh menggunakan mesin.</p>
                      <p className="text-gray-600 text-sm"><strong>Jadwal:</strong> Biasanya 5 hari/minggu selama 5-6 minggu</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Brakiterapi (Radiasi Internal)</h4>
                      <p className="text-gray-600 text-sm mb-2">Bahan radioaktif ditempatkan di dalam atau dekat tumor.</p>
                      <p className="text-gray-600 text-sm"><strong>Jenis:</strong> Dosis rendah (LDR) atau dosis tinggi (HDR)</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Kapan Digunakan:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Pengobatan utama untuk kanker lanjut lokal (sering dengan kemoterapi)</li>
                      <li>• Setelah pembedahan untuk membunuh sel kanker yang tersisa</li>
                      <li>• Untuk meredakan gejala pada kanker lanjut (perawatan paliatif)</li>
                      <li>• Untuk pasien yang tidak dapat menjalani pembedahan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kemoterapi</h3>
                  <p className="text-gray-700 mb-4">
                    Menggunakan obat untuk membunuh sel kanker di seluruh tubuh. Dapat diberikan sendiri atau dikombinasikan dengan radiasi (kemoradiasi).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Obat yang Umum Digunakan:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Cisplatin (paling umum)</li>
                        <li>• Carboplatin</li>
                        <li>• Paclitaxel (Taxol)</li>
                        <li>• Topotecan</li>
                        <li>• Gemcitabine</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Pemberian:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Biasanya diberikan secara intravena (IV)</li>
                        <li>• Siklus pengobatan diikuti periode istirahat</li>
                        <li>• Siklus tipikal: 3-4 minggu</li>
                        <li>• Durasi: Beberapa bulan</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Kapan Digunakan:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Dikombinasikan dengan radiasi untuk kanker lanjut lokal</li>
                      <li>• Untuk kanker metastatik atau berulang</li>
                      <li>• Sebelum pembedahan untuk mengecilkan tumor (neoadjuvan)</li>
                      <li>• Setelah pembedahan untuk menghilangkan sel yang tersisa (adjuvan)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-indigo-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengobatan Berdasarkan Stadium</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stadium 0 & IA1:</h4>
                <p className="text-gray-600 text-sm">Konisasi, LEEP, atau histerektomi sederhana</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stadium IA2 & IB1:</h4>
                <p className="text-gray-600 text-sm">Histerektomi radikal dengan pengangkatan kelenjar getah bening, atau terapi radiasi dengan kemoterapi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stadium IB2, IB3, & II:</h4>
                <p className="text-gray-600 text-sm">Kemoradiasi (radiasi + kemoterapi), atau histerektomi radikal diikuti radiasi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stadium III & IVA:</h4>
                <p className="text-gray-600 text-sm">Kemoradiasi sebagai pengobatan utama</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stadium IVB & Berulang:</h4>
                <p className="text-gray-600 text-sm">Kemoterapi, terapi target, imunoterapi, atau radiasi paliatif</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategi Pencegahan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kanker serviks adalah salah satu kanker yang paling dapat dicegah. Strategi ini dapat secara signifikan mengurangi risiko Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💉</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vaksinasi HPV</h3>
              <p className="text-gray-700 mb-4">
                <strong>Pencegahan Paling Efektif:</strong> Vaksin HPV melindungi terhadap tipe HPV yang menyebabkan sebagian besar kanker serviks.
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Vaksin yang Tersedia:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Gardasil 9 (melindungi terhadap 9 tipe HPV)</li>
                    <li>• Cervarix (melindungi terhadap 2 tipe HPV)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Usia yang Direkomendasikan:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Vaksinasi rutin: usia 11-12 tahun</li>
                    <li>• Dapat dimulai sejak usia 9 tahun</li>
                    <li>• Vaksinasi catch-up: hingga usia 26 tahun</li>
                    <li>• Dewasa 27-45: diskusikan dengan dokter</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Efektivitas:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Hampir 100% efektif bila diberikan sebelum paparan HPV</li>
                    <li>• Mencegah 90% kanker terkait HPV</li>
                    <li>• Perlindungan jangka panjang (10+ tahun terbukti)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Skrining Rutin</h3>
              <p className="text-gray-700 mb-4">
                <strong>Deteksi Dini Menyelamatkan Nyawa:</strong> Skrining rutin dapat mendeteksi perubahan prakanker sebelum menjadi kanker.
              </p>
              <div className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Jadwal Skrining:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Usia 21-29: Tes Pap setiap 3 tahun</li>
                    <li>• Usia 30-65: Tes HPV setiap 5 tahun (diutamakan)</li>
                    <li>• Atau Pap + HPV co-testing setiap 5 tahun</li>
                    <li>• Atau tes Pap saja setiap 3 tahun</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Mengapa Berhasil:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Mendeteksi perubahan prakanker lebih awal</li>
                    <li>• Memungkinkan pengobatan sebelum kanker berkembang</li>
                    <li>• Mengidentifikasi kanker pada stadium paling dapat diobati</li>
                    <li>• Mengurangi kematian kanker serviks 60-80%</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Penting:</h4>
                  <p className="text-gray-600 text-sm">Lanjutkan skrining bahkan jika Anda telah divaksinasi terhadap HPV</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Berhenti Merokok</h3>
              <p className="text-gray-600 mb-3">
                Berhenti merokok mengurangi risiko kanker serviks:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Merokok menggandakan risiko kanker serviks</li>
                <li>• Tembakau merusak DNA sel serviks</li>
                <li>• Melemahkan respons imun terhadap HPV</li>
                <li>• Risiko menurun setelah berhenti</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Praktik Seksual Aman</h3>
              <p className="text-gray-600 mb-3">
                Mengurangi risiko penularan HPV:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gunakan kondom secara konsisten (mengurangi tetapi tidak menghilangkan risiko)</li>
                <li>• Batasi jumlah pasangan seksual</li>
                <li>• Tunda hubungan seksual pertama</li>
                <li>• Hindari pasangan dengan banyak pasangan</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perkuat Sistem Kekebalan</h3>
              <p className="text-gray-600 mb-3">
                Dukung pertahanan alami tubuh Anda:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Makan makanan seimbang dan bergizi</li>
                <li>• Olahraga teratur</li>
                <li>• Tidur yang cukup</li>
                <li>• Kelola stres secara efektif</li>
                <li>• Pertahankan berat badan sehat</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Kisah Sukses Pencegahan</h3>
            <p className="text-lg text-center mb-6">
              Negara-negara dengan program vaksinasi HPV dan skrining komprehensif telah melihat penurunan dramatis dalam tingkat kanker serviks:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">87%</div>
                <p className="text-sm">Pengurangan insiden kanker serviks pada wanita yang divaksinasi</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">90%</div>
                <p className="text-sm">Kanker serviks dapat dicegah dengan vaksinasi dan skrining</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm">Hampir semua kanker serviks disebabkan oleh infeksi HPV yang dapat dicegah</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Resources Section */}
      <section id="support" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sumber Dukungan & Dampak Global</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Akses ke dukungan dan memahami beban global kanker serviks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sumber Dukungan</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🏥 Dukungan Medis</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Tim onkologi dan spesialis</li>
                    <li>• Navigator perawat</li>
                    <li>• Layanan perawatan paliatif</li>
                    <li>• Klinik manajemen nyeri</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 Dukungan Emosional</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Kelompok dukungan kanker</li>
                    <li>• Konseling individual</li>
                    <li>• Komunitas online</li>
                    <li>• Program mentoring sebaya</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Sumber Edukasi</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Yayasan Kanker Indonesia</li>
                    <li>• Kementerian Kesehatan RI</li>
                    <li>• Rumah sakit kanker lokal</li>
                    <li>• Organisasi kesehatan wanita</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💰 Bantuan Keuangan</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Layanan navigasi asuransi (BPJS)</li>
                    <li>• Program bantuan farmasi</li>
                    <li>• Organisasi nirlaba</li>
                    <li>• Program bantuan pemerintah</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dampak Global</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🌍 Statistik Dunia</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 600.000+ kasus baru setiap tahun</li>
                    <li>• 340.000+ kematian per tahun</li>
                    <li>• Kanker ke-4 paling umum pada wanita</li>
                    <li>• 90% kematian di negara berpenghasilan rendah/menengah</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">⚖️ Kesenjangan Kesehatan</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Akses skrining terbatas di negara berkembang</li>
                    <li>• Tingkat lebih tinggi di komunitas kurang terlayani</li>
                    <li>• Hambatan sosial ekonomi terhadap perawatan</li>
                    <li>• Tantangan budaya dan pendidikan</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Strategi Eliminasi WHO</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 90% anak perempuan divaksinasi pada usia 15 tahun</li>
                    <li>• 70% wanita diskrining dua kali pada usia 45 tahun</li>
                    <li>• 90% kasus teridentifikasi menerima pengobatan</li>
                    <li>• Tujuan: Eliminasi kanker serviks sebagai masalah kesehatan masyarakat</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✨ Kemajuan Terkini</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Vaksin HPV yang ditingkatkan</li>
                    <li>• Tes HPV mandiri</li>
                    <li>• Terobosan imunoterapi</li>
                    <li>• Skrining berbantuan AI</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Penyakit yang Dapat Dicegah</h3>
            <p className="text-lg text-center mb-6">
              Kanker serviks adalah salah satu bentuk kanker yang paling dapat dicegah dan diobati ketika terdeteksi dini. Dengan program vaksinasi komprehensif, skrining rutin, dan peningkatan akses ke pengobatan, kita dapat bekerja menuju eliminasi kanker serviks sebagai ancaman kesehatan masyarakat di seluruh dunia.
            </p>
            <div className="text-center">
              <p className="text-xl font-semibold">Bersama-sama, kita dapat menjadikan kanker serviks sebagai sejarah.</p>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </footer>
    </div>
  );
}
