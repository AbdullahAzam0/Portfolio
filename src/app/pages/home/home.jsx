import React from "react";

const Home = () => {
  return (
    <div className="w-screen bg-[#D7D7D7] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-black">
        <h1 className="text-3xl md:text-4xl font-bold ml-[-200px]">Hi, I am</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          Tomasz Gajda
        </h2>
        <p className="text-base md:text-lg mt-2">
          Front-end Developer / UI Designer
        </p>
        <div className="flex mt-4 space-x-4">
        <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img
            alt="LinkedIn"
            src="/assests/linkedin.png"
            className="h-6 md:h-8"
          />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub"
              src="/assests/github.png"
              className="h-6 md:h-8"
            />
          </a>
        </div>
      </div>

      {/* hero */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          alt="Profile"
          src="/assests/hero.png"
          className="w-3/4 md:w-3/4 h-auto rounded-full"
        />
      </div>

      {/* <div className='absolute bottom-0 left-0 w-full bg-black h-40 z-10'>
      </div> */}
    </div>
  );
};

export default Home;
