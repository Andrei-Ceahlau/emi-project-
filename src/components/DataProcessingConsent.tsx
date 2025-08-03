import React, { useState } from 'react';
import { CheckSquare, Square, AlertTriangle, Shield } from 'lucide-react';

interface DataProcessingConsentProps {
  onConsentChange: (consents: DataProcessingConsents) => void;
  initialConsents?: DataProcessingConsents;
}

export interface DataProcessingConsents {
  necessary: boolean;
  marketing: boolean;
  analytics: boolean;
  thirdParty: boolean;
  webinar: boolean;
}

export const DataProcessingConsent: React.FC<DataProcessingConsentProps> = ({ 
  onConsentChange, 
  initialConsents 
}) => {
  const [consents, setConsents] = useState<DataProcessingConsents>(
    initialConsents || {
      necessary: true,
      marketing: false,
      analytics: false,
      thirdParty: false,
      webinar: false
    }
  );

  const handleConsentChange = (type: keyof DataProcessingConsents) => {
    if (type === 'necessary') return; // Necessary consent cannot be changed
    
    const newConsents = {
      ...consents,
      [type]: !consents[type]
    };
    
    setConsents(newConsents);
    onConsentChange(newConsents);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            Consimțământ pentru prelucrarea datelor personale
          </h3>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-blue-800 text-sm">
              Conform <strong>GDPR</strong> și legislației românești, avem nevoie de consimțământul tău explicit 
              pentru a prelucra datele tale personale în scopurile specificate mai jos. 
              Poți retrage consimțământul în orice moment.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Consimțământ necesar */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-start space-x-3">
            <CheckSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Prelucrare necesară</h4>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Obligatoriu
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Pentru executarea contractului, procesarea comenzilor și livrarea produselor.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Baza juridică:</strong> Executarea contractului (Art. 6(1)(b) GDPR)
              </div>
            </div>
          </div>
        </div>

        {/* Consimțământ marketing */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <button
              onClick={() => handleConsentChange('marketing')}
              className="mt-0.5 flex-shrink-0"
            >
              {consents.marketing ? (
                <CheckSquare className="h-5 w-5 text-green-600" />
              ) : (
                <Square className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Marketing direct</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Opțional
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Pentru a-ți trimite oferte speciale, noutăți despre produse și campanii de marketing.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><strong>Baza juridică:</strong> Consimțământul (Art. 6(1)(a) GDPR)</div>
                <div><strong>Canale:</strong> Email, SMS, telefon</div>
                <div><strong>Perioada:</strong> Până la retragerea consimțământului</div>
              </div>
            </div>
          </div>
        </div>

        {/* Consimțământ analytics */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <button
              onClick={() => handleConsentChange('analytics')}
              className="mt-0.5 flex-shrink-0"
            >
              {consents.analytics ? (
                <CheckSquare className="h-5 w-5 text-green-600" />
              ) : (
                <Square className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Analiză și îmbunătățire</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Opțional
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Pentru a analiza utilizarea site-ului și a îmbunătăți experiența utilizatorului.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><strong>Baza juridică:</strong> Interesul legitim (Art. 6(1)(f) GDPR)</div>
                <div><strong>Date colectate:</strong> Comportament de navigare, preferințe</div>
                <div><strong>Perioada:</strong> 2 ani</div>
              </div>
            </div>
          </div>
        </div>

        {/* Consimțământ terți */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <button
              onClick={() => handleConsentChange('thirdParty')}
              className="mt-0.5 flex-shrink-0"
            >
              {consents.thirdParty ? (
                <CheckSquare className="h-5 w-5 text-green-600" />
              ) : (
                <Square className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Partajare cu terți</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Opțional
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Pentru partajarea datelor cu parteneri de încredere pentru servicii de livrare și plată.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><strong>Baza juridică:</strong> Interesul legitim (Art. 6(1)(f) GDPR)</div>
                <div><strong>Terți:</strong> Furnizori de servicii de livrare și procesare plăți</div>
                <div><strong>Garanții:</strong> Contracte de procesare date</div>
              </div>
            </div>
          </div>
        </div>

        {/* Consimțământ webinar */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <button
              onClick={() => handleConsentChange('webinar')}
              className="mt-0.5 flex-shrink-0"
            >
              {consents.webinar ? (
                <CheckSquare className="h-5 w-5 text-green-600" />
              ) : (
                <Square className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Participare la webinare</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Opțional
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Pentru înscrierea la webinare și trimiterea de materiale educaționale.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <div><strong>Baza juridică:</strong> Consimțământul (Art. 6(1)(a) GDPR)</div>
                <div><strong>Date:</strong> Nume, email, telefon, participare</div>
                <div><strong>Perioada:</strong> Până la retragerea consimțământului</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Drepturile tale GDPR:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• <strong>Dreptul de retragere:</strong> Poți retrage consimțământul în orice moment</li>
          <li>• <strong>Dreptul de acces:</strong> Să știi ce date prelucrăm despre tine</li>
          <li>• <strong>Dreptul de rectificare:</strong> Să corectezi datele inexacte</li>
          <li>• <strong>Dreptul la ștergere:</strong> Să ștergi datele tale ("dreptul de a fi uitat")</li>
          <li>• <strong>Dreptul la portabilitate:</strong> Să primești datele într-un format structurat</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="flex items-start space-x-2">
          <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-green-800 mb-2">Cum să-ți exercită drepturile:</h4>
            <div className="text-sm text-green-700 space-y-1">
              <p>📧 Email: <strong>dpo@forever-living.ro</strong></p>
              <p>📞 Telefon: <strong>+40 21 123 4567</strong></p>
              <p>📮 Poștă: <strong>Strada Exemplu, Nr. 123, București, România</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Prin bifarea casetelor de mai sus, confirmi că ai citit și înțeles 
          <a href="/politica-confidentialitate" className="text-green-600 hover:text-green-700 underline mx-1">
            Politica de Confidențialitate
          </a>
          și că îți dai consimțământul pentru prelucrarea datelor tale personale în scopurile specificate.
        </p>
      </div>
    </div>
  );
}; 