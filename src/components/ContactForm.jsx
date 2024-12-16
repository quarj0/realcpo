const ContactForm = () => (
    <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-700 text-center mb-6">
                Contact Us
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                />
                <textarea
                    placeholder="Your Message"
                    className="sm:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition h-32"
                />
                <div className="sm:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </section>
);

export default ContactForm;
