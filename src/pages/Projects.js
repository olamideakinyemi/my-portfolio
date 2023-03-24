import React from 'react';
import { Link } from 'react-router-dom';
import Featured from "../components/Cards/Featured";
import Internship from "../components/Cards/Internship";


function Projects() {
    return (
        <div className="px-12 py-20">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-7xl font-bold text-blue-500">
                        Featured <br />
                        <span className="text-stroke">Projects</span>
                    </h1>
                </div>
                <div className="text-white mt-8 sm:text-white">
                    <Link to="/" className="border border-orange-500 px-6 py-4 bg-orange-500">
                        Download Resume
                   </Link>
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