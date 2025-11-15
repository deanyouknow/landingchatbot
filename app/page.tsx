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
        </div>
      </footer>
    </div>
  );
}
