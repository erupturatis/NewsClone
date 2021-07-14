import React from "react";
import "../styling/components/navbar.css"
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <div className="wrapper">
            <div className="flexbox">
                <div className="navtext">
                    <img className="logolook" src="https://cdn.discordapp.com/attachments/864542134391275543/864550156703891456/gfaw.png" />
                </div>
                <div className="flexboxcateg">
                <Link to="/">
                    <li className="navtext">politica</li>
                </Link>
                <Link to="/">
                    <li className="navtext">actualitate</li>
                </Link>
                <Link to="/">
                    <li className="navtext">economie</li>
                </Link>
                <Link to="/">
                    <li className="navtext">externe</li>
                </Link>
                <Link to="/">
                    <li className="navtext">sport</li>
                </Link>
                
                </div>
                <div className="navtext">
                    <img className="imglook" src="https://cdn.discordapp.com/attachments/864542134391275543/864543182519140382/lupa.png" />
                </div>
               
            </div>
        </div>
    );
}
 
export default Navbar;