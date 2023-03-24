import React from 'react';
import { Link } from 'react-router-dom';
import Goback from '../goBackLink/Goback';


function Todolux() {
    return (
        <div className="px-12 py-20 md:w-full xl:w-1/2">
            <div>
                <Goback />
            </div>
            <div className="mt-12">
                <p className="text-stroke text-7xl font-bold">
                    Todolux
                </p>
                <div className="mt-6 text-gray-600 leading-8">
                    <p>
                        This is a todo-app I built using html, css and javascript, the features can only be accessed on mobile devices and it has the following functionalities:
                </p>
                    <ul className="ml-8">
                        <li>- You need to input your name to proceed to the dashboard</li>
                        <li>- Added transitions</li>
                        <li>- You can add, strikeout and remove tasks</li>
                        <li>- It has a built in digital clock</li>
                    </ul>
                    <p>The app was deployed on netlify and the live link can be found below</p>
                    <div className="mt-6">
                    <Link className="text-2xl font-bold text-orange-600 border-b-2 border-orange-600" to="https://todolux.netlify.app/">Link To Todolux<span>&rarr;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Todolux;