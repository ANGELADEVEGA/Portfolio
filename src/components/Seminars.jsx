import React from 'react';

const Seminars = () => {
  const seminarData = [
    {
      id: 0,
      img: "https://notionpress.com/coveruploads/1668591588resize_cover_449753.png",
      title: "Paghilom: THE ART OF LETTING GO - Seminar in Celebration of the Month of Love",
      speaker: "Mr. Rommel V. Ondemis",
      role: "Campus Missionary in Every Nation Campus Life Coach",
      date: "February 22, 2023",
      description: "This seminar, aimed at Grade 9 to college students, explores emotional healing, self-love, and the journey of letting go, fostering personal growth and well-being in the spirit of the Month of Love.",
      location: "La Consolacion College - Binan",
      topics: [
        "Understanding Emotional Healing",
        "The Process of Letting Go",
        "Building Resilience and Self-Love",
        "Mindfulness and Reflection Practices",
        "Healthy Communication and Relationships",
        "Personal Stories and Case Studies",
      ],
      feedback: "It was a meaningful and enriching experience.",
    },
{
  id: 1,
  img: "https://static4.arrow.com/-/media/arrow/images/research-and-events/articles/0221/ai-and-ml-future-of-iiot-image-1.jpg",
  title: "Technical Symposium on Robotics, Automation and Data Science in Partnership with STMicroelectronics INC.",
  speaker: " ",
  date: "October 19, 2023",
  description: "Description: This symposium delves into the latest advancements in robotics, automation, and data science, showcasing innovative solutions and collaborative insights from STMicroelectronics INC. and industry experts.",
  location: "La Consolacion College - Tanauan",
  topics: [
    "Cutting-Edge Robotics",
    "Automation Technologies",
    "Data Science Application",
    "Integration with STMicroelectronics",
    "Future Trends",
    "Collaborative Projects",
  ],
  feedback: "Highly technical and forward-thinking.",
},
{
  id: 2,
  img: "https://bovardcollege.usc.edu/wp-content/uploads/iStock-1220225018-scaled.jpg",
  title: "Evolution of Tourism and Hospitality Industry Service Operations and its Future Development",
  speaker: " ",
  date: "January 16,2024",
  description: "Description: This seminar explores the transformative journey of service operations in the tourism and hospitality industry, analyzing past trends and forecasting future advancements.",
  location: "La Consolacion College - Binan",
  topics: [
    "Historical Trends",
    "Technological Advancements",
    "Consumer Expectations",
    "Sustainability and Ethics",
    "Future Trends",
    "Case Studies",
  ],
  feedback: "Insightful discussion on industry trends.",
},
{
  id: 3,
  img: "https://www.ssldragon.com/wp-content/uploads/2023/06/cybersecurity-awareness.webp",
  title: "Cybersecurity Awareness for La Consolacion College by the Department of Information and Communications Technology - Region IVA Laguna",
  speaker: " ",
  date: "May 10,2024",
  description: "Description: This seminar focuses on enhancing cybersecurity awareness at La Consolacion College, providing essential knowledge and strategies to protect against digital threats, presented by the Department of Information and Communications Technology - Region IVA Laguna.",
  location: "La Consolacion College - Binan",
  topics: [
    "Fundamentals of Cybersecurity",
    "Common Threats and Vulnerabilities",
    "Best Practices for Online Safety",
    "Incident Response",
    "Role of Policies and Regulations",
    "Cybersecurity Tools and Resources",
  ],
  feedback: "Very informative on current cybersecurity challenges.",
},
{
  id: 4,
  img: "https://media.dashdevs.com/images/messaging-app-development-462x260.webp",
  title: "Digital Finance Literacy and Social Media Marketing by the Department of Information and Communications Technology - Region IVA Laguna",
  speaker: " ",
  date: "May 10,2024",
  description: "Description: This seminar offers insights into digital finance literacy and effective social media marketing strategies, presented by the Department of Information and Communications Technology - Region IVA Laguna, to enhance participants' financial acumen and online marketing skills.",
  location: "La Consolacion College - Binan",
  topics: [
    "Understanding Digital Finance",
    "Social Media Marketing Strategies",
    "Integration of Finance and Marketing",
    "Case Studies and Best Practices",
  ],
  feedback: "A comprehensive overview of digital finance and marketing.",
},
  ];

  return (
    <div className="bg-black text-white py-20" id="seminars">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Seminars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminarData.map((seminar) => (
            <div key={seminar.id} className="bg-gray-700 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={seminar.img} 
                alt={seminar.title} 
                className="block mx-auto rounded-lg mb-4 
                w-wide h-48 object-cover" 
              />
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-violet-200 to-blue-500 text-center">{seminar.title}</h3>
              <p className="text-white-400 mb-1 text-center">{seminar.date}</p>
              <p className="text-white-400 italic mb-1 text-center">Speaker: {seminar.speaker} ({seminar.role})</p>
              <p className="mt-2 text-blue-500 mb-2">{seminar.description}</p>
              <p className="mt-2 text-yellow-500 mb-2 text-center">Location: {seminar.location}</p>
              <h4 className="mt-4 text-lg font-bold text-center">Topics Covered:</h4>
              <ul className="list-disc list-inside text-gray-400 mb-4">
                {seminar.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              <p className="mt-2 text-red-500 mb-2 text-center">Feedback: {seminar.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seminars;
