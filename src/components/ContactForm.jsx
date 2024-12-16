const ContactForm = () => (
  <section className="bg-gray-50 py-12 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-700 text-center mb-6">
        Contact Us
      </h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition h-32"
            required
          />
        </div>

        <div className="sm:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactForm;
