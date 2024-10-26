import React from "react";
import Htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import reactjslogo from '../assets/reactjs.png'
import javasciptlogo from '../assets/javascript.png'
import tailwindlogo from '../assets/tailwindcss.png'
import nodejslogo from '../assets/nodejs.png'
import vscodelogo from '../assets/vscode.png'
import githublogo from '../assets/github.png'

const Skills = () => {
  const logos = [
    {
      id : 1,
      logo : Htmllogo,
      name : "HTML",
    },

    {
      id : 2,
      logo : csslogo,
      name : "CSS",
    },

    {
      id : 3,
      logo : javasciptlogo,
      name : "JavaScript",
    },

    {
      id : 4,
      logo : tailwindlogo,
      name : "TailwindCSS",
    },

    {
      id : 5,
      logo : reactjslogo,
      name : "ReactJS",
    },

    {
      id : 6,
      logo : nodejslogo,
      name : "NodeJS",
    },

    {
      id : 7,
      logo : vscodelogo,
      name : "VScode",
    },

    {
      id : 8,
      logo : githublogo,
      name : "Github",
    },

  ];

  return (
    <>
      <div className="bg-black max-w-screen-2xl pb-10 container px-4 md:px-20 md:h-screen h-auto">
        <div>
          <h1 className="text-4xl text-white text-center font-bold mb-5 py-7">Technical Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {logos.map(({id, logo, name}) => (
              <div className="w-[70%] bg-slate-600" key={id}>
              <div className="flex flex-col items-center justify-center md:w-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={logo} className="w-[150px]" alt="" />
                <div>
                  <div className="font-bold text-white">{name}</div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
};

export default Skills;
