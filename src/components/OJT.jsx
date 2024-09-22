import React from 'react';

const OJT = () => {
  const handleReadMore = (details) => {
    alert(details); // Replace this with your navigation logic or modal
  };

  const ojtExperiences = [
    {
      id: 1,
      title: "SENIOR HIGH SCHOOL - K12 (100 hrs)",
      role: "Logistic Department - Assistant",
      company: "Anasia Trading Co. Ltd.",
      date: "JANUARY 3,2021 - JANUARY 20,2021",
      description: "A company that offers diverse trading services and product distribution, specializing in consumer goods and international trade logistics.",
      details: "The company provides comprehensive trading services and product distribution, specializing in consumer goods and international trade logistics, ensuring efficient global supply chain management and market reach.",
      image: "https://dckoubxfj0l94.cloudfront.net/Production/exb_doc/506/72756/thumb_506_S5068860_5380.png/fit-in/300x300", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "COMPUTER SCIENCE - 4TH YEAR (360 hrs)",
      role: "ICTO Department/Administrative Division - Assistant",
      company: "City Government of Binan",
      date: "SEPTEMBER 2024 - JANUARY 2025",
      description: "Manages and oversees the city's information and communications technology infrastructure, ensuring efficient digital services and support for government operations.",
      details: "The Information and Communications Technology Office (ICTO) is responsible for managing the city's technology infrastructure, implementing innovative digital solutions, ensuring data security, and providing technical support to enhance the efficiency and effectiveness of government operations and services for residents.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Bi%C3%B1an%2C_Laguna.png/1200px-Flag_of_Bi%C3%B1an%2C_Laguna.png?20221214060934", // Replace with the actual image URL
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="ojt">
      <div className="container mx-auto px-6 md:px-15 lg:px-25">
        <h2 className="text-4xl font-bold text-center mb-12">On-the-Job Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ojtExperiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-600 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-110"
            >
              {/* Display the image */}
              <img
                src={experience.image}
                alt={experience.title}
                className="w-wide h-20 object-cover rounded-t-lg mx-auto"
              />
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-500 to-blue-200">
                {experience.id}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {experience.title}
              </h3>
              
              {/* Role */}
              <p className="text-lg font-semibold text-green-300">{experience.role}</p>
              
              {/* Company */}
              <p className="text-gray-400 italic">{experience.company}</p>
              
              {/* Date */}
              <p className="text-gray-400">{experience.date}</p>

              <p className="mt-2 text-gray-300">{experience.description}</p>

              <button
                onClick={() => handleReadMore(experience.details)}
                className="mt-4 inline-block bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OJT;
