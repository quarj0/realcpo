import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import "./App.css";


const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Header />
    <AboutSection />
    <PricingSection />
    <ContactForm />
    <footer className="text-center py-4 text-gray-500 bg-gray-900">
      &copy; {new Date().getFullYear()} RealCPO. All Rights Reserved.
    </footer>
  </div>
);

export default App;
