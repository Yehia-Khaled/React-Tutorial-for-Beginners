import React, { Component } from "react";
//Stateless Functional Components
const NavBar=({totalCounters})=>{
    console.log('NavBar - Rendered')
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-bill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}


export default NavBar;
