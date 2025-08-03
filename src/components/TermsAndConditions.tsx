import React from 'react';
import { FileText, Shield, Phone, Mail, MapPin, Calendar } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-gray-600">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-blue-600" />
              1. Informații generale
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Denumire:</p>
                    <p className="text-gray-600">Forever Living Products România SRL</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Adresa:</p>
                    <p className="text-gray-600">Strada Exemplu, Nr. 123, București, România</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">contact@forever-living.ro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <p className="text-gray-600">+40 21 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Acești termeni și condiții guvernează utilizarea site-ului web și serviciile oferite de 
              Forever Living Products România SRL. Prin accesarea și utilizarea site-ului, acceptați 
              acești termeni în totalitate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Definirea serviciilor
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Vânzare online</h3>
                <p className="text-gray-600">
                  Vânzarea produselor Forever Living prin intermediul site-ului web, cu livrare în toată România.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Webinare educaționale</h3>
                <p className="text-gray-600">
                  Organizarea de sesiuni educaționale gratuite despre produsele și beneficiile acestora.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Suport pentru clienți</h3>
                <p className="text-gray-600">
                  Asistență tehnică și informații despre produse prin multiple canale de comunicare.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Condiții de comandă și livrare
            </h2>
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Procesul de comandă</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Comenzile se fac exclusiv prin site-ul web</li>
                  <li>• Toate prețurile sunt exprimate în RON și includ TVA</li>
                  <li>• Confirmarea comenzii se face prin email</li>
                  <li>• Rezervarea produselor se face la confirmarea plății</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Metode de plată</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Card bancar (Visa, Mastercard, Maestro)</li>
                  <li>• Ramburs la livrare</li>
                  <li>• Transfer bancar</li>
                  <li>• Plata se face în RON</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Livrare</h3>
                <ul className="text-amber-700 space-y-1">
                  <li>• Livrare în toată România</li>
                  <li>• Termen de livrare: 2-5 zile lucrătoare</li>
                  <li>• Costuri de transport conform tarifelor în vigoare</li>
                  <li>• Livrare gratuită pentru comenzi peste 200 RON</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Dreptul de retragere
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">
                Conform OUG nr. 34/2014 privind drepturile consumatorilor
              </h3>
              <div className="space-y-4 text-yellow-700">
                <div>
                  <h4 className="font-medium mb-2">Perioada de retragere:</h4>
                  <p>Ai dreptul să retragi comanda în termen de 14 zile calendaristice de la primirea produselor.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Condiții de retragere:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Produsele trebuie să fie în starea originală</li>
                    <li>Ambalajul original trebuie să fie intact</li>
                    <li>Nu trebuie să fi fost folosite</li>
                    <li>Retragerea se face prin notificare scrisă</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Rambursarea:</h4>
                  <p>Rambursarea se face în termen de 14 zile de la primirea notificării de retragere.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Garanția produselor
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Garanția legală</h3>
                <p className="text-gray-600">
                  Produsele beneficiază de garanția legală de conformitate conform Codului de Apărare a Consumatorilor.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Garanția comercială</h3>
                <p className="text-gray-600">
                  Produsele Forever Living beneficiază de garanția producătorului conform specificațiilor tehnice.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Serviciul post-vânzare</h3>
                <p className="text-gray-600">
                  Pentru orice problemă cu produsele, ne poți contacta la numărul de telefon sau email-ul de contact.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Protecția datelor personale
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Prelucrarea datelor tale personale se face conform <strong>GDPR</strong> și legislației românești în vigoare.
              </p>
              <div className="space-y-2 text-blue-700">
                <p>• Datele sunt colectate doar în scopul executării contractului</p>
                <p>• Ai dreptul de acces, rectificare și ștergere a datelor</p>
                <p>• Datele sunt protejate prin măsuri tehnice și organizatorice</p>
                <p>• Pentru detalii complete, consultă <a href="/politica-confidentialitate" className="underline">Politica de Confidențialitate</a></p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Responsabilități și limitări
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Responsabilitatea noastră</h3>
                <ul className="text-red-700 space-y-1">
                  <li>• Livrarea produselor conform specificațiilor</li>
                  <li>• Respectarea termenelor de livrare</li>
                  <li>• Asigurarea calității produselor</li>
                  <li>• Protecția datelor personale</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Responsabilitatea ta</h3>
                <ul className="text-orange-700 space-y-1">
                  <li>• Furnizarea de informații corecte la comandă</li>
                  <li>• Respectarea termenilor de plată</li>
                  <li>• Primirea produselor în condiții normale</li>
                  <li>• Respectarea instrucțiunilor de utilizare</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Rezolvarea disputelor
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Soluționare amiabilă</h3>
                <p className="text-green-700">
                  Încercăm să rezolvăm orice dispută în mod amiabil prin comunicare directă.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">SOL (Soluționarea Online a Litigiilor)</h3>
                <p className="text-blue-700">
                  Pentru litigii transfrontaliere, poți folosi platforma SOL: 
                  <a href="https://ec.europa.eu/consumers/odr" className="underline ml-1">ec.europa.eu/consumers/odr</a>
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Autoritatea Națională pentru Protecția Consumatorilor (ANPC)</h3>
                <p className="text-yellow-700">
                  Poți depune o plângere la ANPC prin intermediul platformei: 
                  <a href="https://anpc.ro" className="underline ml-1">anpc.ro</a>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Proprietate intelectuală
            </h2>
            <p className="text-gray-700 mb-4">
              Toate drepturile de proprietate intelectuală asupra conținutului site-ului (texte, imagini, 
              logo-uri, design) aparțin Forever Living Products România SRL sau partenerilor săi. 
              Reproducerea, distribuirea sau modificarea acestui conținut fără autorizare este interzisă.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Modificări ale termenilor
            </h2>
            <p className="text-gray-700 mb-4">
              Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
              Modificările vor fi comunicate prin email sau prin notificare pe site. 
              Continuarea utilizării serviciilor după modificări reprezintă acceptarea noilor termeni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact și informații
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 mb-4">
                Pentru orice întrebări despre acești termeni și condiții:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">contact@forever-living.ro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <p className="text-gray-600">+40 21 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Adresa:</p>
                    <p className="text-gray-600">Strada Exemplu, Nr. 123, București</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Program:</p>
                    <p className="text-gray-600">Luni-Vineri: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-blue-800 font-medium">
              Prin utilizarea site-ului nostru, confirmi că ai citit, înțeles și accepti acești termeni și condiții.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 