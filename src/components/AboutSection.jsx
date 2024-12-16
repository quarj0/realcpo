import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
const AboutSection = () => (
  <section className="bg-gray-100 py-12 sm:py-16 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-700">
          Building Smarter with RealCPO
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Streamline your operations, align your team, and build smarter. Our
          expert Chief Product Officers guide you every step of the way, from
          ideation to execution.
        </p>
      </div>
      <div className="flex justify-center">
        <ChatBubbleBottomCenterIcon className="w-2/3 text-blue-500" />
      </div>
    </div>
  </section>
);

export default AboutSection;
