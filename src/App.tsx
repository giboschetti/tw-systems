import React, { useState } from 'react';
import { Building2, Clock, Brain, Workflow, ArrowRight, Languages, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  const content = {
    en: {
      nav: {
        products: 'Products',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        title: 'Unlock Efficiency with Intelligent Automation',
        subtitle: 'At TW Systems, we design AI-driven solutions that streamline your operations, giving you more time for what truly matters.',
        cta: 'Discover Our Solutions',
      },
      about: {
        mission: {
          title: 'Our Mission',
          description: 'We believe that time and freedom are invaluable. Our mission is to create intelligent systems that automate routine tasks, empowering you to focus on your priorities.',
        },
        vision: {
          title: 'Our Vision',
          description: 'To lead in delivering innovative automation solutions that enhance efficiency across various industries.',
        },
      },
      services: {
        title: 'Our Services',
        automation: {
          title: 'Automation Systems',
          description: 'Custom-built tools to streamline your business processes.',
        },
        ai: {
          title: 'AI Solutions',
          description: 'Advanced AI models for predictive analytics and decision support.',
        },
        workflow: {
          title: 'Workflow Optimization',
          description: 'Expert analysis and redesign of workflows to maximize efficiency.',
        },
        integration: {
          title: 'Custom Integrations',
          description: 'Seamless integration of automation tools with your existing systems.',
        },
      },
      products: {
        title: 'Our Products',
        coManager: {
          title: 'Co-Manager',
          description: 'Collaborative web-app for financial management of construction sites',
        },
        railLog: {
          title: 'Rail Log',
          description: 'Collaborative logistics management and planning system for railway construction',
        },
      },
      industries: {
        title: 'Industries We Serve',
        description: 'Starting with the construction industry, our solutions are adaptable to various sectors, including manufacturing, logistics, and finance.',
      },
      testimonials: {
        title: 'What Our Clients Say',
        quote: 'Since implementing TW Systems&apos; automation solutions, we&apos;ve seen a significant increase in productivity and time savings.',
        author: 'Client Name',
      },
      contact: {
        title: 'Ready to transform your operations?',
        subtitle: 'Get in touch with us today.',
        form: {
          name: 'Name',
          email: 'Email',
          company: 'Company',
          message: 'Message',
          submit: 'Send Message',
        },
      },
      footer: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        social: 'Follow Us',
      },
    },
    de: {
      nav: {
        products: 'Produkte',
        about: 'Über uns',
        contact: 'Kontakt',
      },
      hero: {
        title: 'Effizienz durch intelligente Automatisierung',
        subtitle: 'Bei TW Systems entwickeln wir KI-gestützte Lösungen, die Ihre Abläufe optimieren und Ihnen mehr Zeit für das Wesentliche geben.',
        cta: 'Entdecken Sie unsere Lösungen',
      },
      about: {
        mission: {
          title: 'Unsere Mission',
          description: 'Wir glauben, dass Zeit und Freiheit unschätzbar wertvoll sind. Unsere Mission ist es, intelligente Systeme zu schaffen, die Routineaufgaben automatisieren und Sie dabei unterstützen, sich auf Ihre Prioritäten zu konzentrieren.',
        },
        vision: {
          title: 'Unsere Vision',
          description: 'Führend in der Entwicklung innovativer Automatisierungslösungen, die die Effizienz in verschiedenen Branchen steigern.',
        },
      },
      services: {
        title: 'Unsere Dienstleistungen',
        automation: {
          title: 'Automatisierungssysteme',
          description: 'Maßgeschneiderte Tools zur Optimierung Ihrer Geschäftsprozesse.',
        },
        ai: {
          title: 'KI-Lösungen',
          description: 'Fortschrittliche KI-Modelle für Predictive Analytics und Entscheidungsunterstützung.',
        },
        workflow: {
          title: 'Workflow-Optimierung',
          description: 'Expertenbewertung und Neugestaltung von Arbeitsabläufen für maximale Effizienz.',
        },
        integration: {
          title: 'Individuelle Integrationen',
          description: 'Nahtlose Integration von Automatisierungstools in Ihre bestehenden Systeme.',
        },
      },
      products: {
        title: 'Unsere Produkte',
        coManager: {
          title: 'Co-Manager',
          description: 'Kollaborative Web-App für das Finanzmanagement von Baustellen',
        },
        railLog: {
          title: 'Rail Log',
          description: 'Kollaboratives Logistikmanagement- und Planungssystem für Eisenbahnbaustellen',
        },
      },
      industries: {
        title: 'Branchen',
        description: 'Beginnend mit der Bauindustrie sind unsere Lösungen für verschiedene Sektoren wie Fertigung, Logistik und Finanzen anpassbar.',
      },
      testimonials: {
        title: 'Was unsere Kunden sagen',
        quote: 'Seit der Implementierung der Automatisierungslösungen von TW Systems haben wir eine deutliche Steigerung der Produktivität und Zeitersparnis erreicht.',
        author: 'Kundenname',
      },
      contact: {
        title: 'Bereit Ihre Abläufe zu transformieren?',
        subtitle: 'Kontaktieren Sie uns noch heute.',
        form: {
          name: 'Name',
          email: 'E-Mail',
          company: 'Unternehmen',
          message: 'Nachricht',
          submit: 'Nachricht senden',
        },
      },
      footer: {
        privacy: 'Datenschutz',
        terms: 'AGB',
        social: 'Folgen Sie uns',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TW-Systems</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Languages className="h-5 w-5 mr-1" />
                {language === 'de' ? 'EN' : 'DE'}
              </button>
              <a href="#products" className="text-gray-600 hover:text-blue-600">{content[language].nav.products}</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">{content[language].nav.about}</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">{content[language].nav.contact}</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  {content[language].hero.title}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {content[language].hero.subtitle}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      {content[language].hero.cta}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Construction site"
          />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].about.mission.title}</h2>
            <p className="mt-4 text-lg text-gray-500">{content[language].about.mission.description}</p>
          </div>
          <div className="mt-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{content[language].about.vision.title}</h3>
              <p className="mt-4 text-gray-500">{content[language].about.vision.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].services.title}</h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Workflow className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{content[language].services.automation.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].services.automation.description}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{content[language].services.ai.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].services.ai.description}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{content[language].services.workflow.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].services.workflow.description}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ArrowRight className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{content[language].services.integration.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].services.integration.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].products.title}</h2>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">{content[language].products.coManager.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].products.coManager.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">{content[language].products.railLog.title}</h3>
                <p className="mt-4 text-gray-500">{content[language].products.railLog.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].industries.title}</h2>
            <p className="mt-4 text-lg text-gray-500">{content[language].industries.description}</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].testimonials.title}</h2>
            <div className="mt-6">
              <blockquote className="text-xl italic text-gray-600">"{content[language].testimonials.quote}"</blockquote>
              <p className="mt-4 font-semibold text-gray-900">- {content[language].testimonials.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content[language].contact.title}</h2>
            <p className="mt-4 text-lg text-gray-500">{content[language].contact.subtitle}</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{content[language].contact.form.name}</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content[language].contact.form.email}</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">{content[language].contact.form.company}</label>
                <input type="text" name="company" id="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{content[language].contact.form.message}</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {content[language].contact.form.submit}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 text-center">
            <div className="flex justify-center items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:hello@tw-systems.com" className="text-gray-600 hover:text-blue-600">hello@tw-systems.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">{content[language].footer.privacy}</a>
            <a href="#" className="text-gray-300 hover:text-white">{content[language].footer.terms}</a>
            <span className="text-gray-300">{content[language].footer.social}</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;