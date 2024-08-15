import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 w-screen bg-[#D7D7D7] text-foreground">
       <h1 className="text-6xl font-semibold mb-6 tracking-widest border-t-2 border-b-2 border-black py-2 mt-9">
        About Me
      </h1>
      <p className="text-center mb-4 md:mb-6 px-2 md:px-0 max-w-xl leading-relaxed">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
        <br /> In vel urna quis libero viverra facilisis ut ac est.
      </p>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg mb-6 md:mb-8 transition duration-200 shadow-md hover:shadow-lg">
        EXPLORE
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl">
        <div className="card border border-border rounded-lg p-4 md:p-6 text-center shadow-md transition duration-200 transform hover:scale-105 hover:bg-gray-200">
          <h2 className="text-xl font-semibold mb-2">DESIGN</h2>
          <p className="text-sm md:text-base leading-relaxed">
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
          </p>
        </div>

        <div className="card border border-border rounded-lg p-4 md:p-6 text-center shadow-md transition duration-200 transform hover:scale-105 hover:bg-gray-200">
          <h2 className="text-xl font-semibold mb-2">DEVELOPMENT</h2>
          <p className="text-sm md:text-base leading-relaxed">
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
          </p>
        </div>

        <div className="card border border-border rounded-lg p-4 md:p-6 text-center shadow-md transition duration-200 transform hover:scale-105 hover:bg-gray-200">
          <h2 className="text-xl font-semibold mb-2">MAINTENANCE</h2>
          <p className="text-sm md:text-base leading-relaxed">
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
