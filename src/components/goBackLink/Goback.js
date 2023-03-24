import React from 'react';
import { Link } from 'react-router-dom';



function Goback() {
    return (
        <div>
            <div>
                <Link className="text-gray-400" to="/projects">
                    Go back <span>&larr;</span>
                </Link>
            </div>
        </div>
    );
}


export default Goback;