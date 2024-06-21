import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    iNoteBook
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="mx-5 my-2">
                        {!localStorage.getItem("token") ? (
                            <div>
                                <Link className="btn btn-primary mx-2" to="/login" role="button">
                                    Login
                                </Link>
                                <Link className="btn btn-primary mx-2" to="/signup" role="button">
                                    Signup
                                </Link>
                            </div>
                        ) : (
                            <div class="dropdown">
                                <i class="fa-solid fa-user fa-2xl" role="button" style={{ color: "#ffffff" }} data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu bg-dark" style={{right:"10px", left:"unset", top:"40px"}}>
                                    <li>
                                        <Link class="dropdown-item text-primary" role="button" to="/profile">
                                            Your Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-primary" role="button" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
