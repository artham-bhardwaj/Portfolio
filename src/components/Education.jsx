import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Graphic Era University",
      period: "Sep 2021- Present",
      score: "CGPA: 9.38/10"
    },
    {
      degree: "Senior Secondary",
      institution: "R RMorarka Public School",
      period: "Apr 2019- Mar 2020",
      score: "95%"
    },
    {
      degree: "High School",
      institution: "Vision Valley School",
      period: "Apr 2017- Mar 2018",
      score: "83%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{edu.period}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;