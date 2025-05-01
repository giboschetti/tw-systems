import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">TW-Systems</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <div className="relative group">
                <button className="hover:text-gray-300">Products</button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <Link to="/products/bauherr" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bauherr</Link>
                  <Link to="/products/bauunternehmen" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bauunternehmen</Link>
                  <Link to="/products/lieferanten" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Lieferanten</Link>
                </div>
              </div>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
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
              <p>Telefon: +41 76 480 8047</p>
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