import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Internship Experience</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-4">Data Science Intern</h3>
          <p className="text-gray-600 mb-4">CODTECH IT SOLUTIONS PVT. LTD.</p>
          <p className="text-gray-500 mb-4">July 2024- September 2024</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Executed exploratory data analysis (EDA) on the CelebA dataset, improving accuracy by 25% through data cleaning and preprocessing.</li>
            <li>Developed an NLP pipeline for news analysis, processing 1,000+ articles monthly, reducing data processing time by 40%.</li>
            <li>Implemented Word2Vec and LDA for topic modeling, identifying 10 key themes in articles, enhancing content strategy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;