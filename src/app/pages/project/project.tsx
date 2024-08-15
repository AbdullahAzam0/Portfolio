import React, { useState } from "react";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: ["DESIGNED"],
      description: "Restaurant Browsing in React (using Yelp API)",
      image: "/assests/p1.png",
    },
    {
      id: 2,
      title: "Project 2",
      category: ["DESIGNED"],
      description: "Description for Project 2",
      image: "/assests/p2.png",
    },
    {
      id: 3,
      title: "Project 3",
      category: ["DESIGNED"],
      description: "Description for Project 3",
      image: "/assests/p3.png",
    },
    {
      id: 4,
      title: "Project 4",
      category: ["CODED"],
      description: "Description for Project 4",
      image: "/assests/p4.png",
    },
    {
      id: 5,
      title: "Project 5",
      category: ["CODED"],
      description: "Description for Project 5",
      image: "/assests/p5.png",
    },
    {
      id: 6,
      title: "Project 6",
      category: ["CODED"],
      description: "Description for Project 6",
      image: "/assests/p6.png",
    },
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <div className="flex flex-col items-center p-8 bg-[#D7D7D7] w-screen">
      
      <h1 className="text-6xl font-semibold mb-6 tracking-widest border-t-2 border-b-2 border-black py-2 mt-9">
        PORTFOLIO
      </h1>
        <nav className="mt-4 md:mt-6">
          <ul className="flex justify-center space-x-4 md:space-x-8 mb-4">
            {["ALL", "CODED", "DESIGNED"].map((category) => (
              <li
                key={category}
                className={`text-sm md:text-lg cursor-pointer transition-colors ${
                  activeCategory === category
                    ? "text-primary-dark font-semibold"
                    : "hover:text-primary-dark"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
      

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 lg:px-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center text-center px-2 py-4 md:px-4 md:py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg md:text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-muted-foreground mb-2 md:mb-4">
                {project.category.join(", ").toLowerCase()}
              </p>
              <p className="text-white mb-4 text-sm md:text-base">
                {project.description}
              </p>
              <button className="bg-[#D7D7D7] text-black px-4 py-2 md:px-5 md:py-3 border-2 border-primary rounded-full transition-colors duration-300 hover:bg-primary hover:text-white">
                View Demo
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center py-8 md:py-12">
        <p className="text-muted-foreground text-sm md:text-lg font-light">
          And many more to come!
        </p>
      </footer>
    </div>
  );
};

export default Project;
