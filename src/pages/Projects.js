import React from 'react';
import Featured from "../components/Cards/Featured";
import Internship from "../components/Cards/Internships";


function Projects() {
    return (
        <div className="px-12 py-20">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-7xl font-bold text-blue-500">
                        Projects <br />
                        <span className="text-stroke">Showcase</span>
                    </h1>
                </div>
                <div className="text-white mt-8 sm:text-white">
                    <a href="/Resume.pdf" className="border border-orange-500 px-6 py-4 bg-orange-500" target="_blank">
                        View Resume
                   </a>
                </div>
            </div>
            <div>
                <Featured />
            </div>
            <div className="mt-20">
                <p className="text-stroke text-7xl font-bold">Internship</p>
                <div>
                    <Internship />
                </div>
            </div>
        </div>
    );
}


export default Projects;