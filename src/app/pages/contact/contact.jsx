import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    prompt("Your message has been sent!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-[#D7D7D7] p-8">
      <h1 className="text-4xl font-semibold mb-6 tracking-widest border-t-2 border-b-2 border-black py-2 mt-9">
        CONTACT
      </h1>
      <p className="text-center mb-8 max-w-lg text-gray-600">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            id="name"
            type="text"
            className="mt-4 bg-[#D7D7D7] block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:outline-none focus:ring-0 p-2 text-lg"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="relative">
          <input
            id="email"
            type="email"
            className="mt-4 bg-[#D7D7D7] block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:outline-none focus:ring-0 p-2 text-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="relative">
          <input
            id="phone"
            type="tel"
            className="mt-4  bg-[#D7D7D7] block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:outline-none focus:ring-0 p-2 text-lg"
            placeholder="Phone number"
          />
        </div>
        <div className="relative">
          <textarea
            id="message"
            className="mt-4 bg-[#D7D7D7] block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:outline-none focus:ring-0 p-2 text-lg"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mt-8 py-3 bg-black text-white text-lg tracking-wider border-2 border-black hover:bg-white hover:text-black transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
