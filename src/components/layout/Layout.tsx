import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  
  // Function to toggle dropdown menus
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(dropdown); // Open the clicked dropdown
    }
  };
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was inside a dropdown menu or button
      const target = event.target as Node;
      const dropdownElements = document.querySelectorAll('.dropdown-content, .dropdown-button');
      const isDropdownClick = Array.from(dropdownElements).some(
        (element: Element) => element.contains(target)
      );
      
      // Only close if clicking outside dropdown areas
      if (!isDropdownClick) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col font-opensans">
      <header className="bg-white text-darkBlue shadow-sm">
        <nav className="container mx-auto px-4 py-6 font-montserrat">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
             
              <span className="text-xl font-large font-montserrat">
                TechWise Systems
              </span>
            </Link>
            
            {/* Language Switcher */}
            <div className="hidden md:flex mr-4">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-medium rounded-l-lg transition-colors duration-200 ${
                    language === 'en'
                      ? 'bg-secondary text-white'
                      : 'bg-white text-gray-700 hover:bg-light'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-1 text-xs font-medium rounded-r-lg transition-colors duration-200 ${
                    language === 'de'
                      ? 'bg-secondary text-white'
                      : 'bg-white text-gray-700 hover:bg-light'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-darkBlue focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-6 font-montserrat">
              <Link to="/" className="hover:text-secondary transition-colors">
                {language === 'en' ? 'Home' : 'Startseite'}
              </Link>
              <Link to="/about" className="hover:text-secondary transition-colors">
                {language === 'en' ? 'About' : 'Über uns'}
              </Link>
              <div className="flex space-x-6">
                <span className="text-gray-500 self-center">
                  {language === 'en' ? 'Products:' : 'Produkte:'}
                </span>
                
                {/* Bauherr Category */}
                <div className="relative">
                  <button
                    className="hover:text-secondary transition-colors focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('bauherr');
                    }}
                  >
                    {language === 'en' ? 'Client' : 'Bauherr'}
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 dropdown-content ${activeDropdown === 'bauherr' ? 'block' : 'hidden'}`}>
                    <Link to="/products/rail-logistics/raillog-app" className="block px-4 py-2 text-gray-800 hover:bg-light">Rail Logistics mit Raillog.app</Link>
                    <Link to="/products/stakeholder-planung/conlab" className="block px-4 py-2 text-gray-800 hover:bg-light">Fachdienste- & Bauprogramm Koordination mit Conlab</Link>
                    <Link to="/products/bauberatung/conexpert" className="block px-4 py-2 text-gray-800 hover:bg-light">Optimales Bauverfahren mit ConExpert</Link>
                  </div>
                </div>
                
                {/* Bauunternehmen Category */}
                <div className="relative">
                  <button
                    className="hover:text-secondary transition-colors focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('bauunternehmen');
                    }}
                  >
                    {language === 'en' ? 'Construction Company' : 'Bauunternehmen'}
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 dropdown-content ${activeDropdown === 'bauunternehmen' ? 'block' : 'hidden'}`}>
                    <Link to="/products/rail-logistics/raillog-app" className="block px-4 py-2 text-gray-800 hover:bg-light">Rail Logistics mit Raillog.app</Link>
                    <Link to="/products/stakeholder-planung/conlab" className="block px-4 py-2 text-gray-800 hover:bg-light">Fachdienste- & Bauprogramm Koordination mit Conlab</Link>
                    <Link to="/products/abrechnung/extract" className="block px-4 py-2 text-gray-800 hover:bg-light">Schnelle Abrechnung von Bauleistungen mit Extract</Link>
                    <Link to="/products/bauberatung/conexpert" className="block px-4 py-2 text-gray-800 hover:bg-light">Optimales Bauverfahren mit ConExpert</Link>
                  </div>
                </div>
                
                {/* Lieferanten Category */}
                <div className="relative">
                  <button
                    className="hover:text-secondary transition-colors focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('lieferanten');
                    }}
                  >
                    {language === 'en' ? 'Suppliers' : 'Lieferanten'}
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 dropdown-content ${activeDropdown === 'lieferanten' ? 'block' : 'hidden'}`}>
                    <Link to="/products/kundenliste/proj-finder" className="block px-4 py-2 text-gray-800 hover:bg-light">Gezielte Kundenliste mit Proj-Finder</Link>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="hover:text-secondary transition-colors">
                {language === 'en' ? 'Contact' : 'Kontakt'}
              </Link>
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 bg-white border-t border-gray-200">
              {/* Mobile Language Switcher */}
              <div className="flex justify-center my-4">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200 ${
                      language === 'en'
                        ? 'bg-secondary text-white'
                        : 'bg-white text-gray-700 hover:bg-light border border-gray-300'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('de')}
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200 ${
                      language === 'de'
                        ? 'bg-secondary text-white'
                        : 'bg-white text-gray-700 hover:bg-light border border-gray-300'
                    }`}
                  >
                    Deutsch
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 font-montserrat">
                <Link to="/" className="text-darkBlue py-2 hover:text-secondary transition-colors">
                  {language === 'en' ? 'Home' : 'Startseite'}
                </Link>
                <Link to="/about" className="text-darkBlue py-2 hover:text-secondary transition-colors">
                  {language === 'en' ? 'About' : 'Über uns'}
                </Link>
                <Link to="/contact" className="text-darkBlue py-2 hover:text-secondary transition-colors">
                  {language === 'en' ? 'Contact' : 'Kontakt'}
                </Link>
                
                {/* Mobile Products Section */}
                <div className="mt-2">
                  <h3 className="text-gray-500 font-semibold mb-2">
                    {language === 'en' ? 'Products:' : 'Produkte:'}
                  </h3>
                  
                  {/* Bauherr Category */}
                  <div className="ml-2 mb-2">
                    <h4 className="text-darkBlue font-medium">
                      {language === 'en' ? 'Client' : 'Bauherr'}
                    </h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/rail-logistics/raillog-app" className="text-gray-600 hover:text-secondary transition-colors">Rail Logistics mit Raillog.app</Link>
                      <Link to="/products/stakeholder-planung/conlab" className="text-gray-600 hover:text-secondary transition-colors">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                      <Link to="/products/bauberatung/conexpert" className="text-gray-600 hover:text-secondary transition-colors">ConExpert</Link>
                    </div>
                  </div>
                  
                  {/* Bauunternehmen Category */}
                  <div className="ml-2 mb-2">
                    <h4 className="text-darkBlue font-medium">
                      {language === 'en' ? 'Construction Company' : 'Bauunternehmen'}
                    </h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/rail-logistics/raillog-app" className="text-gray-600 hover:text-secondary transition-colors">Rail Logistics mit Raillog.app</Link>
                      <Link to="/products/stakeholder-planung/conlab" className="text-gray-600 hover:text-secondary transition-colors">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                      <Link to="/products/abrechnung/extract" className="text-gray-600 hover:text-secondary transition-colors">Schnelle Abrechnung von Bauleistungen mit Extract</Link>
                      <Link to="/products/bauberatung/conexpert" className="text-gray-600 hover:text-secondary transition-colors">ConExpert</Link>
                    </div>
                  </div>
                  
                  {/* Lieferanten Category */}
                  <div className="ml-2">
                    <h4 className="text-darkBlue font-medium">
                      {language === 'en' ? 'Suppliers' : 'Lieferanten'}
                    </h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/kundenliste/proj-finder" className="text-gray-600 hover:text-secondary transition-colors">Gezielte Kundenliste mit Proj-Finder</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 font-montserrat">
                {language === 'en' ? 'Contact' : 'Kontakt'}
              </h3>
              <p>https://www.tw-systems.ch</p>
              <p>kontakt@tw-systems.ch</p>
             
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-montserrat">
                {language === 'en' ? 'Address' : 'Adresse'}
              </h3>
              <p>TW Solutions ÖU</p>
              <p>Sepapaja tn 6, 15551</p>
              <p>Tallinn, Estonia</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-montserrat">
                {language === 'en' ? 'Legal' : 'Rechtliches'}
              </h3>
              <ul>
                <li><a href="#" className="hover:text-light">
                  {language === 'en' ? 'Privacy Policy' : 'Datenschutzbestimmungen'}
                </a></li>
                <li><a href="#" className="hover:text-light">
                  {language === 'en' ? 'Terms of Use' : 'Nutzungsbedingungen'}
                </a></li>
                <li><a href="#" className="hover:text-light">
                  {language === 'en' ? 'Imprint' : 'Impressum'}
                </a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-secondary pt-8">
            <p>&copy; {new Date().getFullYear()} TrackWise Systems (TW Solutions ÖU).
              {language === 'en' ? ' All rights reserved.' : ' Alle Rechte vorbehalten.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};