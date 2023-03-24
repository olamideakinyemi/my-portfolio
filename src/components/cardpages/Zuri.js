import React from 'react';
import { Link } from 'react-router-dom';
import Goback from '../goBackLink/Goback';



function Zuri() {
    return (
        <div className="px-12 py-20 md:w-full xl:w-1/2">
        <div>
            <Goback />
        </div>
        <div className="mt-12">
            <p className="text-stroke text-7xl font-bold">
                Zuri
            </p>
            <div className="mt-6 text-gray-600 leading-8">
                <p>
                    This is a replicate of the zuri website landing page, It is a fully responsive landing page built this using react and css.
            </p>
                <p>The app was deployed on netlify and the live link can be found below</p>
                <div className="mt-6">
                <Link className="text-2xl font-bold text-orange-600 border-b-2 border-orange-600" to="https://zuri-landingpage-replicate.netlify.app/">Link To Zuri landing page replicate<span>&rarr;</span></Link>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Zuri;
