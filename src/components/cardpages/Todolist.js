import React from 'react';
import { Link } from 'react-router-dom';
import Goback from '../goBackLink/Goback';



function Todolist() {
    return (
        <div className="px-12 py-20 md:w-full xl:w-1/2">
        <div>
            <Goback />
        </div>
        <div className="mt-12">
            <p className="text-stroke text-7xl font-bold">
                Todolist React
            </p>
            <div className="mt-6 text-gray-600 leading-8">
                <p>
                    This is a basic todolist I built using react, although it has limited styling, but the aim was to give it the following basic todolist functionalities:
            </p>
            <ul className="ml-8">
                        <li>- Add task</li>
                        <li>- Edit task</li>
                        <li>- Delete task</li>
                    </ul>
                <p>The app was deployed on netlify and the live link can be found below</p>
                <div className="mt-6">
                <Link className="text-2xl font-bold text-orange-600 border-b-2 border-orange-600" to="https://basic-todolist-react.netlify.app/">Link To Todolist<span>&rarr;</span></Link>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Todolist;