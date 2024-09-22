import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 0,
      img: "https://tesdatrainingcourses.com/wp-content/uploads/2016/05/La-Consolacion-College-Bi%C3%B1an-Laguna.jpg",
      school: "La Consolacion College - Binan, Laguna",
      date: "2021 - 2025",
      grade: "1st-4th Year",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science at La Consolacion College - Binan, Laguna. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Programming Languages, and Software Development among others.",
      degree: "Bachelor of Computer Science",
    },
    {
      id: 1,
      img: "https://th.bing.com/th/id/OIP.I1ZmXX3VbJqDQdaHI1UK0AHaHa?rs=1&pid=ImgDetMain",
      school: "Tunasan Elementary School: City of Muntinlupa",
      date: "2009 - 2012",
      grade: "1-3",
      desc: "I completed only my class until 1-3 elemenary school education at Tunasan School, Muntinlupa City, where I studied educations.",
      degree: "TESians - Elementary",
    },
    {
      id: 2,
      img: "https://pinoytownhall.com/wp-content/uploads/2014/08/Millennium-International-School.jpg",
      school: "Millenium International School: Riyadh, Saudi Arabia, K.S.A",
      date: "2012 - 2014",
      grade: "4-5",
      desc: "I completed only my class 4-5 education at Millenium International School, Saudi Arabia, where I studied STEM.",
      degree: "International, Filipino",
    },
    {
      id: 3,
      img: "https://cfo-pso.org.ph/wp-content/uploads/2021/03/school-logo-150x150.jpg",
      school: "Al Danah International School: Riyadh, Saudi Arabia, K.S.A",
      date: "2014-2021",
      grade: "6-K12",
      desc: "I completed only my class 6-K12 Junior and Senior High School at Al Danah International School, Saudi Arabia, where I studied STEM.",
      degree: "International, Filipino",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={edu.img} 
                alt={edu.school} 
                className="block mx-auto rounded-lg mb-4 
                w-wide h-48 object-cover" 
              />
              <h3 className="text-2xl font-semibold text-blue-500 mb-2 text-center">{edu.school}</h3>
              <p className="text-white-500 mb-1 text-center">{edu.date}</p>
              <p className="text-white-900 italic mb-1 text-center">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-500 mb-2 text-center">{edu.desc}</p>
              <p className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-500 to-blue-600 text-center">Degree: {edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
