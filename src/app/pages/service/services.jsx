import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Expertly crafted responsive websites utilizing modern technologies to ensure a seamless user experience across all devices.",
    icon: "fas fa-laptop-code",
    link: "#web-development",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Innovative design solutions that enhance user interaction and engagement, tailored to your specific business needs.",
    icon: "fas fa-paint-brush",
    link: "#ui-ux-design",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Strategic guidance and insights to optimize your tech projects and align them with your business objectives.",
    icon: "fas fa-mobile-alt",
    link: "#mobile-app",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Advanced SEO techniques to boost your website's visibility and improve search engine rankings effectively.",
    icon: "fas fa-search",
    link: "#seo-optimization",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#D7D7D7] w-screen">
      <h1 className="text-4xl font-semibold mb-6 tracking-wider border-t-2 border-b-2 border-black py-2 mt-9">
        Our Services
      </h1>

      <p className="text-lg text-gray-600 mb-8 px-4 md:px-6 lg:px-12 text-center">
        At [Your Company Name], we offer a comprehensive suite of services designed to meet the evolving needs of your business. Our team of experts is dedicated to delivering high-quality solutions that drive results and exceed expectations.
      </p>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <div className="absolute top-4 left-4 text-4xl text-gray-600">
              <i className={service.icon}></i>
            </div>
            <div className="pt-20 pl-24 p-6">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </main>

      <p className="text-lg text-gray-600 mt-8 px-4 md:px-6 lg:px-12 text-center">
        Partner with us to leverage our expertise and elevate your business. We are committed to providing tailored solutions that drive growth and success. Contact us today to learn how we can help you achieve your goals.
      </p>
    </div>
  );
};

export default Services;
