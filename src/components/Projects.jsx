import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 0,
    name: "WeatherApp",
    date: "2022",
    description:
      "A project utilizing the OpenWeatherMap API to provide real-time weather updates and forecasts with a user-friendly interface.",
    image:
      "https://www.kourosh-h.ir/_next/image?url=%2FWheatherApp.jpeg&w=3840&q=75",
    technologies: "Web App",
    github: "https://github.com/ANGELADEVEGA/weatherapp.git",
  },
  {
    id: 1,
    name: "Tic-Tac-Toe",
    date: "2022",
    description:
      "A simple game where players take turns marking spaces on a grid to achieve three in a row, implemented with an interactive UI and game logic.",
    image:
      "https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64feb698a8caa203d21688c9_tic_tac_toe_game_in_react_OG_Image_f744b32488.jpg",
    technologies: "Web App",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Note-App",
    date: "2022",
    description: "It features a digital interface for creating, editing, and managing personal notes, often with options for categorization, search, and synchronization across devices.",
    technologies: "Android App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT410HHKwLVgwyyPKvPDEQhTUak6Q10rIzDWA&s",
    github: "https://github.com/ANGELADEVEGA/note-app.git",
  },
  {
    id: 3,
    name: "Fitness-Menu-Button-Cake-Pie-Salad",
    date: "2023",
    description: "Flutter application that integrates fitness tracking with a menu interface, featuring buttons for navigating between sections like cake, pie, and salad recipes.",
    technologies: "Android App",
    image: "https://i5.walmartimages.com/seo/BREAKFAST-Vintage-Look-Rustic-6x18-Metal-Sign-Chic-Retro-106180035046_4ed972ed-5e71-47ad-9894-71f152b206c1.723613f281d5841caee61bbaf33f38db.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFFge",
    github: "https://github.com/ANGELADEVEGA/fitness.git",
  },
  {
    id: 4,
    name: "Open-CV-Face-Object-Recognitions",
    date: "2023",
    description: "The project involves using OpenCV to develop a system that identifies and recognizes faces and objects within images or video streams.",
    technologies: "Web App",
    image: "https://builtin.com/sites/www.builtin.com/files/2023-05/image-recognition.jpg",
    github: "https://github.com/ANGELADEVEGA/open-cv-face-object-recognitions.git",
  },
  {
    id: 5,
    name: "LCCpay",
    date: "2024",
    description: "The project involves designing a user interface for an RFID-based cashless payment system, enhancing convenience and security for transactions.",
    technologies: "Web App/Figma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWllJM-Xsz-nnqNltNj2UqijT1cxF2848TQ&s",
    github: "https://www.figma.com/proto/0nxzfvawxseLhMsRoGxmB3/LCCpay?node-id=1-2&node-type=canvas&t=9inTvA1t9zmiResb-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 6,
    name: "SSC-Voting-System-FrontEnd",
    date: "2024",
    description: "The project focuses on designing the user interface for a student council voting system, aimed at facilitating a smooth and intuitive voting experience.",
    technologies: "Web App/Figma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr_jRCPpbq5Kyn9Eu68_xVgpUIoToaurLUg&s",
    github: "https://www.figma.com/proto/aXU7XttJR3k8CAXvFWVIhO/SSC-VOTING-SYSTEMS?node-id=3-10",
  },
  {
    id: 7,
    name: "Portfolio-Web3d",
    date: "2024",
    description: "The project involves creating a visually engaging, interactive portfolio website using 3D web technologies to showcase personal projects and achievements.",
    technologies: "Web App",
    image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png",
    github: "https://github.com/ANGELADEVEGA/portfolio-web3d.git",
  },
  {
    id: 7,
    name: "My Personal Site: Portfolio",
    date: "2024",
    description: "A creative portfolio showcasing my projects and expertise, designed on Wix.com for a clean and professional online presence.",
    technologies: "Web App/Wix Site",
    image: "https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/13691038-5aa8-4672-9b95-348c0733cabc/2021/01/13/dd15da89-f005-45ed-9e28-f53fe166564c/93d2d9bb-f495-4dff-bc40-ae445017c4ee.png",
    github: "https://angeladevega212.wixsite.com/mysite",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
              <p className="text-white-400 mb-1">{project.date}</p>
              <p className="text-violet-800 mb-2">{project.description}</p>
              <p className="text-yellow-800 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
