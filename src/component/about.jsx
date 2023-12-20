import React from "react";
import {Link} from 'react-router-dom'

function About(){
    return (
        <div>
            <p>This tracker App is verson 1.0.0 The Updated version.</p>
            <Link to="/">Go Back.</Link>
        </div>
    );
}

export default About;