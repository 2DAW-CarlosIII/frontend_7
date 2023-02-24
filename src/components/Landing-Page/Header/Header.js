import React, { Component } from 'react';

const Header = () => (

    <nav className="navbar navbar-expand-md sticky-top barranav">
        <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                        <a className="nav-link nav-izq nav-importante underline" href="#">
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-izq underline" href="dashboard">
                            Dashboard
                        </a>
                    </li>
                   
                </ul>
            <div className="mx-auto order-0">
                <a className="navbar-brand mx-auto logo" href="OnlyWellness.html">
                    Only Wellness
                </a>
            </div>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link underline" href="dashboard/login">
                            Entra
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-importante underline" href="/register">
                            Regístrate
                        </a>
                    </li>
                </ul>
        </div>
    </nav>
)

export default Header;