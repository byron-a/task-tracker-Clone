import React from "react";
import {Link} from 'react-router-dom'

function Footer(){
    return (
        <footer>
            <h4>Copyright &copy; By Byron.</h4>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer;