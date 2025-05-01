import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser'; // Import EmailJS

// Icons
const EmailIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

// Product options for the form
const productOptions = [
  { id: 'raillog', name: 'Gleislogistik Koordination mit Raillog.app' },
  { id: 'conlab', name: 'Fachdienste und Bauprogramm Koordination mit Conlab' },
  { id: 'extract', name: 'Schnelle Abrechnung von Bauleistungen mit Extract' },
  { id: 'proj-finder', name: 'Gezielte Kundenliste mit Proj-Finder' },
  { id: 'conexpert', name: 'ConExpert' },
  { id: 'custom-solution', name: 'Individuelle Software oder KI Lösungen' },
];

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  // EmailJS init (replace with your Public Key)
  emailjs.init("djdpwmhC2Mt_3NNef"); // Replace with your Public Key

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectName: '',
    products: [] as string[],
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        products: [...formData.products, value]
      });
    } else {
      setFormData({
        ...formData,
        products: formData.products.filter(product => product !== value)
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Validate full name (required)
    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'en' ? 'Full name is required' : 'Vollständiger Name ist erforderlich';
      valid = false;
    }
    
    // Validate email (required and format)
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'E-Mail ist erforderlich';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email address' : 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      valid = false;
    }
    
    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = language === 'en' ? 'Please enter a valid phone number' : 'Bitte geben Sie eine gültige Telefonnummer ein';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);

      // Send email using EmailJS (replace with your Service ID and Template ID)
      emailjs.send("service_c5p7wxt", "template_52hw5d3", formData) // Replace with your Service ID and Template ID
        .then((result: any) => {
          console.log(result.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
        }, (error: any) => {
          console.log(error.text);
          setIsSubmitting(false);
          // Handle error here (e.g., display an error message to the user)
        });

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectName: '',
        products: [],
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-darkBlue text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {language === 'en' 
                ? 'We\'re here to help with your railway construction and logistics needs' 
                : 'Wir sind hier, um Ihnen bei Ihren Bahnbau- und Logistikanforderungen zu helfen'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-darkBlue mb-6">
                {language === 'en' ? 'Send us a message' : 'Senden Sie uns eine Nachricht'}
              </h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {language === 'en' 
                    ? 'Thank you for your message! We will get back to you soon.' 
                    : 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.'}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      {language === 'en' ? 'Full Name' : 'Vollständiger Name'} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={language === 'en' ? 'John Doe' : 'Max Mustermann'}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {language === 'en' ? 'Email Address' : 'E-Mail-Adresse'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={language === 'en' ? 'john.doe@example.com' : 'max.mustermann@beispiel.de'}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      {language === 'en' ? 'Phone Number' : 'Telefonnummer'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={language === 'en' ? '+1 (555) 123-4567' : '+49 123 4567890'}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      {language === 'en' ? 'Company Name' : 'Firmenname'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={language === 'en' ? 'Your Company Ltd.' : 'Ihre Firma GmbH'}
                    />
                  </div>
                  
                  {/* Project Name */}
                  <div>
                    <label htmlFor="projectName" className="block text-gray-700 font-medium mb-2">
                      {language === 'en' ? 'Project Name/Title' : 'Projektname/Titel'}
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={language === 'en' ? 'Railway Modernization Project' : 'Bahnmodernisierungsprojekt'}
                    />
                  </div>
                </div>
                
                {/* Products */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    {language === 'en' ? 'Products of Interest' : 'Produkte von Interesse'}
                  </label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {productOptions.map(product => (
                      <div key={product.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={product.id}
                          name="products"
                          value={product.id}
                          checked={formData.products.includes(product.id)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor={product.id} className="ml-2 text-sm text-gray-700">
                          {product.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {language === 'en' ? 'Project Details or Special Requirements' : 'Projektdetails oder spezielle Anforderungen'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder={language === 'en' ? 'Please describe your project or requirements...' : 'Bitte beschreiben Sie Ihr Projekt oder Ihre Anforderungen...'}
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-darkBlue transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'en' ? 'Sending...' : 'Senden...'}
                      </span>
                    ) : (
                      <span>{language === 'en' ? 'Submit' : 'Absenden'}</span>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-darkBlue mb-6">
                {language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <LocationIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-darkBlue">
                      {language === 'en' ? 'Address' : 'Adresse'}
                    </h3>
                    <p className="text-gray-600 mt-1">TW Solutions ÖU</p>
                    <p className="text-gray-600">Sepapaja tn 6, 15551</p>
                    <p className="text-gray-600">Tallinn, Estonia</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <EmailIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-darkBlue">
                      {language === 'en' ? 'Email' : 'E-Mail'}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:kontakt@tw-systems.ch" className="text-primary hover:underline">
                        kontakt@tw-systems.ch
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Website */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-darkBlue">
                      {language === 'en' ? 'Website' : 'Webseite'}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a href="https://www.tw-systems.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        www.tw-systems.ch
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Support */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-darkBlue">
                      {language === 'en' ? 'Support' : 'Support'}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:support@tw-systems.ch" className="text-primary hover:underline">
                        support@tw-systems.ch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-darkBlue mb-4">
                  {language === 'en' ? 'Find Us' : 'Finden Sie uns'}
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    title="TW Solutions Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7806761856155!2d24.821339016010394!3d59.42727098169456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb5e2e072f05%3A0x3a84f517939f1fce!2sSepapaja%20tn%206%2C%2015551%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sus!4v1651432982751!5m2!1sen!2sus" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;