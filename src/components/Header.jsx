const Header = () => (
  <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-16 sm:py-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
    <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

    <div className="max-w-7xl mx-auto text-center relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Build Your Dream Product with
        <span className="text-yellow-400 mx-1">RealCPO</span>
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
        Partner with an expert Chief Product Officer to bring your vision to
        life efficiently.
      </p>
      <button
        className="mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        aria-label="Get started with RealCPO"
      >
        Get Started Now
      </button>
    </div>
  </header>
);

export default Header;
