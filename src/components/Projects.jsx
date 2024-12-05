import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Topic Modeling on News Articles",
      technologies: "Python, NLTK, Gensim, Word2Vec, LDA",
      period: "Jul 2024- Sept 2024",
      points: [
        "Collected and analyzed 5,000+ news articles using the Google News API, refining the analysis process by 50%.",
        "Preprocessed text with tokenization, stopword removal, and lemmatization, increasing data readiness by 40%.",
        "Achieved high coherence scores of 0.85 on topics extracted with LDA, ensuring relevance for end-users.",
        "Documented the process, enabling 70% faster onboarding for future data analysis projects."
      ]
    },
    {
      title: "Cross Platform Price Comparison E-commerce Store",
      technologies: "HTML, CSS, Django, Python, SQL",
      period: "Jan 2024- Apr 2024",
      points: [
        "Engineered search and filtering features, boosting user engagement by 40%.",
        "Facilitated user authentication, managing 200+ product listings, increasing registered users by 50%.",
        "Integrated Stripe for payment processing, decreasing transaction errors by 20%.",
        "Automated email notifications for order confirmations, achieving 90% open rates."
      ]
    },
    {
      title: "Multi-Modality Medical Image Fusion",
      technologies: "Python, Numpy, OpenCV, PyWavelets",
      period: "Mar 2023- Nov 2023",
      points: [
        "Achieved 30% improvement in diagnostic clarity by fusing images from 2 modalities (MRI & CT).",
        "Enhanced image quality by 40%, supporting accurate diagnoses in 500+ patient cases.",
        "Validated model performance with 95% accuracy, processing images 25% faster."
      ]
    },
    {
      title: "Stock Price Prediction using Candlestick Charts",
      technologies: "Python, Matplotlib, Pandas, LSTM",
      period: "Dec 2022- Mar 2023",
      points: [
        "Analyzed data from 10+ stocks, identifying patterns for 20% improvement in forecasting.",
        "Deployed LSTM for time-series prediction, achieving 93% accuracy, exceeding standards by 15%.",
        "Visualized trends with Matplotlib, resulting in 30% more accurate reporting on stock movements."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-600 mb-2">{project.technologies}</p>
              <p className="text-gray-500 mb-4">{project.period}</p>
              <ul className="list-disc pl-6 space-y-2">
                {project.points.map((point, idx) => (
                  <li key={idx} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;