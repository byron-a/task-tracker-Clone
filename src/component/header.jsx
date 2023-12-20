import React from 'react';
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import Button from "./button";


function Header({title,content, checkAdd, clickAdd}){
  const location = useLocation();  //we can destructure the object
 // console.log(location)
    return (
    <header className='header'>
       <h1>{title}</h1>
       {location.pathname === '/'?
       <Button classChange='btn' text="add" add={checkAdd} clickButton = {()=>{clickAdd()}} />:null}
    </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;