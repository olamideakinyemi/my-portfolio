import React from 'react';
import Goback from '../goBackLink/Goback';
import Hngcards from '../Cards/hngcards/Hngcards';
import { Link } from 'react-router-dom';



function Hng() {
    return (
        <div className="px-12 py-20">
             <div>
                    <Goback />
                </div>
            <div className="items-center text-white mt-6 text-white sm:flex justify-between ">
                        <p className="text-stroke text-7xl font-bold mb-8"> HNG/Zuri </p>
                        <Link to="/public/Zuriboard.pdf" className="border border-orange-500 px-6 py-4 bg-orange-500">
                        View Certificate
                   </Link>
                    </div>
            <div className="md:w-full xl:w-1/2">
                <div className="mt-12">
                    <div className="mt-6 text-gray-600 leading-8">
                        <p>
                            HNG Internship is a large scale, fast-paced virtual internship for people learning code, design, project management and technical sales/marketing. It's intended for early junior developers/designers who have already completed a training program or have basic knowledge.
                            This curriculum aims to introduce newcomers to product design and software development.
                            I was accepted to undergo top-notch training as a front-end developer,
                            where I got assigned projects each week that ranged in difficulty from easy to complex using
                            programming languages like Html, CSS, and Javascript. After passing the final stage of the training,
                            I was awarded a certificate. Below are some the links to the live websites.
                         </p>
                        <p className="text-xl font-bold text-blue-500 mt-12">Tasks</p>
                        <p className="text-gray-400">Click on cards to go to live websites</p>
                    </div>
                </div>
            </div>
            <div>
                <Hngcards />
            </div>
        </div>
    );
}


export default Hng;

