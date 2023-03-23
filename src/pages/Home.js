import React from 'react';
import me1 from '../assets/images/me1.png';
import { Link } from "react-router-dom";

// condition ? true : false
// if (condition){
//    true
// } else {
//    false    
// }

function Home() {
    return (
        <div className="flex lg:flex justify-between xl:flex-row flex-col-reverse">
            <div className="mt-12 px-4 md:px-20 m-auto w-screen">
                <div>
                    <div className="text-3xl sm:text-5xl font-extrabold pb-8">
                        <div className="flex items-center pb-4">
                            <p className="mr-4 sm:mr-12">Hi! I Am </p>
                            <p className="text-xs bg-blue-600  rounded-full  text-white font-semibold p-4 sm:text-lg">Frontend Developer</p>
                        </div>
                        <p>Olamide Akinyemi</p>
                    </div>
                    <div className="">
                        <p className="text-sm xl:text-sm md:text-xl font-normal leading-7">Implementing designs for over
                        <span className="text-base font-semibold"> 1 year </span>
                    as a frontend developer. My top priority are to gain detailed
                    instructions for a project,
                    implement the design and functionalities as precisely as possible,
                    network with like-minded people, and create exciting things with
                    them that
                    will encourage knowledge sharing and receiving.</p>
                    </div>
                    <div className="flex md:text-2xl xl:text-base font-bold mt-12">
                        <Link to="/contact" className="mr-8 bg-orange-600 text-white px-9 py-4 sm:mr-16">Contact</Link>
                        <div className="flex justify-center items-center">
                            <Link to="/projects" className="border border-dotted border-black px-9 py-4">Projects</Link>
                            <div className="-ml-8">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3697 2.33287C17.3746 1.50446 16.707 0.828945 15.8786 0.824068L2.37882 0.744592C1.55041 0.739715 0.874891 1.40732 0.870014 2.23574C0.865137 3.06415 1.53274 3.73966 2.36116 3.74454L14.3609 3.81519L14.2903 15.815C14.2854 16.6434 14.953 17.3189 15.7814 17.3238C16.6099 17.3287 17.2854 16.6611 17.2903 15.8326L17.3697 2.33287ZM5.21217 14.9658L16.9242 3.39093L14.8154 1.25716L3.10338 12.832L5.21217 14.9658Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div>
                        <p className="text-xl font-semibold">+24</p>
                        <p className="text-sm">Clients on work</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className=" mr-24 sm:mr-52">
                            <p className="text-xl font-semibold">50</p>
                            <p className="text-sm">Projects Done</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Featured</p>
                            <p className="text-sm">Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen overflow-hidden">
                <img alt="a dark person" src={me1} />
            </div>

        </div>
    );
}


export default Home;