import React from 'react';
import { Link } from 'react-router-dom';
import Cards from "../components/Cards";


function Projects() {
    return (
        <div className="px-12 py-20">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-7xl font-bold text-blue-500">
                        Projects <br />
                        <span className="text-stroke">Display</span>
                    </h1>
                </div>
                <div className="text-white mt-8 sm:text-white">
                    <Link to="/" className="border border-orange-500 px-6 py-4 bg-orange-500">
                        Download Resume
                   </Link>
                </div>
            </div>
            <div>
                <Cards />
            </div>
            <div>
            </div>
        </div>
    );
}


export default Projects;