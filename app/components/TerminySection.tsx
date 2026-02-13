'use client';

import { useState, useMemo } from 'react';
import { Calendar, MapPin, Users, Filter, X } from 'lucide-react';

interface Termin {
  date: string;
  price: string;
  location: string;
  hotel: string;
  status: string;
  badge?: 'new' | 'hot' | null;
  badgeColor?: string;
  month: string;
  ageGroup: string;
  wyprzedane?: boolean;
}

const allTerminy: Termin[] = [
  // WAKACJE - CZERWIEC
  { date: '28 czerwca – 04 lipca', price: '3200', location: 'Warszawa', hotel: 'Niegocin Resort (Mazury)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500', month: 'czerwiec', ageGroup: '11-18' },
  { date: '28 czerwca – 04 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500', month: 'czerwiec', ageGroup: '11-18' },
  { date: '28 czerwca – 04 lipca', price: '3150', location: 'Wrocław', hotel: 'Chojnik (Karkonosze)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500', month: 'czerwiec', ageGroup: '11-18' },
  { date: '28 czerwca – 04 miasta', price: '3200', location: 'Katowice/Kraków', hotel: 'Limba Grand (Tatry)', status: 'Otwarte zapisy', badge: 'new', badgeColor: 'from-green-400 to-emerald-500', month: 'czerwiec', ageGroup: '11-18' },
  
  // WAKACJE - LIPIEC
  { date: '05 – 11 lipca', price: '3150', location: 'Katowice/Kraków', hotel: 'Ameliówka (Świętokrzyskie)', status: 'Otwarte zapisy', month: 'lipiec', ageGroup: '11-18' },
  { date: '05 – 11 lipca', price: '3200', location: 'Warszawa', hotel: 'Lipowy Most (Podlasie)', status: 'Ostatnie miejsca', badge: 'hot', badgeColor: 'from-red-500 to-orange-500', month: 'lipiec', ageGroup: '11-18' },
  { date: '12 – 18 lipca', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', month: 'lipiec', ageGroup: '11-18' },
  { date: '12 – 18 lipca', price: '3150', location: 'Wrocław', hotel: 'Chojnik (Karkonosze)', status: 'Otwarte zapisy', month: 'lipiec', ageGroup: '15-18' },
  { date: '19 – 25 lipca', price: '3200', location: 'Warszawa', hotel: 'Niegocin Resort (Mazury)', status: 'Otwarte zapisy', month: 'lipiec', ageGroup: '11-14' },
  { date: '19 – 25 lipca', price: '3150', location: 'Katowice/Kraków', hotel: 'Limba Grand (Tatry)', status: 'Otwarte zapisy', month: 'lipiec', ageGroup: '11-18' },
  
  // WAKACJE - SIERPIEŃ
  { date: '02 – 08 sierpnia', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', month: 'sierpień', ageGroup: '11-18' },
  { date: '02 – 08 sierpnia', price: '3200', location: 'Warszawa', hotel: 'Lipowy Most (Podlasie)', status: 'Otwarte zapisy', month: 'sierpień', ageGroup: '15-18' },
  { date: '09 – 15 sierpnia', price: '3150', location: 'Wrocław', hotel: 'Chojnik (Karkonosze)', status: 'Ostatnie miejsca', badge: 'hot', badgeColor: 'from-red-500 to-orange-500', month: 'sierpień', ageGroup: '11-18' },
  { date: '16 – 22 sierpnia', price: '3100', location: 'Poznań', hotel: 'Dwór Pomorski', status: 'Otwarte zapisy', month: 'sierpień', ageGroup: '11-14' },
  { date: '23 – 29 sierpnia', price: '3200', location: 'Katowice/Kraków', hotel: 'Ameliówka (Świętokrzyskie)', status: 'Otwarte zapisy', month: 'sierpień', ageGroup: '11-18' },
  
  // FERIE
  { date: '15 – 21 lutego', price: '3100', location: 'Poznań/Katowice/Łódź/Lublin', hotel: 'Wityng', status: 'Wyprzedane', month: 'ferie', ageGroup: '11-18', wyprzedane: true },
  { date: '22 – 28 lutego', price: '3100', location: 'Poznań/Katowice', hotel: 'Wawrzyniak', status: 'Wyprzedane', month: 'ferie', ageGroup: '11-18', wyprzedane: true },
];

export default function TerminySection() {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedAge, setSelectedAge] = useState<string>('all');

  // Unikalne wartości dla filtrów
  const months = useMemo(() => {
    const unique = [...new Set(allTerminy.map(t => t.month))];
    return unique.sort((a, b) => {
      const order = ['ferie', 'czerwiec', 'lipiec', 'sierpień'];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, []);

  const locations = useMemo(() => {
    return [...new Set(allTerminy.map(t => t.location))].sort();
  }, []);

  const ageGroups = useMemo(() => {
    return [...new Set(allTerminy.map(t => t.ageGroup))].sort();
  }, []);

  // Filtrowanie terminów
  const filteredTerminy = useMemo(() => {
    return allTerminy.filter(termin => {
      const monthMatch = selectedMonth === 'all' || termin.month === selectedMonth;
      const locationMatch = selectedLocation === 'all' || termin.location === selectedLocation;
      const ageMatch = selectedAge === 'all' || termin.ageGroup === selectedAge;
      
      return monthMatch && locationMatch && ageMatch;
    });
  }, [selectedMonth, selectedLocation, selectedAge]);

  const activeFiltersCount = [selectedMonth, selectedLocation, selectedAge].filter(f => f !== 'all').length;

  const clearFilters = () => {
    setSelectedMonth('all');
    setSelectedLocation('all');
    setSelectedAge('all');
  };

  const monthLabels: Record<string, string> = {
    'ferie': '❄️ Ferie 2026',
    'czerwiec': '☀️ Czerwiec',
    'lipiec': '🌞 Lipiec',
    'sierpień': '🏖️ Sierpień'
  };

  return (
    <section id="terminy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
          Terminy i <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">ceny</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-xl">
          Wybierz termin i miejsce wyjazdu 📅✈️
        </p>

        {/* FILTRY */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Filter className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Filtruj terminy</h3>
              {activeFiltersCount > 0 && (
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {activeFiltersCount} {activeFiltersCount === 1 ? 'filtr' : 'filtry'}
                </span>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-semibold transition-colors"
              >
                <X className="w-5 h-5" />
                Wyczyść
              </button>
            )}
          </div>

          {/* TABS - Miesiąc */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">📅 Okres:</label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedMonth('all')}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  selectedMonth === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                Wszystkie 🎉
              </button>
              {months.map(month => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    selectedMonth === month
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  {monthLabels[month]}
                </button>
              ))}
            </div>
          </div>

          {/* DROPDOWNS - Lokalizacja i wiek */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Lokalizacja */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">📍 Lokalizacja wyjazdu:</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 bg-white hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              >
                <option value="all">🌍 Wszystkie lokalizacje</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Wiek */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">👨‍🎓 Wiek uczestnika:</label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 bg-white hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              >
                <option value="all">👥 Wszystkie grupy wiekowe</option>
                {ageGroups.map(age => (
                  <option key={age} value={age}>{age} lat</option>
                ))}
              </select>
            </div>
          </div>

          {/* Liczba wyników */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 font-semibold">
              Znaleziono: <span className="text-blue-600 font-black text-xl">{filteredTerminy.length}</span> {filteredTerminy.length === 1 ? 'termin' : 'terminów'}
            </p>
          </div>
        </div>

        {/* LISTA TERMINÓW */}
        {filteredTerminy.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">😢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brak terminów spełniających kryteria</h3>
            <p className="text-gray-600 mb-8">Spróbuj zmienić filtry lub wyczyść je wszystkie</p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-yellow-500 transition-all shadow-lg"
            >
              Wyczyść filtry
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredTerminy.map((term, idx) => (
              <div 
                key={idx} 
                className={`group rounded-2xl p-8 transition-all relative overflow-hidden ${
                  term.wyprzedane 
                    ? 'bg-gray-100 border-2 border-gray-300 opacity-75'
                    : 'bg-white border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl'
                }`}
              >
                {term.badge === 'new' && !term.wyprzedane && (
                  <span className={`absolute top-6 right-6 bg-gradient-to-r ${term.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    ✨ NOWY TERMIN!
                  </span>
                )}
                {term.badge === 'hot' && !term.wyprzedane && (
                  <span className={`absolute top-6 right-6 bg-gradient-to-r ${term.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg`}>
                    🔥 OSTATNIE MIEJSCA!
                  </span>
                )}
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        term.wyprzedane ? 'bg-gray-400' : 'bg-gradient-to-br from-blue-400 to-purple-500'
                      }`}>
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className={`font-bold text-lg ${term.wyprzedane ? 'text-gray-700' : 'text-gray-900'}`}>
                        {term.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ml-1">
                      <MapPin className={`w-5 h-5 ${term.wyprzedane ? 'text-gray-500' : 'text-orange-500'}`} />
                      <span className={`text-sm font-medium ${term.wyprzedane ? 'text-gray-600' : 'text-gray-600'}`}>
                        Wyjazd z: {term.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ml-1 mt-1">
                      <Users className={`w-5 h-5 ${term.wyprzedane ? 'text-gray-500' : 'text-blue-500'}`} />
                      <span className={`text-sm font-medium ${term.wyprzedane ? 'text-gray-600' : 'text-gray-600'}`}>
                        Wiek: {term.ageGroup} lat
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className={`font-semibold text-lg mb-1 ${term.wyprzedane ? 'text-gray-700' : 'text-gray-900'}`}>
                      {term.hotel}
                    </p>
                    <p className={`text-sm font-semibold ${term.wyprzedane ? 'text-red-600' : 'text-green-600'}`}>
                      {term.wyprzedane ? '❌' : '✅'} {term.status}
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className={`text-4xl font-black mb-3 ${
                      term.wyprzedane 
                        ? 'text-gray-500'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400'
                    }`}>
                      {term.price} zł
                    </div>
                    {term.wyprzedane ? (
                      <button 
                        disabled
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded-xl font-bold cursor-not-allowed"
                      >
                        Wyprzedane
                      </button>
                    ) : (
                      <a 
                        href="https://angloville.pl/panel-klienta/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        🎉 Zapisz się!
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
