import React from "react";

const experiences = [
  {
    id: 1,
    title: "Web Designer",
    description: "Designed and developed visually appealing and responsive websites that prioritize user experience and functionality.",
    details: "Developed and maintained visually appealing websites, focusing on usability and responsive design to enhance user engagement.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Developed responsive and dynamic web applications using modern JavaScript frameworks, ensuring optimal performance and user engagement.",
    details: "Implemented dynamic and responsive web applications using modern JavaScript frameworks, ensuring seamless user interactions and optimal performance.",
  },
  {
    id: 3,
    title: "Backend Developer",
    description: "Designed and implemented server-side logic, APIs, and database management to ensure seamless data processing and application performance.",
    details: "Designed and built robust server-side applications, managing databases and APIs to ensure efficient data handling and application performance.",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    description: "Developed and maintained web applications by integrating frontend and backend technologies, ensuring seamless functionality and performance.",
    details: "Integrated both frontend and backend technologies to deliver complete web applications, optimizing user experience and server functionality.",
  },
  {
    id: 5,
    title: "Content Writer",
    description: "Crafted compelling and engaging content across various platforms to effectively communicate brand messages and connect with audiences.",
    details: "Crafted engaging and informative content tailored for various platforms, enhancing brand visibility and audience engagement.",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    description: "Creates intuitive and visually appealing interfaces to enhance user experiences.",
    details: "Collaborated with clients to create intuitive user interfaces and enhance overall user experience through effective design solutions.",
  },
  {
    id: 6,
    title: "Programmer",
    description: "Developed efficient and scalable code to build software applications, ensuring optimal performance and functionality.",
    details: "Professional who writes and maintains code to create software applications, ensuring functionality and performance.",
  },
];

const Experience = () => {
  const handleReadMore = (details) => {
    alert(details); // Replace this with your navigation logic or modal
  };

  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {experience.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {experience.title}
              </h3>
              <p className="mt-2 text-gray-300">{experience.description}</p>
              <button
                onClick={() => handleReadMore(experience.details)}
                className="mt-4 inline-block bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-blue-900"
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

export default Experience;
