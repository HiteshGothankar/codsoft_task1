import React from "react";
import Profileimg from "../assets/Profileimg.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20 md:h-screen h-auto">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Profileimg}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              My name is Hitesh Anil Gothankar, and I reside in Mumbai.
              As a frontend developer, I specialize in creating visually appealing and user-friendly web applications.
              I bring designs to life while ensuring optimal performance and responsiveness.
            </p>
            
            <div className="space-y-4">
            <p className="text-3xl font-bold">Education</p>

              <div className="flex items-center">
                <label htmlFor="BScIT" className="w-2/12">
                  BScIT (9.42 CGPI)
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-yellow-200 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>


              <div className="flex items-center">
                <label className="w-2/12">
                  HSC (60%)
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-yellow-200 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>


              <div className="flex items-center">
                <label htmlFor="SSC" className="w-2/12">
                  SSC (87%)
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-yellow-200 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
