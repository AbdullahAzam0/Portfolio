import React from "react";

const Skill = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#D7D7D7] w-screen">
       <h1 className="text-6xl font-semibold mb-6 tracking-widest border-t-2 border-b-2 border-black py-2 mt-9">
        Skills
      </h1>

      {/* Using Now */}
      <div className="mb-8 w-full max-w-4xl">
        <h3 className="text-lg md:text-xl font-semibold mb-4">USING NOW:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard imgSrc="/assests/html.svg" altText="HTML5" label="HTML5" />
          <SkillCard imgSrc="/assests/css.svg" altText="CSS3" label="CSS3" />
          <SkillCard imgSrc="/assests/saas.svg" altText="SASS" label="SASS" />
          <SkillCard
            imgSrc="/assests/js.svg"
            altText="JavaScript"
            label="JavaScript"
          />
          <SkillCard
            imgSrc="/assests/react.svg"
            altText="React"
            label="React"
          />
          <SkillCard
            imgSrc="/assests/bootstrap.svg"
            altText="Bootstrap"
            label="Bootstrap"
          />
          <SkillCard imgSrc="/assests/git.svg" altText="Git" label="Git" />
          <SkillCard
            imgSrc="/assests/figma.svg"
            altText="Figma"
            label="Figma"
          />
        </div>
      </div>

      {/* Learning */}
      <div className="mb-8 w-full max-w-4xl">
        <h3 className="text-lg md:text-xl font-semibold mb-4">LEARNING:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard
            imgSrc="/assests/node.png"
            altText="Node.js"
            label="Node.js"
          />
          <SkillCard imgSrc="/assests/sql.svg" altText="MySQL" label="MySQL" />
          <SkillCard
            imgSrc="/assests/mongodb.png"
            altText="MongoDB"
            label="MongoDB"
          />
          <SkillCard
            imgSrc="/assests/typescript.png"
            altText="TypeScript"
            label="TypeScript"
          />
        </div>
      </div>

      {/* Other Skills */}
      <div className="w-full max-w-4xl">
        <h3 className="text-lg md:text-xl font-semibold mb-4">OTHER SKILLS:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard
            imgSrc="/assests/english.svg"
            altText="English"
            label="English (C1/C2)"
          />
          {/* Uncomment and update the icon path for Spanish if needed */}
          {/* <SkillCard imgSrc="/assests/spanish.svg" altText="Spanish" label="Spanish (B1/B2)" /> */}
          <SkillCard imgSrc="/assests/c++.svg" altText="C++" label="C++" />
          <SkillCard imgSrc="/assests/c.svg" altText="C" label="C" />
        </div>
      </div>
    </div>
  );
};

// SkillCard Component
const SkillCard = ({ imgSrc, altText, label }) => (
  <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
    <img src={imgSrc} alt={altText} className="w-16 h-16 mb-2" />
    <span className="text-sm md:text-base font-medium">{label}</span>
  </div>
);

export default Skill;
