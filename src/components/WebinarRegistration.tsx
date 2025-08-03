import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, Mail, Phone, User } from 'lucide-react';
import { Webinar } from '../types/webinar';

interface WebinarRegistrationProps {
  webinar: Webinar;
  onRegister: (registration: {
    name: string;
    email: string;
    phone: string;
  }) => Promise<void>;
}

export const WebinarRegistration: React.FC<WebinarRegistrationProps> = ({
  webinar,
  onRegister
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else if (!/^(\+40|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefonul nu este valid (format: 0722123456 sau +40722123456)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await onRegister(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Eroare la înscriere:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Înscrierea a fost confirmată!
        </h3>
        <p className="text-green-700 mb-6">
          Vei primi în curând un email de confirmare cu toate detaliile despre webinar.
        </p>
        <div className="bg-white rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Următorii pași:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Verifică email-ul pentru confirmarea înscrierii</li>
            <li>• Vei primi un reminder cu 24h înainte de webinar</li>
            <li>• Link-ul pentru webinar va fi trimis cu 1h înainte</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header cu informații despre webinar */}
      <div className="bg-gradient-to-r from-green-600 to-amber-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{webinar.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{webinar.time} ({webinar.duration})</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{webinar.currentParticipants}/{webinar.maxParticipants} participanți</span>
          </div>
        </div>
      </div>

      {/* Formular de înscriere */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Nume complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Introduceți numele complet"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="email@exemplu.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0722123456"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Ce vei primi:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Email de confirmare imediat</li>
              <li>• Reminder cu 24h înainte de webinar</li>
              <li>• Link-ul pentru webinar cu 1h înainte</li>
              <li>• Materiale suplimentare după webinar</li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Se procesează...' : 'Înscrie-te GRATUIT la webinar'}
          </button>
        </form>
      </div>
    </div>
  );
}; 