import React from 'react';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#423a35"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"
                   style={{marginLeft: "45%", fontFamily: "Righteous", fontSize: "40px", letterSpacing: "2px",
                       color: "#fbf8e8"}}>
                    ROBOCOP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;