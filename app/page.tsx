import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Your Company</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Our Amazing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Quality First</h4>
                        <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Support</h4>
                        <p className="text-gray-600">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fast Results</h4>
                        <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                      <div className="text-6xl">🎯</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amazing Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$19<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Nemo enim ipsam voluptatem quia voluptas</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Lorem ipsum dolor sit amet</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Consectetur adipiscing elit</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sed do eiusmod tempor</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-2">$49<span className="text-lg opacity-80">/month</span></div>
              <p className="opacity-80 mb-6">Ut enim ad minima veniam, quis nostrum</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-white mr-2">✓</span>Exercitation ullamco laboris</li>
                <li className="flex items-center"><span className="text-white mr-2">✓</span>Nisi ut aliquip ex ea commodo</li>
                <li className="flex items-center"><span className="text-white mr-2">✓</span>Consequat duis aute irure</li>
                <li className="flex items-center"><span className="text-white mr-2">✓</span>Dolor in reprehenderit</li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600 mb-6">Voluptate velit esse cillum dolore</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Eu fugiat nulla pariatur</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Excepteur sint occaecat</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cupidatat non proident</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sunt in culpa qui officia</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Doe</h4>
                  <p className="text-gray-600 text-sm">CEO, Company Inc</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <div className="flex text-yellow-400 mt-4">
                ★★★★★
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Jane Smith</h4>
                  <p className="text-gray-600 text-sm">Designer, Creative Co</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="flex text-yellow-400 mt-4">
                ★★★★★
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MB</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Brown</h4>
                  <p className="text-gray-600 text-sm">Developer, Tech Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
              <div className="flex text-yellow-400 mt-4">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YC</span>
                </div>
                <span className="ml-2 text-xl font-bold">Your Company</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
