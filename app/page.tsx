import { Check, Calendar, Users, Globe, Award, Clock, MapPin, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://angloville.pl/wp-content/uploads/2021/04/logo_angloville_biale-1.svg" 
                alt="Angloville Junior" 
                className="h-16 mx-auto mb-8"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Twoje dziecko przełamie<br />barierę językową w 7 dni
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Obóz z Native Speakerami 1:2 | Dla młodzieży 11-18 lat | Od 3200 zł
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#terminy" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
              >
                Zobacz terminy i ceny
              </a>
              <a 
                href="tel:+48533655147" 
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                Zadzwoń: +48 533 655 147
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-blue-600 text-white py-3 shadow-lg hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://angloville.pl/wp-content/uploads/2021/04/logo_angloville_biale-1.svg" 
              alt="Angloville" 
              className="h-8"
            />
            <span className="text-sm font-semibold">Angloville Junior 11-18 lat</span>
          </div>
          <a 
            href="#terminy" 
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-all"
          >
            Wybierz termin
          </a>
        </div>
      </div>

      {/* Kluczowe korzyści */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego Angloville Junior?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Format 1:2</h3>
              <p className="text-gray-600">
                Jeden native speaker na dwóch uczestników. Maksymalna indywidualizacja i czas na konwersację.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Native Speakerzy</h3>
              <p className="text-gray-600">
                Absolwenci uniwersytetów z UK, USA, Irlandii. Różne akcenty – brytyjski, amerykański, irlandzki.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">30h intensywnych zajęć</h3>
              <p className="text-gray-600">
                7 dni pełnej immersji językowej. Brak podręczników – tylko rozmowy i praktyka.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Metoda immersji</h3>
              <p className="text-gray-600">
                Całkowite zanurzenie w anglojęzycznym środowisku. Uczenie przez doświadczenie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">W Polsce</h3>
              <p className="text-gray-600">
                Piękne hotele w malowniczych miejscach. Bez konieczności wyjazdu za granicę.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">15 000+ uczestników</h3>
              <p className="text-gray-600">
                13 lat doświadczenia. Ocena 4.8/5 na Google. Lider turystyki edukacyjnej w Polsce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminy i ceny */}
      <section id="terminy" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Terminy i ceny
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Wybierz termin i miejsce wyjazdu
          </p>

          {/* Letnie terminy */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Wakacje 2026</h3>
            <div className="grid gap-6">
              {[
                { date: '28 czerwca – 04 lipca', price: '3200', location: 'Warszawa', hotel: 'Niegocin Resort (Mazury)', status: 'Otwarte zapisy', badge: 'new' },
                { date: '28 czerwca – 04 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', badge: 'new' },
                { date: '28 czerwca – 04 lipca', price: '3150', location: 'Wrocław', hotel: 'Chojnik (Karkonosze)', status: 'Otwarte zapisy', badge: 'new' },
                { date: '28 czerwca – 04 lipca', price: '3200', location: 'Katowice/Kraków', hotel: 'Limba Grand (Tatry)', status: 'Otwarte zapisy', badge: 'new' },
                { date: '05 – 11 lipca', price: '3150', location: 'Katowice/Kraków', hotel: 'Ameliówka (Świętokrzyskie)', status: 'Otwarte zapisy', badge: null },
                { date: '05 – 11 lipca', price: '3200', location: 'Warszawa', hotel: 'Lipowy Most (Podlasie)', status: 'Ostatnie miejsca', badge: 'hot' },
                { date: '12 – 18 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', badge: null },
              ].map((term, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-lg relative">
                  {term.badge === 'new' && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NOWY
                    </span>
                  )}
                  {term.badge === 'hot' && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      OSTATNIE MIEJSCA
                    </span>
                  )}
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-900">{term.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Wyjazd z: {term.location}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-900">{term.hotel}</p>
                      <p className="text-sm text-gray-500">{term.status}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{term.price} zł</div>
                      <a 
                        href="https://angloville.pl/panel-klienta/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                      >
                        Zapisz się
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ferie zimowe */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Ferie zimowe 2026</h3>
            <div className="grid gap-6">
              {[
                { date: '15 – 21 lutego', price: '3100', location: 'Poznań/Katowice/Łódź/Lublin', hotel: 'Wityng', status: 'Wyprzedane' },
                { date: '22 – 28 lutego', price: '3100', location: 'Poznań/Katowice', hotel: 'Wawrzyniak', status: 'Wyprzedane' },
              ].map((term, idx) => (
                <div key={idx} className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 opacity-75">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="font-bold text-gray-700">{term.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Wyjazd z: {term.location}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-semibold text-gray-700">{term.hotel}</p>
                      <p className="text-sm text-red-600 font-semibold">{term.status}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-gray-500 mb-2">{term.price} zł</div>
                      <button 
                        disabled
                        className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold cursor-not-allowed"
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

      {/* Co zawiera cena */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Co zawiera cena?
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '7 dni i 6 nocy w 3/4-gwiazdkowym hotelu',
                '30 godzin zajęć w formacie 1:2',
                'Pełne wyżywienie – śniadanie, obiad, kolacja',
                'Zakwaterowanie w pokojach 2-4 osobowych',
                'Materiały edukacyjne',
                'Ubezpieczenie NNW',
                'Opieka 24/7',
                'Atrakcje turystyczne',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-500 font-bold text-xl">×</span>
                <span className="text-gray-700 font-medium">Transport – organizowany dodatkowo (opcja dopłaty)</span>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <p className="font-semibold text-gray-900 mb-2">💳 Jak płacić?</p>
                <p className="text-gray-700">Zadatek 500 zł + reszta na 14 dni przed wyjazdem</p>
                <p className="font-semibold text-gray-900 mt-4 mb-2">🔄 Anulacja?</p>
                <p className="text-gray-700">100% zwrotu do 30 dni przed, 50% do 14 dni przed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jak wygląda dzień */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Przykładowy dzień na obozie
          </h2>
          <div className="space-y-4">
            {[
              { time: '09:00-10:00', activity: 'Śniadanie', color: 'bg-yellow-100' },
              { time: '10:00-12:00', activity: 'Spotkanie z Mentorem 2:1 / Gry i zabawy projektowe', color: 'bg-blue-100' },
              { time: '12:00-14:00', activity: 'Sesja językowa 2:1 / Negocjacje', color: 'bg-purple-100' },
              { time: '14:00-15:00', activity: 'Obiad', color: 'bg-yellow-100' },
              { time: '15:00-16:30', activity: 'Czas wolny', color: 'bg-green-100' },
              { time: '16:30-19:00', activity: 'Spotkanie z Mentorem 2:1 / Gry i zabawy projektowe', color: 'bg-blue-100' },
              { time: '19:00-20:00', activity: 'Kolacja', color: 'bg-yellow-100' },
              { time: '20:00-21:00', activity: 'Social Time – Poznajmy się!', color: 'bg-pink-100' },
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} p-6 rounded-xl border-l-4 border-blue-600`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="font-bold text-blue-900 min-w-[140px]">{item.time}</div>
                  <div className="text-gray-800 font-medium">{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Co mówią rodzice i uczestnicy?
          </h2>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-900">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">Na podstawie 1925 opinii na Google</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                author: 'Monika Socha',
                date: '15 września 2024',
                text: 'Mój syn był już 4 raz na Angloville i za każdym razem wraca zachwycony. Nauczyciele świetni z rewelacyjnym podejściem do dzieci i młodzieży. Bardzo polecam.',
              },
              {
                author: 'Katarzyna Matysiak',
                date: '26 lutego 2025',
                text: 'Córka wróciła bardzo zadowolona – fajna atmosfera, relacje z nativami, ciekawy program. Widać efekty – bardzo powiększony zasób słownictwa i zdecydowanie większa swoboda mówienia.',
              },
              {
                author: 'Anka Cichoń',
                date: '10 września 2024',
                text: 'Młodzież w trakcie obozu bardzo dużo mówi w j. angielskim. Dobra organizacja zajęć, zero korzystania z telefonów, troskliwi opiekunowie. Polecam.',
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Dla kogo przeznaczony jest obóz Angloville Junior?',
                a: 'Obóz skierowany jest do młodzieży w wieku 11–18 lat, która chce przełamać barierę językową i nauczyć się swobodnie mówić po angielsku w praktycznych sytuacjach.',
              },
              {
                q: 'Czy trzeba znać angielski na określonym poziomie?',
                a: 'Nie wymagamy konkretnego poziomu. Program jest dostosowany do różnych umiejętności, a Native Speakerzy pomagają każdemu uczestnikowi rozwijać się indywidualnie.',
              },
              {
                q: 'Jak wygląda nauka na obozie?',
                a: 'Nie ma podręczników ani tradycyjnych lekcji. Uczestnicy uczą się przez rozmowy, gry, warsztaty i codzienne aktywności z Native Speakerami. To pełna immersja językowa.',
              },
              {
                q: 'Kim są native speakerzy?',
                a: 'To absolwenci i studenci z Wielkiej Brytanii, USA, Irlandii i innych krajów anglojęzycznych. Są starannie rekrutowani i przygotowani do pracy z młodzieżą.',
              },
              {
                q: 'Jaka jest proporcja native speakerów do uczestników?',
                a: 'Stosujemy unikalną formułę: 1 native speaker na 2 uczestników. Dzięki temu każdy uczestnik ma intensywny kontakt z językiem i indywidualne wsparcie.',
              },
              {
                q: 'Czy na obozie jest opieka medyczna?',
                a: 'Tak. Zapewniamy całodobową opiekę doświadczonej kadry, a w razie potrzeby dostęp do wykwalifikowanej pomocy medycznej.',
              },
              {
                q: 'Jak zapisać dziecko na obóz?',
                a: 'Wystarczy kliknąć przycisk "Zapisz się" przy wybranym terminie lub skontaktować się z nami telefonicznie. Liczba miejsc jest ograniczona.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na przygodę z językiem angielskim?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Miejsca są ograniczone. Zarezerwuj już dziś!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#terminy" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Zobacz terminy
            </a>
            <a 
              href="tel:+48533655147" 
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-all border-2 border-white"
            >
              Zadzwoń: +48 533 655 147
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://angloville.pl/wp-content/uploads/2021/04/logo_angloville_biale-1.svg" 
                alt="Angloville" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400">
                Lider turystyki edukacyjnej w Polsce od 2011 roku.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+48533655147" className="hover:text-white">+48 533 655 147</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kontakt@angloville.pl" className="hover:text-white">kontakt@angloville.pl</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Linki</h3>
              <div className="space-y-2 text-gray-400">
                <a href="https://angloville.pl" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  Strona główna Angloville
                </a>
                <a href="https://angloville.pl/o-angloville/o-nas/" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  O nas
                </a>
                <a href="https://angloville.pl/o-angloville/opinie/" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  Opinie
                </a>
                <a href="https://angloville.pl/panel-klienta/" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  Panel klienta
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Angloville. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-2 text-sm">
              4.8/5 na Google | 15 000+ uczestników | 13 lat doświadczenia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile) */}
      <a 
        href="#terminy" 
        className="md:hidden fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-blue-700 transition-all z-50 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Wybierz termin
      </a>
    </div>
  );
}
