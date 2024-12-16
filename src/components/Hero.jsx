import { CogIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 lg:flex lg:items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Your Dream Product with Confidence
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Launch your product without having to worry about co-founder
            dynamics and stressful freelancer management, who do not share the
            same vision with you and will slow down your progress or even quit
            at the time you need them most, leaving your business into
            extinction.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <CogIcon className="w-2/3 text-blue-500 md:w-1/2 lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
