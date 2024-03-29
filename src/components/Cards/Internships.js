import React from 'react';
import { Link } from 'react-router-dom';
import hng from '../../assets/images/hng.png';


function Internships() {
    return (
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24">
             <Link to="/projects/hng" className="card hng rounded-xl h-72 transform hover:-translate-y-4 duration-500 pt-6 pl-6 cursor-pointer relative">
                   <h3 className="font-semibold text-3xl text-blue-600 relative z-20">
                      HNGI7/Zuri
                   </h3>
                   <div className="flex items-center flex-wrap xl:7/12 z-20 relative">
                       <div className="px-2 h-5 flex items-center rounded-full mt-2 mr-2 bg-orange-700">
                           <p className="text-white text-sm">internship</p>
                       </div>
                   </div>
                   <div className="absolute bottom-0 right-0 w-56 rounded-full mb-2 mr-2">
                        <div className="relative w-full">
                        <img aria-hidden="true" alt="hng" src={hng} className="w-full top-0 left-0 rounded-lg"/>
                        </div>
                   </div>
               </Link> 
        </div>
    );
}


export default Internships;

