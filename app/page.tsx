
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
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Cervical Cancer Guide</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#overview" className="text-gray-600 hover:text-gray-900 transition-colors">Overview</a>
              <a href="#risk-factors" className="text-gray-600 hover:text-gray-900 transition-colors">Risk Factors</a>
              <a href="#symptoms" className="text-gray-600 hover:text-gray-900 transition-colors">Symptoms</a>
              <a href="#screening" className="text-gray-600 hover:text-gray-900 transition-colors">Screening</a>
              <a href="#treatment" className="text-gray-600 hover:text-gray-900 transition-colors">Treatment</a>
              <a href="#prevention" className="text-gray-600 hover:text-gray-900 transition-colors">Prevention</a>
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
              Comprehensive Guide to Cervical Cancer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Understanding cervical cancer: from prevention and early detection to treatment and recovery. Empowering women with knowledge for better health outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#screening" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Learn About Screening
              </a>
              <a href="#prevention" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Prevention Strategies
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is Cervical Cancer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Cervix</h3>
              <p className="text-gray-600 mb-4">
                The cervix is a cylindrical structure approximately 3-4 cm long that serves as the gateway between the uterus and vagina. It consists of two main parts:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Endocervix:</strong>
                    <span className="text-gray-600"> The inner canal lined with glandular cells that produce mucus</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Ectocervix:</strong>
                    <span className="text-gray-600"> The outer portion visible during a pelvic exam, covered with squamous cells</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Cancer Develops</h3>
              <p className="text-gray-600 mb-4">
                Cervical cancer typically develops slowly over many years through a process called dysplasia:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Normal Cells</h4>
                  <p className="text-gray-600 text-sm">Healthy cervical cells function normally</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Precancerous Changes</h4>
                  <p className="text-gray-600 text-sm">Cells begin to show abnormal changes (dysplasia)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Carcinoma in Situ</h4>
                  <p className="text-gray-600 text-sm">Abnormal cells are present but haven't invaded deeper tissues</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Invasive Cancer</h4>
                  <p className="text-gray-600 text-sm">Cancer cells invade deeper into cervical tissue and potentially spread</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Facts About Cervical Cancer</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">99%</div>
                <p className="text-gray-600">of cervical cancers are caused by high-risk HPV (Human Papillomavirus) infection</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">4th</div>
                <p className="text-gray-600">most common cancer in women worldwide, with over 600,000 new cases annually</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">93%</div>
                <p className="text-gray-600">5-year survival rate when detected at an early, localized stage</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Risk Factors for Cervical Cancer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding risk factors can help you make informed decisions about prevention and screening.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HPV Infection</h3>
              <p className="text-gray-600 mb-3">
                <strong>Primary Risk Factor:</strong> Persistent infection with high-risk HPV types (especially HPV 16 and 18) is responsible for nearly all cervical cancers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HPV is very common - most sexually active people get it</li>
                <li>• Usually clears on its own within 2 years</li>
                <li>• Persistent infection can lead to cancer</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sexual Activity</h3>
              <p className="text-gray-600 mb-3">
                Certain sexual behaviors increase HPV exposure risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Early age at first intercourse (before 18)</li>
                <li>• Multiple sexual partners</li>
                <li>• Partner with multiple sexual partners</li>
                <li>• History of sexually transmitted infections</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smoking</h3>
              <p className="text-gray-600 mb-3">
                Tobacco use significantly increases cervical cancer risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Doubles the risk of cervical cancer</li>
                <li>• Tobacco byproducts damage cervical cell DNA</li>
                <li>• Weakens immune response to HPV</li>
                <li>• Risk increases with duration and amount smoked</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weakened Immune System</h3>
              <p className="text-gray-600 mb-3">
                Compromised immunity affects cancer risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HIV/AIDS infection</li>
                <li>• Immunosuppressive medications</li>
                <li>• Organ transplant recipients</li>
                <li>• Chronic stress and poor nutrition</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Oral Contraceptive Use</h3>
              <p className="text-gray-600 mb-3">
                Extended birth control pill use shows association:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use for 5+ years increases risk slightly</li>
                <li>• Risk decreases after stopping</li>
                <li>• Returns to normal after 10 years</li>
                <li>• Benefits often outweigh risks</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Other Risk Factors</h3>
              <p className="text-gray-600 mb-3">
                Additional factors that may increase risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple full-term pregnancies</li>
                <li>• First pregnancy before age 17</li>
                <li>• Low socioeconomic status</li>
                <li>• Family history of cervical cancer</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stages of Cervical Cancer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cervical cancer is staged from 0 to IV based on tumor size, depth of invasion, and spread to other areas.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage 0 (Carcinoma in Situ)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Description:</strong> Abnormal cells are found only in the innermost lining of the cervix. This is also called cervical intraepithelial neoplasia grade 3 (CIN3).
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Characteristics:</strong> Precancerous cells have not invaded deeper tissues. Not technically cancer but can become cancer if untreated.
                  </p>
                  <p className="text-gray-700">
                    <strong>Prognosis:</strong> Nearly 100% curable with appropriate treatment. Treatment prevents progression to invasive cancer.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage I</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Description:</strong> Cancer is confined to the cervix and has not spread to nearby tissues.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stage IA:</strong> Microscopic cancer, only visible under microscope
                      <br />
                      <span className="text-sm">• IA1: Invasion ≤3mm deep and ≤7mm wide</span>
                      <br />
                      <span className="text-sm">• IA2: Invasion 3-5mm deep and ≤7mm wide</span>
                    </p>
                    <p className="text-gray-700">
                      <strong>Stage IB:</strong> Larger tumor visible without microscope
                      <br />
                      <span className="text-sm">• IB1: Tumor ≤2cm</span>
                      <br />
                      <span className="text-sm">• IB2: Tumor 2-4cm</span>
                      <br />
                      <span className="text-sm">• IB3: Tumor &gt;4cm</span>
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>5-Year Survival Rate:</strong> 80-93%
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage II</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Description:</strong> Cancer has spread beyond the cervix but not to the pelvic wall or lower third of the vagina.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stage IIA:</strong> Cancer has spread to upper two-thirds of vagina but not to tissues around uterus
                      <br />
                      <span className="text-sm">• IIA1: Tumor ≤4cm</span>
                      <br />
                      <span className="text-sm">• IIA2: Tumor &gt;4cm</span>
                    </p>
                    <p className="text-gray-700">
                      <strong>Stage IIB:</strong> Cancer has spread to tissues around the uterus (parametrium) but not to pelvic wall
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>5-Year Survival Rate:</strong> 58-63%
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage III</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Description:</strong> Cancer has spread to the lower third of vagina and/or pelvic wall, and may cause kidney problems.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stage IIIA:</strong> Cancer has spread to lower third of vagina but not to pelvic wall
                    </p>
                    <p className="text-gray-700">
                      <strong>Stage IIIB:</strong> Cancer has spread to pelvic wall and/or causes kidney blockage (hydronephrosis)
                    </p>
                    <p className="text-gray-700">
                      <strong>Stage IIIC:</strong> Cancer has spread to nearby lymph nodes
                      <br />
                      <span className="text-sm">• IIIC1: Spread to pelvic lymph nodes</span>
                      <br />
                      <span className="text-sm">• IIIC2: Spread to para-aortic lymph nodes</span>
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>5-Year Survival Rate:</strong> 32-35%
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage IV</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Description:</strong> Most advanced stage - cancer has spread to nearby organs or distant parts of the body.
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>Stage IVA:</strong> Cancer has spread to bladder or rectum (nearby organs)
                    </p>
                    <p className="text-gray-700">
                      <strong>Stage IVB:</strong> Cancer has spread to distant organs such as lungs, liver, bones, or distant lymph nodes (metastatic cancer)
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">
                    <strong>5-Year Survival Rate:</strong> 15-16%
                  </p>
                  <p className="text-gray-600 text-sm mt-2 italic">
                    Note: Even at advanced stages, treatment can help manage symptoms and improve quality of life.
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notes About Staging</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Staging helps determine the most appropriate treatment approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Survival rates are estimates based on large groups of people and individual outcomes may vary</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Early detection through regular screening significantly improves outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Treatment advances continue to improve survival rates across all stages</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Signs and Symptoms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early cervical cancer often has no symptoms. As cancer progresses, various signs may appear.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Abnormal Vaginal Bleeding</h3>
              <p className="text-gray-600 mb-3">Most common symptom of cervical cancer:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Bleeding between menstrual periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Bleeding after sexual intercourse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Bleeding after menopause</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Heavier or longer menstrual periods than usual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Bleeding after douching or pelvic exam</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unusual Vaginal Discharge</h3>
              <p className="text-gray-600 mb-3">Changes in discharge characteristics:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Increased amount of discharge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Watery, pale, or blood-tinged discharge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Foul-smelling discharge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Discharge containing blood or mucus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Persistent discharge not related to menstrual cycle</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pelvic Pain</h3>
              <p className="text-gray-600 mb-3">Pain in the pelvic region:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Pain during sexual intercourse (dyspareunia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Persistent pelvic pain not related to menstruation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Lower back pain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Pain that worsens over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Cramping or pressure in the pelvis</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Symptoms</h3>
              <p className="text-gray-600 mb-3">Symptoms that may appear in advanced stages:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty or pain when urinating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Blood in urine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty with bowel movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Swelling in legs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Unexplained weight loss and fatigue</span>
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
              Important: When to See a Doctor
            </h3>
            <p className="text-gray-700 mb-3">
              Many of these symptoms can be caused by conditions other than cervical cancer. However, you should see your healthcare provider if you experience:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Any abnormal vaginal bleeding, especially after menopause</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Unusual vaginal discharge that persists</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Pelvic pain that doesn't go away</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Any combination of these symptoms</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              Remember: Early-stage cervical cancer typically causes no symptoms, which is why regular screening is crucial for early detection.
            </p>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Screening Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular screening can detect cervical cancer early when it's most treatable, or even prevent it by finding precancerous changes.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Pap Smear (Pap Test)</h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A procedure to collect cells from the cervix to look for precancerous or cancerous changes.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> During a pelvic exam, a healthcare provider uses a small brush or spatula to gently collect cells from the cervix. These cells are examined under a microscope.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Recommended frequency:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Ages 21-29: Every 3 years</li>
                <li>• Ages 30-65: Every 3 years (Pap alone) or every 5 years (Pap + HPV test)</li>
                <li>• After 65: May stop if previous tests were normal</li>
              </ul>
              <p className="text-gray-700">
                <strong>Effectiveness:</strong> Can detect up to 90% of cervical cancers when done regularly.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">HPV Testing</h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A test that detects the presence of high-risk HPV types that can cause cervical cancer.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> Uses the same cell sample as a Pap test to check for HPV DNA. Can be done alone or together with a Pap test (co-testing).
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Recommended frequency:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Ages 25-29: HPV test alone every 5 years (preferred)</li>
                <li>• Ages 30-65: HPV test alone every 5 years or co-testing every 5 years</li>
                <li>• Not recommended for women under 25</li>
              </ul>
              <p className="text-gray-700">
                <strong>Advantage:</strong> More sensitive than Pap test alone and can predict future cancer risk.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Colposcopy with Biopsy</h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A follow-up procedure when Pap or HPV tests show abnormal results.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> A colposcope (lighted magnifying instrument) is used to examine the cervix closely. If abnormal areas are seen, a small tissue sample (biopsy) is taken for laboratory analysis.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>When it's used:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Abnormal Pap test results</li>
                <li>• Positive high-risk HPV test</li>
                <li>• Visible abnormalities on cervix</li>
                <li>• Unexplained bleeding</li>
              </ul>
              <p className="text-gray-700">
                <strong>Purpose:</strong> Provides definitive diagnosis of precancerous changes or cancer.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Screening Guidelines Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-green-600">
                    <th className="py-3 px-4 font-semibold text-gray-900">Age Group</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Recommended Test</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Frequency</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">Under 21</td>
                    <td className="py-3 px-4">No screening needed</td>
                    <td className="py-3 px-4">-</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">21-29</td>
                    <td className="py-3 px-4">Pap test only</td>
                    <td className="py-3 px-4">Every 3 years</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-3 px-4">30-65</td>
                    <td className="py-3 px-4">HPV test alone (preferred) OR Pap + HPV co-testing OR Pap test alone</td>
                    <td className="py-3 px-4">Every 5 years OR Every 5 years OR Every 3 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Over 65</td>
                    <td className="py-3 px-4">May stop if adequate prior screening</td>
                    <td className="py-3 px-4">Discuss with doctor</td>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Screening Notes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>More frequent screening may be needed if:</strong> You have HIV, weakened immune system, history of cervical cancer or precancer, or DES exposure before birth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>You may not need screening if:</strong> You've had a total hysterectomy (removal of uterus and cervix) for non-cancer reasons and no history of cervical cancer or precancer</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>HPV vaccination doesn't replace screening:</strong> Even if you've been vaccinated against HPV, regular screening is still necessary</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Screening saves lives:</strong> Regular screening has reduced cervical cancer deaths by more than 60% in countries with organized screening programs</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Procedures Section */}
      <section id="diagnosis" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diagnostic Procedures & Imaging</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If screening tests suggest cervical cancer, additional tests are performed to confirm diagnosis and determine cancer stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Biopsy Procedures</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Punch Biopsy</h4>
                  <p className="text-gray-600 text-sm">Uses a circular blade to remove a small tissue sample from the cervix during colposcopy.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Endocervical Curettage (ECC)</h4>
                  <p className="text-gray-600 text-sm">Uses a narrow instrument to scrape tissue from the endocervical canal.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Cone Biopsy (Conization)</h4>
                  <p className="text-gray-600 text-sm">Removes a cone-shaped piece of tissue from the cervix. Can be both diagnostic and therapeutic.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">LEEP (Loop Electrosurgical Excision Procedure)</h4>
                  <p className="text-gray-600 text-sm">Uses a thin wire loop heated by electric current to remove abnormal tissue.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Imaging Tests</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">X-ray</h4>
                  <p className="text-gray-600 text-sm">Chest X-ray to check if cancer has spread to lungs.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">CT Scan (Computed Tomography)</h4>
                  <p className="text-gray-600 text-sm">Creates detailed cross-sectional images to show tumor size and spread to lymph nodes or other organs.</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">MRI (Magnetic Resonance Imaging)</h4>
                  <p className="text-gray-600 text-sm">Provides detailed images of soft tissues, particularly useful for assessing tumor size and local spread.</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">PET Scan (Positron Emission Tomography)</h4>
                  <p className="text-gray-600 text-sm">Detects cancer cells throughout the body by showing areas of high metabolic activity.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Diagnostic Procedures</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-pink-600">🔬</span>
                  </span>
                  Cystoscopy
                </h4>
                <p className="text-gray-600 ml-11">Examines the inside of the bladder and urethra using a thin, lighted tube to check if cancer has spread.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600">🔬</span>
                  </span>
                  Proctoscopy
                </h4>
                <p className="text-gray-600 ml-11">Examines the rectum using a lighted tube to determine if cancer has spread to the rectal wall.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">💉</span>
                  </span>
                  Blood Tests
                </h4>
                <p className="text-gray-600 ml-11">Complete blood count (CBC) and kidney/liver function tests to assess overall health and organ function.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600">🔬</span>
                  </span>
                  Examination Under Anesthesia
                </h4>
                <p className="text-gray-600 ml-11">Thorough pelvic exam performed while patient is under anesthesia to better assess tumor extent.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Multiple Tests Are Needed</h3>
            <p className="text-gray-700 mb-4">
              The combination of these diagnostic procedures helps doctors:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Confirm the presence of cancer and determine its type</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Determine the exact stage of cancer (how far it has spread)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Plan the most appropriate treatment approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Assess whether cancer has affected nearby organs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Evaluate overall health to determine treatment tolerance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section id="treatment" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Treatment depends on cancer stage, type, overall health, and personal preferences. Often, a combination of treatments is used.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Surgery</h3>
                  <p className="text-gray-700 mb-4">
                    Surgical options vary based on cancer stage and whether fertility preservation is desired:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Conization</h4>
                      <p className="text-gray-600 text-sm mb-2">Removes cone-shaped piece of cervical tissue containing abnormal cells.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Very early-stage cancer, preserves fertility</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Trachelectomy</h4>
                      <p className="text-gray-600 text-sm mb-2">Removes cervix and upper vagina but leaves uterus intact.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Early-stage cancer in women who want to preserve fertility</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Simple Hysterectomy</h4>
                      <p className="text-gray-600 text-sm mb-2">Removes uterus and cervix.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Early-stage cancer confined to cervix</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Radical Hysterectomy</h4>
                      <p className="text-gray-600 text-sm mb-2">Removes uterus, cervix, upper vagina, and surrounding tissues.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Stage IB-IIA cancer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Pelvic Exenteration</h4>
                      <p className="text-gray-600 text-sm mb-2">Extensive surgery removing pelvic organs (may include bladder, rectum).</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Recurrent cancer or very advanced cases</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Lymph Node Removal</h4>
                      <p className="text-gray-600 text-sm mb-2">Removes pelvic and/or para-aortic lymph nodes.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Staging and treatment, often combined with other surgeries</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Radiation Therapy</h3>
                  <p className="text-gray-700 mb-4">
                    Uses high-energy rays or particles to destroy cancer cells. Two main types:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">External Beam Radiation</h4>
                      <p className="text-gray-600 text-sm mb-2">Radiation delivered from outside the body using a machine.</p>
                      <p className="text-gray-600 text-sm"><strong>Schedule:</strong> Usually 5 days/week for 5-6 weeks</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Brachytherapy (Internal Radiation)</h4>
                      <p className="text-gray-600 text-sm mb-2">Radioactive material placed inside or near the tumor.</p>
                      <p className="text-gray-600 text-sm"><strong>Types:</strong> Low-dose rate (LDR) or high-dose rate (HDR)</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">When Used:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Primary treatment for locally advanced cancer (often with chemotherapy)</li>
                      <li>• After surgery to kill remaining cancer cells</li>
                      <li>• To relieve symptoms in advanced cancer (palliative care)</li>
                      <li>• For patients who cannot undergo surgery</li>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemotherapy</h3>
                  <p className="text-gray-700 mb-4">
                    Uses drugs to kill cancer cells throughout the body. Can be given alone or combined with radiation (chemoradiation).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Drugs Used:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Cisplatin (most common)</li>
                        <li>• Carboplatin</li>
                        <li>• Paclitaxel (Taxol)</li>
                        <li>• Topotecan</li>
                        <li>• Gemcitabine</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Administration:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Usually given intravenously (IV)</li>
                        <li>• Cycles of treatment followed by rest periods</li>
                        <li>• Typical cycle: 3-4 weeks</li>
                        <li>• Duration: Several months</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">When Used:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Combined with radiation for locally advanced cancer</li>
                      <li>• For metastatic or recurrent cancer</li>
                      <li>• Before surgery to shrink tumors (neoadjuvant)</li>
                      <li>• After surgery to eliminate remaining cells (adjuvant)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Targeted Therapy</h3>
                  <p className="text-gray-700 mb-4">
                    Drugs that target specific molecules involved in cancer growth and spread.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Bevacizumab (Avastin)</h4>
                    <p className="text-gray-600 text-sm mb-2">Targets VEGF protein to prevent new blood vessel formation that feeds tumors.</p>
                    <p className="text-gray-600 text-sm"><strong>Used for:</strong> Advanced, recurrent, or metastatic cervical cancer, combined with chemotherapy</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• More specific than chemotherapy</li>
                      <li>• May have fewer side effects</li>
                      <li>• Can improve survival when added to chemotherapy</li>
                      <li>• Helps slow cancer progression</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Immunotherapy</h3>
                  <p className="text-gray-700 mb-4">
                    Helps the immune system recognize and attack cancer cells more effectively.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Pembrolizumab (Keytruda)</h4>
                      <p className="text-gray-600 text-sm mb-2">PD-1 inhibitor that blocks protein preventing immune system from attacking cancer.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Recurrent or metastatic cervical cancer with PD-L1 expression</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Dostarlimab (Jemperli)</h4>
                      <p className="text-gray-600 text-sm mb-2">Another PD-1 inhibitor for advanced cervical cancer.</p>
                      <p className="text-gray-600 text-sm"><strong>Used for:</strong> Recurrent or advanced disease that progressed after chemotherapy</p>
                    </div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Treatment by Stage</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stage 0 & IA1:</h4>
                <p className="text-gray-600 text-sm">Conization, LEEP, or simple hysterectomy</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stage IA2 & IB1:</h4>
                <p className="text-gray-600 text-sm">Radical hysterectomy with lymph node removal, or radiation therapy with chemotherapy</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stage IB2, IB3, & II:</h4>
                <p className="text-gray-600 text-sm">Chemoradiation (radiation + chemotherapy), or radical hysterectomy followed by radiation</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stage III & IVA:</h4>
                <p className="text-gray-600 text-sm">Chemoradiation as primary treatment</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Stage IVB & Recurrent:</h4>
                <p className="text-gray-600 text-sm">Chemotherapy, targeted therapy, immunotherapy, or palliative radiation</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prevention Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cervical cancer is one of the most preventable cancers. These strategies can significantly reduce your risk.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">HPV Vaccination</h3>
              <p className="text-gray-700 mb-4">
                <strong>Most Effective Prevention:</strong> HPV vaccines protect against the types of HPV that cause most cervical cancers.
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Vaccines:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Gardasil 9 (protects against 9 HPV types)</li>
                    <li>• Cervarix (protects against 2 HPV types)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Ages:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Routine vaccination: ages 11-12</li>
                    <li>• Can start as early as age 9</li>
                    <li>• Catch-up vaccination: through age 26</li>
                    <li>• Adults 27-45: discuss with doctor</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Effectiveness:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Nearly 100% effective when given before HPV exposure</li>
                    <li>• Prevents 90% of HPV-related cancers</li>
                    <li>• Long-lasting protection (10+ years proven)</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Regular Screening</h3>
              <p className="text-gray-700 mb-4">
                <strong>Early Detection Saves Lives:</strong> Regular screening can detect precancerous changes before they become cancer.
              </p>
              <div className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Screening Schedule:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Ages 21-29: Pap test every 3 years</li>
                    <li>• Ages 30-65: HPV test every 5 years (preferred)</li>
                    <li>• Or Pap + HPV co-testing every 5 years</li>
                    <li>• Or Pap test alone every 3 years</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Why It Works:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Detects precancerous changes early</li>
                    <li>• Allows treatment before cancer develops</li>
                    <li>• Identifies cancer at most treatable stages</li>
                    <li>• Reduces cervical cancer deaths by 60-80%</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Important:</h4>
                  <p className="text-gray-600 text-sm">Continue screening even if you've been vaccinated against HPV</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smoking Cessation</h3>
              <p className="text-gray-600 mb-3">
                Quitting smoking reduces cervical cancer risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Smoking doubles cervical cancer risk</li>
                <li>• Tobacco damages cervical cell DNA</li>
                <li>• Weakens immune response to HPV</li>
                <li>• Risk decreases after quitting</li>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Sexual Practices</h3>
              <p className="text-gray-600 mb-3">
                Reduce HPV transmission risk:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use condoms consistently (reduces but doesn't eliminate risk)</li>
                <li>• Limit number of sexual partners</li>
                <li>• Delay first sexual intercourse</li>
                <li>• Avoid partners with multiple partners</li>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strengthen Immune System</h3>
              <p className="text-gray-600 mb-3">
                Support your body's natural defenses:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Eat a balanced, nutritious diet</li>
                <li>• Exercise regularly</li>
                <li>• Get adequate sleep</li>
                <li>• Manage stress effectively</li>
                <li>• Maintain healthy weight</li>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Prevention Success Story</h3>
            <p className="text-lg text-center mb-6">
              Countries with comprehensive HPV vaccination and screening programs have seen dramatic reductions in cervical cancer rates:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">87%</div>
                <p className="text-sm">Reduction in cervical cancer incidence in vaccinated women</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">90%</div>
                <p className="text-sm">Of cervical cancers could be prevented with vaccination and screening</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm">Nearly all cervical cancers are caused by preventable HPV infection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prognosis & Survival Section */}
      <section id="prognosis" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prognosis & Survival Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Survival rates vary significantly based on cancer stage at diagnosis, emphasizing the importance of early detection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">5-Year Relative Survival Rates</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">93%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Localized</h4>
                <p className="text-gray-600 text-sm">Cancer confined to cervix</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">58%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Regional</h4>
                <p className="text-gray-600 text-sm">Spread to nearby structures or lymph nodes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">17%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Distant</h4>
                <p className="text-gray-600 text-sm">Spread to distant organs</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">66%</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">All Stages</h4>
                <p className="text-gray-600 text-sm">Combined average</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center mt-6 italic">
              *Based on data from 2013-2019. Individual outcomes may vary based on many factors.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Prognosis</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Stage at Diagnosis:</strong>
                    <p className="text-gray-600 text-sm">Most important factor - earlier stages have much better outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Tumor Size:</strong>
                    <p className="text-gray-600 text-sm">Smaller tumors generally have better prognosis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Lymph Node Involvement:</strong>
                    <p className="text-gray-600 text-sm">Cancer spread to lymph nodes indicates more advanced disease</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Cell Type:</strong>
                    <p className="text-gray-600 text-sm">Squamous cell carcinomas generally have better outcomes than adenocarcinomas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Age & Overall Health:</strong>
                    <p className="text-gray-600 text-sm">Younger, healthier patients typically tolerate treatment better</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Response to Treatment:</strong>
                    <p className="text-gray-600 text-sm">How well cancer responds to initial treatment affects long-term outcomes</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Survival Statistics</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What They Mean:</h4>
                  <p className="text-gray-600 text-sm">5-year survival rate is the percentage of people who live at least 5 years after diagnosis. Many live much longer.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Variation:</h4>
                  <p className="text-gray-600 text-sm">Statistics are averages. Your individual prognosis depends on many personal factors.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Improving Outcomes:</h4>
                  <p className="text-gray-600 text-sm">Treatment advances mean current outcomes may be better than older statistics suggest.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Quality of Life:</h4>
                  <p className="text-gray-600 text-sm">Modern treatments focus on both survival and maintaining quality of life during and after treatment.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">The Power of Early Detection</h3>
            <p className="text-lg text-center mb-6">
              When cervical cancer is detected early through regular screening:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">93%</div>
                <p className="text-sm">5-year survival rate for localized cancer</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm">Cure rate for precancerous changes when treated</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">60%</div>
                <p className="text-sm">Reduction in deaths through screening programs</p>
              </div>
            </div>
            <p className="text-center mt-6 text-lg font-semibold">
              Regular screening saves lives - don't skip your appointments!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Complications & Side Effects Section */}
      <section id="complications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complications & Treatment Side Effects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding potential complications and side effects helps you prepare and manage them effectively.
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Surgery Side Effects</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Immediate Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Pain and discomfort at surgical site</li>
                    <li>• Bleeding and infection risk</li>
                    <li>• Fatigue during recovery</li>
                    <li>• Temporary urinary problems</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Infertility (after hysterectomy)</li>
                    <li>• Early menopause (if ovaries removed)</li>
                    <li>• Lymphedema (leg swelling)</li>
                    <li>• Sexual function changes</li>
                    <li>• Bladder or bowel dysfunction</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Radiation Therapy Side Effects</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">During Treatment:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fatigue and weakness</li>
                    <li>• Skin irritation in treated area</li>
                    <li>• Diarrhea and nausea</li>
                    <li>• Urinary frequency and discomfort</li>
                    <li>• Vaginal dryness and irritation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Vaginal stenosis (narrowing)</li>
                    <li>• Chronic diarrhea or bowel changes</li>
                    <li>• Bladder irritation</li>
                    <li>• Infertility and early menopause</li>
                    <li>• Increased fracture risk</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Chemotherapy Side Effects</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Common Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Nausea and vomiting</li>
                    <li>• Hair loss</li>
                    <li>• Fatigue and weakness</li>
                    <li>• Increased infection risk</li>
                    <li>• Mouth sores</li>
                    <li>• Loss of appetite</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specific Drug Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Cisplatin: Kidney damage, hearing loss, neuropathy</li>
                    <li>• Paclitaxel: Nerve damage, muscle aches</li>
                    <li>• Carboplatin: Low blood counts</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cancer Complications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Complications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Kidney failure (from ureteral obstruction)</li>
                    <li>• Blood clots</li>
                    <li>• Fistulas (abnormal connections between organs)</li>
                    <li>• Severe bleeding</li>
                    <li>• Bowel or bladder obstruction</li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Emotional Impact:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Anxiety and depression</li>
                    <li>• Fear of recurrence</li>
                    <li>• Body image concerns</li>
                    <li>• Relationship challenges</li>
                    <li>• Grief over fertility loss</li>
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
            className="bg-blue-50 p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Managing Side Effects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Medical Management</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Anti-nausea medications</li>
                  <li>• Pain management</li>
                  <li>• Hormone replacement therapy</li>
                  <li>• Vaginal dilators</li>
                  <li>• Physical therapy</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Lifestyle Adjustments</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Balanced nutrition</li>
                  <li>• Gentle exercise</li>
                  <li>• Adequate rest</li>
                  <li>• Stress management</li>
                  <li>• Skin care routines</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Support Services</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Counseling and therapy</li>
                  <li>• Support groups</li>
                  <li>• Sexual health counseling</li>
                  <li>• Fertility preservation options</li>
                  <li>• Palliative care team</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              When to Contact Your Healthcare Team
            </h3>
            <p className="text-gray-700 mb-4">
              Contact your doctor immediately if you experience:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fever over 100.4°F (38°C)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Severe or persistent pain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Heavy vaginal bleeding</span>
               

                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Signs of infection</span>
                </li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Difficulty breathing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Severe nausea/vomiting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Leg swelling or pain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Unusual symptoms</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Resources & Global Impact Section */}
      <section id="support" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Resources & Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to support and understanding the global burden of cervical cancer.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Resources</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🏥 Medical Support</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Oncology teams and specialists</li>
                    <li>• Nurse navigators</li>
                    <li>• Palliative care services</li>
                    <li>• Pain management clinics</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 Emotional Support</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Cancer support groups</li>
                    <li>• Individual counseling</li>
                    <li>• Online communities</li>
                    <li>• Peer mentoring programs</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Educational Resources</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• American Cancer Society</li>
                    <li>• National Cancer Institute</li>
                    <li>• Cancer Research UK</li>
                    <li>• Local cancer centers</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💰 Financial Assistance</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Insurance navigation services</li>
                    <li>• Pharmaceutical assistance programs</li>
                    <li>• Non-profit organizations</li>
                    <li>• Government assistance programs</li>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Impact</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🌍 Worldwide Statistics</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 600,000+ new cases annually</li>
                    <li>• 340,000+ deaths per year</li>
                    <li>• 4th most common cancer in women</li>
                    <li>• 90% of deaths in low/middle-income countries</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">⚖️ Health Disparities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Limited screening access in developing nations</li>
                    <li>• Higher rates in underserved communities</li>
                    <li>• Socioeconomic barriers to care</li>
                    <li>• Cultural and educational challenges</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 WHO Elimination Strategy</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 90% of girls vaccinated by age 15</li>
                    <li>• 70% of women screened twice by age 45</li>
                    <li>• 90% of identified cases receive treatment</li>
                    <li>• Goal: Eliminate cervical cancer as public health problem</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✨ Recent Advances</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Improved HPV vaccines</li>
                    <li>• Self-collection HPV testing</li>
                    <li>• Immunotherapy breakthroughs</li>
                    <li>• AI-assisted screening</li>
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
            <h3 className="text-2xl font-bold mb-4 text-center">A Preventable Disease</h3>
            <p className="text-lg text-center mb-6">
              Cervical cancer is one of the most preventable and treatable forms of cancer when detected early. With comprehensive vaccination programs, regular screening, and improved access to treatment, we can work toward eliminating cervical cancer as a public health threat worldwide.
            </p>
            <div className="text-center">
              <p className="text-xl font-semibold">Together, we can make cervical cancer history.</p>
            </div>
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
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="ml-2 text-xl font-bold">Cervical Cancer Guide</span>
              </div>
              <p className="text-gray-400 mb-4">
                Comprehensive educational resource about cervical cancer prevention, detection, and treatment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#risk-factors" className="hover:text-white transition-colors">Risk Factors</a></li>
                <li><a href="#symptoms" className="hover:text-white transition-colors">Symptoms</a></li>
                <li><a href="#screening" className="hover:text-white transition-colors">Screening</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#treatment" className="hover:text-white transition-colors">Treatment Options</a></li>
                <li><a href="#prevention" className="hover:text-white transition-colors">Prevention</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Support Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Notice</h4>
              <p className="text-gray-400 text-sm">
                This information is for educational purposes only and should not replace professional medical advice. Always consult with qualified healthcare providers for diagnosis and treatment.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2024 Cervical Cancer Educational Guide. For informational purposes only.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Medical Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
