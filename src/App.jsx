import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Header /> 
        <AboutSection />
        <PricingSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-300 bg-gray-900">
        <div className="container mx-auto">
          <p>&copy; {currentYear} RealCPO. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
