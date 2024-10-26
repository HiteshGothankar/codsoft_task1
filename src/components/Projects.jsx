import React from "react";
import BuyHoneyimg from '../assets/BuyHoney.jpeg';
import TaskTrackerimg from '../assets/tasktracker.jpeg';
import EBuyITimg from '../assets/E-BuyIT.jpeg';


const projects = [
  {
    id: 1,
    name: "Task-Tracker",
    technologies: "ReactJS Tailwind CSS",
    image: TaskTrackerimg,
    github: "https://github.com/HiteshGothankar/codsoft_task2",
  },
  {
    id: 2,
    name: "Get Honey",
    technologies: "HTML CSS JavaScript",
    image: BuyHoneyimg,
    github: "https://github.com/HiteshGothankar/Get-Honey",
  },
  {
    id: 3,
    name: "E-BuyIT",
    technologies: "ReactJS CSS",
    image: EBuyITimg,
    github: "https://github.com/HiteshGothankar/codsoft_task4",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20 h-auto md:h-screen">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-white mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-red-500 to-yellow-400 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
