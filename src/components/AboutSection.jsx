import { CurrencyDollarIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const AboutSection = () => (
  <>
    {/* Hero Section */}
    <header
      id="home"
      className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 lg:flex lg:items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Build Your Dream Product with{" "}
            <span className="text-orange-500 flex items-center justify-center lg:justify-start">
              Confidence
              <CurrencyDollarIcon
                className="h-6 w-6 text-orange-500 ml-2"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Launch your product without worrying about co-founder dynamics or
            unreliable freelancers who might slow your progress or quit at
            critical moments. RealCPO ensures your vision stays on track.
          </p>
        </div>

        {/* Illustration */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
          <LightBulbIcon
            className="w-2/3 text-orange-500 md:w-1/2 lg:w-1/3"
            aria-hidden="true"
          />
          {/* Decorative Icons */}
          <div
            className="absolute -top-10 left-8 animate-spin-slow"
            aria-hidden="true"
          >
            <CurrencyDollarIcon className="h-12 w-12 text-orange-500 opacity-70" />
          </div>
          <div
            className="absolute -bottom-12 right-12 animate-bounce"
            aria-hidden="true"
          >
            <CurrencyDollarIcon className="h-10 w-10 text-orange-400 opacity-80" />
          </div>
        </div>
      </div>
    </header>

    {/* Informational Section */}
    <main className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 sm:py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-700">
            Building Smarter with{" "}
            <span className="text-orange-400">RealCPO</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Streamline your operations, align your team, and build smarter. Our
            expert Chief Product Officers guide you every step of the way, from
            ideation to execution.
          </p>
        </div>

        {/* Icon Illustration */}
        <div className="flex justify-center">
          <CurrencyDollarIcon
            className="w-2/3 max-w-sm text-blue-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  </>
);

export default AboutSection;
