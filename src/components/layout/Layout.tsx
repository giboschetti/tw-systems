import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
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
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">TW-Systems</Link>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white focus:outline-none"
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
            <div className="hidden lg:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <div className="flex space-x-6">
                <span className="text-gray-300 self-center">Products:</span>
                
                {/* Bauherr Category */}
                <div className="relative">
                  <button
                    className="hover:text-gray-300 focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('bauherr');
                    }}
                  >
                    Bauherr
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 dropdown-content ${activeDropdown === 'bauherr' ? 'block' : 'hidden'}`}>
                    <Link to="/products/rail-logistics/raillog-app" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Rail Logistics mit Raillog.app</Link>
                    <Link to="/products/stakeholder-planung/conlab" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                    <Link to="/products/bauberatung/conexpert" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ConExpert</Link>
                  </div>
                </div>
                
                {/* Bauunternehmen Category */}
                <div className="relative">
                  <button
                    className="hover:text-gray-300 focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('bauunternehmen');
                    }}
                  >
                    Bauunternehmen
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 dropdown-content ${activeDropdown === 'bauunternehmen' ? 'block' : 'hidden'}`}>
                    <Link to="/products/rail-logistics/raillog-app" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Rail Logistics mit Raillog.app</Link>
                    <Link to="/products/stakeholder-planung/conlab" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                    <Link to="/products/abrechnung/extract" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Schnelle Abrechnung von Bauleistungen mit Extract</Link>
                    <Link to="/products/bauberatung/conexpert" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ConExpert</Link>
                  </div>
                </div>
                
                {/* Lieferanten Category */}
                <div className="relative">
                  <button
                    className="hover:text-gray-300 focus:outline-none dropdown-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event from bubbling up
                      toggleDropdown('lieferanten');
                    }}
                  >
                    Lieferanten
                  </button>
                  <div className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 dropdown-content ${activeDropdown === 'lieferanten' ? 'block' : 'hidden'}`}>
                    <Link to="/products/kundenliste/proj-finder" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Gezielte Kundenliste mit Proj-Finder</Link>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-white py-2 hover:text-gray-300">Home</Link>
                <Link to="/about" className="text-white py-2 hover:text-gray-300">About</Link>
                <Link to="/contact" className="text-white py-2 hover:text-gray-300">Contact</Link>
                
                {/* Mobile Products Section */}
                <div className="mt-2">
                  <h3 className="text-gray-300 font-semibold mb-2">Products:</h3>
                  
                  {/* Bauherr Category */}
                  <div className="ml-2 mb-2">
                    <h4 className="text-white font-medium">Bauherr</h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/rail-logistics/raillog-app" className="text-gray-300 hover:text-white">Rail Logistics mit Raillog.app</Link>
                      <Link to="/products/stakeholder-planung/conlab" className="text-gray-300 hover:text-white">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                      <Link to="/products/bauberatung/conexpert" className="text-gray-300 hover:text-white">ConExpert</Link>
                    </div>
                  </div>
                  
                  {/* Bauunternehmen Category */}
                  <div className="ml-2 mb-2">
                    <h4 className="text-white font-medium">Bauunternehmen</h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/rail-logistics/raillog-app" className="text-gray-300 hover:text-white">Rail Logistics mit Raillog.app</Link>
                      <Link to="/products/stakeholder-planung/conlab" className="text-gray-300 hover:text-white">Stakeholder- & Bauzeitenplanung mit Conlab</Link>
                      <Link to="/products/abrechnung/extract" className="text-gray-300 hover:text-white">Schnelle Abrechnung von Bauleistungen mit Extract</Link>
                      <Link to="/products/bauberatung/conexpert" className="text-gray-300 hover:text-white">ConExpert</Link>
                    </div>
                  </div>
                  
                  {/* Lieferanten Category */}
                  <div className="ml-2">
                    <h4 className="text-white font-medium">Lieferanten</h4>
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      <Link to="/products/kundenliste/proj-finder" className="text-gray-300 hover:text-white">Gezielte Kundenliste mit Proj-Finder</Link>
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

      <footer className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p>https://www.tw-systems.ch</p>
              <p>kontakt@tw-systems.ch</p>
             
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Adresse</h3>
              <p>TW Solutions ÖU</p>
              <p>Sepapaja tn 6, 15551</p>
              <p>Tallinn, Estonia</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Datenschutzbestimmungen</a></li>
                <li><a href="#" className="hover:text-gray-300">Nutzungsbedingungen</a></li>
                <li><a href="#" className="hover:text-gray-300">Impressum</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-600 pt-8">
            <p>&copy; {new Date().getFullYear()} TrackWise Systems (TW Solutions ÖU). Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};