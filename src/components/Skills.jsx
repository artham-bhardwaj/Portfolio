import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "SQL"]
    },
    {
      title: "Technologies",
      skills: ["HTML", "JavaScript", "Django", "TensorFlow", "Docker", "Agile"]
    },
    {
      title: "Frameworks/Tools",
      skills: ["Git", "GitHub", "OpenCV", "Matplotlib", "Pandas", "Numpy", "NLP"]
    },
    {
      title: "Concepts",
      skills: ["Data Structures and Algorithms", "Machine Learning", "Deep Learning", "DBMS", "Operating Systems", "Object-Oriented Programming (OOP)"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;