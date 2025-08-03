import React from 'react';
import { Cookie, Shield, Settings, Clock, Database, Eye } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cookie className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Politica de Cookies
          </h1>
          <p className="text-gray-600">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Cookie className="h-6 w-6 mr-2 text-amber-600" />
              Ce sunt cookies-urile?
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies-urile sunt fișiere text mici care sunt stocate pe dispozitivul tău (computer, tabletă, telefon) 
              când vizitezi site-ul nostru. Acestea ne ajută să îmbunătățim experiența ta pe site și să înțelegem 
              cum folosești serviciile noastre.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-green-600" />
              Tipuri de cookies pe care le folosim
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies necesare</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 mb-2">
                    <strong>Scop:</strong> Acestea sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                  </p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Sesiunea de utilizator și autentificare</li>
                    <li>• Coșul de cumpărături</li>
                    <li>• Preferințele de securitate</li>
                    <li>• Funcționalități de bază ale site-ului</li>
                  </ul>
                  <div className="mt-2 text-sm text-green-600">
                    <strong>Baza juridică:</strong> Interesul legitim (Art. 6(1)(f) GDPR)
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies analitice</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-2">
                    <strong>Scop:</strong> Ne ajută să înțelegem cum folosești site-ul pentru a-l îmbunătăți.
                  </p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Statistici de trafic și utilizare</li>
                    <li>• Paginile cele mai populare</li>
                    <li>• Timpul petrecut pe site</li>
                    <li>• Sursele de trafic</li>
                  </ul>
                  <div className="mt-2 text-sm text-blue-600">
                    <strong>Baza juridică:</strong> Consimțământul (Art. 6(1)(a) GDPR)
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies de marketing</h3>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 mb-2">
                    <strong>Scop:</strong> Folosite pentru a-ți arăta reclame relevante și pentru a măsura eficacitatea campaniilor.
                  </p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Reclame personalizate</li>
                    <li>• Retargeting</li>
                    <li>• Măsurarea conversiilor</li>
                    <li>• Analiza campaniilor publicitare</li>
                  </ul>
                  <div className="mt-2 text-sm text-purple-600">
                    <strong>Baza juridică:</strong> Consimțământul (Art. 6(1)(a) GDPR)
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies funcționale</h3>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 mb-2">
                    <strong>Scop:</strong> Permit site-ului să-și amintească alegerile tale și să ofere funcționalități îmbunătățite.
                  </p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Preferințe de limbă și regiune</li>
                    <li>• Setări de afișare</li>
                    <li>• Funcționalități personalizate</li>
                    <li>• Istoricul de navigare</li>
                  </ul>
                  <div className="mt-2 text-sm text-amber-600">
                    <strong>Baza juridică:</strong> Consimțământul (Art. 6(1)(a) GDPR)
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-blue-600" />
              Perioada de păstrare a cookies-urilor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies de sesiune</h3>
                <p className="text-gray-600">Se șterg automat când închizi browserul</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies persistente</h3>
                <p className="text-gray-600">Rămân pe dispozitiv până la expirare sau ștergere manuală</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies analitice</h3>
                <p className="text-gray-600">2 ani (Google Analytics)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies de marketing</h3>
                <p className="text-gray-600">Până la retragerea consimțământului</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-green-600" />
              Cookies de terți
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-600 mb-2">
                  Folosit pentru analiza traficului și comportamentului utilizatorilor.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Politica de confidențialitate:</strong> 
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700 underline ml-1">
                    policies.google.com/privacy
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h3>
                <p className="text-gray-600 mb-2">
                  Folosit pentru măsurarea conversiilor și retargeting.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Politica de confidențialitate:</strong> 
                  <a href="https://www.facebook.com/policy.php" className="text-blue-600 hover:text-blue-700 underline ml-1">
                    facebook.com/policy.php
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="h-6 w-6 mr-2 text-amber-600" />
              Cum să gestionezi cookies-urile
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Setări browser</h3>
                <p className="text-blue-700 mb-2">
                  Poți modifica setările browserului pentru a bloca sau șterge cookies-urile:
                </p>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookies</li>
                  <li>• <strong>Firefox:</strong> Opțiuni → Confidențialitate și securitate → Cookies</li>
                  <li>• <strong>Safari:</strong> Preferințe → Confidențialitate → Cookies</li>
                  <li>• <strong>Edge:</strong> Setări → Cookies și permisiuni site</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Setări pe site</h3>
                <p className="text-green-700">
                  Poți modifica preferințele pentru cookies direct pe site-ul nostru folosind 
                  butonul "Setări cookies" din banner-ul de consimțământ.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-purple-600" />
              Impactul dezactivării cookies-urilor
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">
                Atenție: Dezactivarea cookies-urilor poate afecta funcționalitatea site-ului
              </h3>
              <div className="space-y-2 text-yellow-700">
                <p>• <strong>Cookies necesare:</strong> Site-ul nu va funcționa corect</p>
                <p>• <strong>Cookies analitice:</strong> Nu vom putea îmbunătăți experiența ta</p>
                <p>• <strong>Cookies de marketing:</strong> Nu vei primi oferte personalizate</p>
                <p>• <strong>Cookies funcționale:</strong> Unele funcționalități nu vor fi disponibile</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Actualizări ale politicii de cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Această politică poate fi actualizată periodic pentru a reflecta schimbările în practicile noastre 
              sau în legislația în vigoare. Vei fi notificat despre modificări importante prin email sau 
              prin notificare pe site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 mb-4">
                Pentru orice întrebări despre această politică de cookies:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>📧 Email: <strong>dpo@forever-living.ro</strong></p>
                <p>📞 Telefon: <strong>+40 21 123 4567</strong></p>
                <p>📮 Adresa: <strong>Strada Exemplu, Nr. 123, București, România</strong></p>
              </div>
            </div>
          </section>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <p className="text-green-800 font-medium">
              Prin continuarea utilizării site-ului nostru, confirmi că ai citit și înțeles această politică de cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 