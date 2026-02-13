import { Check, Calendar, Users, Globe, Award, Clock, MapPin, Mail, Phone, Star, Heart, Smile, Trophy, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - FULL WIDTH Z DUŻYM ZDJĘCIEM W TLE */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-orange-500 via-yellow-400 to-blue-500">
        {/* Zdjęcie hero w tle */}
        <div className="absolute inset-0">
          <img 
            src="https://angloville.pl/wp-content/uploads/2026/01/angloville-junior-baner-2.avif" 
            alt="Dzieci z Native Speakerami na obozie Angloville" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-orange-600/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-[600px] lg:min-h-[700px] flex items-center">
          <div className="max-w-3xl">
            <div className="mb-8">
              <img 
                src="https://angloville.pl/wp-content/themes/angloville/assets/images/logo.svg" 
                alt="Angloville Junior" 
                className="h-20 drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white drop-shadow-2xl">
              Twoje dziecko przełamie<br />
              <span className="text-yellow-300">barierę językową</span><br />
              w 7 dni! 🚀
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-yellow-50 font-semibold drop-shadow-lg">
              🇬🇧 Obóz z Native Speakerami 1:2<br />
              👨‍🎓 Dla młodzieży 11-18 lat<br />
              💰 Od 3100 zł
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#terminy" 
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-yellow-500 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 transform"
              >
                🗓️ Zobacz terminy i ceny
              </a>
              <a 
                href="tel:+48533655147" 
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all border-4 border-yellow-300 shadow-2xl hover:scale-105 transform"
              >
                📞 Zadzwoń: +48 533 655 147
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Liczniki - EMOCJE! */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                15000+
              </div>
              <div className="text-gray-600 font-semibold text-lg">✨ Szczęśliwych uczestników</div>
            </div>
            <div className="text-center border-x-2 border-gray-100">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-2">
                4.8/5
              </div>
              <div className="text-gray-600 font-semibold text-lg flex items-center justify-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                Ocena na Google
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-2">
                13 lat
              </div>
              <div className="text-gray-600 font-semibold text-lg">🏆 Doświadczenia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kluczowe korzyści - ZE ZDJĘCIAMI */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Dlaczego <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Angloville Junior?</span>
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">Bo to działa! I jest mega fajnie! 🎉</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Karta 1 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-orange-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://angloville.pl/wp-content/uploads/2022/08/conversation_3_.svg" 
                  alt="Rozmowy 1:2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Format 1:2 🎯</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeden native speaker na dwóch uczestników. Maksymalna indywidualizacja i mnóstwo czasu na konwersację!
                </p>
              </div>
            </div>

            {/* Karta 2 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://angloville.pl/wp-content/uploads/2022/08/union-jack.svg" 
                  alt="Native Speakers" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Native Speakerzy 🇬🇧</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wykwalifikowani absolwenci z UK, USA, Irlandii. Różne akcenty – brytyjski, amerykański, irlandzki!
                </p>
              </div>
            </div>

            {/* Karta 3 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-green-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://angloville.pl/wp-content/uploads/2022/08/team_1_.svg" 
                  alt="Intensywne zajęcia" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">30h intensywu ⚡</h3>
                <p className="text-gray-600 leading-relaxed">
                  7 dni pełnej immersji językowej. Bez podręczników – tylko prawdziwe rozmowy i praktyka!
                </p>
              </div>
            </div>

            {/* Karta 4 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
                <Award className="w-32 h-32 text-orange-500" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Metoda immersji 🌊</h3>
                <p className="text-gray-600 leading-relaxed">
                  Całkowite zanurzenie w anglojęzycznym środowisku. Uczysz się przez doświadczenie – jak dzieci uczą się mówić!
                </p>
              </div>
            </div>

            {/* Karta 5 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-pink-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <MapPin className="w-32 h-32 text-pink-500" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <MapPin className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">W Polsce 🇵🇱</h3>
                <p className="text-gray-600 leading-relaxed">
                  Piękne hotele w malowniczych miejscach. Bez konieczności wyjazdu za granicę – wygoda i bezpieczeństwo!
                </p>
              </div>
            </div>

            {/* Karta 6 */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                <Trophy className="w-32 h-32 text-blue-500" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Check className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Lider w Polsce 🏆</h3>
                <p className="text-gray-600 leading-relaxed">
                  15 000+ uczestników | 13 lat doświadczenia | 4.8/5 na Google | Zaufali nam najlepsi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria zdjęć - EMOCJE! */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Zobacz jak wygląda <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Angloville Junior!</span> 📸
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">Zdjęcia z naszych obozów – prawdziwe emocje! 🎉</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-camps-4.avif',
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-junior-baner-2.avif',
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-camps-4.avif',
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-junior-baner-2.avif',
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-camps-4.avif',
              'https://angloville.pl/wp-content/uploads/2026/01/angloville-junior-baner-2.avif',
            ].map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <img 
                  src={src} 
                  alt={`Uczestnicy Angloville ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-lg">💛 Zobacz więcej!</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminy i ceny - Z KOLOROWYMI BADGES */}
      <section id="terminy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Terminy i <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">ceny</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl">
            Wybierz termin i miejsce wyjazdu 📅✈️
          </p>

          {/* Letnie terminy */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-gray-800">☀️ Wakacje 2026</h3>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                GORĄCE MIEJSCA! 🔥
              </span>
            </div>
            <div className="grid gap-6">
              {[
                { date: '28 czerwca – 04 lipca', price: '3200', location: 'Warszawa', hotel: 'Niegocin Resort (Mazury)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500' },
                { date: '28 czerwca – 04 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500' },
                { date: '28 czerwca – 04 lipca', price: '3150', location: 'Wrocław', hotel: 'Chojnik (Karkonosze)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500' },
                { date: '28 czerwca – 04 lipca', price: '3200', location: 'Katowice/Kraków', hotel: 'Limba Grand (Tatry)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500' },
                { date: '05 – 11 lipca', price: '3150', location: 'Katowice/Kraków', hotel: 'Ameliówka (Świętokrzyskie)', status: 'Otwarte zapisy', badge: null, badgeColor: '' },
                { date: '05 – 11 lipca', price: '3200', location: 'Warszawa', hotel: 'Lipowy Most (Podlasie)', status: 'Ostatnie miejsca', badge: 'hot', badgeColor: 'from-red-500 to-orange-500' },
                { date: '12 – 18 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', badge: null, badgeColor: '' },
              ].map((term, idx) => (
                <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 transition-all hover:shadow-2xl relative overflow-hidden">
                  {term.badge === 'new' && (
                    <span className={`absolute top-6 right-6 bg-gradient-to-r ${term.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      ✨ NOWY TERMIN!
                    </span>
                  )}
                  {term.badge === 'hot' && (
                    <span className={`absolute top-6 right-6 bg-gradient-to-r ${term.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg`}>
                      🔥 OSTATNIE MIEJSCA!
                    </span>
                  )}
                  <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">{term.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 ml-1">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span className="text-sm font-medium">Wyjazd z: {term.location}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-900 text-lg mb-1">{term.hotel}</p>
                      <p className="text-sm text-green-600 font-semibold">✅ {term.status}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-3">{term.price} zł</div>
                      <a 
                        href="https://angloville.pl/panel-klienta/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        🎉 Zapisz się!
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ferie zimowe */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-gray-800">❄️ Ferie zimowe 2026</h3>
              <span className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">
                WYPRZEDANE ✅
              </span>
            </div>
            <div className="grid gap-6 opacity-60">
              {[
                { date: '15 – 21 lutego', price: '3100', location: 'Poznań/Katowice/Łódź/Lublin', hotel: 'Wityng' },
                { date: '22 – 28 lutego', price: '3100', location: 'Poznań/Katowice', hotel: 'Wawrzyniak' },
              ].map((term, idx) => (
                <div key={idx} className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-8">
                  <div className="grid md:grid-cols-5 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-700 text-lg">{term.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 ml-1">
                        <MapPin className="w-5 h-5" />
                        <span className="text-sm">Wyjazd z: {term.location}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-700 text-lg mb-1">{term.hotel}</p>
                      <p className="text-sm text-red-600 font-semibold">❌ Wyprzedane</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-4xl font-bold text-gray-500 mb-3">{term.price} zł</div>
                      <button 
                        disabled
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded-xl font-bold cursor-not-allowed"
                      >
                        Wyprzedane
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co zawiera cena - Z LEPSZYM DESIGNEM */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Co <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">zawiera</span> cena?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">Wszystko, czego potrzebujesz! 💎</p>
          
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: '🏨', text: '7 dni i 6 nocy w 3/4-gwiazdkowym hotelu' },
                { icon: '🗣️', text: '30 godzin zajęć w formacie 1:2' },
                { icon: '🍽️', text: 'Pełne wyżywienie – śniadanie, obiad, kolacja' },
                { icon: '🛏️', text: 'Zakwaterowanie w pokojach 2-4 osobowych' },
                { icon: '📚', text: 'Materiały edukacyjne' },
                { icon: '🛡️', text: 'Ubezpieczenie NNW' },
                { icon: '👨‍👩‍👧‍👦', text: 'Opieka 24/7' },
                { icon: '🎢', text: 'Atrakcje turystyczne' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <Check className="w-6 h-6 text-green-500 mb-2" />
                    <span className="text-gray-800 font-semibold text-lg">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-10 border-t-4 border-dashed border-gray-200">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl mb-8 border-2 border-red-200">
                <div className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-3xl">×</span>
                  <div>
                    <span className="text-gray-800 font-bold text-xl block mb-2">🚌 Transport</span>
                    <span className="text-gray-600 text-lg">Organizowany dodatkowo (opcja dopłaty)</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl border-2 border-blue-200">
                  <p className="font-black text-gray-900 mb-3 text-xl">💳 Jak płacić?</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-bold text-blue-600">500 zł</span> zadatku przy zapisie<br />
                    + reszta <span className="font-bold text-purple-600">14 dni</span> przed wyjazdem
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-200">
                  <p className="font-black text-gray-900 mb-3 text-xl">🔄 Anulacja?</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-bold text-green-600">100%</span> zwrotu do 30 dni przed<br />
                    <span className="font-bold text-emerald-600">50%</span> zwrotu do 14 dni przed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program dnia - Z IKONAMI I KOLORAMI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Przykładowy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">dzień</span> na obozie
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">Od rana do wieczora – non-stop angielski! 🚀</p>
          
          <div className="space-y-4">
            {[
              { time: '09:00-10:00', activity: '🥞 Śniadanie', desc: 'Pełne energii śniadanie!', color: 'from-yellow-400 to-orange-400', icon: '🍳' },
              { time: '10:00-12:00', activity: '👨‍🏫 Spotkanie z Mentorem 2:1', desc: 'Rozmowy, gry, projekty', color: 'from-blue-400 to-purple-500', icon: '🎯' },
              { time: '12:00-14:00', activity: '💬 Sesja językowa 2:1', desc: 'Negocjacje i dyskusje', color: 'from-purple-500 to-pink-500', icon: '🗣️' },
              { time: '14:00-15:00', activity: '🍕 Obiad', desc: 'Smaczne jedzenie!', color: 'from-orange-400 to-red-400', icon: '🍽️' },
              { time: '15:00-16:30', activity: '⚽ Czas wolny', desc: 'Relaks, sport, zabawa', color: 'from-green-400 to-emerald-500', icon: '🎮' },
              { time: '16:30-19:00', activity: '🎨 Warsztaty z Mentorem', desc: 'Kreatywne projekty', color: 'from-blue-500 to-indigo-500', icon: '🎭' },
              { time: '19:00-20:00', activity: '🍔 Kolacja', desc: 'Ostatni posiłek dnia', color: 'from-yellow-500 to-orange-500', icon: '🌮' },
              { time: '20:00-21:00', activity: '🎉 Social Time', desc: 'Poznajmy się lepiej!', color: 'from-pink-500 to-purple-500', icon: '💃' },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative bg-white p-8 rounded-2xl border-l-8 border-transparent hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg text-3xl`}>
                        {item.icon}
                      </div>
                      <div className="font-black text-gray-900 text-xl min-w-[140px]">{item.time}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 font-bold text-2xl mb-1">{item.activity}</div>
                      <div className="text-gray-600 text-lg">{item.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinie - Z LEPSZYM DESIGNEM */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Co mówią <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">rodzice</span> i uczestnicy?
          </h2>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-xl">⭐ Na podstawie <span className="font-bold text-orange-500">1925 opinii</span> na Google</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                author: 'Monika Socha',
                date: '15 września 2024',
                text: 'Mój syn był już 4 raz na Angloville i za każdym razem wraca zachwycony. Nauczyciele świetni z rewelacyjnym podejściem do dzieci i młodzieży. Bardzo polecam! ❤️',
                emoji: '🤩'
              },
              {
                author: 'Katarzyna Matysiak',
                date: '26 lutego 2025',
                text: 'Córka wróciła bardzo zadowolona – fajna atmosfera, relacje z nativami, ciekawy program. Widać efekty – bardzo powiększony zasób słownictwa i zdecydowanie większa swoboda mówienia. 🚀',
                emoji: '💯'
              },
              {
                author: 'Anka Cichoń',
                date: '10 września 2024',
                text: 'Młodzież w trakcie obozu bardzo dużo mówi w j. angielskim. Dobra organizacja zajęć, zero korzystania z telefonów, troskliwi opiekunowie. Polecam! 🙌',
                emoji: '⭐'
              },
            ].map((review, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -top-6 -right-6 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {review.emoji}
                </div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-orange-300">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Najczęściej zadawane <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">pytania</span> ❓
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">Znajdź odpowiedzi na swoje pytania!</p>
          
          <div className="space-y-4">
            {[
              {
                q: '🎯 Dla kogo przeznaczony jest obóz Angloville Junior?',
                a: 'Obóz skierowany jest do młodzieży w wieku 11–18 lat, która chce przełamać barierę językową i nauczyć się swobodnie mówić po angielsku w praktycznych sytuacjach.',
              },
              {
                q: '📊 Czy trzeba znać angielski na określonym poziomie?',
                a: 'Nie wymagamy konkretnego poziomu. Program jest dostosowany do różnych umiejętności, a Native Speakerzy pomagają każdemu uczestnikowi rozwijać się indywidualnie.',
              },
              {
                q: '🎓 Jak wygląda nauka na obozie?',
                a: 'Nie ma podręczników ani tradycyjnych lekcji. Uczestnicy uczą się przez rozmowy, gry, warsztaty i codzienne aktywności z Native Speakerami. To pełna immersja językowa!',
              },
              {
                q: '🇬🇧 Kim są native speakerzy?',
                a: 'To absolwenci i studenci z Wielkiej Brytanii, USA, Irlandii i innych krajów anglojęzycznych. Są starannie rekrutowani i przygotowani do pracy z młodzieżą.',
              },
              {
                q: '👥 Jaka jest proporcja native speakerów do uczestników?',
                a: 'Stosujemy unikalną formułę: 1 native speaker na 2 uczestników. Dzięki temu każdy uczestnik ma intensywny kontakt z językiem i indywidualne wsparcie.',
              },
              {
                q: '🏥 Czy na obozie jest opieka medyczna?',
                a: 'Tak! Zapewniamy całodobową opiekę doświadczonej kadry, a w razie potrzeby dostęp do wykwalifikowanej pomocy medycznej.',
              },
              {
                q: '✍️ Jak zapisać dziecko na obóz?',
                a: 'Wystarczy kliknąć przycisk "Zapisz się" przy wybranym terminie lub skontaktować się z nami telefonicznie. Liczba miejsc jest ograniczona!',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl hover:from-orange-50 hover:to-yellow-50 transition-all border-2 border-transparent hover:border-orange-300 shadow-lg">
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between text-xl">
                  <span>{faq.q}</span>
                  <span className="text-orange-500 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg pl-2 border-l-4 border-orange-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-2xl">
            Gotowy na <span className="text-yellow-300">przygodę</span> z językiem angielskim? 🚀
          </h2>
          <p className="text-2xl mb-10 text-white font-semibold drop-shadow-lg">
            Miejsca są <span className="text-yellow-300 font-black">ograniczone</span>. Zarezerwuj już dziś! ⏰
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#terminy" 
              className="bg-white text-purple-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-yellow-100 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-110 transform"
            >
              📅 Zobacz terminy
            </a>
            <a 
              href="tel:+48533655147" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:from-yellow-500 hover:to-orange-600 transition-all shadow-2xl hover:scale-110 transform"
            >
              📞 Zadzwoń teraz!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                src="https://angloville.pl/wp-content/themes/angloville/assets/images/logo.svg" 
                alt="Angloville" 
                className="h-16 mb-6"
              />
              <p className="text-gray-400 text-lg leading-relaxed">
                🏆 Lider turystyki edukacyjnej w Polsce od 2011 roku.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">📞 Kontakt</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href="tel:+48533655147" className="text-lg">+48 533 655 147</a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:kontakt@angloville.pl" className="text-lg">kontakt@angloville.pl</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">🔗 Linki</h3>
              <div className="space-y-3 text-gray-400">
                <a href="https://angloville.pl" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-lg">
                  Strona główna Angloville
                </a>
                <a href="https://angloville.pl/o-angloville/o-nas/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-lg">
                  O nas
                </a>
                <a href="https://angloville.pl/o-angloville/opinie/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-lg">
                  Opinie
                </a>
                <a href="https://angloville.pl/panel-klienta/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-lg">
                  Panel klienta
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center">
            <p className="text-gray-400 text-lg mb-4">&copy; 2026 Angloville. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-300 font-semibold">4.8/5 na Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300 font-semibold">15 000+ uczestników</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-semibold">13 lat doświadczenia</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile) */}
      <a 
        href="#terminy" 
        className="md:hidden fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-5 rounded-full font-black shadow-2xl hover:shadow-orange-400/50 transition-all z-50 flex items-center gap-3 text-lg hover:scale-110 transform animate-bounce"
      >
        <Calendar className="w-6 h-6" />
        Wybierz termin!
      </a>
    </div>
  );
}
