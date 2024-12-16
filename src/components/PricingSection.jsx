import {
  ScaleIcon,
  LightBulbIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/24/outline";

const PricingSection = () => (
  <section className="py-12 sm:py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-semibold text-blue-700 mb-6">
        Flexible Pricing Plans
      </h2>
      <p className="text-gray-600 leading-relaxed mx-auto mb-8 max-w-3xl">
        Choose a plan that works best for you and your business needs. Scale
        your vision with tailored options that fit your goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Subscription */}
        <div className="border rounded-lg shadow-lg p-8 bg-white hover:scale-105 hover:shadow-xl transition duration-300">
          <CurrencyEuroIcon className="h-10 w-10 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Subscription
          </h3>
          <p className="text-3xl font-bold text-blue-700 mb-2">$1,499</p>
          <span className="text-gray-600 text-sm">per month</span>
          <p className="text-gray-600 mt-4">
            Get the expertise you need to hit the ground running. Dedicated CPO
            with unlimited requests per month.
          </p>
          <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md transition">
            Get Started
          </button>
        </div>

        {/* Card 2: Pay-as-You-Go */}
        <div className="border rounded-lg shadow-lg p-8 bg-white hover:scale-105 hover:shadow-xl transition duration-300">
          <LightBulbIcon className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pay-as-You-Go
          </h3>
          <p className="text-3xl font-bold text-blue-700 mb-2">
            Pay per request
          </p>
          <p className="text-gray-600 mt-4">
            Flexible pricing for early-stage startups. Pay only for tasks you
            need to get done.
          </p>
          <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md transition">
            Get Quote
          </button>
        </div>

        {/* Card 3: Equity */}
        <div className="border rounded-lg shadow-lg p-8 bg-white hover:scale-105 hover:shadow-xl transition duration-300">
          <ScaleIcon className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Equity</h3>
          <p className="text-3xl font-bold text-blue-700 mb-2">
            Pay with shares
          </p>
          <p className="text-gray-600 mt-4">
            Still need a CPO but low on budget? Start with shares and buy out
            anytime.
          </p>
          <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
