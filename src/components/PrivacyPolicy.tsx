import React from 'react';
import { Shield, Mail, Phone, MapPin, Calendar, User, Database, Eye, Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-gray-600">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-6 w-6 mr-2 text-green-600" />
              1. Operatorul de date personale
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Nume operator:</p>
                    <p className="text-gray-600">Forever Living Products România SRL</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Adresa:</p>
                    <p className="text-gray-600">Strada Exemplu, Nr. 123, București, România</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">dpo@forever-living.ro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <p className="text-gray-600">+40 21 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-green-600" />
              2. Categorii de date personale prelucrate
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Date de identificare:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nume și prenume</li>
                  <li>Adresa de email</li>
                  <li>Număr de telefon</li>
                  <li>Adresa de domiciliu (pentru livrare)</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Date de contact:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Informații de contact pentru comunicări comerciale</li>
                  <li>Preferințe de comunicare</li>
                </ul>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Date de utilizare:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Istoricul comenzilor</li>
                  <li>Preferințe de produse</li>
                  <li>Date de participare la webinare</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-green-600" />
              3. Scopurile și bazele juridice ale prelucrării
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Executarea contractului (Art. 6(1)(b) GDPR)</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Procesarea comenzilor și livrarea produselor</li>
                  <li>• Gestionarea contului de utilizator</li>
                  <li>• Suport pentru clienți</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Consimțământul (Art. 6(1)(a) GDPR)</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Marketing direct și comunicări comerciale</li>
                  <li>• Analiză comportamentală și personalizare</li>
                  <li>• Cookies non-esențiale</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Interesul legitim (Art. 6(1)(f) GDPR)</h3>
                <ul className="text-amber-700 space-y-1">
                  <li>• Îmbunătățirea serviciilor și experienței utilizatorului</li>
                  <li>• Analiză statistică și raportare</li>
                  <li>• Securitatea site-ului și prevenirea fraudelor</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-green-600" />
              4. Perioada de păstrare a datelor
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Date de cont:</h3>
                  <p className="text-gray-600">Până la ștergerea contului sau 3 ani de inactivitate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Date de comandă:</h3>
                  <p className="text-gray-600">10 ani (conform legislației fiscale)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing:</h3>
                  <p className="text-gray-600">Până la retragerea consimțământului</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Cookies:</h3>
                  <p className="text-gray-600">Conform politicii de cookies</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-green-600" />
              5. Drepturile tale GDPR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul de acces</h3>
                <p className="text-gray-600 text-sm">Să știi ce date personale prelucrăm despre tine</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul de rectificare</h3>
                <p className="text-gray-600 text-sm">Să corectezi datele personale inexacte</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul la ștergere</h3>
                <p className="text-gray-600 text-sm">Să ștergi datele personale ("dreptul de a fi uitat")</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul la restricționare</h3>
                <p className="text-gray-600 text-sm">Să limitezi prelucrarea datelor tale</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul la portabilitate</h3>
                <p className="text-gray-600 text-sm">Să primești datele tale într-un format structurat</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dreptul de opoziție</h3>
                <p className="text-gray-600 text-sm">Să te opui prelucrării pentru marketing</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Cum să-ți exercită drepturile
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Pentru a-ți exercita drepturile GDPR, poți să ne contactezi prin:
              </p>
              <div className="space-y-2">
                <p className="text-blue-700">📧 Email: <strong>dpo@forever-living.ro</strong></p>
                <p className="text-blue-700">📞 Telefon: <strong>+40 21 123 4567</strong></p>
                <p className="text-blue-700">📮 Poștă: <strong>Strada Exemplu, Nr. 123, București, România</strong></p>
              </div>
              <p className="text-blue-800 mt-4">
                Răspunsul va fi dat în termenul de 30 de zile de la primirea cererii.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Transferuri internaționale
            </h2>
            <p className="text-gray-700 mb-4">
              Datele tale personale pot fi transferate în țări din UE/SEE. Pentru transferuri în țări terțe, 
              aplicăm garanții adecvate conform GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Securitatea datelor
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale personale:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Criptarea datelor în tranzit și la repaus</li>
                <li>Acces controlat la datele personale</li>
                <li>Monitorizare continuă a securității</li>
                <li>Formare regulată a personalului</li>
                <li>Backup-uri securizate</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Autoritatea de Supraveghere
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-yellow-800 mb-4">
                Ai dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):
              </p>
              <div className="space-y-2 text-yellow-700">
                <p>🌐 Website: <a href="https://www.dataprotection.ro" className="underline">www.dataprotection.ro</a></p>
                <p>📧 Email: <strong>anspdcp@dataprotection.ro</strong></p>
                <p>📞 Telefon: <strong>+40 31 805 9211</strong></p>
                <p>📮 Adresa: <strong>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</strong></p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Modificări ale politicii
            </h2>
            <p className="text-gray-700">
              Această politică poate fi actualizată periodic. Vei fi notificat despre modificări importante 
              prin email sau prin notificare pe site. Continuarea utilizării site-ului după modificări 
              reprezintă acceptarea noii politici.
            </p>
          </section>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <p className="text-green-800 font-medium">
              Pentru orice întrebări despre această politică de confidențialitate, 
              nu ezita să ne contactezi la <strong>dpo@forever-living.ro</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 