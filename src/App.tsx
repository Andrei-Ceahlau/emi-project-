import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Shield, 
  Heart, 
  Zap, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Users,
  Globe,
  Calendar,
  Clock,
  Video
} from 'lucide-react';
import { WebinarRegistration } from './components/WebinarRegistration';
import { webinarService } from './services/webinarService';
import { Webinar } from './types/webinar';
import { CookieConsent, CookiePreferences } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { DataProcessingConsent, DataProcessingConsents } from './components/DataProcessingConsent';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: ''
  });
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [currentWebinar, setCurrentWebinar] = useState<Webinar | null>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [dataProcessingConsents, setDataProcessingConsents] = useState<DataProcessingConsents>({
    necessary: true,
    marketing: false,
    analytics: false,
    thirdParty: false,
    webinar: false
  });

  const testimonials = [
    {
      id: 1,
      name: "Ana Popescu",
      text: "Produsele Forever Living mi-au schimbat viața! Pielea mea nu a fost niciodată mai sănătoasă.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Mihai Ionescu",
      text: "Am mai multă energie și mă simt mai bine ca niciodată. Recomand cu încredere!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Maria Georgescu",
      text: "Sistemul meu imunitar s-a întărit considerabil. Mulțumesc Forever Living!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Aloe Vera Gel",
      description: "Gel pur de aloe vera pentru sănătate și vitalitate",
      price: "125 RON",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      name: "Forever Bee Pollen",
      description: "Polen de albine pentru energie și imunitate",
      price: "85 RON",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      name: "Aloe Propolis Creme",
      description: "Cremă hidratantă cu aloe vera și propolis",
      price: "95 RON",
      image: "https://images.pexels.com/photos/5938248/pexels-photo-5938248.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 4,
      name: "Forever Argi+",
      description: "Supliment cu L-arginină pentru performanță",
      price: "145 RON",
      image: "https://images.pexels.com/photos/7262942/pexels-photo-7262942.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 5,
      name: "Aloe Sunscreen",
      description: "Protecție solară naturală cu aloe vera",
      price: "75 RON",
      image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 6,
      name: "Forever C9",
      description: "Program de detoxifiere și curățare în 9 zile",
      price: "285 RON",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mulțumim pentru comanda dumneavoastră! Vă vom contacta în curând.');
    setFormData({ name: '', phone: '', email: '', product: '' });
  };

  const handleCookieAccept = (preferences: CookiePreferences) => {
    console.log('Cookie preferences accepted:', preferences);
    // Aici poți implementa logica pentru activarea/dezactivarea cookie-urilor
  };

  const handleCookieDecline = () => {
    console.log('Cookies declined');
    // Aici poți implementa logica pentru dezactivarea cookie-urilor non-esențiale
  };

  const handleDataProcessingConsentChange = (consents: DataProcessingConsents) => {
    setDataProcessingConsents(consents);
    console.log('Data processing consents updated:', consents);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Încarcă webinarele la montarea componentei
  useEffect(() => {
    const loadWebinars = async () => {
      try {
        const webinarsData = await webinarService.getWebinars();
        setWebinars(webinarsData);
        if (webinarsData.length > 0) {
          setCurrentWebinar(webinarsData[0]);
        }
      } catch (error) {
        console.error('Eroare la încărcarea webinarelor:', error);
      }
    };
    loadWebinars();
  }, []);

  // Handler pentru înscrierea la webinar
  const handleWebinarRegistration = async (registration: {
    name: string;
    email: string;
    phone: string;
  }) => {
    if (!currentWebinar) return;
    
    try {
      await webinarService.registerForWebinar(currentWebinar.id, registration);
      // Programează reminder-ul și link-ul
      const webinarRegistration = await webinarService.getRegistrations(currentWebinar.id);
      const userRegistration = webinarRegistration.find(r => r.email === registration.email);
      if (userRegistration) {
        await webinarService.scheduleReminder(userRegistration);
        await webinarService.scheduleLinkDelivery(userRegistration);
      }
    } catch (error) {
      console.error('Eroare la înscrierea la webinar:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Forever Living</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#produse" className="text-gray-700 hover:text-green-600 transition-colors">Produse</a>
              <a href="#beneficii" className="text-gray-700 hover:text-green-600 transition-colors">Beneficii</a>
              <a href="#testimoniale" className="text-gray-700 hover:text-green-600 transition-colors">Testimoniale</a>
              <a href="#despre" className="text-gray-700 hover:text-green-600 transition-colors">Despre</a>
              <a href="#webinare" className="text-gray-700 hover:text-green-600 transition-colors">Webinare</a>
              <a href="#comanda" className="text-gray-700 hover:text-green-600 transition-colors">Comandă</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-green-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Redescoperă
                <span className="text-green-600 block">sănătatea naturală</span>
                <span className="text-amber-600">cu Aloe Vera</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Descoperă puterea naturii cu produsele Forever Living. Aloe Vera de cea mai înaltă calitate 
                pentru sănătate, frumusețe și vitalitate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('comanda')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Comandă acum
                </button>
                <button 
                  onClick={() => document.getElementById('produse')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
                >
                  Află mai mult
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Produse Forever Living" 
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficii" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficiile produselor Forever Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă cum produsele noastre naturale pot transforma sănătatea și bunăstarea ta
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detoxifiere naturală</h3>
              <p className="text-gray-600">Curăță organismul de toxine și îmbunătățește funcțiile vitale cu puterea aloe vera.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energie și vitalitate</h3>
              <p className="text-gray-600">Crește nivelul de energie și vitalitate pentru o viață activă și sănătoasă.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Imunitate puternică</h3>
              <p className="text-gray-600">Întărește sistemul imunitar și protejează organismul împotriva bolilor.</p>
            </div>
            <div className="bg-rose-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Piele sănătoasă</h3>
              <p className="text-gray-600">Hidratează și rejuvenează pielea pentru un aspect tânăr și radiant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produse" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produse populare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă gama noastră de produse naturale pentru sănătate și frumusețe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-center">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Comandă
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoniale" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce spun clienții noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiențele reale ale celor care au ales produsele Forever Living
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </p>
              </div>
            </div>
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-12 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Despre Forever Living
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondat în 1978, Forever Living Products este liderul mondial în producția și distribuția 
                produselor naturale pe bază de aloe vera. Misiunea noastră este să îmbunătățim viața 
                oamenilor prin produse naturale de cea mai înaltă calitate.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cu peste 40 de ani de experiență, suntem dedicați să oferim produse care susțin sănătatea, 
                frumusețea și bunăstarea generală, folosind doar ingrediente naturale și procese de 
                fabricație de înaltă calitate.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">160+ țări</h3>
                  <p className="text-gray-600">Prezență globală</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">10M+ clienți</h3>
                  <p className="text-gray-600">Încredere mondială</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Plantație Aloe Vera" 
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="comanda" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comandă produsele Forever Living
            </h2>
            <p className="text-xl text-gray-600">
              Completează formularul și te vom contacta în cel mai scurt timp
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Introduceți numele complet"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0722123456"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="email@exemplu.com"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Produs dorit
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selectează un produs</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Consimțământ pentru prelucrarea datelor */}
              <DataProcessingConsent 
                onConsentChange={handleDataProcessingConsentChange}
                initialConsents={dataProcessingConsents}
              />
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Trimite comanda
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 via-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Webinare săptămânale GRATUITE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participă la sesiunile noastre educaționale și descoperă secretele unei vieți sănătoase cu produsele Forever Living
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {currentWebinar && (
              <WebinarRegistration 
                webinar={currentWebinar}
                onRegister={handleWebinarRegistration}
              />
            )}
            
            {/* Lista webinarelor viitoare */}
            {webinars.length > 1 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Webinare viitoare
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {webinars.slice(1, 3).map((webinar) => (
                    <div key={webinar.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Video className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {webinar.currentParticipants}/{webinar.maxParticipants} participanți
                        </span>
                        <button 
                          onClick={() => setCurrentWebinar(webinar)}
                          className="text-green-600 hover:text-green-700 font-semibold text-sm"
                        >
                          Înscrie-te →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">Forever Living</span>
              </div>
              <p className="text-gray-400 mb-6">
                Produse naturale de calitate superioară pentru sănătate și frumusețe.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Produse</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aloe Vera</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suplimente</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Îngrijire personală</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cosmetice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Companie</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Despre noi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carieră</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Știri</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investitori</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">+40 21 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">contact@forever-living.ro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-gray-400">București, România</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Forever Living Products România. Toate drepturile rezervate.
            </p>
            <div className="mt-4 space-x-6">
              <button 
                onClick={() => setShowTermsConditions(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termeni și condiții
              </button>
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Politica de confidențialitate
              </button>
              <button 
                onClick={() => document.getElementById('cookie-settings')?.click()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieConsent 
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Politica de Confidențialitate</h2>
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTermsConditions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Termeni și Condiții</h2>
              <button 
                onClick={() => setShowTermsConditions(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <TermsAndConditions />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;