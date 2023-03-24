import React from 'react';
import { Link } from 'react-router-dom';
import regform from '../../../assets/images/regform.png';
import hngwebsite from '../../../assets/images/hngwebsite.png';
import calculator from '../../../assets/images/calculator.png';



function Hngcards() {
    return (
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24">
        <Link to="https://hng-reg-form-task.netlify.app/" className="card regform h-72 transform rounded-xl hover:-translate-y-4 duration-500 pt-6 pl-6 cursor-pointer relative">
            <h3 className="font-semibold text-3xl text-blue-600 relative z-20">
                Signup form
            </h3>
            <div className="flex items-center flex-wrap xl:7/12 z-20 relative">
                <div className="px-2 h-5 rounded-full mt-2 mr-2 bg-orange-700">
                    <p className="text-white text-sm">form</p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 rounded-full mb-2 mr-2">
                 <div className="relative w-full">
                 <img aria-hidden="true" alt="todolux" src={regform} className="w-full top-0 left-0 rounded-lg"/>
                 </div>
            </div>
        </Link>
        <Link to="https://hng-website-task.netlify.app/" className="card hngwebsite h-72 transform rounded-xl hover:-translate-y-4 duration-500 pt-6 pl-6 cursor-pointer relative">
            <h3 className="font-semibold text-3xl text-blue-600 relative z-20">
                Website task
            </h3>
            <div className="flex items-center flex-wrap xl:7/12 z-20 relative">
                <div className="px-2 h-5 rounded-full mt-2 mr-2 bg-orange-700">
                    <p className="text-white text-sm">web app</p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 rounded-full mb-2 mr-2">
                 <div className="relative w-full">
                 <img aria-hidden="true" alt="todolux" src={hngwebsite} className="w-full top-0 left-0 rounded-lg"/>
                 </div>
            </div>
        </Link>
        <Link to="https://olamideakinyemi.github.io/hng-calculator/" className="card calculator h-72 transform rounded-xl hover:-translate-y-4 duration-500 pt-6 pl-6 cursor-pointer relative">
            <h3 className="font-semibold text-3xl text-blue-600 relative z-20">
                Basic calculator
            </h3>
            <div className="flex items-center flex-wrap xl:7/12 z-20 relative">
                <div className="px-2 h-5 rounded-full mt-2 mr-2 bg-orange-700">
                    <p className="text-white text-sm">web page</p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 rounded-full mb-2 mr-2">
                 <div className="relative w-full">
                 <img aria-hidden="true" alt="todolux" src={calculator} className="w-full top-0 left-0 rounded-lg"/>
                 </div>
            </div>
        </Link>
     </div>
    );
}


export default Hngcards;

