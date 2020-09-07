import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>{
 
    return (
        <nav className="navbar  bg-primary">
        <h1>React Exercises</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/texteditor'>Text Editor</Link>
            </li>
            <li>
                <Link to='/translator'>Translator</Link>
            </li>
            <li>
                <Link to='/articles'>News Articles API Call</Link>
            </li>
        </ul>
      </nav>
    )

}

export default Navbar